import React, { Component } from 'react';
import { Stack } from '@mui/system';
import { Card } from '@mui/material';
import Food1 from './stack';
import './featured.css';
class Featured extends Component {
    
    render() { 
        return (
            <>
            <div id='featured'>
                <h2  className='featured'>FEATURED</h2>
                
            </div>
            <div className='ins'>
            <Stack sx={{marginTop:'20px'}} direction="row" spacing={2}>
                <Stack sx={{marginTop:'20px'}} direction="row" spacing={2}>
                    <div>
                        <img src='https://media.istockphoto.com/id/1244793784/vector/sleepless-man-and-woman-suffers-from-insomnia.jpg?s=612x612&w=0&k=20&c=EpTC_P3QapNH0OLpDHCXRH72D-Yn1khMnUghVQHAqrc=' className='inso' />
                        <h3 className='instext'>Everything you need to know <br></br>about Insomnia</h3>
                        <div className='instxt1'>A common sleep disorder that can make it hard to fall asleep,<br/> hard to stay asleep,or cause you to wake up too early <br/> and notbe able to get back to sleep. You may still <br/> feel tired when you wake up.</div>
                    </div>
                </Stack>
               
            
                <Stack sx={{marginTop:'20px'}} direction="row" spacing={2}>
                        
                        <Food1 />
                </Stack>
            </Stack>
            </div>
            </>

        );
    }
}
 
export default Featured;