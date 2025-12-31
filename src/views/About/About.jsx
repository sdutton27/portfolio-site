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
            <b id="bio-name" style={{fontSize:"1.5rem"}}>Simon Dutton</b> is a full-stack engineer & systems programmer with <u>9 
            years of experience</u>. His love of coding started in his very first college class, when
            he fairly immediately knew based on his lifelong love of puzzles and <u>creative problem solving</u> that software development was the field for him. Since then, he has enjoyed going <u>
            above and beyond</u> with every project he's worked on so far, earning <u>multiple awards and scholarships</u>, and graduating Magna Cum Laude with a <u>3.9 GPA</u> as a double major 
            in Computer Science and Music. 
            <br/>
            <br/>
            After graduation, Simon faced unique family and personal challenges
            that delayed his entry into the field of software development. Gaining <u>resiliency</u> and 
            pushing his already <u>excellent work ethic</u> even further, Simon spent a couple of years 
            working in the fields of <u>education & medicine</u>. There, he has established himself
            as an <u>empathetic listener</u>, an <u>exceptional communicator</u>, someone who remains <u>adaptable</u> and <u>calm under pressure</u>, 
            and a <u>proactive, strong leader</u> who prioritizes being a <u>team player</u>.
            <br/>
            <br/>
            Chasing his dreams of software engineering, Simon spent his limited free time outside of his full-time jobs excelling in a <u>full-stack software development bootcamp</u> & then a <u>collaborative app development program</u>. Despite his busy schedule, Simon committed himself
            to completing every project to his <u>high level of standards</u> by pursuing every possible extra credit opportunity, <u>jumping into leadership roles</u>, and assisting his fellow classmates/teammates.
            <br/>
            <br/>
            Simon's commitment to excellence has brought him much success in his current role as a systems programmer at Brown Brothers Harriman. He has <u>quickly adapted to new technologies</u> and has been noted as a <u>trustworthy member of his team</u>, by being given opportunities to take <u>ownership of multiple applications</u>, 
            learn & then further <u>develop custom in-house frameworks</u>, create & launch new applications, and operate as the <u>lead developer on multiple projects</u>. In his lead developer role, he has both acted as a developer himself and <u>managed multiple senior-level developers</u> with 15+ years of development experience. 
            His role as a systems programmer has also given him insight beyond full-stack development into more of the business side of systems, acting as the <u>main communicator with the business owners</u> for the systems teams, and managing various on-prem levels of vendor applications.
        </Typography>
    
        <a href={Resume} download="Simon Dutton Resume" target='_blank'>
        <button className="button" style={{padding:"15px", marginBottom:"0px"}}>Download Resume <DownloadIcon sx={{fontSize:"3rem", verticalAlign:"middle"}}/></button>
        </a>

        <Canvas
        //  camera={{ position: [2, 0, 12.25], fov: 15 }}
          camera={{ position: [2, 0, 7], fov: 7 }}
         style={{
            backgroundColor: 'rgba(100, 191, 253, .7)',
            width: '50vh',
            height: '50vh',
            borderRadius: "50%",
            alignSelf:"center",
            margin:"15px 0px",
            boxShadow:"0px 0px 10px rgb(254, 203, 71)"
         }}
         
      >
         <ambientLight intensity={1.5} />
         <ambientLight intensity={0.3} />
         <directionalLight intensity={0.7} />
         <Suspense fallback={null}>
            <Model position={[0.025, -1.52, 0]}/>
            {/* <Model position={[0, -1.6, 0]}/> */}
         </Suspense>
         {/* <OrbitControls /> */}
      </Canvas>
    </div>
  )
}
