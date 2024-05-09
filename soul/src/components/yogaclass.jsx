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
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RecipeReviewCard3 from './cards';
import RecipeReviewCard4 from './cards1';
import RecipeReviewCard5 from './cards2';
import ycbegin from './ycbegin.png';
import "./yogaclass.css";
import ReactPlayer from 'react-player';
import mat from './mat.png';
import maticon from './maticon.ico';
import SubApp from './sappbar';
class Yogac extends Component {
    
    render() { 
        return (
           
            <>

            <SubApp/>
            <div>
               <img src={maticon} className='icon'></img>
            </div>

           
           <div className='top'>
             Yoga Classes
           </div>
           <div style={{ 
            marginLeft: '170PX', 
            marginTop: '70px', 
            width: '30%' 
        }}>
            <Box color="rgb(45, 179, 198)"
               
                font-size="55px"
                p={1}>
                FEATURED CLASSES
                <hr className='line'/>
            </Box>
        </div>
            <div className='V'>
            <Stack spacing={4} direction="column">   
            <Stack spacing={4} direction="row">
            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                control url='https://www.youtube.com/watch?v=iWUaZfR-gWU'>
                </ReactPlayer>
            <CardContent>
                <AccessTimeIcon id="clock"/>
                <div id="lev"> LEVEL</div> 
          
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=Vr3h5X9kmUo'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
                <div id="lev"> LEVEL</div> 
          
            </CardContent>
            </CardActionArea>
            <CardActions >
              
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=b1H3xO3x_Js'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
          
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=QiebZSlTw_U'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>
            </Stack>
            <div style={{ 
            
            width: '30%' 
        }}>
            <Box color="rgb(45, 179, 198)"
               
                font-size="55px"
                paddingTop={10}
                flex={1}
                >
                VINYASA FLOW
                <hr className='line'/>
            </Box>
            </div>

            <Stack spacing={4} direction="row">
            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=1jgHI4HKDyg&t=502s'>
                </ReactPlayer>
            <CardContent>
          
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=7ciS93shMNQ'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=Eb5dsG7L7lo&t=913s'>
                </ReactPlayer>
            <CardContent>
          
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=pzSLOAsd0uU'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
          
            </CardContent>
            </CardActionArea>
            <CardActions>
           
            </CardActions>
            </Card>
            </Stack>

           
            <div className="cirhead"
            
            flex={1}>
                <h2>HOW MUCH TIME DO YOU HAVE?</h2>
            </div>
            <div PaddingLeft={3}>
                <Stack spacing={3} direction="row">
                    <div id="circle"></div>
                    <div id="circle"></div>
                    <div id="circle"></div>
                    <div id="circle"></div>
                </Stack>
            </div>
            <div id="w1">45 Min</div>
            <div id="w2">30 Min</div>
            <div id="w3">20 Min</div>
            <div id="w4">15 Min</div>
           
            <div>
            <Box color="rgb(45, 179, 198)"
                
                font-size="55px"
                paddingTop={10}
                flex={1}>
                HATHA YOGA
                
                <hr className='line'/>
            </Box>
            </div>

            <Stack spacing={4} direction="row">
            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=bkbtXQrUl_w'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
          
            </CardContent>
            </CardActionArea>
            <CardActions>
           
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=TWkSKz7mdhY'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=uH2N2gmjhl0'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=Zcn2vT73jsI'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>
            </Stack>

            <div style={{ 
            
            width: '30%' 
        }}>
            <Box color="rgb(45, 179, 198)"
                
                font-size="55px"
                paddingTop={10}
                flex={1}>
                YIN YOGA
                <hr className='line'/>
            </Box>
            </div>

            <Stack spacing={4} direction="row">
            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=ICanFGTsW8c'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=BsKUBO_TPRk&t=1545s'>
                </ReactPlayer>
            <CardContent>
          
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
            </CardContent>
            </CardActionArea>
            <CardActions>
          
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=SAQHs10bJUw'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
          
            </CardContent>
            </CardActionArea>
            <CardActions>
           
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=sVqH6qPDdh0'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
          
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>
            </Stack>

            <div style={{ 
            
            width: '30%' 
        }}>
            <Box color="rgb(45, 179, 198)"
               
                font-size="55px"
                paddingTop={10}
                flex={1}>
                PRENATAL AND POSTPARTUM
                <hr className='line'/>
            </Box>
            </div>


            <Stack spacing={4} direction="row">
            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=jfitu-eL-to'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
          
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=TpECt8HzQC8'>
                </ReactPlayer>
            <CardContent>
          
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=UMGkQ9FmbGg'>
                </ReactPlayer>
            <CardContent>
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
          
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>

            <Card sx={{ maxWidth:265 }}>
            <CardActionArea>
            <CardMedia/>
                <ReactPlayer
                width="265px"
                height="192px"
                controls url='https://www.youtube.com/watch?v=N0AB4YrgQ-8'>
                </ReactPlayer>
            <CardContent>
          
            <AccessTimeIcon id="clock"/>
            <div id="lev"> LEVEL</div> 
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            </CardActions>
            </Card>
            </Stack>

            <div style={{ 
            
            width: '30%' 
        }}>
            <div>
            <h2>WHERE ARE YOU?</h2>
                <hr className='line'/>
                </div>
            
            </div>
            </Stack>
            
           <div className="crd2">
            <Stack spacing={5} direction="row">
            <RecipeReviewCard3></RecipeReviewCard3>
            <RecipeReviewCard4></RecipeReviewCard4>
            <RecipeReviewCard5></RecipeReviewCard5>
            </Stack>
           </div>
            </div>
            
            
           
            
            </>
        );
    }
}
 
export default Yogac ;