/*
    
*/

import Footer from "../Components/Footer/Footer";
import Navbar from '../Components/NavBar/Navbar';
import "../styles/home.css"

export default function About() {
    return (
        <>
            <div className="about">
                <Navbar/>
                <div className="content">
                    <div className="content_box">
                        <div className="content_border">
                            <h1 className="section_header">
                                    About
                                </h1>
                            <div className="content_field">
                                <div className="desc">
                                    <p>
                                        Wish Calculator is designed to help players better 
                                        manage their primogems and fates in <i>Genshin Impact</i> by performing certain 
                                        calculations; usually the amount of wishes or rolls the player can make with their
                                        current number of primogems and fates.
                                        <br></br>
                                        <br></br>
                                        Based on DQueen13's (zebra#4539 on Discord) Primogem/Fate Tracker Excel sheet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    );
}