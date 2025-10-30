import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OtpInput from '../assets/Components/OtpInput';
import { auth } from '../firebaseConfig';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

function Next() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

    //set invalid Captcha 
    //set invalid Captcha 
    const setupRecaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: () => console.log('Recaptcha verified'),
        });
    };

 const handleSendOtp = async (e) => {
    e.preventDefault();
    if (phoneNumber.length < 10 || !userName.trim()) {
      alert("Please enter valid name and phone number");
      return;
    }

        setupRecaptcha();

const appVerifier = window.recaptchaVerifier;
    const formattedNumber = "+91" + phoneNumber; // change country code if needed

    try {
      const result = await signInWithPhoneNumber(auth, formattedNumber, appVerifier);
      setConfirmationResult(result);
      setShowOtpInput(true);
      alert("OTP sent successfully!");
    } catch (error) {
      console.error("SMS not sent", error);
      alert("Error sending OTP. Try again later.");
    }
    };

      const handleVerifyOtp = async (otpValue) => {
    try {
      await confirmationResult.confirm(otpValue);
      alert("Login successful!");
      navigate("/Firstpage", { state: { name: userName, phone: phoneNumber } });
    } catch (error) {
      alert("Invalid OTP");
      console.error(error);
    }
  };

  const handleNameChange = (e) => setUserName(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    // phone validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid phone number");
      return;
    }
    if (!userName.trim()) {
      alert("Please enter your name");
      return;
    }
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login successful", otp);
    // after successful OTP — navigate to next page with data
    navigate("/Firstpage", { state: { name: userName, phone: phoneNumber } });
  };

  return (
    <div className="relative bg-Img3 mx-auto max-w-md min-h-screen bg-gradient-to-b from-gray-400 via-blue-300 to-gray-500 shadow-2xl flex items-center justify-center">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-sm backdrop-blur-md p-6 rounded-2xl shadow-lg text-center">
        {!showOtpInput ? (
          <form onSubmit={handlePhoneSubmit} className="flex flex-col items-center space-y-4">
            <input
              type="text"
              value={userName}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumber}
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-md p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="border border-gray-700 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-white">Enter OTP sent to {phoneNumber}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
          </div>
        )}

        <div id='recaptcha-container'></div>
      </div>
    </div>
  );
}

export default Next;
