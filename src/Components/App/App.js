import './App.css';
import Home from "../../pages/home";
import Conversion from "../../pages/conversion";
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "conversion" element = {<Conversion/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
