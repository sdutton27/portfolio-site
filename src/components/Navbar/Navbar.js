import React from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import './navbar.css';
// import logo from '.../img/logo.png'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Image } from '@mui/icons-material';
import { Typography } from '@mui/material';

import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Navbar() {
  //const { window } = props;
  //const {window} = 
  // const [mobileOpen, setMobileOpen] = useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen((prevState) => !prevState);
  // };

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       MUI
  //     </Typography>
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <ListItem key={item} disablePadding>
  //           <ListItemButton sx={{ textAlign: 'center' }}>
  //             <ListItemText primary={item} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  //const container = window !== undefined ? () => window().document.body : undefined;

  // return (
  //   <Box sx={{ display: 'flex' }}>
  //     <CssBaseline />
  //     <AppBar component="nav">
  //       <Toolbar>
  //         <IconButton
  //           color="inherit"
  //           aria-label="open drawer"
  //           edge="start"
  //           onClick={handleDrawerToggle}
  //           sx={{ mr: 2, display: { sm: 'none' } }}
  //         >
  //           <MenuIcon />
  //         </IconButton>
  //         <Typography
  //           variant="h6"
  //           component="div"
  //           sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
  //         >
  //           MUI
  //         </Typography>
  //         <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
  //           {navItems.map((item) => (
  //             <Button key={item} sx={{ color: '#fff' }}>
  //               {item}
  //             </Button>
  //           ))}
  //         </Box>
  //       </Toolbar>
  //     </AppBar>
  //     <nav>
  //       <Drawer
  //         //container={container}
  //         //container = {false}
  //         variant="temporary"
  //         open={mobileOpen}
  //         onClose={handleDrawerToggle}
  //         ModalProps={{
  //           keepMounted: true, // Better open performance on mobile.
  //         }}
  //         sx={{
  //           display: { xs: 'block', sm: 'none' },
  //           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
  //         }}
  //       >
  //         {drawer}
  //       </Drawer>
  //     </nav>
  //   </Box>
  // );
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };
  const handleClick = () => {
    setMenuOpen(false);
  }

  return (
    <React.Fragment>
      {/* <PopupState variant="popover" popupId="popup-menu"> */}
      {/* {(popupState) => ( */}
      {/* <Image /> */}
      <Box id={"navbar"} className={(menuOpen ? "open" : "closed")} sx={{ width: "100%" }}>
        {/* <Toolbar/> */}
        <div id="navbar-top">
          <img src='/images/logo.png' alt="logo" style={{ height: "70px", width: "70px", margin: "5px 0px 5px 5px" }} />

          <Typography className="title" sx={{ padding: "10px", fontFamily: "'Work Sans', sans-serif", fontWeight: "600" }}>Simon Dutton</Typography>
          <Box id="hamburger-container" style={{ justifySelf: "flex-end" }}>
            <IconButton
              // color="inherit"
              // aria-label="open drawer"
              // edge="start"
              onClick={handleMenuToggle}
              // {...bindTrigger(popupState)}
              sx={{ padding: "10px" }}
            >
              <MenuIcon sx={{ right: 0, padding: "10px" }} />
            </IconButton>
          </Box>
        </div>
        <div id="navbar-open" className={(menuOpen ? "open" : "closed")}>
          <Link to="/" style={{textDecoration: "none"}} onClick={handleClick}>
          <Typography className="menu-item" sx={{paddingTop: "30px"}}>
            Home
          </Typography>
          </Link>
          <Link to="/about" style={{textDecoration: "none"}} onClick={handleClick}>
          <Typography className="menu-item">
            About
          </Typography>
          </Link>
          <Link to="/projects" style={{textDecoration: "none"}} onClick={handleClick}>
          <Typography className="menu-item">
            Projects
          </Typography>
          </Link>
          <Link to="/color" style={{textDecoration: "none"}} onClick={handleClick}>
          <Typography className="menu-item" sx={{
                                                  backgroundImage: `linear-gradient(108deg, rgba(203,11,44,1) 0%, rgba(255,149,4,1) 11%, rgba(204,249,51,1) 18%, rgba(29,253,111,1) 19%, rgba(42,208,230,1) 20%, rgba(39,93,193,1) 22%, rgba(168,5,238,1) 24%)`,
                                                  backgroundSize: "100%",
                                                  backgroundClip: "text",
                                                  WebkitBackgroundClip: "text",
                                                  WebkitTextFillColor: "transparent"}}>
            C o l o r
          </Typography>
          </Link>
          <Link to="/contact" style={{alignSelf:"center", width: "90%"}} onClick={handleClick}>
          <button className="button">
          Contact
          </button>
          </Link>
        </div>
      </Box>

      {/* <Menu {...bindMenu(popupState)}
              sx={{transformOrigin:"0px 0px"}}
            >
              <MenuItem onClick={popupState.close}>Profile</MenuItem>
              <MenuItem onClick={popupState.close}>My account</MenuItem>
              <MenuItem onClick={popupState.close}>Logout</MenuItem>
            </Menu> */}
      {/* )} */}
      {/* </PopupState> */}
    </React.Fragment>
  );
}
