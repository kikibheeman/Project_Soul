import { Card,Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import Button from '@mui/material';
import React, { Component } from 'react';
import './explore.css';
import meditation from './meditation.jpeg';
import salad from './salad.jpeg';
import yoga from './yoga.jpeg';
import podcast from './podcast.jpeg'
import conversation from './conversation.jpeg';
import balanceddiet from './balanceddiet.png';

class Explore extends Component {
    
    render() { 
        return (
            <>
            <div>
                <h2 className='exp'>EXPLORE</h2>
            </div>
            <Stack sx={{marginTop:'20px'}} direction="row" spacing={3} flex={4}>
                <div className='nut'>
                <img src={balanceddiet} />
                </div>
                <div className='yoga'>
                <Link to="/yp" ><img src={yoga}  height={130}/></Link>    
                </div>
                <div className='med'>
                <Link to="/medi" ><img src={meditation} height={130} /></Link>    
                </div>
                <div className='pod'>
                <Link to="/pp" ><img src={podcast} height={130} /></Link>    
                </div>
                <div className='cns'>
                <img src={conversation}  height={130}  />
                </div>
                        
            </Stack>

                    <Stack sx={{marginTop:'27px'}} direction="row" spacing={1}>
                        <h1 className='t'>Nutrition</h1>
                        <h1 className='t1'><Link to="/yp" style={{color:"black" ,textDecoration:"none"}}>Yoga</Link></h1>
                        <h1 className='t1'><Link to="/medi" style={{color:"black" ,textDecoration:"none"}}>Meditation</Link></h1>
                        <h1 className='t1'><Link to="/pp" style={{color:"black" ,textDecoration:"none"}}>Podacast</Link></h1>
                        <h1 className='t1'style={{color:"black"}}>Counselling</h1>
                    </Stack>

            </>
        );
    }
}
 
export default Explore;