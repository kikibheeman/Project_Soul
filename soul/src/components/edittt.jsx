import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MemView, MemUpdate } from "./maps";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from '@mui/material';
import { Button } from 'bootstrap';


export default function EditGame() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [mem, setMem] = useState({
        id: id,
        name: "",
        age: "",
        city: "",
        state: "",
        height: "",
        weight: "",
        medications: "",
        practiceBefore: "",
        operation: "",
        diseases: "",
        heartpatient: "",
        diabetic:"",
    });

    // console.log(mem);

    useEffect(() => {
        loadPage();
    }, []);

    const loadPage = async () => {
        try {
            const res = await MemView(id);
            setMem(res.data);
        } 
        catch (err) {
            console.err("Failed to load page:", err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMem((prevMem) => ({
            ...prevMem,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await MemUpdate(mem);
            // toast.info
            toast.info('Your details are updated!', {
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
                navigate("/dashboard");
            }, 1500);

        }
        
        catch (err) {
            console.error("Oops!Failed to update", err);
        }
    };

    return (
        <>
        <div className='main'>
    
        
          <h1 className="page-title">Welcome to the Community</h1>
        
        <Card className='maincard' elevation={10}>
          
          <h1 className="card-title">Give us an update!</h1>
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
              <button style={{color:"purple" ,textDecoration:"none",borderRadius:"10"}} >UPDATE </button>
               
              
              
            
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
        
    );
}