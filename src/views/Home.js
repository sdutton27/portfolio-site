import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TestPage() {
    return (
        <div>
            <Box component="main" sx={{ p: 3 }}>
                {/* <Toolbar /> */}
                <Typography sx={{textAlign:"center", fontSize:"3.8rem", fontFamily:"Lora, sans-serif"}}>
                    Problem Solving. Creativity. Entrepreneurship. Software Developing.
                </Typography>
                <Typography sx={{padding:"10px", textAlign:"center", fontSize:"1.4rem", fontFamily:"Work Sans, sans-serif"}}>
                    Meet Simon Dutton, a full-stack developer with a strong work ethic and a kind heart.
                </Typography>
                <button style={{margin: "20px 0px", width:"100%", backgroundColor:"#000", color:"#fff", border:"0px", padding: "25px", fontSize:"1.5rem", fontFamily:"Work Sans, sans-serif"}}>View Resumé</button>
                <Typography sx={{marginTop:"30px",textAlign:"center", fontSize:"1.4rem", fontFamily:"Lora, sans-serif"}}>
                    Educated by the brilliant minds at
                </Typography>
                <Box sx={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                    <img src="images/coding-temple-logo.png" alt="Coding Temple" style={{padding:"15px", borderRadius:"50%", height:"150px", width: "150px"}}/>
                    <img src="images/ul-logo.png" alt="University of Limerick" style={{padding:"15px", height:"150px"}}/>
                    <img src="images/mhc-logo.png" alt="Mount Holyoke College" style={{padding:"15px", borderRadius:"50%", height:"150px", width: "150px"}}/>
                </Box>
            </Box>
        </div>
    )
}
