import React from 'react'
import { useNavigate } from 'react-router-dom'
function Thirdpage() {
    const direction = useNavigate();

    const Fourthpage =()=>{
        direction("/Fourthpage")
    }
  return (
    <> 
    <div className='text-yellow-400'>Thirdpage</div>
    <button onClick={Fourthpage}>next</button>


     {/* footer */}
      <>
        <div className="text-center  bottom-0 text-sm">
          Developed by Nikhil Tiwari
        </div>
      </>
    </>
  )
}

export default Thirdpage

