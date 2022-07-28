import { Link } from "react-router-dom";
import "./footer.css"

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer_wrapper">
                    <div className="footer_top">
                        <p className="footer_desc">
                            This website is not affiliated with HoYoverse.
                            <br></br>
                            © All rights reserved by HoYoverse.
                        </p>
                    </div>
                    <div className="footer_bottom">
                        <Link className="footer_link" to="/about">About</Link>
                        <p className="footer_link" >FAQ</p>
                        <p className="footer_link">Contact: schau9919@gmail.com</p>
                    </div>
                </div>
            </footer>
        </>
    );
}