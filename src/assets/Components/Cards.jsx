import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ title, icon1: Icon1, icon2: Icon2, bgImage, btn1, btn2, link, type }) {
  const navigate = useNavigate();

  return (
    <div
      className="w-full rounded-3xl mb-6 overflow-hidden 
        shadow-xl border border-white/30 
        bg-white/30 backdrop-blur-lg
        transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-white/40">
        <span className="flex items-center gap-3 text-lg font-semibold text-gray-800">
          <Icon1 className="text-black text-2xl" /> {title}
        </span>
        <Icon2 className="text-violet-700 text-xl cursor-pointer hover:text-violet-500 transition" />
      </div>

      {/* Circular Image */}
      <div className="flex justify-center py-4">
        <div
          className="relative w-24 h-24 rounded-full overflow-hidden shadow-[0_0_20px_rgba(147,51,234,0.4)]
          border-4 border-violet-400/50 transition-transform duration-500 hover:scale-110"
        >
          <img
            src={bgImage}
            alt="card"
            className=" object-cover relative w-24 h-24 rounded-full overflow-hidden glow-pulse"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center mt-2 pb-4 space-y-3">
        {type === "External" && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2 text-white font-semibold rounded-full 
              bg-gradient-to-r from-violet-500 to-pink-500 
              shadow-md shadow-violet-400/40 
              hover:from-pink-500 hover:to-violet-500 
              active:scale-95 transition-transform"
          >
            {btn1}
          </a>
        )}
        {type === "Internal" && (
          <button
            onClick={() => navigate(link)}
            className="px-8 py-2 text-white font-semibold rounded-full 
              bg-gradient-to-r from-indigo-500 to-purple-500 
              shadow-md shadow-indigo-400/40 
              hover:from-purple-500 hover:to-indigo-500 
              active:scale-95 transition-transform"
          >
            {btn2}
          </button>
        )}
      </div>
    </div>
  );
}

export default Cards;
