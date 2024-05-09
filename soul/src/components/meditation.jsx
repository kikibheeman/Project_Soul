import React, { Component } from 'react';
import { Stack } from '@mui/system';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import './meditation.css';
import med1 from './med.gif';
import sky from './sky.png';
import sky2 from './sky2.png';
import sky3 from './sky3.png';
import medcard1 from './medcard1.png';
import medcard2 from './medcard2.png';
import medcard3 from './medcard3.png';
import medcard4 from './medcard4.png';
import listen from './listen.png';
import read from './read.png';
import product from './products.png';
import big from './big.png';
import medv from './medv.mp4';
import lotus from './lotus.png';
import chakras from './chakras.png';
import power from './power.png';
import { ClassNames } from '@emotion/react';
import SubApp from './sappbar';

class  Med extends Component {
    
    render() { 
        return (
            <>
            <SubApp
            
            />
            <div id="medbo">
            <br/>
            
            <div id="medgif">
                <img 
                width="650px" src={med1}></img>
            </div>
            <div>
                <h1 id="medhead">Meditation</h1>
            </div>
            <div id="sub">
            Reduce stress, anxiety, depression, <br/>
            and pain,and enhance peace, perception, <br/>
            self-concept, and well-being.
            </div>
            <div id="cir">

            <Stack spacing={25} direction="row">
                <img  width="150px" height="150px" id="c1" src={sky}></img>
                <img  width="150px" height="150px" id="c2"src={sky2}></img>
                <img  width="150px" height="150px" id="c3"src={sky3}></img>
            </Stack>
            </div>
            <div id="c1t">
            Get more <br/>goodnights
            </div>
            <div id="c2t">
            Every day <br/>happier
            </div>
            <div id="c3t">
            More joy<br/>and calmness
            </div>
            
            <div id="text1">
            Put your mind to bed, wake up refreshed,<br/>
            and make good days your new normal.
            </div>
            <div id="text2">
            Do it for yourself, and everyone you love. <br/>
            It only takes a few minutes to find some <br/>
            headspace.

            </div>
            <div id="text3">
            Catch your breath, relax your mind, <br/>
            and feel less stressed.

            </div>
            
            <div id="picstack">
            <Stack direction="row" spacing={4}>
            <Button><Card sx={{ minWidth: 200 }}>
            <CardActions>
            <img  width="210px" src={medcard1}></img>
            </CardActions>
            <CardContent>
            <b>BENEFITS OF MEDITATION</b><br/><br/>
            A Beginner’s Guide to <br/>Meditation
        
            </CardContent>
            </Card>
            </Button>

            <Button>
            <Card sx={{ minWidth: 200 }}>
            <CardActions>
            <img  width="210px" src={medcard2}></img>
            </CardActions>
            <CardContent>
            <b>GUIDED MEDITATION</b>
            <br/><br/>
            5-Minute Meditations <br/>You Can Do Anywhere
        
            </CardContent>
            </Card>
            </Button>


            <Button>
            <Card sx={{ minWidth: 200 }}>
            <CardActions>
            <img  width="200px" height="140px" src={medcard3}></img>
            </CardActions>
            <CardContent>
            <b>GUIDED MEDITATION</b><br/><br/>
             The Quest for Samadhi,<br/>
             search for stillness
            </CardContent>
            </Card>
            </Button>

            <Button>
            <Card sx={{ minWidth: 100 }}>
            <CardActions>
            <img  width="220px" height="140px" src={medcard4}></img>
            </CardActions>
            <CardContent>
            <b>GUIDED MEDITATION</b><br/><br/>
            Everything You Need to  <br/>KnowAbout Meditation
        
            </CardContent>
            </Card>
            </Button>
            </Stack>
            </div>

            <Stack  spacing={5} direction="row">
                <Stack>
            <div id="bigpic">
                <h2 >Reasons to Meditate</h2>
                <div id="bigtext">
            
            Building skills to manage your stress.<br/>
            Increasing self-awareness.<br/>
            Focusing on the present.<br/>
             Reducing negative emotions.
            </div>
                <img  width="500px"src={big}></img>
            </div>
            </Stack>
            <Stack direction="column" spacing={3} id="st">
            <div id="stmed">Meditate</div>
            <div id="stmed1">Meditate easily with our Meditation Resources</div>
            <Stack direction="column" spacing={7}>
            <Button><img  width="100px" src={listen} id="m1"></img></Button>
            <div id="m1t">Listen to few instrumental,nature sounds to boost or calm<br/> your mind and soul.</div>

            <Button><img  width="100px"src={read } id="m2"></img></Button>
            <div id="m2t">Read and improve your focus and sharpen <br/>your mind.</div>

            <Button><img  width="100px" src={product} id="m3"></img></Button>
            <div id="m3t">Here are few products which may help you <br/>to meditate.</div>

            </Stack>
            </Stack>
            </Stack>
            
            <Stack direction="row" spacing={10}>
                <div >
                    <h1 id="stop">STOP</h1>
                </div>
            <div id="vi">
           <video src={medv} width="300" height="300"   control autoPlay loop >
           </video>
           </div>

           </Stack>

            <div className='grp1'>
           <Stack id="j1"spacing={5} direction="row">
           <Button>
            <Card sx={{ maxWidth: 500 }}>
            <CardActions>
            <img  width="300px" height="160px" src={lotus}></img>
            </CardActions>
            <CardContent>
            <b> MEDITATION</b><br/>
            Hari Om meditation<br/><br/>
            Hari Om meditation using the <br/>
            science of chakras.
        
            </CardContent>
            </Card>
            </Button>

            
           <Button>
            <Card sx={{ maxWidth: 500 }}>
            <CardActions>
            <img  width="300px" height="160px" src={chakras}></img>
            </CardActions>
            <CardContent>
            <b>MEDITATION</b><br/>
            The Benefits of Meditation<br/><br/>
            Meditation has been used to attain <br/>
            enlightenment.
        
            </CardContent>
            </Card>
            </Button>

            
           <Button>
            <Card sx={{ maxWidth: 500 }}>
            <CardActions>
            <img  width="300px" height="160px" src={power}></img>
            </CardActions>
            <CardContent>
            <b>MEDITATION</b><br/>
            POWER OF MEDITATION<br/><br/>
            UNDERSTANDING THE POWER<br/>OF MEDITATION
            
        
            </CardContent>
            </Card>
            </Button>

            
           </Stack>
           </div>
           </div>
           
           
            
    
   </>
        );
    }
}
 
export default Med;