import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './home.css';

export default function TestPage() {
    return (
        <div>
            <Box className="container" component="main" sx={{ p: 3 }}>
                <Box className="section">
                <Typography id="home-title" sx={{ textAlign: "center", fontSize: "3.6rem", fontFamily: "Lora, sans-serif" }}>
                    Problem Solving. Creativity. Entrepren&shy;eurship. Software Developing.
                </Typography>
                <Typography id="heading-subtitle" sx={{ padding: "10px", textAlign: "center", fontSize: "1.4rem", fontFamily: "Work Sans, sans-serif" }}>
                    Meet Simon Dutton, a full-stack engineer with a strong work ethic and a kind heart.
                </Typography>
                <button className="button"> 
                    About Me
                    <img src="images/right-arrow.png" width="20" alt="arrow" style={{ paddingLeft: "10px" }}></img>
                </button>
                </Box>
                <Typography className="home-subtitle" sx={{ marginTop: "30px"}}>
                    Educated by the brilliant minds at:
                </Typography>
                <Box id="education-box" className="section" sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
                    <img className="education-img" src="images/coding-temple-logo.png" alt="Coding Temple" style={{borderRadius: "50%", maxWidth: "150px" }} />
                    <img className="education-img" src="images/ul-logo.png" alt="University of Limerick" />
                    <img className="education-img" src="images/mhc-logo.png" alt="Mount Holyoke College" style={{ borderRadius: "50%", maxWidth: "150px" }} />
                </Box>

                <Typography className="home-subtitle" sx={{ marginTop: "50px" }}>
                    Proven expertise in:
                </Typography>
                <Box className="section" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    <Box className="skill-box" style={{ backgroundColor: "#2596be44" }}>
                        <img className="smiley" src="images/closed-eye-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Team building
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{ backgroundColor: "#25a2b344" }}>
                        <img className="smiley" src="images/smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Leadership
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{ backgroundColor: "#25b2b044" }}>
                        <img className="smiley" src="images/big-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Communication
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{ backgroundColor: "#25beae44" }}>
                        <img className="smiley" src="images/closed-eye-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Organization
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{ backgroundColor: "#25c1aa44" }}>
                        <img className="smiley" src="images/smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Adaptability
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{ backgroundColor: "#25ce8f44" }}>
                        <img className="smiley" src="images/big-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Collaboration
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{ backgroundColor: "#25cf8344" }}>
                        <img className="smiley" src="images/closed-eye-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Performing under pressure
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{ backgroundColor: "#25d17f44" }}>
                        <img className="smiley" src="images/smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Perseverance
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{ backgroundColor: "#25d67744" }}>
                        <img className="smiley" src="images/big-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text">
                            Patience
                        </Typography>
                    </Box>
                    <Box className="skill-box" style={{ backgroundColor: "#25da7044" }}>
                        <img className="smiley" src="images/closed-eye-smiley.png" alt="smiley face" width="20px"></img>
                        <Typography className="skill-text" >
                            Time management
                        </Typography>
                    </Box>
                </Box>
                <Typography className="home-subtitle" sx={{marginTop: "40px" }}>
                    Experience with the following technologies:
                </Typography>
                <Box className="section" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/html.png" alt="HTML-5" /></a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/css" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/css-3.png" alt="CSS-3" /></a>
                    <a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/js.png" alt="JavaScript" /></a>
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/typescript.png" alt="TypeScript" /></a>
                    <a href="https://www.python.org/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/python.png" alt="Python" /></a>
                    <a href="https://www.java.com/en/download/help/whatis_java.html" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/java.png" alt="Java" /></a>
                    <a href="https://en.wikipedia.org/wiki/C_(programming_language)/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/c.png" alt="C" /></a>
                    <a href="https://en.wikipedia.org/wiki/Assembly_language" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/assembly.png" alt="Assembly Code" /></a>
                    <a href="https://react.dev/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/react.png" alt="React" /></a>
                    <a href="https://flask.palletsprojects.com/en/3.0.x/" target="_blank"rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/flask-logo.png" alt="Flask" /></a>
                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/git.png" alt="Git" /></a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/github.png" alt="GitHub" /></a>
                    <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/docker.png" alt="Docker" /></a>
                    <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/aws.png" alt="AWS" /></a>
                    <a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/sql.png" alt="SQL" /></a>
                    <a href="https://en.wikipedia.org/wiki/NoSQL" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/nosql.png" alt="NoSQL" /></a>
                    <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/postgresql.png" alt="PostgreSQL" /></a>
                    <a href="https://www.json.org/json-en.html" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/json.png" alt="JSON" /></a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/xml.png" alt="XML" /></a>
                    <a href="https://restfulapi.net/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/rest-api.png" alt="REST APIs" /></a>
                    <a href="https://nodejs.org/en" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/nodejs-logo.png" alt="NodeJS" /></a>
                    <a href="https://qunitjs.com/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/qunit.png" alt="QUnit" style={{ borderRadius: "14px" }} /></a>
                    <a href="https://junit.org/junit5/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/junit5.png" alt="JUnit" /></a>
                    <a href="https://docs.pytest.org/en/7.4.x/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/pytest.png" alt="Pytest" /></a>
                    <a href="https://www.linux.com/what-is-linux/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/linux.png" alt="Linux" /></a>
                    <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/arduino.png" alt="Arduino" /></a>
                    <a href="https://en.wikipedia.org/wiki/I%C2%B2C" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/i2c.png" alt="I2C" /></a>
                    <a href="https://threejs.org/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/threejs.png" alt="Three.JS" /></a>
                    <a href="https://processing.org/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/processing.png" alt="Processing" /></a>
                    <a href="https://p5js.org/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/p5.png" alt="P5.js" /></a>
                    <a href="https://cycling74.com/products/max" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/max-msp.png" alt="Max/MSP/Jitter" /></a>
                    <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/vscode.png" alt="Virtual Studio Code" /></a>
                    <a href="https://www.eclipse.org/ide/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/eclipse.png" alt="Eclipse" /></a>
                    <a href="https://www.bluej.org/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/bluej.png" alt="BlueJ" /></a>
                    <a href="https://www.postman.com/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/postman.png" alt="Postman" /></a>
                    <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/bootstrap.png" alt="Bootstrap" /></a>
                    <a href="https://mui.com/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/mui.png" alt="MUI" /></a>
                    <a href="https://wordpress.com/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/wordpress.png" alt="WordPress" /></a>
                    <a href="https://www.drupal.org/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/drupal.png" alt="Drupal" /></a>
                    <a href="https://jinja.palletsprojects.com/en/3.1.x/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/jinja.png" alt="Jinja" /></a>
                    <a href="https://www.sqlalchemy.org/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/sql-alchemy.png" alt="SQLAlchemy" /></a>
                    <a href="https://scratch.mit.edu/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/scratch.png" alt="Scratch" /></a>
                    <a href="https://www.adobe.com/creativecloud.html" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/adobe.png" alt="Adobe Creative Cloud" /></a>
                    <a href="https://workspace.google.com/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/google.png" alt="Google Workspace" /></a>
                    <a href="https://www.office.com/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/microsoft-office.png" alt="Microsoft Office" /></a>
                    <a href="https://www.apple.com/logic-pro/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/logic-pro.png" alt="Logic Pro" /></a>
                    <a href="https://www.apple.com/final-cut-pro/" target="_blank" rel="noreferrer"><img className="tech-stack-img" src="images/tech-stack/final-cut-pro.png" alt="Final Cut Pro" /></a>

                </Box>
                <Box className="section">
                    <Typography className="home-subtitle" sx={{ marginTop: "30px" }}>
                        Hear from people who've worked with Simon:
                    </Typography>
                    <Box className="testimonial" sx={{display:"flex", flexDirection:"row"}}>
                        <img className="testimonial-img testimonial-img-even" src="images/testimonials/Jazz-Cvitan.jpeg" alt="Jazz Cvitan" />
                        <Box sx={{padding:"25px"}}>
                            <Typography className="testimonial-text" sx={{fontWeight: "500" }}>
                                "Simon is a good person"
                            </Typography>
                            <Typography className="testimonial-text" sx={{ fontWeight: "300" }}>
                                Jazz CVitan, Director of Programming, Avita of Needham
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="testimonial" sx={{display:"flex", flexDirection:"row-reverse"}}>
                    <img className="testimonial-img testimonial-img-odd" src="images/testimonials/Travis-Peck.jpeg" alt="Travis Peck" />
                        <Box sx={{margin:"25px"}}>
                            <Typography className="testimonial-text" sx={{ fontWeight: "500" }}>
                                "Simon is a good person who is a good person. He is a good person and does a consistently good job at being a good person."
                            </Typography>
                            <Typography className="testimonial-text" sx={{ fontWeight: "300" }}>
                                Travis Peck, Software Engineer, Co.Lab
                            </Typography>
                        </Box>
                        
                    </Box>
                    <Box className="testimonial" sx={{display:"flex", flexDirection:"row"}}>
                        <img className="testimonial-img testimonial-img-even" src="images/testimonials/Umut-Dursun.jpg" alt="Umut Dursun" />
                        <Box sx={{padding:"25px"}}>
                            <Typography className="testimonial-text" sx={{fontWeight: "500" }}>
                                "Simon is a good person"
                            </Typography>
                            <Typography className="testimonial-text" sx={{fontWeight: "300" }}>
                                Umut Dursun, Executive Director, Harbor Camps
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="testimonial" sx={{display:"flex", flexDirection:"row-reverse"}}>
                    <img className="testimonial-img testimonial-img-odd" src="images/testimonials/Sarah-Stodder.jpeg" alt="Sarah Stodder" />
                        <Box sx={{margin:"25px"}}>
                            <Typography className="testimonial-text" sx={{ fontWeight: "500" }}>
                                "Simon is a good person who is a good person. He is a good person and does a consistently good job at being a good person."
                            </Typography>
                            <Typography className="testimonial-text" sx={{ fontWeight: "300" }}>
                                Sarah Stodder, Instructor, Coding Temple
                            </Typography>
                        </Box>
                        
                    </Box>
                </Box>
                <Box>
                    <button className="button">
                        Get In Touch
                    </button>
                </Box>
            </Box>
        </div>
    )
}
