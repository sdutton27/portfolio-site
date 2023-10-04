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
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import './navbar.css'
// import logo from '.../img/logo.png'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Image } from '@mui/icons-material';
import { Typography } from '@mui/material';

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

    return (
      <React.Fragment>
      {/* <PopupState variant="popover" popupId="popup-menu"> */}
      {/* {(popupState) => ( */}
            {/* <Image /> */}
            <Box id={"navbar"} className={(menuOpen ? "open" : "closed")} sx={{width:"100%", backgroundColor:"red"}}>
            {/* <Toolbar/> */}
            <img src='/images/logo.png' alt="logo" style={{height:"70px", width:"70px", marginLeft: "10px"}} />
            
            <Typography className="title" sx={{ padding:"10px", fontFamily: "'Work Sans', sans-serif", fontWeight:"600"}}>Simon Dutton</Typography>
            <IconButton
              // color="inherit"
              // aria-label="open drawer"
              // edge="start"
              onClick={handleMenuToggle}
              // {...bindTrigger(popupState)}
              sx={{ right:0, padding:"10px"}}
            >
              <MenuIcon />
            </IconButton>
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
