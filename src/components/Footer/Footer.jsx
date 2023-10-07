import React from 'react';
import { Typography } from '@mui/material';
import './footer.css';

export default function Footer() {
    return (
        <div id="footer-container" style={{ color: "#fff", backgroundColor: "#000", width: "100%"}}>
            <Typography id="footer-title" sx={{ textAlign: "center", padding: "20px", fontSize: "1.6rem", fontFamily: "Lora, sans-serif" }}>
                Simon Dutton, Software Engineer
            </Typography>
            <div style={{ display: "flex", flexDirection: "row",}}>
                {/* <div id="source-code-container" style={{ minWidth: "50%" }}>
                    <Typography id="like-wys" style={{fontStyle:"italic", fontFamily: "Work Sans, sans-serif" }}>
                        Like what you see?
                    </Typography>
                    <Typography style={{fontFamily: "Work Sans, sans-serif" }}>
                        Check out the source code on GitHub
                    </Typography>
                </div> */}
                <div style={{ minWidth: "50%"}}>
                    <Typography id="connect" style={{ fontSize: "1.4rem", fontWeight: "600", fontFamily: "Work Sans, sans-serif" }}>
                        Connect
                    </Typography>
                    <div className="socials-container">
                        <a href="https://www.linkedin.com/in/simondutton227/" target="_blank" rel="noreferrer" style={{display: "flex", alignItems:"center", color:"#fff", textDecoration:"none"}}>
                        <img src="images/social-media/linkedin.png" width="30"></img>
                        <Typography className="socials-text">
                            LinkedIn
                        </Typography>
                        </a>
                    </div>
                    <div className="socials-container">
                    <a href="https://github.com/sdutton27/" target="_blank" rel="noreferrer" style={{display: "flex", alignItems:"center", color:"#fff", textDecoration:"none"}}>
                        <img src="images/social-media/github.png" width="30"></img>
                        <Typography className="socials-text">
                            GitHub
                        </Typography>
                    </a>
                    </div>
                </div>
                <div id="source-code-container" style={{ minWidth: "50%" }}>
                    <Typography id="like-wys" style={{fontStyle:"italic", fontFamily: "Work Sans, sans-serif" }}>
                        Like what you see?
                    </Typography>
                    <a href="https://github.com/sdutton27/portfolio-site" target="_blank" rel="noreferrer" style={{color:"#fff"}}><Typography id="source-code-text" style={{fontFamily: "Work Sans, sans-serif", padding:"0px 10px 0px 0px" }}>
                        Check out the source code on GitHub
                    </Typography></a>
                </div>

            </div>
        </div>
    )
}
