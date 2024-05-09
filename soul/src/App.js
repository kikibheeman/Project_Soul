import React from 'react';
import { Card, CardActionArea, CardMedia } from '@mui/material';
import App2 from './components/app2';
import Yogac from './components/yogaclass';
import Yogap from './components/yogapage';
import Pod from './components/podcast';
import Med from './components/meditation';
import Nutrition from './components/nutrition';
import Explore from './components/explore';

import Addmember from './components/addmember';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import EditGame from './components/edittt';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/signup';
import BasicList from './components/list';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Login/>}></Route> 
      <Route path="/home" element={<App2/>}></Route> 
      <Route path="/ex" element={<Explore/>}></Route>
      <Route path="/pp" element={<Pod/>}></Route>
      <Route path="/medi" element={<Med/>}></Route>
      {/* <Route path="/nutr" element={<Nutrition/>}></Route> */}
      <Route path="/yp" element={<Yogap/>}></Route>
      <Route path="/yc" element={<Yogac/>}></Route>
      <Route path="/admem" element={<Addmember/>}></Route> 
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/update/:id" element={<EditGame/>}></Route> 
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/addmember" element={<Addmember/>}></Route>
      <Route path="/list" element={<BasicList/>}></Route>
      
      
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
