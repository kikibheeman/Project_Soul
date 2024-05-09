import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState} from 'react'
import { SignUp } from './maps'
import { Card } from '@mui/material'
import { Stack } from '@mui/system'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.css';
import yoga1 from './yoga1.png';

export default function Register() {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    uname: '',
    email: '',
    pwd: ''
   
  })


  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await SignUp(signup.uname, signup.pwd, signup.email);
    console.log(res);
    if (res.data === "Signup Successful") {
      toast.success('Signup Successful !', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => {
        navigate('/addmember');
      }, 1500);

    } else if (res.data === "Username Already Exists") {
      toast.error('Username Already Exists !', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      console.log(res.data);
      // toast.error('Invalid Username', {
      //   position: "bottom-right",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      // });
    }

  }

  return (
    <>
    <div id='thebody'>
       
        <Card className='maincard1' elevation={12}>
          <div id='cardback'>
                

                <Stack direction="row" spacing={1}>
                <Stack>
                <img  className="signuppic" src={yoga1} id="si"/>
                </Stack>
                 <Stack>
                  
                 <div className='signuphead'>Signup</div> 
                  
                 <div className='rectf1'>
                  
          
                <form onSubmit={handleSubmit} >
                  <table className='tablecon'>
                  <tr>
                        <td><b><lable  className="tablehead" for="name">Username</lable></b></td>
                    </tr>

                  <tr>
                    <input  className="tableinput" type="text" placeholder="Username" id="uname"  autoComplete='off' value={signup.uname} onChange={handleChange} required/>
                    </tr>

                    <tr>
                        <td><b><lable className="tablehead" for="email">Mail</lable></b></td>
                    </tr>
                  <tr>
                    <input  className="tableinput" type="email" placeholder="Email" id="email" autoComplete='off' value={signup.email} onChange={handleChange} required/>
                    </tr>

                    <tr>
                        <td><b><lable className="tablehead" for="pass">Password</lable></b></td>
                    </tr>
                  <tr>
                    <input className="tableinput" autoComplete="off" type="password" placeholder="Password" id="pwd" value={signup.pwd} onChange={handleChange} required />
                    </tr>
                  
                    <button   type="submit" className="sigb" >Signup</button>
                  </table>
                  </form>
                
                </div>

                {/* <button  className="sigb" >Signup</button> */}
                </Stack>
                </Stack>
              
            
            
                      
                    
                    
                  
                
                
                
            </div> 
            </Card>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
    </div>

            

          
        
      
    </>
  )
}