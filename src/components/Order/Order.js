import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const Order = () => {
  const [data, setData] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  })

  const handleInputFocus = (e) => {
    setData({ ...data, focus: e.target.name })
  }

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
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
            type="number"
            name="cvc"
            placeholder="CVC"
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
        </form>
      </div>
    </div>
  )
}

export default Order
