import React, { Component } from 'react';
import { MuiStyledOptions } from '@mui/system';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import yogabac from './yogabac.png';
import "./yogapage.css";
import yogastack1 from './yogastack1.png';
import yogastack2 from './yogastack2.png';
import yogastack3 from './yogastack3.png';
import colpic1 from './colpic1.png';
import colpic3 from './colpic3.png';
import colpic4 from './colpic4.png';
import colpic6 from './colpic6.png';
import ReactPlayer from 'react-player';
import RecipeReviewCard from './cards';
import RecipeReviewCard1 from './cards1';
import RecipeReviewCard2 from './cards2';
import backpain from './backpain.png';
import flex from './flex.png';
import strength from './strength.png';
import weightloss from './weightloss.png';
import cramps from './cramps.png';
import dfg from './dfg.png';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import SubApp from './sappbar';
import ButtonAppBar from './mappbar';




class Yogap extends Component {
    
    
    render() { 
        return (
            <>
            
            <SubApp/>
        
           <div id="head">
            <h1>When you feel good,</h1>
            <h1>it shows.</h1>
            </div>
            <div>
            <p id="foot">
                Replenish your soul and feel good<br/>from the inside out.
            </p>
           </div>
           <div>
           <Button id="button1" variant="contained" ><Link to="/yc" style={{color:"black" ,textDecoration:"none"}}>Get Started</Link></Button>
           </div>
            <div className='yogapback'>
               <CardMedia component="img" image={yogabac}/>
           </div>
           <div id="whole">
            <Stack  spacing={2} direction="row" >
                <Stack id="one">
                <CardMedia component="img" image={yogastack1}/>
                </Stack>

                <Stack spacing={2} direction="column" id="sss">
                  <CardMedia id="two" component="img" image={yogastack2}/>
                  <CardMedia id="three" component="img" image={yogastack3}/>  
                </Stack>

                <Stack id="text">
                    <CardContent>Yoga is a powerful tool to hone<br/>
                         the mind and body.<br/>
                         Dive into classes to increase<br/> flexibility, <br/>
                         release fascia, build overall <br/> strength,
                         and sharpen your <br/>
                         focus so you can live a<br/>
                         balanced life</CardContent>
                </Stack>

            </Stack>
           </div>
           <div id="cardti">
            <h2>Start your Journey Today!</h2>
           </div>
           <div className="crd">
            <Stack spacing={5} direction="row">
            <Button><RecipeReviewCard></RecipeReviewCard></Button>
            <Button><RecipeReviewCard1></RecipeReviewCard1></Button>
            <Button><RecipeReviewCard2></RecipeReviewCard2></Button>
            </Stack>
           </div>
           

           <div id="collage">
            <Stack  id="colstack" direction="row" spacing={2}>
                <Stack direction="column" spacing={3}>
            <img  width="350"  height={213} id="col1" src={colpic6}></img>
            <img  width="350" height={250} id="col3" src={colpic3}></img>
            </Stack>
                <Stack direction="column" spacing={3}>
            <img  width="350" id="col4" src={colpic4}></img>
            <img  width="350"  height={230} id="col6" src={colpic1}></img>
            </Stack>
            <Stack>
                <h1 id="coltext">Yoga<br/> is for <br/> Everyone</h1>
            </Stack>
            </Stack>
            </div>
            <div id="se">
            <h2>What are you looking for?</h2>
            </div>
            <div>
                <Stack id="pur" spacing={3} direction="column">
                <Stack spacing={6} direction="row">
                    <Button>
                <Card sx={{ maxWidth: 350 }}>
            <CardActions>
            <img  width="350px" height="200px" src={backpain}></img>
            </CardActions>
            <CardContent id="look">
            YOGA FOR BACKPAIN!
            </CardContent>
            </Card>
            </Button>

            <Button>
         
                <Card sx={{ maxWidth: 400 }}>
            <CardActions>
            <img  width="330px" height="200px" src={flex}></img>
            </CardActions>
            <CardContent id="look">
            YOGA FOR FLEXIBILITY!
            </CardContent>
            </Card>
            </Button>

            <Button>

                <Card sx={{ maxWidth: 400 }}>
            <CardActions>
            <img  width="330px" height="200px" src={strength}></img>
            </CardActions>
            <CardContent id="look">
            YOGA FOR STRENGTH!
            </CardContent>
            </Card>
            </Button>

            </Stack>
            <Stack spacing={6} direction="row">
                <Button>
            <Card sx={{ maxWidth: 350 }}>
            <CardActions>
            <img  width="350px" height="200px" src={weightloss}></img>
            </CardActions>
            <CardContent id="look">
                YOGA FOR WEIGHTLOSS!
            </CardContent>
            </Card>
            </Button>
            <Button>
            <Card sx={{ maxWidth: 350 }}>
            <CardActions>
            <img  width="330px" height="210px" src={cramps}></img>
            </CardActions>
            <CardContent id="look">
            YOGA FOR MENUSTRAL CRAMPS!
            </CardContent>
            </Card>
            </Button>
            <Button>
            <Card sx={{ maxWidth: 350 }}>
            <CardActions>
            <img  width="350px" height="193px" src={dfg}></img>
            </CardActions>
            <CardContent id="look">
                EVERYDAY YOGA!
            </CardContent>
            </Card>
            </Button>
            </Stack>
            
         
    </Stack>
    
            </div>
           
          
           
           
</>
        );
    }
}
 
export default Yogap ;