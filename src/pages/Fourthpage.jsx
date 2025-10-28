  import React ,{useState ,useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function Fourthpage() {

   const [text,setText]= useState(localStorage.getItem('notes')|| '' );

   useEffect(()=>{
    localStorage.setItem('notes',text);
   },[text]);
 
    const Navigate =useNavigate();
 const thirdpage=()=>{
        Navigate("/Thirdpage")
 }
  return (
    <div className='p-6 bg-gray-700 mih-h-screen flex flex-wrap  gap-5 max-w-md mx-auto '>
       <button 
       onClick={thirdpage}
       className='text-2xl text-amber-300'
       ><FaRegArrowAltCircleLeft/></button>
       <h1 className='text-2xl font-bold mb-4'>My Saved Notes </h1>
       <textarea 
         value={text}
         onChange={(e) => setText(e.target.value)}
         placeholder="Start wrtting...."
         className='w-full h-[80vh] p-4 border-b-red-300 rounded-lg font-mono'
         >  

       </textarea>
        <footer className="text-center py-4  text-black mt-3">
      <p>&copy; {new Date().getFullYear()} Priyataama — All rights reserved. 
       Crafted with 💗
      </p>
    </footer>
    </div>
  )
}

export default Fourthpage