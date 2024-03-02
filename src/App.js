import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisableZoom from './disableZoom';

import Navbar from "./templates/navbar"
import Home from "./templates/home"
import Noi from "./templates/noi"
import Attività from "./templates/attività"
import Associati from "./templates/associati"
import Footer from "./templates/footer"

import './styles/index.css';


function App() {
  return (
    <div className="App">
      <DisableZoom />
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noi" element={<Noi />} />
            <Route path="/associati" element={<Associati />} />
            <Route path="/attività" element={<Attività />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
