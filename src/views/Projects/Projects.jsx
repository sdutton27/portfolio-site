import React, { useState } from 'react'
import './projects.css'
import { Troubleshoot } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

export default function Projects() {

  const [clicked, setClicked] = useState(false);
  const [openP1, setOpenP1] = useState(false);
  const [openP2, setOpenP2] = useState(false);
  const [openP3, setOpenP3] = useState(false);
  const [openP4, setOpenP4] = useState(false);

  // const handleClickOpenP1 = () => {
  //   setOpenP1(true);
  // };
  const handleCloseP1 = () => {
    setOpenP1(false);
    setClicked(false);
  };
  const handleCloseP2 = () => {
    setOpenP2(false);
    setClicked(false);
  };
  const handleCloseP3 = () => {
    setOpenP3(false);
    setClicked(false);
  };
  const handleCloseP4 = () => {
    setOpenP4(false);
    setClicked(false);
  };

  const handleClick = (e) => {
    setClicked(prevState => !prevState);
    if (e.target.name === "project-1") {
      setOpenP1(true);
    } else if (e.target.name === "project-2") {
      setOpenP2(true);
    } else if (e.target.name === "project-3") {
      setOpenP3(true);
    } else if (e.target.name === "project-4") {
      setOpenP4(true);
    }
  }
  return (
    <div className="container projects-container">
      <Typography id="projects-title">Projects</Typography>
      <div className={clicked ? "paused x1 inner" : "x1 inner"}>
        <img name="project-1" onClick={handleClick} className={clicked ? "paused y1 inner" : "y1 inner"} src="/images/projects/weather.png" width="100" height="100" style={{ borderRadius: "50%" }} />
        <Dialog
          onClose={handleCloseP1}
          aria-labelledby="customized-dialog-title-1"
          open={openP1}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} className="dialog-title" id="customized-dialog-title-1">
            Weather App
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseP1}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography className="dialog-body" gutterBottom>
              <i>The goal for this weekend project was to promote my design skills and attempt to replicate aspects of the Apple Weather App, while also putting my own spin on things.</i>
            </Typography>
            <div className="dialog-img-container" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <img className="project-img" src="/images/projects/weather-app-1.png" width="220" />
              <img className="project-img" src="/images/projects/weather-app-2.png" width="260" />
            </div>
            <Typography className="dialog-body" gutterBottom>
              <b>Aspects include:</b> current weather, 24 hour / 8 day forecast, recent search history, temperature graphs, corresponding images, background gifs based on current time / weather
              <br /><br />
              <b>Technologies:</b> JavaScript • HTML
              • CSS
              • WeatherAPI
            </Typography>
          </DialogContent>
          <DialogActions>
            <a href="https://weather-app-0zqf.onrender.com/" target="_blank" rel="noreferrer">Deployment</a>
            <a href="https://github.com/sdutton27/weather-app" target="_blank" rel="noreferrer">GitHub</a>
          </DialogActions>
        </Dialog>
      </div>
      <div className={clicked ? "paused x2 inner" : "x2 inner"}>
        <img name="project-2" onClick={handleClick} className={clicked ? "paused y2 inner" : "y2 inner"} src="/images/projects/toilet.png" x="300" y="30" width="100" height="100" />
        <Dialog
          onClose={handleCloseP2}
          aria-labelledby="customized-dialog-title-2"
          open={openP2}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} className="dialog-title" id="customized-dialog-title-2">
            GNB-Finder [in progress]
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseP2}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography className="dialog-body" gutterBottom>
              <i>The goal for this project was to create a website that allows a user to find/save the nearest bathrooms to a location, filterable by certain measures of accessibility (gender neutral, wheelchair accessible, changing tables).</i>
            </Typography>
            <div className="dialog-img-container" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <img className="project-img" src="/images/projects/gnb-finder-1.png" width="250" />
              <img className="project-img" src="/images/projects/gnb-finder-2.png" width="220" />
            </div>
            <Typography className="dialog-body" gutterBottom>
              <b>Aspects include:</b> Google-based autofill searching, recent history, favoriting restrooms, adjusting search results based on map placement/zoom, filtering by type of restroom, dropdown additional information about each restroom, links to Google Maps, Google Places image icon based on search, animated “bus” navigational bar, authentication animation, optional external Google login, light/dark mode toggle
              <br /><br />
              <b>Technologies:</b> <i>Front End:</i> React
              • JavaScript • HTML
              • CSS  <br /> <i>Back End:</i> Flask
              • Python
              • Google Maps API • Google Places API
            </Typography>
          </DialogContent>
          <DialogActions>
            <a href="https://github.com/sdutton27/bathroom-finder-frontend" target="_blank" rel="noreferrer">GitHub (Front End)</a>
            <a href="https://github.com/sdutton27/bathroom-finder-backend" target="_blank" rel="noreferrer">GitHub (Back End)</a>
          </DialogActions>
        </Dialog>
      </div>
      <div className={clicked ? "paused x3 inner" : "x3 inner"}>
        <img name="project-3" onClick={handleClick} className={clicked ? "paused y3 inner" : "y3 inner"} src="/images/projects/pikachu.png" x="300" y="30" width="100" height="100" />
        <Dialog
          onClose={handleCloseP3}
          aria-labelledby="customized-dialog-title-3"
          open={openP3}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} className="dialog-title" id="customized-dialog-title-3">
            PokéCatcher
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseP3}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography className="dialog-body" gutterBottom>
              <i>The goal for this week-long project was to create a social network which allows users to ‘catch’ Pokémon and battle each other.</i>
            </Typography>
            <div className="dialog-img-container" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <img className="project-img" src="/images/projects/pokecatcher-1.png" width="300" />
              <img className="project-img" src="/images/projects/pokecatcher-2.png" width="200" />
            </div>
            <Typography className="dialog-body" gutterBottom>
              <b>Aspects include:</b> profile customization/updating, the ability to ‘friend’/‘unfriend’ other users through friend requests, searching for and ‘catching’ Pokémon, customized Pokemon cards, battling friends and/or randomized CPUs to gain points, leaderboard of battle winners
              <br /><br />
              <b>Technologies:</b> Flask
              • Python •
              HTML •
              CSS •
              PokéAPI
            </Typography>
          </DialogContent>
          <DialogActions>
            <a href="https://pokemon-site-simon.onrender.com/" target="_blank" rel="noreferrer">Deployment</a>
            <a href="https://github.com/sdutton27/pokemon-site" target="_blank" rel="noreferrer">GitHub</a>
          </DialogActions>
        </Dialog>
      </div>
      <div className={clicked ? "paused x4 inner" : "x4 inner"}>
        <img name="project-4" onClick={handleClick} className={clicked ? "paused y4 inner" : "y4 inner"} src="/images/projects/pokeball.png" x="300" y="30" width="100" height="100" />
        <Dialog
          onClose={handleCloseP4}
          aria-labelledby="customized-dialog-title-4"
          open={openP4}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} className="dialog-title" id="customized-dialog-title-4">
            PokéSearch
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseP4}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography className="dialog-body" gutterBottom>
              <i>The goal for this daily project was to create a well- formatted searchable database of Pokémon. This site was the precursor to the PokéCatcher application.</i>
            </Typography>
            <div className="dialog-img-container" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <img className="project-img" src="/images/projects/pokesearch-1.png" width="180" />
              <img className="project-img" src="/images/projects/pokesearch-2.png" width="300" />
            </div>
            <Typography className="dialog-body" gutterBottom>
              <b>Aspects include:</b> searchability of Pokémon, customized Pokémon cards, formatted loading
              <br /><br />
              <b>Technologies:</b> React
              • JavaScript • HTML
              • CSS
              • PokéAPI
            </Typography>
          </DialogContent>
          <DialogActions>
            <a href="https://github.com/sdutton27/week7-pokedex" target="_blank" rel="noreferrer">GitHub</a>
           </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}
