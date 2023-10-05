import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './home.css';

export default function TestPage() {
    return (
        <div>
            <Box className="container" component="main" sx={{ p: 3 }}>
                {/* <Toolbar /> */}
                <Typography sx={{ textAlign: "center", fontSize: "3.8rem", fontFamily: "Lora, sans-serif" }}>
                    Problem Solving. Creativity. Entrepreneurship. Software Developing.
                </Typography>
                <Typography sx={{ padding: "10px", textAlign: "center", fontSize: "1.4rem", fontFamily: "Work Sans, sans-serif" }}>
                    Meet Simon Dutton, a full-stack developer with a strong work ethic and a kind heart.
                </Typography>
                <button style={{ margin: "20px 0px", width: "100%", backgroundColor: "#000", color: "#fff", border: "0px", padding: "25px", fontSize: "1.5rem", fontFamily: "Work Sans, sans-serif" }}>About Me
                    <img src="images/right-arrow.png" width="20" alt="arrow" style={{ paddingLeft: "10px" }}></img>
                </button>
                <Typography sx={{ marginTop: "30px", textAlign: "center", fontSize: "1.4rem", fontFamily: "Lora, sans-serif" }}>
                    Educated by the brilliant minds at
                </Typography>
                <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
                    <img src="images/coding-temple-logo.png" alt="Coding Temple" style={{ padding: "15px", borderRadius: "50%", height: "150px", width: "150px" }} />
                    <img src="images/ul-logo.png" alt="University of Limerick" style={{ padding: "15px", height: "150px" }} />
                    <img src="images/mhc-logo.png" alt="Mount Holyoke College" style={{ padding: "15px", borderRadius: "50%", height: "150px", width: "150px" }} />
                </Box>

                <Typography sx={{ marginTop: "30px", marginBottom: "40px", textAlign: "center", fontSize: "2rem", fontFamily: "Lora, sans-serif" }}>
                    Proven expertise in:
                </Typography>
                <Box style={{display: "flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
                    <Box className="skill-box" style={{backgroundColor: "#2596be44" }}>
                        <img src="images/closed-eye-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Team building
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{backgroundColor: "#25a2b344" }}>
                        <img src="images/smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Leadership
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{backgroundColor: "#25b2b044"}}>
                        <img src="images/big-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Communication
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{backgroundColor: "#25beae44" }}>
                        <img src="images/closed-eye-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Organization
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{backgroundColor: "#25c1aa44" }}>
                        <img src="images/smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Adaptability
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{ backgroundColor: "#25ce8f44" }}>
                        <img src="images/big-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Collaboration
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{backgroundColor: "#25cf8344" }}>
                        <img src="images/closed-eye-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Performing under pressure
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{ backgroundColor: "#25d17f44" }}>
                        <img src="images/smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Perseverance
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{backgroundColor: "#25d67744" }}>
                        <img src="images/big-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Patience
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{ backgroundColor: "#25da7044" }}>
                        <img src="images/closed-eye-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text" >
                            Time management
                        </Typography>
                    </Box>
                </Box>
                <Typography sx={{ marginTop: "30px", marginBottom: "40px", textAlign: "center", fontSize: "1.6rem", fontFamily: "Lora, sans-serif" }}>
                    Experience with the following technologies:
                </Typography>
                <Box style={{display: "flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
                    <img className="tech-stack-img" src="images/tech-stack/js.png" alt="JavaScript"/>
                    <img className="tech-stack-img" src="images/tech-stack/nodejs-logo.png" alt="NodeJS"/>
                    <img className="tech-stack-img" src="images/tech-stack/threejs.png" alt="Three.JS"/>
                    <img className="tech-stack-img" src="images/tech-stack/python.png" alt="Python"/>
                    <img className="tech-stack-img" src="images/tech-stack/html.png" alt="HTML-5"/>
                    <img className="tech-stack-img" src="images/tech-stack/css-3.png" alt="CSS-3"/>
                    <img className="tech-stack-img" src="images/tech-stack/java.png" alt="Java"/>
                    <img className="tech-stack-img" src="images/tech-stack/typescript.png" alt="TypeScript"/>
                    <img className="tech-stack-img" src="images/tech-stack/c.png" alt="C"/>
                    <img className="tech-stack-img" src="images/tech-stack/assembly.png" alt="Assembly Code"/>
                    <img className="tech-stack-img" src="images/tech-stack/react.png" alt="React"/>
                    <img className="tech-stack-img" src="images/tech-stack/flask-logo.png" alt="Flask"/>
                    <img className="tech-stack-img" src="images/tech-stack/processing.png" alt="Processing"/>
                    <img className="tech-stack-img" src="images/tech-stack/p5.png" alt="P5.js"/>
                    <img className="tech-stack-img" src="images/tech-stack/arduino.png" alt="Arduino"/>
                    <img className="tech-stack-img" src="images/tech-stack/i2c.png" alt="I2C"/>
                    <img className="tech-stack-img" src="images/tech-stack/wordpress.png" alt="WordPress"/>
                    <img className="tech-stack-img" src="images/tech-stack/drupal.png" alt="Drupal"/>
                    <img className="tech-stack-img" src="images/tech-stack/sql.png" alt="SQL"/>
                    <img className="tech-stack-img" src="images/tech-stack/postgresql.png" alt="PostgreSQL"/>
                    <img className="tech-stack-img" src="images/tech-stack/nosql.png" alt="NoSQL"/>
                    <img className="tech-stack-img" src="images/tech-stack/json.png" alt="JSON"/>
                    <img className="tech-stack-img" src="images/tech-stack/xml.png" alt="XML"/>
                    <img className="tech-stack-img" src="images/tech-stack/qunit.png" alt="QUnit" style={{borderRadius:"14px"}}/>
                    <img className="tech-stack-img" src="images/tech-stack/junit5.png" alt="JUnit"/>
                    <img className="tech-stack-img" src="images/tech-stack/pytest.png" alt="Pytest"/>
                    <img className="tech-stack-img" src="images/tech-stack/git.png" alt="Git"/>
                    <img className="tech-stack-img" src="images/tech-stack/github.png" alt="GitHub"/>
                    <img className="tech-stack-img" src="images/tech-stack/docker.png" alt="Docker"/>
                    <img className="tech-stack-img" src="images/tech-stack/aws.png" alt="AWS"/>
                    <img className="tech-stack-img" src="images/tech-stack/rest-api.png" alt="REST APIs"/>
                    <img className="tech-stack-img" src="images/tech-stack/linux.png" alt="Linux"/>
                    <img className="tech-stack-img" src="images/tech-stack/max-msp.png" alt="Max/MSP/Jitter"/>
                    <img className="tech-stack-img" src="images/tech-stack/adobe.png" alt="Adobe Creative Cloud"/>
                    <img className="tech-stack-img" src="images/tech-stack/google.png" alt="Google Workspace"/>
                    <img className="tech-stack-img" src="images/tech-stack/microsoft-office.png" alt="Microsoft Office"/>
                    <img className="tech-stack-img" src="images/tech-stack/logic-pro.png" alt="Logic Pro"/>
                    <img className="tech-stack-img" src="images/tech-stack/final-cut-pro.png" alt="Final Cut Pro"/>
                </Box>
                <Box>
                <Typography sx={{ marginTop: "30px", marginBottom: "40px", textAlign: "center", fontSize: "2.4rem", fontFamily: "Lora, sans-serif" }}>
                    Hear from people who've worked with Simon:
                </Typography>
                <img src="images/testimonials/Jazz-Cvitan.jpeg" alt="Jazz Cvitan" style={{borderRadius:"50%"}}/>
                <Typography sx={{fontSize: "1.4rem", fontFamily: "Work Sans, sans-serif", fontWeight:"500" }}>
                    "Simon is a good person"
                </Typography>
                <Typography sx={{fontSize: "1.4rem", fontFamily: "Work Sans, sans-serif", fontWeight:"300" }}>
                    Someone, Director of Something
                </Typography>
                </Box>
            </Box>
        </div>
    )
}
