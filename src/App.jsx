import './App.css'
import Firstpage from "./pages/Firstpage";
import SecondPage from "./pages/SecondPage";
import Thirdpage from "./pages/Thirdpage";
import Fourthpage from "./pages/Fourthpage";
import Fifthpage from "./pages/Fifthpage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {


  return (
    
      <BrowserRouter basename="/Priyatamaa">
        <Routes>
          <Route path="/" element={<Firstpage />}/>
          <Route path="/SecondPage" element={<SecondPage />}/>
          <Route path="/Thirdpage" element={<Thirdpage />}/>
          <Route path="/Fourthpage" element={<Fourthpage />}/>
          <Route path="/Fifthpage" element={<Fifthpage />}/>
        </Routes>
      </BrowserRouter>

   
  )
}

export default App
