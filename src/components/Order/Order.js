import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './Order.css';

const Order = (props) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [data, setData] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  let navigate = useNavigate();

  const handleInputFocus = (e) => {
    setData({ ...data, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (!data.cvc || !data.expiry || !data.name || !data.number) {
      setError(true);
      return;
    }
    setError(false);
    setSuccess(true);
    setTimeout(() => {
      navigate('/');
    });
  };

  return (
    <div className="order-wrapper">
      <div id="PaymentForm">
        <Cards
          cvc={data.cvc}
          expiry={data.expiry}
          focused={data.focus}
          name={data.name}
          number={data.number}
        />
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="number"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="number"
            name="expiry"
            placeholder="Expire Date"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="number"
            name="cvc"
            placeholder="CVC"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input type="text" placeholder="Address" />
          <input type="number" placeholder="Postcode" />
          {error && <p className="order-error">Fill all the fields</p>}
          <button className="order-btn" onClick={handleOrder}>
            Order
          </button>
        </form>
      </div>
      {success && (
        <div>
          <h2 className="success-title">Successful order</h2>
          <div class="success-wrapper">
            <svg
              class="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52">
              <circle
                class="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                class="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
