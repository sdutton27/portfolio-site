import React, { Suspense} from 'react'
import { Typography } from '@mui/material'
import './about.css'
import Resume from '../../files/Simon-Dutton-Resume.pdf'
import DownloadIcon from '@mui/icons-material/Download';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../../components/Model/Model'; 

export default function About() {
  return (
    <div className="sidepage-container" style={{display: "flex", flexDirection: "column"}}>
        <Typography id="about-title" sx={{marginLeft: "30px", fontSize:"3rem", fontFamily:"Lora, sans-serif"}}>Meet Simon.</Typography>
        {/* <div id="bio-img-container" style={{position:"relative"}}> */}
          <div id="bio-pics-container" style={{
            //position:"absolute", left: "0",
            //right:"0", marginLeft: "auto", width:"100vw",
            //marginRight: "auto", 
            justifyContent:"center", alignSelf: "center", display: "flex", flexDirection: "row", margin:"20px 20px 40px 20px"}}>
              <img id="profile-pic" className="profile-pic" src="/images/simon-profile.png" alt="Simon in dress shirt" />
              <img id="boat-pic" className="profile-pic" src="/images/simon-boat.jpeg" alt="Simon driving boat"/>
          </div>
        {/* </div> */}
        <Typography id="bio" sx={{margin: "30px", fontSize:"1.2rem", fontFamily:"Work Sans, sans-serif"}}>
            <b id="bio-name" style={{fontSize:"1.5rem"}}>Simon Dutton</b> is a full-stack engineer with <u>7 
            years of experience</u>. His love of coding started in his very first college class, when
            he immediately knew based on his lifelong love of <u>creative problem solving</u> that software development was the field for him. Since then, he has enjoyed going <u>
            above and beyond</u> with every project he's worked on, earning <u>multiple awards and scholarships</u>, and graduating Magna Cum Laude with a <u>3.9 GPA</u> as a double major 
            in Computer Science and Music. 
            <br/>
            <br/>
            After graduation, in 2020, Simon faced unique family and personal challenges
            that delayed his entry into the field of software development. Gaining <u>resiliency</u> and 
            pushing his already <u>excellent work ethic</u> even further, Simon spent a couple of years 
            working outside of his ideal career path in the fields of education & elder care. There, he has established himself
            as an <u>empathetic listener</u>, an <u>exceptional communicator</u>, someone who remains <u>adaptable</u> and <u>calm under pressure</u>, 
            and a <u>proactive, strong leader</u> who prioritizes being a <u>team player</u>.
            <br/>
            <br/>
            Chasing his dreams of software engineering, Simon has spent his limited free time in the last year 
            working towards his goals by excelling in a <u>full-stack software development bootcamp</u>. Although 
            exhausted by continuing to work a full-time job in tandem with the course, Simon committed himself
            to completing every project to his <u>high level of standards</u> by pursuing every possible extra credit opportunity.
            <br/>
            <br/>
            Since finishing his bootcamp experience, Simon has been focused on learning new skills in the field of <u>front-end development</u>,
            while challenging himself using the frameworks he is already familiar with. He is committed to finding himself a <u>full-time software developer</u> position
            in the field of his dreams, knowing that his <u>perseverance</u> and <u>kind heart</u> will help him make a difference wherever he goes.
        </Typography>
    
        <a href={Resume} download="Simon Dutton Resume" target='_blank'>
        <button className="button" style={{padding:"15px", marginBottom:"0px"}}>Download Resume <DownloadIcon sx={{fontSize:"3rem", verticalAlign:"middle"}}/></button>
        </a>

        <Canvas
        //  camera={{ position: [2, 0, 12.25], fov: 15 }}
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            backgroundColor: 'rgba(100, 191, 253, .7)',
            width: '50vh',
            height: '50vh',
            borderRadius: "50%",
            alignSelf:"center",
            margin:"15px",
            boxShadow:"0px 0px 10px rgb(254, 203, 71)"
         }}
         
      >
         <ambientLight intensity={1.5} />
         <ambientLight intensity={0.3} />
         <directionalLight intensity={0.7} />
         <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 0]}/>
         </Suspense>
         {/* <OrbitControls /> */}
      </Canvas>
    </div>
  )
}
