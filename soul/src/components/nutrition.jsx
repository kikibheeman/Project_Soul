import React, { Component } from 'react';
import ButtonAppBar from './mappbar';
import SubApp from './sappbar';
import nut1 from './nut1.jpeg';
import { Box, Stack } from '@mui/system';
import { Card, Typography } from '@mui/material';
import './nutrition.css';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import carb from './carb.jpeg';
import pro from './pro.jpeg';
import fats from './fats.jpeg';
import min from './min.jpeg';
import salad from './salad.jpeg';
import broccoli from './broccoli.jpeg';
import fish from './fish.jpeg';
import spinach from './spinach.jpeg';
import core from './core.jpeg';
import calorie from './calorie.jpeg';
import water from './water.jpeg';
import sugar from './sugar.jpeg';

class Nutrition extends Component {
    
    render() { 
        return (
            <>
                <div id="thecover1">
                <ButtonAppBar/>
                <SubApp/>
                <div>
                    <img src={nut1} className='nutri'/>

                </div>
                <div>
                    <h1 className='nutrition'>Nutrition</h1>
                </div>
                <div>
                <Stack sx={{marginTop:'20px'}} direction="column" spacing={5}>
                    <Stack sx={{marginTop:'20px'}}  direction="row" spacing={5}>
                    <div className='nutext'>

                            <p>Nutrition is a critical part of health and development.<br></br> 
                            Better nutrition is related to improved infant,<br></br>
                            child and maternal health, stronger immune systems, 
                            <br></br> safer pregnancy and childbirth, lower risk of non-communicable diseases
                            <br></br> (such as diabetes and cardiovascular disease), and longevity.<br></br></p>
                            <br></br>
                            
                            <p>Healthy children learn better. People with adequate nutrition <br></br>
                            are more productive and can create opportunities to<br></br> 
                            gradually break the cycles of poverty and hunger.</p>
                            <br></br>
                            
                            <p>The different types of Nutritions are<br></br>
                            <br></br>
                            1.Carbohydrates<br></br>
                            <br></br>
                            2.Proteins<br></br>
                            <br></br>
                            3.Fats<br></br>
                            <br></br>
                            4.Minerals
                            </p>
                        
                    </div>
                    
                    </Stack>
                    {/* <div>
                        <h3 className='nux'>All You Need to Know about Nutrition!</h3>
                    </div> */}
                    <div className='grp'>
                    <Stack sx={{marginTop:'20px'}} direction="row" spacing={4}>
                        
                        <Card sx={{ maxWidth: 250 }} className='card1'>
                            <CardMedia
                                
                            />
                            <img src={carb} className='carbs'></img>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Carbohydrate
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Carbohydrates are also known as saccharides.
                                Food items like rice,noodles,bread are rich 
                                in carbs.
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card>

                        <Card sx={{ maxWidth: 250 }} className='card2'>
                            <CardMedia
                               
                            />
                            <img src={pro} className='carbs'></img>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Protein
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Proteins are a group of molecules that form
                                amino acids.Protein helps in muscle formation
                                and create enzymes and hormones.
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card>
                        
                        <Card sx={{ maxWidth: 250 }} className='card3'>
                            <CardMedia
                                
                            />
                            <img src={fats} className='carbs'></img>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Fats
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Fats are essential to support cell growth and
                                supply energy to the body. The body uses fat to
                                absorb vitamins.
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card>

                        <Card sx={{ maxWidth: 250 }} className='card4'>
                            <CardMedia
                               
                            />
                            <img src={min} className='carbs'></img>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Minerals
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Minerals are essential micro-nutrients that help
                                in building strong bones and maintaining a 
                                healthy heart rate.
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions> */}
                        </Card>
                        
                    </Stack>
                    </div>
                    
                </Stack>
                </div>
                <div id='featured'>
                    <h2  className='add'>FEATURED RECIPES</h2>
                </div>
                <div className='fc'>
                    
                    <Stack sx={{marginTop:'20px'}} direction="row" spacing={5}>
                    <Stack sx={{marginTop:'20px'}} direction="row" spacing={4}>
                        
                        <Card sx={{ maxWidth: 250 }} className='fc'>
                            <CardMedia
                            
                            />
                            <img src={salad} className='carbs'></img>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Healthy Salads
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                A salad to keep your calories down and your health up.
                                Eat Heathy Stay Healthy!
                                </Typography>
                            </CardContent>
                            </Card>


                            <Card sx={{ maxWidth: 250 }} className='fc1'>
                            <CardMedia/>
                            <img src={broccoli} className='carbs'></img>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Broccoli Brunch
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                A rich nutrient food that can be used for detoxication.
                                Broccoli is here to save your day.
                                </Typography>
                            </CardContent>
                        </Card>


                        <Card sx={{ maxWidth: 250 }} className='fc2'>
                            <CardMedia/>
                            <img src={fish} className='carbs'></img>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Fish Fiesta
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Need Omega 3 to prevent diseases like stroke and cancer?
                                We got you covered.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ maxWidth: 250 }} className='fc3'>
                            <CardMedia/>
                            <img src={spinach} className='carbs'></img>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Spinach
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Need protection from macular degeneration?
                                You heard us right it's our green leafy veggie!
                                </Typography>
                            </CardContent>
                        </Card>

                        
                        
                        </Stack>
                        </Stack>
                        
                        <div>
                            <h2  className='health'>FEATURED HEALTH TIPS</h2>
                        </div>
                        <div>
                        <Stack sx={{marginTop:'20px'}} direction="row" spacing={5}>
                    <Stack sx={{marginTop:'20px'}} direction="row" spacing={4}>
                        
                        <Card sx={{ maxWidth: 250 }} className='he1'>
                            <CardMedia
                            
                            />
                            <img src={core} className='carbs'></img>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Core Training
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Targetting the midsection of your body?
                                We got you covered with exercises for
                                your need.
                                </Typography>
                            </CardContent>
                            </Card>


                            <Card sx={{ maxWidth: 250 }} className='he2'>
                            <CardMedia/>
                            <img src={calorie} className='carbs'></img>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Calorie Tracking
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Worried how much calories you consume for each 
                                meal? Here's a list of food with their calories.
                                </Typography>
                            </CardContent>
                        </Card>


                        <Card sx={{ maxWidth: 250 }} className='he3'>
                            <CardMedia/>
                            <img src={water} className='carbs'></img>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Get Hydrated!
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Drink your way for better Health!
                                Essential water hacks to keep you
                                hydrated.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ maxWidth: 250 }} className='he4'>
                            <CardMedia/>
                            <img src={sugar} className='carbs'></img>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Limit Sugar Intake!
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Eat less Sugar,you are sweet
                                enough already!Check out the
                                effects of Sugar! 
                                
                                </Typography>
                            </CardContent>
                        </Card>

                        
                        
                        </Stack>
                        </Stack>
                        </div>
                        
                </div>
                </div>
                        

            </>
        );
    }
}
 
export default Nutrition;