import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';




export default function SubApp() {
  return (
    <>
    <Box sx={{ flexGrow: 1    }}>
      <AppBar position="sticky" style={{backgroundColor:"pink"}}>
        <Toolbar>
          
          
          <Button ><Link to="/home" style={{color:"white" ,textDecoration:"none"}} >Home</Link></Button>
          <Button style={{color:"white" ,textDecoration:"none"}}>Nutrition</Button>
          <Button ><Link to="/yp" style={{color:"white" ,textDecoration:"none"}}>Yoga</Link></Button>
          <Button ><Link to="/medi" style={{color:"white" ,textDecoration:"none"}}>Meditation</Link></Button>
          <Button ><Link to="/pp" style={{color:"white" ,textDecoration:"none"}}>Podacast</Link></Button>
          <Button style={{color:"white"}}>Counselling</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}