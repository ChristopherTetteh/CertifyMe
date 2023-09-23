import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Singup from "./pages/Singup";
import AdminVerification from "./pages/AdminVerification";
import ControlPrivacy from "./pages/ControlPrivacy";
import ViewingofCertificate from "./pages/ViewingofCertificate";
import Schools from "./pages/Schools";
import AddQualifications from "./pages/AddQualifications";
import SignIn from "./pages/SignIn";
import GenerateTranscripts from "./pages/GenerateTranscripts";
import "bootstrap/dist/css/bootstrap.css";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Signup" element={<Singup/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/GenerateTranscripts" element={<GenerateTranscripts/>}/>
        <Route path="/AdminVerification" element={<AdminVerification/>}/>
        <Route path="/ControlPrivacy" element={<ControlPrivacy/>}/>
        <Route path="/Viewing-of-Certificate" element={<ViewingofCertificate/>}/>
        <Route path="/Schools" element={<Schools/>}/>
        <Route path="/AddQualifications" element={<AddQualifications/>}/>

      </Routes>
      <ToastContainer />
   </BrowserRouter>
  );
}

export default App;
