import './App.css';
import Home from "../../pages/home";
import Conversion from "../../pages/conversion";
import FAQ from "../../pages/faq"
import About from "../../pages/about"
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <div className="wrapper">
      <HashRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "conversion" element = {<Conversion/>}/>
          <Route path ="faq" element ={<FAQ/>} />
          <Route path = "about" element = {<About/>}/>
        </Routes>
      </HashRouter>
      </div>
    </div>
  );
}

export default App;
