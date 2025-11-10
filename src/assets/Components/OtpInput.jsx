import React, { useEffect, useRef, useState } from 'react'

function OtpInput({ length = 4, onOtpSubmit = () => { } }) {

    const [otp, setopt] = useState(new Array(length).fill(""));

    const inputRefs = useRef([])

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [])
    const handelChange = (idx, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;
        const newOtp = [...otp];
        //allow only one input 
        newOtp[idx] = value.substring(value.length - 1);
        setopt(newOtp)
        // submit trigger 
        const combineOtp = newOtp.join("");
        if (combineOtp.length === length) onOtpSubmit(combineOtp)

        if (value && idx < length - 1 && inputRefs.current[idx + 1]) {
            inputRefs.current[idx + 1].focus();
        }
    };
    const handelClick = (idx) => {
        inputRefs.current[idx].setSelectionRange(1, 1);

        // optional validation 

        if (idx > 0 && !otp[idx - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    };
    const handelkeyDown = (idx, e) => {
        if (e.key === "Backspace" && !otp[idx] && idx > 0 &&
            inputRefs.current[idx - 1]) {
            inputRefs.current[idx - 1].focus();
        }
    }
    console.log(inputRefs)
    return (
        <div>
            {
                otp.map((value, idx) => {
                    return <input
                        key={idx}
                        type='text'
                        ref={(input) => (inputRefs.current[idx] = input)}
                        value={value}
                        onChange={(e) => handelChange(idx, e)}
                        onClick={() => handelClick(idx)}
                        onKeyDown={(e) => handelkeyDown(idx, e)}
                        className='w-10 h-10 m-3 p-2 items-center justify-center border rounded text-xl'
                    />
                })
            }
        </div>
    )
}

export default OtpInput