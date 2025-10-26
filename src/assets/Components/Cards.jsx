import React from 'react'

function Cards({ title, icon1: Icon1, icon2: Icon2, bgImage, btn, link }) {
  return (
    <div className="w-full  rounded-3xl text-black mb-6 border-1 border-b-5 overflow-hidden shadow-lg">
      
      {/* 🔹 Header with icons */}
      <div className="flex justify-between items-center p-3">
        <span className="flex items-center gap-3 text-lg font-semibold border-1 border-b-4 px-4 py-1 rounded-lg">
          <Icon1 /> {title}
        </span>
        <Icon2 className="text-black text-xl cursor-pointer" />
      </div>

      {/* 🔹 Circular Image in the middle */}
      <div className="flex justify-center ">
        <div className="w-18 h-18 rounded-full overflow-hidden border border-none shadow-lg">
          <img
            src={bgImage}
            alt="card"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 🔹 Emoji + Button */}
      <div className="flex flex-col items-center mt-2 space-y-2">
        {/* <div className="text-3xl">{Emogi}</div> */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className=" py-2 px-10 mb-2 font-bold rounded-2xl border-b-4 border-1 hover:bg-gray-200 transition"
        >
          {btn}
        </a>
      </div>
    </div>
  )
}

export default Cards
