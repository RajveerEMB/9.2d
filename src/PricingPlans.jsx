import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PricingPlans.css';
import { FaCheck, FaDollarSign } from 'react-icons/fa';

const PricingPlans = () => {
  const navigate = useNavigate();

  const handleFreePlanClick = () => {
    navigate('/login');
  };

  return (
    <div className="pricing-plans">
      <h1>Pricing Plans</h1>
      <div className="plans">
        <div className="plan free-plan" onClick={handleFreePlanClick}>
          <h2>Free Plan</h2>
          <p>Basic features for free.</p>
          <ul>
            <li><FaCheck /> Access to basic features</li>
            <li><FaCheck /> Community support</li>
          </ul>
        </div>
        <div className="plan premium-plan">
          <h2>Premium Plan</h2>
          <h2><FaDollarSign /> 5 usd/month</h2>
          <p>Additional features and support.</p>
          <ul>
            <li><FaCheck /> All Free Plan features</li>
            <li><FaCheck /> Priority support</li>
            <li><FaCheck /> Exclusive content</li>
          </ul>
          <Link className="btn-primary" to="/payment">Go Premium</Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
