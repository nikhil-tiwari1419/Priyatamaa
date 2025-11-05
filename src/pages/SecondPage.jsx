import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegArrowAltCircleLeft, FaStepBackward, FaStepForward } from "react-icons/fa";
import { FaPlay, FaPause } from "react-icons/fa6";

function SecondPage() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // fetch songs.json from GitHub
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/nikhil-tiwari1419/song-/main/song.JSON")
      .then((res) => res.json())
      .then((data) => {
        if (data.songs) setSongs(data.songs);
      })
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);

  // play / pause function
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // next / previous
  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };
  const prevSong = () => {
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  // auto play next song
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => nextSong();

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [songs.length]);

  // autoplay on song change
  useEffect(() => {
    if (audioRef.current && songs.length > 0) {
      audioRef.current.play().catch((err) => console.log(err));
      setIsPlaying(true);
    }
  }, [currentIndex]);

  // rotating album image
  const images = [
    '/img/chill-chilling.gif',
    '/img/sad-life.gif',
    '/img/pengu.gif',
    '/img/waiting-text.gif',
    '/img/pengu-pudgy.gif',
    '/img/smash-smashing.gif',
    '/img/waiting-waiting-for-you.gif',
    '/img/two-red-heart.png',
    '/img/cloudy-morning.gif'
  ];
  const [currentimgIndex, setCurrentimgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentimgIndex(prev => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  // seek bar & time tracking
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const dur = audioRef.current.duration;
      setCurrentTime(current);
      setProgress((current / dur) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const value = e.target.value;
    if (audioRef.current) {
      audioRef.current.currentTime = (value / 100) * duration;
      setProgress(value);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen mx-auto max-w-md bg-gradient-to-b from-gray-400 via-blue-300 to-gray-500 w-full">
      <span className="flex flex-col text-indigo-300 items-center font-style text-2xl underline decoration-4 decoration-dashed underline-offset-7">
        Music Player
      </span>

      {/* Back Button */}
      <button
        className="mx-10 font-bold text-violet-600 text-2xl"
        onClick={() => navigate("/Firstpage")}
      >
        <FaRegArrowAltCircleLeft />
      </button>

      {/* Album Art */}
      <div className="flex justify-center mb-5">
        <div className="w-40 h-40 rounded-full overflow-hidden flex justify-center items-center bg-gray-200 shadow-[0_0_25px_rgba(147,51,234,0.6)]">
          <img
            className={`h-full w-full object-cover rounded-full transition-all duration-500 
              ${isPlaying ? 'animate-spin-slow' : ''}`}
            src={images[currentimgIndex]}
            alt="album art"
          />
        </div>
      </div>

      {/* Song List */}
      <div className="h-[530px] px-2 mx-5 overflow-y-auto no-scrollbar rounded-xl bg-transparent shadow-lg shadow-gray-900/50">
        <ul className="space-y-2">
          {songs.map((song, idx) => (
            <li
              key={idx}
              className={`p-2 border-b text-black border-gray-500 rounded cursor-pointer 
                ${currentIndex === idx
                  ? "text-blue-600 bg-blue-200"
                  : "bg-blue-300 hover:bg-gray-400"}`}
              onClick={() => {
                setCurrentIndex(idx);
                setIsPlaying(true);
              }}
            >
              {song.id} - {song.title}
            </li>
          ))}
        </ul>

        {songs.length > 0 && (
          <audio
            ref={audioRef}
            src={songs[currentIndex].url}
            onEnded={nextSong}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="hidden"
          />
        )}
      </div>

      {/* Player Controls */}
      <div
        className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[70vw] flex flex-col items-center 
        backdrop-blur-md shadow-2xl border-violet-400 border-2 rounded  
        py-4 bg-white/20 z-50"
      >
        {/* Seek Bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          style={{
            background: `linear-gradient(to right, #9333ea ${progress}%, #e5e7eb ${progress}%)`,
          }}
          className="w-56 rounded-2xl h-1 appearance-none cursor-pointer focus:outline-none mb-1"
        />

        {/* Time Display */}
        <div className="flex justify-between text-xs text-gray-800 w-56 mb-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <button onClick={prevSong} className="px-3 text-black rounded-full hover:text-violet-400">
            <FaStepBackward className="text-2xl" />
          </button>
          <button
            onClick={togglePlayPause}
            className="px-4 text-black rounded-full hover:bg-violet-400/40"
          >
            {isPlaying ? (
              <FaPause className="text-3xl" />
            ) : (
              <FaPlay className="text-3xl" />
            )}
          </button>
          <button onClick={nextSong} className="px-3 text-black rounded-full hover:text-violet-400">
            <FaStepForward className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-2 text-gray-900 bottom-0 text-sm">
        Crafted with 💗
      </div>
    </div>
  );
}

export default SecondPage;
