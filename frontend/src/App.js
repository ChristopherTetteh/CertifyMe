import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import ViewingofCertificate from "./pages/ViewingofCertificate";

import AddQualifications from "./pages/AddQualifications";

import CertificateManagement from "./pages/CertificateManagement";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/Viewing-of-Certificate"
          element={<ViewingofCertificate />}
        />

        <Route path="/AddQualifications" element={<AddQualifications />} />
        <Route
          path="/CertificateManagement"
          element={<CertificateManagement />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
