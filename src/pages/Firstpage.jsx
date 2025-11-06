import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { FaRegPlayCircle, FaRegPauseCircle, FaSearch } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
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
        <div className="relative w-full mx-auto font-mono max-w-md bg-gradient-to-b from-gray-400 via-blue-300 to-gray-500 min-h-screen text-black px-2 pt-1.5">
            {/* Title */}
            <div className="flex items-center justify-between border-b-fuchsia-500 border rounded-2xl p-2 px-3">
                <span className="text-blue-800 flex items-center gap-2 text-xl underline decoration-4 decoration-amber-300 decoration-dashed underline-offset-7">
                    <img className="w-10 h-10 rounded-full" src="/img/image.png" alt="logo" />
                    PriyaTamaa
                </span>
                <span className="border-3 border-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-xl">
                    <FaSearch />
                </span>
            </div>

            <div className="px-2 mt-1 flex justify-center items-center gap-2">
                <HiSun className="text-4xl border-3 rounded-full border-blue-400 w-11 h-11 " />
                <div className="flex flex-col leading-tight">
                    <h3 className="underline underline-offset-2 decoration-4 decoration-blue-400 text-xl">
                        {greeTing}
                    </h3>
                    <div className="text-xl font-semibold">{name}</div>
                </div>
            </div>

            <div className="flex overflow-x-auto no-scrollbar border rounded-full border-none bg-white space-x-5 px-1 h-8 m-2">
                <button onClick={() => goTo("SecondPage")} className="text-sm hover:underline flex-shrink-0">
                    Song playlist
                </button>
                <button onClick={() => goTo("Thirdpage")} className="text-sm flex-shrink-0">
                    Explore more
                </button>
                <button onClick={() => goTo("Fourthpage")} className="text-sm flex-shrink-0">
                    Yadeen
                </button>
                <button onClick={() => goTo("Fifthpage")} className="text-sm flex-shrink-0">
                    Kuch-Nahi
                </button>
            </div>

            <div className="border h-50 mx-2">
                <h1 className="text-3xl flex flex-wrap justify-center items-centre font-semibold underline decoration-blue-500">{text}</h1>
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
            <div className="border m-2 h-[50vh] p-3 pb-20 overflow-auto no-scrollbar shadow-md bg-black/5 border-none rounded-xl">
                {SongCard.map((item, idx) => (
                    <Song key={idx} name={item.Name} song={item.Song} img={item.Img} />
                ))}
            </div>

            {/* Seek Bar */}
            <div className="fixed bottom-5 w-[90%] max-w-sm left-1/2 -translate-x-1/2 
    flex flex-col items-center justify-center 
    backdrop-blur-xl bg-white/30 border border-violet-400/50 
    rounded-3xl shadow-[0_0_25px_rgba(147,51,234,0.3)] px-6 py-4 z-50">

                {/* Title */}
                <h3 className="pb-1 text-lg font-semibold text-purple-800 tracking-wide text-center">
                    Default Song for My PriyaTamaa 💖
                </h3>

                {/* Time and Slider */}
                <div className="flex items-center justify-between w-full text-xs font-semibold text-gray-700">
                    <span>
                        {new Date(current * 1000).toISOString().substr(14, 5) || "0:00"}
                    </span>

                    {/* Slider */}
                    <div className="relative w-56">
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={current || 0}
                            onChange={handelChange}
                            className="w-full h-2 appearance-none rounded-full cursor-pointer bg-gradient-to-r from-pink-200 via-purple-300 to-blue-300 accent-transparent 
        [&::-webkit-slider-thumb]:appearance-none 
        [&::-webkit-slider-thumb]:w-4 
        [&::-webkit-slider-thumb]:h-4 
        [&::-webkit-slider-thumb]:rounded-full 
        [&::-webkit-slider-thumb]:bg-gradient-to-r 
        [&::-webkit-slider-thumb]:from-blue-200 
        [&::-webkit-slider-thumb]:to-gray-500 
        [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,192,203,0.8)] 
        transition-all duration-300 hover:scale-105"
                        />
                        {/* glowing overlay */}
                        <div
                            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full pointer-events-none"
                            style={{ width: `${progress}%`, transform: 'translateY(-50%)' }}
                        />
                    </div>

                    <span>
                        {new Date(duration * 1000).toISOString().substr(14, 5) || "0:00"}
                    </span>
                </div>

                {/* Play / Pause Button */}
                <button
                    onClick={togglePlayPaus}
                    className="mt-3 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                >
                    {playpaus ? (
                        <FaRegPauseCircle className="text-yellow-400 text-5xl drop-shadow-[0_0_10px_rgba(255,255,0,0.5)] animate-pulse" />
                    ) : (
                        <FaRegPlayCircle className="text-purple-700 text-5xl drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]" />
                    )}
                </button>
            </div>

        </div>
    );
}

export default Firstpage;
