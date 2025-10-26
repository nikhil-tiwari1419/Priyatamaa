import { useNavigate } from 'react-router-dom'
import { FaPager } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import Cards from '../assets/Components/Cards';

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
      bgImage: "https://images.unsplash.com/photo-1633175354158-b252df554c39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
      btn: "open",
      Emogi: "📩"
    },
    {
      title: "90's Songs",
      icon1: FaPager,
      icon2: FaEllipsisH,
      bgImage: "https://images.unsplash.com/photo-1633175354158-b252df554c39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
      btn: "open",
      Emogi: "💗"
    },
    {
      title: "20's Song's",
      icon1: FaPager,
      icon2: FaEllipsisH,
      bgImage: "https://images.unsplash.com/photo-1633175354158-b252df554c39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
      btn: "open",
      Emogi: "💝"
    },
    {
      title: "",
      icon1: FaPager,
      icon2: FaEllipsisH,
      btn: "open",
      bgImage: "https://images.unsplash.com/photo-1633175354158-b252df554c39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
      Emogi: "💝"
    },
    {
      title: "Tranding play_list",
      icon1: FaPager,
      icon2: FaEllipsisH,
      btn: "open",
      bgImage: "https://images.unsplash.com/photo-1633175354158-b252df554c39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
      Emogi: "💝"
    },
    {
      title: "20's Song's",
      icon1: FaPager,
      icon2: FaEllipsisH,
      btn: "open",
      bgImage: "https://images.unsplash.com/photo-1633175354158-b252df554c39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
      Emogi: "💝"
    }
  ]
  return (
    <div className='max-w-md min-h-screen mx-auto flex-wrap pt-6 px-3'>
        <button onClick={firsthpage}
          className='bg-red-500 fixed text-black rounded font-bold px-4 '
        >
          Back

        </button>
      <div className='border-b-7 border-b-lime-400 p-3 rounded-xl h-[650px] overflow-y-auto'>
        {CardData.map((item, index) => (
          <Cards
            key={index}
            title={item.title}
            icon1={item.icon1}
            icon2={item.icon2}
            bgImage={item.bgImage}
            Emogi={item.Emogi}
            btn={item.btn}
          />
        ))}
      </div>
    </div>
  );
}

export default Thirdpage


