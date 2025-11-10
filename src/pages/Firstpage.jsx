import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { FaRegPlayCircle, FaRegPauseCircle, FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
// import { HiSun } from "react-icons/hi";
import Song from "../assets/Components/Song";

function Firstpage() {
    const direction = useNavigate();
    const goTo = (path) => direction(`/${path}`);

    const audioRef = useRef(null);
    const [playpaus, setplaypaus] = useState(false);
    const [current, setCurrent] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setprogress] = useState(0);

    const handelTimeUpdate = () => {
        const current = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        setCurrent(current);
        setDuration(duration);
        setprogress((current / duration) * 100);
    };

    const handelChange = (e) => {
        const value = e.target.value;
        audioRef.current.currentTime = value;
        setCurrent(value);
        setprogress((value / duration) * 100);
    };

    const togglePlayPaus = () => {
        if (playpaus) {
            audioRef.current.pause();
        } else {
            if (
                audioRef.current.ended ||
                audioRef.current.currentTime === audioRef.current.duration
            ) {
                audioRef.current.currentTime = 0;
            }
            audioRef.current.play();
        }
        setplaypaus(!playpaus);
    };

    // Greeting logic
    const [currentTime, setCurrentTime] = useState(new Date());
    const [greeTing, setGreeTing] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);
            updateGreting(now);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const updateGreting = (time) => {
        const hour = time.getHours();
        if (hour >= 5 && hour < 12) setGreeTing("Good Morning");
        else if (hour >= 12 && hour < 17) setGreeTing("Good Afternoon");
        else if (hour >= 17 && hour < 20) setGreeTing("Good Evening");
        else setGreeTing("Good Night");
    };

    const fromattedTime = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const location = useLocation();
    const { name } = location.state || { name: "Guest" };

    const [text, setText] = useState("");

    useEffect(() => {
        const message = "Welcome To Priyatama React App!";
        let idx = 0;
        const interval = setInterval(() => {
            setText((prev) => prev + message[idx]);
            idx++;
            if (idx === message.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const SongCard = [
        { Name: "Blinding Lights", Song: "The Weeknd", Img: "/img/music.png" },
        { Name: "Shape of You", Song: "Ed Sheeran", Img: "/img/music.png" },
        { Name: "Levitating", Song: "Dua Lipa", Img: "/img/music.png" },
        { Name: "Peaches", Song: "Justin Bieber", Img: "/img/music.png" },
        { Name: "Stay", Song: "The Kid LAROI, Justin Bieber", Img: "/img/music.png" },
        { Name: "Perfect", Song: "Ed Sheeran", Img: "/img/music.png" },
        { Name: "Senorita", Song: "Shawn Mendes & Camila Cabello", Img: "/img/music.png" },
        { Name: "Believer", Song: "Imagine Dragons", Img: "/img/music.png" },
        { Name: "Night Changes", Song: "One Direction", Img: "/img/music.png" },
        { Name: "Closer", Song: "The Chainsmokers ft. Halsey", Img: "/img/music.png" },
        { Name: "Let Me Love You", Song: "DJ Snake ft. Justin Bieber", Img: "/img/music.png" },
    ];

    return (
        <div className="relative w-full mx-auto font-mono max-w-md bg-gray-800 min-h-screen text-white px-2 pt-1.5">
            {/* Title */}
            <div className="flex items-center justify-between border rounded-2xl p-2 px-3">
                <span className=" flex items-center gap-2 text-xl underline decoration-4 decoration-amber-300 decoration-dashed underline-offset-7">
                    <img className="w-10 h-10 rounded-full" src="/img/image.png" alt="logo" />
                    PriyaTamaa
                </span>
                <span className="border-3 rounded-full w-10 h-10 flex items-center justify-center text-xl">
                    <FaSearch />
                </span>
            </div>

            <div className="px-2 mt-1 flex justify-center items-center gap-2">
                <FaUser className="text-2xl border-3 p-1 rounded-full w-10 h-10 " />
                <div className="flex flex-col leading-tight">
                    <h3 className="underline underline-offset-2 decoration-4 decoration-blue-400 text-xl">
                        {greeTing}
                    </h3>
                    <div className="text-xl font-semibold">{name}</div>
                </div>
            </div>

            <div className="flex overflow-x-auto no-scrollbar border rounded-full border-none p-2 space-x-5 text-black m-2">
                <button onClick={() => goTo("SecondPage")} className="text-sm hover:underline px-3 border rounded bg-amber-200  flex-shrink-0">
                    Song playlist
                </button>
                <button onClick={() => goTo("Thirdpage")} className="text-sm hover:underline px-3 border rounded bg-amber-200 flex-shrink-0">
                    Explore more
                </button>
                <button onClick={() => goTo("Fourthpage")} className="text-sm hover:underline px-3 border rounded bg-amber-200 flex-shrink-0">
                    Yadeen
                </button>
                <button onClick={() => goTo("Fifthpage")} className="text-sm hover:underline px-3 border rounded bg-amber-200 flex-shrink-0">
                    Kuch-Nahi
                </button>
            </div>

            <div className="border border-none h-50 mx-2 text-black bg-yellow-300 rounded-2xl">
                <h1 className="text-3xl p-3 flex flex-wrap justify-center items-center font-semibold underline decoration-blue-500">{text}</h1>
            </div>

            {/* Audio */}
            <audio
                ref={audioRef}
                src="/songs/Priyatama.mp3"
                onTimeUpdate={handelTimeUpdate}
                onEnded={() => {
                    setplaypaus(false);
                    audioRef.current.currentTime = 0;
                }}
            />

            {/* Song List */}
            <div className="border m-2 h-[50vh] p-3 pb-20 overflow-auto no-scrollbar shadow-md border-none rounded-xl">
                {SongCard.map((item, idx) => (
                    <Song key={idx} name={item.Name} song={item.Song} img={item.Img} />
                ))}
            </div>

            {/* Seek Bar */}
           <div className="fixed bottom-4 left-1/2 -translate-x-1/2 
  w-[90%] max-w-xs bg-white/70 backdrop-blur-md 
  border border-gray-300 rounded-2xl shadow-md 
  px-4 py-3 flex flex-col items-center text-sm text-black z-50">

  {/* Title */}
  <h3 className="font-medium text-gray-800 mb-2 text-center">
    🎵 Default Song – My PriyaTamaa 
  </h3>

  {/* Time and Slider */}
  <div className="flex items-center justify-between w-full">
    <span className="text-[11px]">{new Date(current * 1000).toISOString().substr(14, 5) || "0:00"}</span>

    <input
      type="range"
      min="0"
      max={duration || 0}
      value={current || 0}
      onChange={handelChange}
      className="w-40 h-1 mx-2 rounded-full cursor-pointer bg-gray-300 accent-purple-500"
    />

    <span className="text-[11px]">{new Date(duration * 1000).toISOString().substr(14, 5) || "0:00"}</span>
  </div>

  {/* Play / Pause Button */}
  <button
    onClick={togglePlayPaus}
    className="mt-2 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
  >
    {playpaus ? (
      <FaRegPauseCircle className="text-purple-600 text-3xl" />
    ) : (
      <FaRegPlayCircle className="text-purple-600 text-3xl" />
    )}
  </button>
</div>

        </div>
    );
}

export default Firstpage;
