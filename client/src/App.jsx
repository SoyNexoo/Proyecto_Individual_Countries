import { Route, Routes, useLocation } from "react-router-dom";
import { Landing } from "./components/Landing/PageHome";
import "./App.css";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";
import { Detail } from "./components/Detail/Detail";
import FormActivity from "./components/FormActivity/FormActivity";
import Activity from "./components/ActivityCards/ActivityCards";
// import MiComponente from "./components/Footer/miComponente";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import axios from "axios";
import NotFound from "./components/NotFound/NotFound";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Home />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Nations" element={<Cards />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/create" element={<FormActivity />} />
        <Route path="/about" element={<AboutMe /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
