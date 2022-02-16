import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Derharomszog from "./pages/Derharomszog";
import Beker from "./pages/Beker";
import Negyzet from "./pages/Negyzet";
import Hiba from "./pages/Hiba";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Negyzet />} />
          <Route path="Beker" element={<Beker />} />
          <Route path="Derharomszog" element={<Derharomszog />} />
          <Route path="*" element={<Hiba />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
