import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Bmicalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculate = (e) => {
    e.preventDefault(); 
    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight, and gender");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning("You are underweight please take some high calorie and protein surpulus");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      toast.success("You have perfect weight ");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      toast.warning("You are overweight please follow some diet plans");
    } else {
      toast.error("You are in the obese range , consult to specialized doctor");
    }
  };

  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculate}>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>

          {bmi && (
            <div className="result">
              <h2>Your BMI: {bmi}</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Bmicalculator;
