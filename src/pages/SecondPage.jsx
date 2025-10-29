import React, { useState, useRef, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaPlay, FaPause } from "react-icons/fa6";
import { FaStepBackward, FaStepForward } from "react-icons/fa";
// import img1 from '../assets/';


function SecondPage() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // fetch songs.json (raw link)
  useEffect(() => {

    fetch("https://raw.githubusercontent.com/nikhil-tiwari1419/song-/main/song.JSON")
      .then((res) => res.json())
      .then((data) => {
        if (data.songs) setSongs(data.songs);
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
      });
  }, []);


  // play pause func
  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // next song func
  const nextSong = () => {
    if (currentIndex < songs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSong = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(songs.length - 1);
    }
  };

  // Auto play when song change 
  useEffect(() => {
    if (audioRef.current && songs.length > 0) {
      audioRef.current.play();
      if (isPlaying) {
        audioRef.current.play().catch((error) =>
          console.error("Error playing audio:", error)
        );
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handeleEnded = () => {
      // move to next song
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < songs.length ? prevIndex + 1 : 0
      );
      // auto play next song
      setTimeout(() => {
        audioRef.current.play().catch((error) => console.error(error));
      }, 300);
    };

    audio.addEventListener("ended", handeleEnded);

    return () => {
      audio.removeEventListener("ended", handeleEnded);
    };
  }, [songs.length]);

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
  ]
  const [currentimgIndex, setCurrentimgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentimgIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  // seak bar configuration 


  const [progress, setprogress] = useState(0);

  const handelTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setprogress((current / duration) * 100);
  }
  const handelChange = (e) => {
    const value = e.target.value;
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (duration / 100) * value;
    setprogress(value);
  };

  return (
    <div className="min-h-screen mx-auto max-w-md  bg-gradient-to-b from-gray-400 via-blue-300 to-gray-500 w-full">
      <span className="  flex flex-col text-indigo-300 items-center font-style  text-2xl underline decoration-4 decoration-dashed underline-offset-7">
        Music Player
      </span>
      {/* Back Button */}
      <button
        className="mx-10 font-bold text-violet-600 text-2xl"
        onClick={() => navigate("/Firstpage")}
      >
        <FaRegArrowAltCircleLeft />
      </button>

      <div className='flex justify-center mb-5'>
        <div className="w-40 h-40  rounded-full overflow-hidden flex justify-between bg-gray-200 shadow-lg">
          <img
            className='h-full w-full object-cover'
            src={images[currentimgIndex]}
            alt="some image"
          />
        </div>
      </div>
      {/* <h2 className="text-center font-bold mb-3 text-cyan-500 text-2xl">Song's list</h2> */}

      <div className="h-[530px] px-2 mx-5 overflow-y-auto no-scrollbar rounded-xl bg-transparent shadow-lg shadow-gray-900/50">
        <ul className="space-y-2">
          {songs.map((song, idx) => (
            <li key={idx}
              className={`p-2 bg-transparent border-b text-black border-gray-500 rounded cursor-pointer  ${currentIndex === idx ? "text-blue-600" : "bg-blue-300 hover:bg-gray-400"

                }`}
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
            onTimeUpdate={handelTimeUpdate}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controls
            className="w-full mt-3 mb-3 h-10"

          />
        )}
      </div>
      {/* Controls */}
      <div
        className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[70vw] flex flex-col items-center 
             backdrop-blur-md shadow-2xl border-violet-400 border-2 rounded  
              py-4 bg-white/20 z-50"
      >
        {/* Seek Bar */}
        <input
          type="range"
          min="0"
          max={audioRef.current?.duration || 0}
          value={audioRef.current?.currentTime || 0}
          onChange={handelChange}
          style={{
            background: `linear-gradient(to right, #9333ea ${progress}%, #e5e7eb ${progress}%)`,
          }}
          className="w-56 rounded-2xl h-1 appearance-none cursor-pointer focus:outline-none mb-2 "
        />

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


      {/* footer */}
      <div>
        <div className="text-center mt-2 text-gray-900 bottom-0 text-sm">
          Crafted with 💗
        </div>
      </div>
    </div>
  );
}

export default SecondPage;



