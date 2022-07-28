import { Outlet, Link } from "react-router-dom";
import WebLogo from "../../images/Icon_WishCalc.png";
import "./Navbar.css";

export default function Navbar () {
    return (
        <>
            <nav className="navbar">
                <div className="navbar_box"> 
                    <div className="navbar_wrapper">
                        <div className="logo">
                            <Link className="logo_link" to="/">
                                <img className="img_logo"src={WebLogo} alt="Website logo"/>                    
                                <h1 className="title">Wish Calculator</h1>
                            </Link>
                        </div>
                            {/*
                                <div className="navbar_links">
                                    <Link className="text_link" id="navbar_link" to="/">Home</Link>
                                    <Link className="text_link" id="navbar_link" to="/faq">FAQ</Link>
                                </div>
                            */}
                        </div>
                    </div>
            </nav>
            <Outlet/>
        </>
    );
}