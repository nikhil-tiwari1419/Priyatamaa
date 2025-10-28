import { useNavigate } from 'react-router-dom'
import { FaPager } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import Cards from '../assets/Components/Cards';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


function Thirdpage() {

  const direction = useNavigate();
  const firsthpage = () => {
    direction("/")
  }
  const CardData = [
    {
      title: "Quote'S",
      icon1: FaPager,
      icon2: FaEllipsisH,
      bgImage: "https://media.tenor.com/cuKLh1gaUCAAAAAi/transparent-love.gif",
      btn1: "Go-to",
      btn2: "open",
      type: "Internal",
      link: "/Sixthpage"
    },
    {
      title: "Old Song's",
      icon1: FaPager,
      icon2: FaEllipsisH,
      bgImage: "https://media1.tenor.com/m/qOa5hfC2xP0AAAAC/love-love.gif",
      btn1: "Go-to",
      btn2: "open",
      type: "External",
      link: "https://open.spotify.com/playlist/37i9dQZF1DXa6iPZDThhLh?si=5b411302146c405b"
    },
    {
      title: "Mashup",
      icon1: FaPager,
      icon2: FaEllipsisH,
      bgImage: "https://media.tenor.com/8L0kMuVgHqEAAAAi/hearts-sending-love.gif",
      btn1: "Go-to",
      btn2: "open",
      type: "Internal",
      link: "/SecondPage"
    },
    {
      title: "Yadeen",
      icon1: FaPager,
      icon2: FaEllipsisH,
      btn1: "Go-to",
      btn2: "open",
      type: "Internal",
      bgImage: "https://images.unsplash.com/photo-1666269194337-f1c16d264234?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      link: "/Fourthpage"
    },
    {
      title: "love",
      icon1: FaPager,
      icon2: FaEllipsisH,
      btn1: "Go-to",
      btn2: "open",
      type: "External",
      bgImage: "https://media1.tenor.com/m/lZptBPntBgkAAAAC/hello-kitty-i-love-you-hello-kitty-iu-anh.gif",
      link: "https://open.spotify.com/playlist/4z5whwZPQuMotubMwwlsLB?si=2ab10ac1e9cd41dc"
    },

  ]
  return (
    <div className='max-w-md min-h-screen mx-auto flex-wrap bg-white pt-6 px-3'>
      <button onClick={firsthpage}
        className='bg-gray-300 fixed text-black rounded-xl font-bold text-2xl p-1 px-4 '
      >
        <FaRegArrowAltCircleLeft />

      </button>
      <div className='border-b-5 border-b-violet-600 p-3 rounded-xl h-[650px] overflow-y-auto no-scrollbar'>
        {CardData.map((item, index) => (
          <Cards
            key={index}
            title={item.title}
            icon1={item.icon1}
            icon2={item.icon2}
            bgImage={item.bgImage}
            link={item.link}
            btn1={item.btn1}
            btn2={item.btn2}
            type={item.type} 
          />
        ))}
      </div>
      <footer className="text-center py-4  text-black mt-3">
        <p>&copy; {new Date().getFullYear()} Priyataama — All rights reserved.
          Crafted with 💓</p>
      </footer>
    </div>
  );
}

export default Thirdpage


