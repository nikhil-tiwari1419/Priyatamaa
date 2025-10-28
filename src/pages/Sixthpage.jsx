import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoMdFemale } from "react-icons/io";
import { IoMdMale } from "react-icons/io";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Female from "../assets/Components/Female"
import Male from "../assets/Components/Male"
import Letter from '../assets/Components/Letter';

function Sixthpage() {

    // const [page, setpage] = useState("");
    const [page, setpage] = useState();
    const [step, setstep] = useState(1);

    const directionPass = useNavigate();

    const handelnext = () => {
        if (!page) {
            alert("plese select an option befro proceding ")
            return;
        }
        setstep(step + 1);
    };
    const handelprev = () => {

        setstep(step - 1);
    };
    const handelupdate = () => {
        setstep(2)
    }

    // const handeltoMainPage = () => {
    //     directionPass(1)
    // }
    const handeltoMain = () => {
        directionPass("/Thirdpage")
    }
    return (
        <div className='bg-white/80 min-h-screen mx-auto text-black max-w-md py-1 '>
            {step === 1 && (
                <div className='text-center mx-5  '>
                    <h2 className=' font-bold p-8'>- Select Option's -</h2>

                    {/* step 1 selection  */}
                    {/* btn 1 */}
                    <button
                        className={`border-b-4 rounded-xl transition flex border w-full  mb-5 ${page === "female" ? "bg-gray-400" : "bg-white/80 "} `}
                        onClick={() => setpage("female")}>

                        <div className=' items-center font-bold text-xl flex  h-13'>
                            <IoMdFemale className=' mx-3 ' />Female
                        </div>
                    </button>
                    {/* btn 2 */}
                    <button className={`border-b-4 rounded-xl transition flex border w-full  mb-5 ${page === "male" ? "bg-gray-400" : "bg-white/80 "} `}
                        onClick={() => setpage("male")}
                    >

                        <div className=' items-center font-bold text-xl flex  h-13'>
                            <IoMdMale className='mx-3 ' />Male
                        </div>
                    </button>

                    {/* btn 3 */}
                    <button className={`border-b-4 rounded-xl transition flex border w-full  mb-5 ${page === "letter" ? "bg-gray-400" : "bg-white/80 "} `}
                        onClick={() => setpage("letter")}
                    >

                        <div className=' items-center font-bold text-xl flex  h-13'>
                            <SlEnvolopeLetter className=' mx-3 ' />Latter to her
                        </div>
                    </button>
                    <div className="w-40 h-40 rounded-full border overflow-hidden mt-5 shadow-2xl border-b-4 mx-auto">
                        <img
                            src="https://images.unsplash.com/photo-1462903876006-77f6beb241b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                            alt="profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>

                    <button className='bg-gray-300 border mx-4 border-b-4 px-4 rounded-xl mt-6 '
                        onClick={handeltoMain}
                    >
                        <GrFormPrevious className='text-2xl' />
                    </button>
                    <button className='bg-gray-300 border  mx-4 border-b-4 px-4 rounded-xl mt-6 '
                        onClick={handelnext}
                    >
                        <GrFormNext className='text-2xl' />
                    </button>
                </div>
            )}


            {step === 2 && (
                <div className='text-center text-black'>
                    {page === "female" && (
                        <>
                            <h2 className='text-xl '>Female</h2>
                            <Female />
                            <button
                                className='mt-5 border border-b-5 px-5 rounded-xl'
                                onClick={handelprev}>
                                <GrFormPrevious className='text-2xl' />
                            </button>

                        </>
                    )}
                    {page === "male" && (
                        <>
                            <h2 className='text-xl '>Male</h2>
                            <Male />
                            <button
                                className='mt-5 border border-b-5 px-5 rounded-xl'
                                onClick={handelprev}>
                                <GrFormPrevious className='text-2xl' />
                            </button>

                        </>
                    )}
                    {page === "letter" && (
                        <>
                            <Letter />
                            <button
                                className='mt-5 border border-b-5 px-5 rounded-xl'
                                onClick={handelupdate}>
                                <GrFormPrevious className='text-2xl' />
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default Sixthpage

