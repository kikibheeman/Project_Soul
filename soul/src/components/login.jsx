import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignIn } from './maps'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import App from '../App';
import './register.css';
import { Card } from '@mui/material';
import { Stack } from '@mui/system';
import loginpic from './loginpic.png';


export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
    const username = '';
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
        uname: '',
        pwd: ''
    });

    console.log(signin);

    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await SignIn(signin.uname, signin.pwd);
        if (res.data === "Login successful") {
            Cookies.set('username', signin.uname);
            Cookies.set('isLoggedIn', 'true');
            toast.success('Login successful !', {
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
                navigate('/home');
            }, 1500);

        } else if (res.data === "Login failed") {
            toast.error('Invalid password!', {
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
            toast.error('Invalid Username!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };


    return (
        <>
            <Card className='maincard1' elevation={5}>

                <Stack direction="row" spacing={1}>
                    <Stack>
                        <img className="picl" src={loginpic} width="400" height={500} id="sil" />
                    </Stack>
                    <Stack>
                        <div>
                            <form onSubmit={handleSubmit} >
                            <div className='forLogin'>Login</div>
                        
                            <table className='tablecon1'>
                        
                                
                                
                                <tr>
                                    <td><b><lable className="tablehead1" for="name">Username</lable></b></td>
                                </tr>
                                
                                <tr>
                                    <input className="tableinput1" type="text" placeholder="Username" id="uname" value={signin.uname} autoComplete='off' onChange={handleChange} required/>
                                    
                                </tr>
                                <div className='thesecond'>

                                <tr>
                                    <td><b><lable className="tablehead2" for="pass">Password</lable></b></td>
                                </tr>
                                
                                <tr>
                                    <input className="tableinput1" autoComplete="off" type="password" placeholder="Password" id="pwd" value={signin.pwd}   onChange={handleChange} required/>
                                </tr>
                                </div>
                                <button   type="submit" className="sigb">Login</button>
                                
                                
                            </table>
                            </form>
                            </div>

                        

                    </Stack>
                </Stack>


            </Card>
            
            <button  className='thesignupbutton' ><Link to="/register" style={{color:"black" ,textDecoration:"none"}}>Signup</Link></button>
            <div className='fordown'>to join the community</div>
             
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


        </>
    )
}