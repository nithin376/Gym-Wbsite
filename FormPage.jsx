import React, { useState,useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const FormPage = () => {
  const location = useLocation();
  const selectedPlan = location.state?.plan;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age:"",
    selectedplan:"",
    date:"",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errs.email = "Valid email required";
    if (!formData.phone.match(/^\d{10}$/))
      errs.phone = "10‑digit phone required";
    if(!formData.age ||formData.age<15)
      errs.age="Age should be greater than 15";
    if(!formData.selectedplan)
      errs.selectedplan="valid paln is required";
    if(!formData.date)
      errs.date="valid date is reuired"
    return errs;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((d) => ({ ...d, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const errs = validate();
  if (Object.keys(errs).length) {
    setErrors(errs);
    return;
  }
  setSubmitting(true);
  try {
    await axios.post('http://localhost:5000/api/register', formData);
    setSuccess(true);
  } catch (err) {
    if (err.response?.data?.error) {
      setErrors({ submit: err.response.data.error });
    } else {
      setErrors({ submit: "Submission failed" });
    }
  } finally {
    setSubmitting(false);
  }
};

  useEffect(() => {
    if (success) {
      toast.success("Lets begin your body buliding Journey");
    }
  }, [success]);

  if (success) {
    return <h2>Submitted Successfully !!</h2>;
  }
  return (
     <><div className="heading">
      <h1>Join {selectedPlan?.title || "Membership"}</h1>
    </div><div className="Form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name*</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required />
            {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
          </div>

          <div>
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required />
            {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
          </div>
          <div>
            <label htmlFor="phone">Phone*</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required />
            {errors.phone && <small style={{ color: "red" }}>{errors.phone}</small>}
          </div>
          <div>
            <label htmlFor="age">age*</label>
            <input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required />
            {errors.age && <small style={{ color: "red" }}>{errors.age}</small>}
          </div>
          <div>
           <label htmlFor="selectedplan">selectedplan*</label>
            <select 
             id="selectedplan"
              name="selectedplan"
            value={formData.selectedplan}
              onChange={handleChange}
              >
              <option>Select</option>
              <option>Quartely</option>
              <option>Half Yearly</option>
              <option>Yearly</option>          
              </select>
            {errors.selectedplan && <small style={{ color: "red" }}>{errors.selectedplan}</small>}
          </div>
          <div>
            <label htmlFor="date">Joining_date*</label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required />
            {errors.date && <small style={{ color: "red" }}>{errors.date}</small>}
          </div>
          {errors.submit && (
            <div style={{ color: "red", marginTop: ".5rem" }}>
              {errors.submit}
            </div>
          )}

          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting…" : "Submit"}
          </button>
        </form>
      </div>
      <Link to="/"><button className="back">BACK TO HOME</button></Link>
      </>
  );
};

export default FormPage;
