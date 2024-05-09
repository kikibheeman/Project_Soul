import { Stack } from '@mui/system';
import React, { Component } from 'react';
import food from './food.jpeg';
import runpic from './runpic.jpeg';
import './featured.css';
import rlg from './rlg.jpeg';
class Food1 extends Component {
    
    render() { 
        return (
        <>
        <Stack sx={{marginTop:'20px'}} direction="row" spacing={1}>
            <Stack sx={{marginTop:'20px'}} direction="column" spacing={1}>
                <div>
                    <img src={food} className='img1'/>
                </div>
                <div>
                    <img src={runpic} className='img2'/>
                </div>
                <div>
                    <img src={rlg} className='img3'/>
                </div>
                

            </Stack>
            <Stack sx={{marginTop:'20px'}} direction="column" spacing={1}>
                <div>
                    <h3 className='txt1'>5 meals which can be prepared<br></br> under 15 minutes</h3>
                    <div id="pic1text">The big and awesome post with easy on the go meals<br/> for busy moms and farm wives is here!</div>
                </div>
                <div>
                    <h3 className='txt2'>Life is a Marathon Not a Sprint!</h3>
                    <div id="pic2text">Marathon Training ; Base mileage. Build your weekly<br/> mileage over time, running three-to-five times<br/> per week.</div>
                </div>
                <div>
                    <h3 className='txt3'>Sleep getting disrupted due to<br></br> Restless Leg Syndrome?</h3>
                    <div id="pic3text">(RLS) is a condition that causes an uncontrollable urge to move <br/>the legs, usually because of an uncomfortable sensation.</div>
                </div>
                
            </Stack>
        </Stack>
        </>);
    }
}
 
export default Food1;