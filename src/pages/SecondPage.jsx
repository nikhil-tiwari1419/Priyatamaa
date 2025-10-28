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
      audioRef.current.load();
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
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className="min-h-screen mx-auto max-w-md bg-Img2 to-gray-400 w-full">
      <span className="  flex flex-col text-indigo-300 items-center font-style  text-2xl underline decoration-4 decoration-dashed underline-offset-7">
        Music Player
      </span>
      {/* Back Button */}
      <button
        className="mx-10 font-bold text-violet-600 text-2xl"
        onClick={() => navigate("/")}
      >
        <FaRegArrowAltCircleLeft />
      </button>

      <h2 className="text-center font-bold mb-3 text-cyan-500 text-2xl">Song's list</h2>

      <div className="h-[450px] px-2 mx-5 overflow-y-auto no-scrollbar rounded-xl bg-transparent shadow-lg shadow-gray-900/50">
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
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controls
            className="w-full mt-3 mb-3 h-10"

          />
        )}
      </div>
      {/* Controls */}
      <div className="h-12 mt-5 flex items-center justify-center gap-6 bg-gray-500 mx-8 rounded-2xl py-4">
        <button onClick={prevSong} className="p-3 text-gray-100 rounded-full hover:text-gray-100">
          <FaStepBackward className="text-2xl" />
        </button>
        <button onClick={togglePlayPause} className="p-3 text-amber-400 rounded-full hover:bg-gray-400">
          {isPlaying ? <FaPause className="text-3xl" /> : <FaPlay className="text-3xl" />}
        </button>
        <button onClick={nextSong} className="p-3 text-gray-100 rounded-full hover:text-gray-100">
          <FaStepForward className="text-2xl" />
        </button>
      </div>


      <div className='flex justify-center mt-10 mb-5'>
        <div className="w-40 h-40  rounded-full overflow-hidden flex justify-between bg-gray-200 shadow-lg">
          <img
            className='h-full w-full object-cover'
            src={images[currentimgIndex]}
            alt="some image"
          />
        </div>
      </div>

      {/* footer */}
      <div>
        <div className="text-center text-gray-400 bottom-0 text-sm">
         Crafted with 💗
        </div>
      </div>
    </div>
  );
}

export default SecondPage;



