import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const GoToFirstpage = () => navigate("/Firstpage");

  return (
    <div className="relative min-h-screen max-w-md mx-auto overflow-hidden  shadow-2xl">
      {/* Background Image */}
      <img
        src="/img/Musical Wallpaper Aesthetic.jpeg"
        alt="Music"
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      {/* Foreground Content */}
      <div className="absolute bottom-12 px-6 text-left text-white">
        <p className="text-green-400 text-sm mb-1 font-semibold">LIVE</p>
        <h1 className="text-3xl font-bold mb-2">Music without borders</h1>
        <p className="text-gray-300 text-sm mb-5">
          Create playlists, find new tracks and listen to your favorite music anytime!
        </p>
        <button
          onClick={GoToFirstpage}
          className="bg-green-500 text-black font-semibold rounded-full px-6 py-2 hover:bg-green-400 transition-all"
        >
          Get started
        </button>
      </div>
    </div>
  );
}

export default Main;
