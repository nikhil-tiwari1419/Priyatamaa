import { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import Song from "../assets/Components/Song";
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

    const SongCard = [
        {
            Name: "Blinding Lights",
            Song: "The Weeknd",
            Img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
        },
        {
            Name: "Shape of You",
            Song: "Ed Sheeran",
            Img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
        },
        {
            Name: "Levitating",
            Song: "Dua Lipa",
            Img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        },
        {
            Name: "Peaches",
            Song: "Justin Bieber",
            Img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
        },
        {
            Name: "Stay",
            Song: "The Kid LAROI, Justin Bieber",
            Img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        },
        {
            Name: "Perfect",
            Song: "Ed Sheeran",
            Img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        },
        {
            Name: "Senorita",
            Song: "Shawn Mendes & Camila Cabello",
            Img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
        },
        {
            Name: "Believer",
            Song: "Imagine Dragons",
            Img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
        },
        {
            Name: "Night Changes",
            Song: "One Direction",
            Img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
        },
        {
            Name: "Closer",
            Song: "The Chainsmokers ft. Halsey",
            Img: "https://images.unsplash.com/photo-1485579149621-3123dd979885",
        },
        {
            Name: "Let Me Love You",
            Song: "DJ Snake ft. Justin Bieber",
            Img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
        },
    ];



    return (
        <div className='relative w-full mx-auto font-mono max-w-md bg-gradient-to-b from-gray-400 via-blue-300 to-gray-500 min-h-screen text-black px-2 pt-1.5'>
            {/* Title */}
            <div className='flex items-center justify-between border-b-fuchsia-500 border rounded-2xl p-2 px-3'>
                <span className=' text-blue-800 items-center flex font-style gap-2 text-xl underline decoration-4 decoration-amber-300 decoration-dashed underline-offset-7'>
                    {/* img */}
                    <img
                        className='w-10 h-10 rounded-full'
                        src="/img/image.png"
                        alt="img"
                    />
                    PriyaTamaa
                </span>
                <span className='border-3 border-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-xl'>
                    <FaSearch />
                </span>
            </div>
            {/* <hr className='mt-2' /> */}
            <div className='px-2 mt-1 flex justify-center items-center gap-2'>
                <HiSun className='text-4xl border-3 rounded-full border-blue-400 w-11 h-11 ' />
                <div className='flex flex-col leading-tight'>
                    <h3 className='underline underline-offset-2 decoration-4 decoration-blue-400 text-xl '>Good Morning</h3>
                    <div className=' text-xl font-semibold '>Nikhil...</div>
                </div>
            </div>
            <div className='flex overflow-x-auto no-scrollbar border rounded-full  border-none bg-white space-x-5 px-1 h-8 
               m-2'>
                <button className=' text-sm hover:underline underline-offset-2 flex-shrink-0' onClick={secondpg}>
                    Song playlist
                </button>
                <button className='text-sm flex-shrink-0' onClick={thirdpg}>
                    Explore more
                </button>
                <button className='text-sm flex-shrink-0' onClick={fourthpg}>
                    Yadeen
                </button>
                <button className='text-sm flex-shrink-0' onClick={fifthpg}>
                    kuch-nahi
                </button>
                <button className='text-sm flex-shrink-0' onClick={fifthpg}>
                    kuch-nahi
                </button>
                <button className='text-sm flex-shrink-0' onClick={fifthpg}>
                    kuch-nahi
                </button>
                <button className='text-sm flex-shrink-0' onClick={fifthpg}>
                    kuch-nahi
                </button>
            </div>
            <div className='border h-50 mx-2'>

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

            {/* song */}
            <div className='border m-2 h-[50vh] p-3 overflow-auto no-scrollbar shadow-md bg-black/5 border-none rounded-xl'>
                {SongCard.map((item, idx) => (
                    <Song
                        key={idx}
                        name={item.Name}
                        song={item.Song}
                        img={item.Img}
                    />
                ))}
            </div>


            {/* seek baar */}
            <div className="fixed bottom-5 w-xl left-1/2 -translate-x-1/2 flex flex-col items-center 
                 backdrop-blur-md shadow-2xl border-violet-400 border-2 rounded-full  px-6 py-3 
                z-50">
                <h3>Default Songfor My PriyaTamaa </h3>
                <input
                    type="range"
                    min="0"
                    max={audioRef.current?.duration || 0}
                    value={audioRef.current?.currentTime || 0}
                    onChange={handelChange}
                    style={{
                        background: `linear-gradient(to right, #9333ea ${progress}%, #e5e7eb ${progress}%)`,
                    }}
                    className="w-48 rounded-2xl h-1 appearance-none cursor-pointer focus:outline-none"
                />
                <button
                    onClick={togglePlayPaus}
                    className="mt-3 flex items-center justify-center cursor-pointer"
                >
                    {playpaus ? (
                        <FaRegPauseCircle className="text-yellow-500 text-4xl" />
                    ) : (
                        <FaRegPlayCircle className="text-black text-4xl" />
                    )}
                </button>
            </div>

            {/* <footer className="text-center py-4  text-black mt-3">
                <p>&copy; {new Date().getFullYear()} Priyataama — All rights reserved.
                    ........</p>
            </footer> */}
        </div>
    );
}

export default Firstpage;
