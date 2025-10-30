import React, { useState } from 'react'
import OtpInput from '../assets/Components/OtpInput';
import { useNavigate } from 'react-router-dom';

function Next() {
 const navigate = useNavigate();
  const GoToNext = () => navigate("/Firstpage");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [ShowOtpInput, setShowOtpInput] = useState(false);
  const handelPhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handelPhoneSubmit = (e) => {
    e.preventDefault();
    //phone validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid phone Number");
      return;
    }
    // call API
    setShowOtpInput(true);
  };
  const onOtpSubmit = (otp) => {
    console.log("Login succesfull ", otp)
  }

  return (
    <div className=" min-h-screen pt-34 max-w-md mx-auto bg-gradient-to-b from-gray-400 via-blue-300 to-gray-500 shadow-2xl">
      {/* Background Image */}
      

      {/* Gradient overlay */}
      {/* <div className="absolute inset-0 "></div> */}

      {/* Foreground Content */}
      <div className="fixed px-6 text-left">
        {!ShowOtpInput ?
          (<form
            onSubmit={handelPhoneSubmit}>
            <input
              type="text"
              value={phoneNumber}
              onChange={handelPhoneNumber}
              placeholder='Enter ph-no'
              className="border p-2"
            />
            <button type='submit'
             className='border p-2 m-4 items-center cursor-pointer'
            >Submit</button>
          </form>
          ) : (
            <div>
              <p>enter opt sent to {phoneNumber}</p>
              <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
            </div>)}
        <button
          onClick={GoToNext}
          className="bg-green-500 text-black font-semibold cursor-pointer rounded-full px-6 py-2 hover:bg-green-400 transition-all"
        >
          Get started
        </button>
      </div>
    </div>
  )
}

export default Next;