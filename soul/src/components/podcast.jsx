import React, { Component } from 'react';
import { Stack } from '@mui/system';
import ReactAudioPlayer from 'react-audio-player';
import { Box } from '@mui/system';
import podp1 from './podp1.png';
import podp2 from './podp2.png';
import podp3 from './podp3.png';
import podcast1 from './podcast1.png';
import podcast2 from './podcast2.png';
import podcast3 from './podcast3.png';
import podcast4 from './podcast4.png';
import podcast5 from './podcast5.png';
import podcast6 from './podcast6.png';
import podcast7 from './podcast7.png';
import podcast8 from './podcast8.png';
import podcast9 from './podcast9.png';
import podcast10 from './podcast10.png';
import podcast11 from './podcast11.png';
import podcast12 from './podcast12.png';
import podcast13 from './podcast13.png';
import podcast14 from './podcast14.png';
import './podcast.css';
import { Button } from '@mui/material';
import MediaControlCard from './audio';
import SubApp from './sappbar';
class Pod extends Component {
    
    render() { 
        return (
            <>
             <SubApp/>
             <br/>
            <div id="podwhole">
            <h1 id="podtext">
            Listen to your<br/>Mindful podcasts <br/>here!</h1>
                
               <div id="podpic1">
               <img width="200" height={270}  src={podp1} id="topi1"></img>
               </div>
               <div id="podpic2">
               <img  width="250" height={280} src={podp2} id="topi2"></img>
               </div>
               <div id="podpic3">
               <img  width="150" height={150} src={podp3} id="topi3"></img>
               </div>
            </div>
            < Stack direction="column" spacing={5} id="thepod">
            <Box color="rgb(45, 179, 198)"
                bgcolor="whitesmoke" 
                font-size="55px"
                p={1}>
                FEATURED AUDIO
                <hr className='linep'/>
            </Box>
                <Stack direction="row" spacing={7} >
                <Button onClick={<ReactAudioPlayer src="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL3RpbnBvZGNhc3QvZmVlZC54bWw?sa=X&ved=0CB4Q27cFahcKEwjgwZ3F2d_7AhUAAAAAHQAAAAAQAQ" autoPlay controls/>}><img src={podcast1} id="podc1"></img></Button>
                <Button><img src={podcast2} id="podc1"></img></Button>
                <Button><img src={podcast3} id="podc1"></img></Button>
                <Button><img src={podcast4} id="podc1"></img></Button>
                </Stack>
                <Stack direction="row" spacing={7} >
                <Button><img src={podcast5} id="podc1"></img></Button>
                <Button><img src={podcast7} id="podc1"></img></Button>
                <Button><img src={podcast8} id="podc1"></img></Button>
                <Button><img src={podcast9} id="podc1"></img></Button>
                </Stack>
                <Box color="rgb(45, 179, 198)"
                
                font-size="55px"
                p={1}>
                MENTAL HEALTH
                <hr className='linep'/>
            </Box>
                <Stack direction="row" spacing={7} >
                <Button><img src={podcast11} id="podc1"></img></Button>
                <Button><img src={podcast12} id="podc1"></img></Button>
                <Button><img src={podcast13} id="podc1"></img></Button>
                <Button><img src={podcast6} id="podc1"></img></Button>
                </Stack>
                <Box color="rgb(45, 179, 198)"
                
                font-size="55px"
                p={1}>
                POSITIVE TALK
                <hr className='linep'/>
            </Box>
                <Stack direction="row" spacing={7} >
                <Button><img src={podcast10} id="podc1"></img></Button>
                <Button><img src={podcast14}  width="200" height={150} id="podc1" ></img></Button>
                <Button><img src={podcast3} id="podc1"></img></Button>
                <Button><img src={podcast4} id="podc1"></img></Button>
                </Stack>

                
                
                
                

            </Stack>


            
            </>

        );
    }
}
 
export default Pod;
