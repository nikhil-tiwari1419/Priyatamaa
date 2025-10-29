import './App.css'
import Main from "./pages/Main";
import Firstpage from "./pages/Firstpage";
import SecondPage from "./pages/SecondPage";
import Thirdpage from "./pages/Thirdpage";
import Fourthpage from "./pages/Fourthpage";
import Fifthpage from "./pages/Fifthpage";
import Sixthpage from './pages/Sixthpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {


  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/Firstpage" element={<Firstpage />}/>
          <Route path="/SecondPage" element={<SecondPage />}/>
          <Route path="/Thirdpage" element={<Thirdpage />}/>
          <Route path="/Fourthpage" element={<Fourthpage />}/>
          <Route path="/Fifthpage" element={<Fifthpage />}/>
          <Route path="/Sixthpage" element={<Sixthpage />}/>
        </Routes>
      </BrowserRouter>

   
  )
}

export default App
