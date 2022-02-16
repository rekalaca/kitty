import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Kittys from "./pages/Kittys";
import Nemes from "./pages/Nemes";
import Cars from "./pages/Cars";
import Hiba from "./pages/Hiba";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="Kittys" element={<Kittys />} />
          <Route path="Nemes" element={<Nemes />} />
          <Route path="Cars" element={<Cars />} />
          <Route path="*" element={<Hiba />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
