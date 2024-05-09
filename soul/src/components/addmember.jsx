
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAdd } from './maps';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './addmember.css';
import { Card } from '@mui/material';
import CustomizedButtons from './buttonforregistration';
import { Link } from 'react-router-dom';

export default function Addmember() 
{
  const navigate = useNavigate();
  const [mem, setMem] = useState({
    name: '',
    age: '',
    city: '',
    state: '',
    height: '',
    weight: '',
    medications: '',
    practicedBefore: '',
    operation: '',
    diseases: '',
    heartpatient:'',
    diabetic:'',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    MAdd(mem)
      .then((res) => {
        // toast.success
        toast.success('Welcome to the Community😀 !', {
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
          navigate("/home");
        }, 1500);
      })


      .catch((err) => {
        // toast.Error
        toast.error('Oops!There was an error', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMem((prevMem) => ({
      ...prevMem,
      [name]: value,
    }));
  };

  return (
    <>
    <div id='addbo'>
    
        
          <h1 className="page-title">Welcome to the Community</h1>
        
        <Card className='maincard' elevation={10}>
          
          <h1 className="card-title">Help us to know you a little Better!</h1>
          <br/><br/>
          <div className="data-container">
            <form onSubmit={handleSubmit} className='input-group'>
              <div id='thehead'>
                <tr>
                Name:
                </tr>
                <tr>
                <input className='forinput' type="text"  name="name" autoComplete='off' value={mem.name} onChange={handleChange} required />
                </tr>
              </div>
              <br/>


              <div id='thehead'>
                <tr>
              <label>
                Age:
              </label>
              </tr>

              <tr>
                <input className='forinput' type="number" name="age" autoComplete='off' value={mem.age} onChange={handleChange} required />
              </tr>
              
              </div>
              <br/>


              <div id='thehead'>
                <tr>
              <label>
                City:
                </label>
                </tr>
                <tr>
                <input  className='forinput' type="text" name="city" autoComplete='off' value={mem.city} onChange={handleChange} required />
              </tr>
              
              </div>
              <br/>


              <div id='thehead'>
              <tr>
              <label>
                State:
                </label>
                </tr>
                <tr>
                <input className='forinput' type="text" name="state" autoComplete='off' value={mem.state} onChange={handleChange} required />
              
              </tr>
              </div>
              <br/>


              <div id='thehead'>
              <tr>
              <label>
                Height:
                </label>
                </tr>
                <tr>
                <input className='forinput' type="number" name="height" autoComplete='off' value={mem.height} onChange={handleChange} required />
              
              </tr>
              </div>
              <br/>


              <div id='thehead'>
              <tr>
              <label>
                Weight:
              </label>
              </tr>
              <tr>
                <input className='forinput' type="number" name="weight" autoComplete='off' value={mem.weight} onChange={handleChange} required />
             
              </tr>
              </div>
              <br/>


              <div id='thehead'>
              <tr>
              <label>
                Do you take medications:
              </label>
              </tr>
              <tr>
                <input className='forinput' type="text" name="medications" autoComplete='off' value={mem.medications} onChange={handleChange} required />
              </tr>
              </div>
              <br/>


              <div id='thehead'>
              <tr>
              <label>
                Have you practiced yoga before:
              </label>
              </tr>
              <tr>
                <input  className='forinput' type="text" name="practicedBefore" autoComplete='off' value={mem.practicedBefore} onChange={handleChange} required />
              
              </tr>
              </div>
              <br/>


              <div id='thehead'>
              <tr>
              <label>
                Have you undergone any operation:
                </label>
                </tr>
                <tr>
                <input  className='forinput' type="text" name="operation" autoComplete='off' value={mem.operation} onChange={handleChange} required />
             
              </tr>
              </div>
              <br/>


              <div id='thehead'>
              <tr>
              <label>
                Have you been affected by any diseases:
              </label>
              </tr>
              <tr>
                <input  className='forinput' type="text" name="diseases"  autoComplete='off' value={mem.diseases} onChange={handleChange} required />
              </tr>
              </div>
              <br/>


              <div id='thehead'>
              <tr>
              <label>
                Are you a heartpatient:
              </label>
              </tr>
              <tr>
                <input  className='forinput' type="text" name="heartpatient"  autoComplete='off' value={mem.heartpatient} onChange={handleChange} required />
              </tr>
              </div>
              <br/>


              <div id='thehead'>
              <tr>
              <label>
                Are you diabetic:
              </label>
              </tr>
              <tr>
                <input className='forinput' type="text" name="diabetic" autoComplete='off' value={mem.diabetic} onChange={handleChange} required />
              </tr>
              </div>
              <br/>
              <br/>
              <br/>
              <div id='thebut'>
                < CustomizedButtons/>
              </div>
              
            
            </form>
          </div>
          </Card>
          </div>
        
      
      
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