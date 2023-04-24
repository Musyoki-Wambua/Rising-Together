import React, { useState } from "react";

const DonationForm = () => {
  const [amount, setAmount] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [donationAmount, setDonationAmount] = useState('')
  const [isTestDonation, setIsTestDonation] = useState(false);
  const [isOfflineDonation, setIsOfflineDonation] = useState(false);
  const [isPaypal, setIsPaypal] = useState(false);
  const [formData, setFormData] = useState([])
  const [errors, setErrors]= useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = ({
      amount,
      firstName,
      lastName,
      email,
      paymentMethod,
      isTestDonation,
      isOfflineDonation,
      isPaypal
    });
    console.log(data)

    fetch('URL' , {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if(!response.ok){
        throw new Error('Could not complete action')
      }
      return response.json();
    })
    .then(data => {
      setFormData(data)
      console.log('Success:', data)
    })
    .catch(error => {
      console.error('Error:', error)
      setErrors(error)
    })

  };

  return(
    <div className="flex items-center justify-center h-screen">
    <div className=" rounded px-8 py-6">
      <h2 className="text-xl flex items-center justify-center font-bold mb-2">Make a Donation </h2>
      <p className="text-indent: 0.125rem; mb-2">Donate now! Support our mission to connect people to quality giving and volunteer opportunities worldwide!</p>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Select a Payment Method</h2>
          <div className="mb-4">
            <input
              type="checkbox"
              className="mr-2"
              id="test-donation"
              checked={isTestDonation}
              onChange={(e) => setIsTestDonation(e.target.checked)} />
            <label htmlFor="test-donation">Test Donation</label>
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              className="mr-2"
              id="offline-donation"
              checked={isOfflineDonation}
              onChange={(e) => setIsOfflineDonation(e.target.checked)}
            />
            <label htmlFor="offline-donation">Offline Donation</label>
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              className="mr-2"
              id="paypal"
              checked={isPaypal}
              onChange={(e) => setIsPaypal(e.target.checked)}
            />
            <label htmlFor="paypal">Paypal</label>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Enter the Amount</h2>
            <div className="flex flex-wrap -mx-2">
              <button
                className="bg-orange-500 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mx-2 mb-2"
                onClick={() => setAmount(10)}
              >
                $10
              </button>
              <button
                className="bg-green-500 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mx-2 mb-2"
                onClick={() => setAmount(25)}
              >
                $25
              </button>
              <button
                className="bg-green-500 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mx-2 mb-2"
                onClick={() => setAmount(50)}
              >
                $50
              </button>
              <button
                className="bg-green-500 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mx-2 mb-2"
                onClick={() => setAmount(100)}
              >
                $100
              </button>
              <button
                className="bg-green-500 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mx-2 mb-2"
                onClick={() => setAmount("250")}
              >
                $250
              </button>
            </div>
            <div className="flex mb-4">
              <span className="mr-2">$</span>
              <input
                type="number"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Custom Amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Personal Information</h2>
            <div className="flex mb-4">
              <div className="mr-2">
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="first-name"
                  placeholder="First Name"
                />
              </div>
              <div className="ml-2">
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="last-name"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Donation Total Amount</h2>
            <div className="flex mb-4">
              <div className="mr-2">
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="donation-amount"
                  placeholder="Custom Amount"
                />
              </div>
              <div>
                <button
                  className="bg-green-500 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mx-2 mb-2"
                  onClick={() => setDonationAmount(10)}
                >
                  $10
                </button>
                <button
                  className="bg-green-500 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mx-2 mb-2"
                  onClick={() => setDonationAmount(25)}
                >
                  $25
                </button>
                <button
                  className="bg-green-500 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mx-2 mb-2"
                  onClick={() => setDonationAmount(50)}
                >
                  $50
                </button>
                <button
                  className="bg-green-500 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mx-2 mb-2"
                  onClick={() => setDonationAmount(100)}
                >
                  $100
                </button>
                <button
                  className="bg-green-500 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mx-2 mb-2"
                  onClick={() => setDonationAmount(250)}
                >
                  $250
                </button>
              </div>
            </div>
            <p className="text-lg font-bold mb-2">
              Donation Amount: ${donationAmount}
            </p>
          </div>

          <div className="mb-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSubmit}>
              Donate Now
            </button>
          </div>
          </form>
      </div>
    </div>
    </div>
  )
}; 
export default DonationForm;