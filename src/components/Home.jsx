import './Home.css';
import backgroundImage from '../Assets/bg-pattern.svg';
import backg from '../Assets/pattern-circles.svg';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [price, setPrice] = useState(10);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  const handleRangeChange = (event) => {
    const newPrice = 10 + parseInt(event.target.value);
    setPrice(newPrice);
  };

  const handleBillingToggle = () => {
    setIsYearlyBilling(!isYearlyBilling);
    setPrice(isYearlyBilling ? 10 : 100);
  };

  return (
    <div>
      <div className="background">
        <img className='imgg' src={backgroundImage} alt="Project" />
      </div>
      <div className="circle">
        <img className='circles' src={backg} alt="Project1" />
      </div>
      <div className='container'>
        <div className='text1'>
          <h1>Simple, traffic-based pricing</h1>
        </div>
        <div className="text2">
          <p>Sign up for our 30-day trial. No credit card required.</p>
        </div>
      </div>
      <section>
        <div className='box'>
          <div className="pageviews">
            <h5>100K Pageviews</h5>
          </div>
          <div className="price">
            <h3>${price.toFixed(2)} / {isYearlyBilling ? "year" : "month"}</h3>
          </div>
          <div className="myRangeCss">
            <input type="range" className="form-range" id="customRange1" onChange={handleRangeChange} />
          </div>
          <div className='monthBilling'>
            <h5>Monthly Billing</h5>
          </div>
          <div className="form-check form-switch">
            <label className="form-check-label" htmlFor="yearlyBilling">
              <input
                className="form-check-input toggle"
                type="checkbox"
                id="yearlyBilling"
                name="yearlyBilling"
                checked={isYearlyBilling}
                onChange={handleBillingToggle}
              />
<p className='year'>Yearly Billing <span>25% discount</span></p>
            </label>
            
          </div>
          <div className="line"></div>
          <div className="about">
            <p><FontAwesomeIcon id='green' icon={faCheck} /> Unlimited websites</p>
            <p><FontAwesomeIcon id='green' icon={faCheck} /> 100% Data ownership</p>
            <p><FontAwesomeIcon id='green' icon={faCheck} /> Email reports</p>
          </div>
          <div className="button">
            <button type="button" className="btn btn-success">Start my trial</button>
          </div>
        </div>
      </section>
    </div>
  )
}
