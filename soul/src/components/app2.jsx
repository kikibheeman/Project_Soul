import React from 'react';
import homepage1 from './homepage1.jpeg';
import { Button } from '@mui/material';
import './app2.css';
import Featured from './featured';
import Explore from './explore';
import ButtonAppBar from './mappbar';
import MenuAppBar from './sappbar';
import { Link } from 'react-router-dom';


import SubApp from './sappbar';


function App2() {
  return (
    <>
    <ButtonAppBar />
    <MenuAppBar/>
    <div id="thecover">
    <div className="App">
      <header className="App-header">
        <div className='rect'>
          <h2 className='tt'>Get Started</h2>
        </div>
        <div>
          <p className='des1'>Project Soul is here <br></br>to help you with your<br></br> mental health wellbeing!</p>
          <div className='b1'>
          <Button></Button>
          </div>
        </div>
        <img src={homepage1} className='homepic1'/>
        
       
      </header>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Featured></Featured>
    <br/>
    <br/>
    <br/>
    <Explore></Explore>
    </div>
    </>
  );
}

export default App2;