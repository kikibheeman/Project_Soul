
import { useEffect, useState } from "react";
import { Memx, MemDel } from "./maps";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditGame from "./edittt";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import 'bootstrap/dist/css/bootstrap.css';
import { TableCell, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Pagination from '@mui/material/Pagination';
import { FormControl,InputLabel,Select,MenuItem } from '@mui/material';
import './dashboard.css';
import axios from "axios";
import back from './back.png';
export default function Dashboard() {
    const [memsx, setMemsx] = useState([]);
    const [page, setPage] = useState('');
    const [offset, setOffset] = useState('');
    const [sort, setSort] = useState('');
    const[search,setSearch] = useState('');



    useEffect(() => {
        loadGames();
    }, []);


    //pagination
    useEffect(() => {
        handlelick();
      }, [page,offset]);

      useEffect(()=>{
        handleClick();
      },[search]);

      useEffect(()=>
      {
        handleSort();
      },[sort])

    const loadGames = () => {
        Memx().then((res) => {
            setMemsx(res.data);
        });
    };

    const handlelick = () => {
        try{
            
            if(page!==''&&offset!=='')
            {
                axios.get(`http://localhost:8080/all/service/${page}/${offset}`).then((res) => {
          setMemsx(res.data);
        }).catch()
        {
            
        }
            }
            else{
                loadGames();
            }
        }
        catch(error){
            console.log(error);
        }
      };

    const handleClick = () => {
        try{
            
            if(search!=='')
            {
                axios.get(`http://localhost:8080/all/service/${search}`).then((res) => {
          setMemsx(res.data);
        }).catch(error=>
          {
            console.log(error);
          })
            }
            else{
              loadGames();
            }
        }
        catch(error){
            console.log(error);
        }
      };

    const handleSort=()=>
  {
    try{
      if(sort!=='')
      {
      axios.get(`http://localhost:8080/all/sortby/${sort}`).then((res)=>
      {
        setMemsx(res.data);
      }).catch(error=>
        {
          console.log(error);
        })
      }
      else{
        loadGames();
      }
    }
    catch(error){
         console.log(error);
    }
  }

    

    const handleDeleteGame = (id) => {
        MemDel(id).then(() => {
            loadGames();
            toast.success(`Deleted !`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }).catch((error) => {
            toast.error("Failed to delete data.", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        });
    };

    return (
        
        <>
        <div id="dashbo">
        
        
                    <div >
                        
                    <h1 className="page-title1">The Community</h1>
                    
                    

                        <table className="table table-striped"  style={{width:"30cm",marginLeft:"4.5cm",marginTop:"2cm"}}>
                            <thead className="table-dark">
                                
                                <tr>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell>City</TableCell>
                                    <TableCell>State</TableCell>
                                    <TableCell>Height</TableCell>
                                    <TableCell>Weight</TableCell>
                                    <TableCell>Medications</TableCell>
                                    <TableCell>Practioner</TableCell>
                                    <TableCell>Operation</TableCell>
                                    <TableCell>Diseases</TableCell>
                                    <TableCell>Heart Patient</TableCell>
                                    <TableCell>Diabetic</TableCell>
                                    <TableCell style={{fontWeight:"750"}}  align={"center"}>Actions</TableCell>
                                    
                                   
                                </tr>
                                
                            </thead>



                            <tbody>
                                {memsx.map((mem) => (
                                    <tr key={mem.id} >
                                        <td class="table-primary" >{mem.name}</td>
                                        <td class="table-secondary">{mem.age}</td>
                                        <td class="table-success">{mem.city}</td>
                                        <td class="table-danger">{mem.state}</td>
                                        <td class="table-warning">{mem.height}</td>
                                        <td class="table-info">{mem.weight}</td>
                                        <td class="table-light">{mem.medications}</td>
                                        <td class="table-primary">{mem.practicedBefore}</td>
                                        <td class="table-secondary">{mem.operation}</td>
                                        <td class="table-success">{mem.diseases}</td>
                                        <td class="table-danger">{mem.heartpatient}</td>
                                        <td class="table-warning">{mem.diabetic}</td>
                                        <td>
                                            <Stack direction={"row"} spacing={5}>
                                                <Typography align="right">

                                                <Link to={`/update/${mem.id}`}>
                                                <BorderColorIcon className="game-x-edit-btn">
                                                   
                                                </BorderColorIcon>
                                            </Link>
                                                </Typography>
                                                <Typography align="right">
                                                <DeleteIcon 
                                                className="game-x-delete-btn"
                                                onClick={() => handleDeleteGame(mem.id)}
                                            >
                                               
                                            </DeleteIcon>
                                                </Typography>
                                            </Stack>
                                           
                                          
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
                theme="dark" />
                
                <input className="pag1"
          type="text"
          value={page}
          onChange={(e)=>{setPage(e.target.value)}}
          placeholder="Pageno 0,1,2..."
          required
        />
         <input className="pag2"
          type="text"
          value={offset}
          onChange={(e)=>{setOffset(e.target.value)}}
          placeholder="Offset"
          required
        />

<input class="form-control me-2" className='ser' type='text' value={search} placeholder="Search" 
        onChange={(e)=>{setSearch(e.target.value)}}
        aria-label="Search"/>
        
<div className="dropdown1">
<FormControl className='dropdown' >
  <p className='dropp'> Sort By</p>
  <Select
    labelId="demo-simple-select-autowidth-label"
    id="demo-simple-select"
    value={sort}
    sx={{height:'30px'}}
   
    onChange={(e)=>setSort(e.target.value)}
  >
    <MenuItem value={'name'}>Name</MenuItem>
    <MenuItem value={'city'}>Location</MenuItem>
    <MenuItem value={'height'}>Height</MenuItem>
    <MenuItem value={'weight'}>Weight</MenuItem>
    <MenuItem value={'age'}>Age</MenuItem>
    <MenuItem value={''}>Default</MenuItem>
  </Select>
</FormControl>
</div>
<br/>
<br/>
<br/>

             
             <Link to="/home"><img  id='BUTTS' width={30} src={back}></img></Link>
             </div>
                
                </>
                
        
    );
}