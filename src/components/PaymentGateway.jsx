import React, { useState } from 'react';

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="flex flex-col lg:flex-row border border-gray-300 rounded-lg font-poppins my-10">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 p-8 border-b lg:border-b-0 lg:border-r border-gray-300">
        <h2 className="text-black font-semibold text-xl mb-4 text-left">Payment Gateway</h2>
        <hr className="mb-2" />
        <div className="mb-4">
          <label className="flex items-center space-x-4 cursor-pointer p-2 border border-black rounded-lg my-10">
            <img src="cash_only.png" alt="Cash" className="w-4 h-4" />
            <span className="text-black">Cash Only</span>
            <input
              type="radio"
              name="paymentMethod"
              value="Cash"
              checked={paymentMethod === 'Cash'}
              onChange={() => handlePaymentMethodChange('Cash')}
              className="ml-auto"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center space-x-4 cursor-pointer p-2 border border-black rounded-lg my-10">
            <img src="upi.png" alt="UPI/QR" className="w-6 h-6" />
            <span className="text-black">UPI/QR</span>
            <input
              type="radio"
              name="paymentMethod"
              value="UPI/QR"
              checked={paymentMethod === 'UPI/QR'}
              onChange={() => handlePaymentMethodChange('UPI/QR')}
              className="ml-auto"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center space-x-4 cursor-pointer p-2 border border-black rounded-lg my-10">
            <img src="Net_Banking.png" alt="Net Banking" className="w-4 h-4" />
            <span className="text-black">Net Banking</span>
            <input
              type="radio"
              name="paymentMethod"
              value="Net Banking"
              checked={paymentMethod === 'Net Banking'}
              onChange={() => handlePaymentMethodChange('Net Banking')}
              className="ml-auto"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center space-x-4 cursor-pointer p-2 border border-black rounded-lg my-10">
            <img src="CreditCard.png" alt="Debit/Credit Card" className="w-5 h-5" />
            <span className="text-black">Debit/Credit Card</span>
            <input
              type="radio"
              name="paymentMethod"
              value="Debit/Credit Card"
              checked={paymentMethod === 'Debit/Credit Card'}
              onChange={() => handlePaymentMethodChange('Debit/Credit Card')}
              className="ml-auto"
            />
          </label>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 p-8">
        <h2 className="text-black font-semibold text-xl mb-4">Enter Debit/Credit Card Information</h2>
        <hr className="mb-4" />
        <div className="mb-4">
          <label className="block mb-2 text-sm text-black text-left">Name on Card</label>
          <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm text-black text-left">Card Number</label>
          <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="w-full lg:w-1/2 lg:mr-2 mb-4 lg:mb-0">
            <label className="block mb-2 text-sm text-black text-left">Expire Date</label>
            <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2" />
          </div>
          <div className="w-full lg:w-1/2 lg:ml-2">
            <label className="block mb-2 text-sm text-black text-left">CVV</label>
            <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2" />
          </div>
        </div>
        <button className="w-full bg-[#FF6B85] text-white font-semibold py-2 px-4 rounded-2xl my-4">Pay</button>
      </div>
    </div>
  );
};

export default PaymentForm;
