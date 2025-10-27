import { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";

function Firstpage() {
    const direction = useNavigate();

    const secondpg = () => direction("/SecondPage");
    const thirdpg = () => direction("/Thirdpage");
    const fourthpg = () => direction("/Fourthpage");
    const fifthpg = () => direction("/Fifthpage");

    const audioRef = useRef(null);
    const [playpaus, setplaypaus] = useState(false);

    const togglePlayPaus = () => {
        if (playpaus) {
            audioRef.current.pause();
        } else {
            if (audioRef.current.ended || audioRef.current.currentTime === audioRef.current.duration) {
                audioRef.current.currentTime = 0;
            }
            audioRef.current.play();
        }
        setplaypaus(!playpaus);
    };

    const [progress, setprogress] = useState(0);

    const handelTimeUpdate = () => {
        const current = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        setprogress((current / duration) * 100);
    };

    const handelChange = (e) => {
        const value = e.target.value;
        const duration = audioRef.current.duration;
        audioRef.current.currentTime = (duration / 100) * value;
        setprogress(value);
    };

    return (
        <div className='relative w-full mx-auto max-w-md bg-gray-100 min-h-screen text-black'>
            {/* Title */}
            <span className='flex text-yellow-400 flex-col font-style pt-10 items-center text-5xl underline decoration-4 decoration-dashed underline-offset-7'>
                PriyaTamaa
            </span>
            {/* img */}
            <div className='px-40'>
                <img
                    className='w-44 mt-11 rounded-full'
                    src="/img/image.png"
                    alt="img"
                />
                
            </div>
            {/* audio */}
            <audio
                ref={audioRef}
                src="/songs/Priyatama.mp3"
                onTimeUpdate={handelTimeUpdate}
                onEnded={() => {
                    setplaypaus(false);
                    audioRef.current.currentTime = 0;
                    setplaypaus(0);
                }}
            >
            </audio>

            {/* Buttons */}
            <div className='flex-col'>
                <button className='unstructured-btn text-xl m-5 mx-10' onClick={secondpg}>
                    Song playlist
                </button>
                <button className='unstructured-btn text-xl m-5 mx-10' onClick={thirdpg}>
                    Explore more Songs 
                </button>
                <button className='text-xl  unstructured-btn m-5 mx-10' onClick={fourthpg}>
                    Yadeen
                </button>
                <button className='text-xl  unstructured-btn m-5 mx-10' onClick={fifthpg}>
                    kuch-nahi 
                </button>
            </div>
          

            {/* seek baar */}
            <div className='flex flex-col items-center mt-10 rounded-lg  border-1 border-b-5 mx-3 py-4 h-[20vh]'>
                <input type="range"
                    min="0"
                    max={audioRef.current?.duration || 0}
                    value={audioRef.current?.currentTime || 0}
                    onChange={handelChange}
                    style={{
                        background: `linear-gradient(to right, #9333ea ${progress}%, #e5e7eb ${progress}%)`,
                    }}
                    className='w-80 rounded-2xl h-1 mt-3 appearance-none cursor-pointer focus:outline-none'
                />
                <p className='mt-2 font-bold text-center'>Time line : {Math.round(progress)}%</p>
                  {/* play pause */}
            <button
                onClick={togglePlayPaus}
                className='absolute mt-15 mx-auto  flex items-center justify-center cursor-pointer'
            >
                {playpaus ? (
                    <FaRegPauseCircle className="text-yellow-500 text-6xl" />
                ) : (
                    <FaRegPlayCircle className="text-gray-500 text-6xl" />
                )}
            </button>
            </div>
              <footer className="text-center py-4  text-black mt-3">
        <p>&copy; {new Date().getFullYear()} Priyataama — All rights reserved.
          Deloped by Nikhil........</p>
      </footer>
        </div>
    );
}

export default Firstpage;
