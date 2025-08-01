import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing = () => {
  const price = [
    { imgUrl: '/img2.jpg', title: 'Quarterly', price: 1800, Months: '3 months' },
    { imgUrl: '/img2.jpg', title: 'Half‑yearly', price: 3000, Months: '6 months' },
    { imgUrl: '/img2.jpg', title: 'Yearly', price: 5000, Months: '12 months' },
  ];

  return (
    <section className="pricing">
      <h1>Gymkhana Plans</h1>
      <div className="wrapper">
        {price.map((plan) => (
          <div className="card" key={plan.title}>
            <img src={plan.imgUrl} alt={plan.title} />
            <div className="title">
              <h1>{plan.title}</h1>
              <h2>Price: ₹{plan.price}</h2>
              <h2>For: {plan.Months}</h2>
            </div>
            <div className="description">
              <p><Check /> Equipment</p>
              <p><Check /> All day free training</p>
              <p><Check /> 24/7 skilled trainers</p>
              <p><Check /> Restroom</p>
              <Link to="/form" state={{ plan }} className="join-button">
                JOIN NOW
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
