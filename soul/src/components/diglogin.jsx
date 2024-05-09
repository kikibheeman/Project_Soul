import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from 'react-router-dom';
import './login1.css';
import loginpic from './loginpic.png';
import siguppic from './siguppic.png';
import yoga1 from './yoga1.png';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogslOLog() {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    function checkData()
    {
        let un=document.getElementById("name").value;
        let pw=document.getElementById("pass").value;

        if(un==="")
        {
            alert("Enter a username");
        }
        
        if(pw==="")
        {
            alert("Enter a password");
        }
        
        
        
    }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Login
      </Button>
      <BootstrapDialog className="box"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open} Width="100%" heigt="100%"
      >
        <div className='sign2'>
          <div>
           <Stack direction="row" spacing={1}>
          <Stack>
            <img  className="picl" src={loginpic}  width="400" height={500} id="sil"/>
          </Stack>
          <Stack>
            <div className='circlel' content="width=devize-width , initial-scale=1"></div>
          <div className='rectf1l'>
            <form>
              
                <table className='tableconl'>
                    <tr>
                        <td><b><lable  className="tableheadl" for="name">Username</lable></b></td>
                    </tr>
                    <tr>
                        <td><input className="tableinputl" type="text" placeholder="Enter your username" id="namel" required/></td>

                    </tr>
                   
                    
                    <tr>
                        <td><b><lable className="tableheadl1" for="pass">Password</lable></b></td>
                 </tr>
                    <tr>
                        <td><input className="tableinputl1" type="password" placeholder="Enter your password" id="passl" required/></td>
                    </tr>
                </table>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
                <button  className="sigbl" onClick={checkData}><Link to="/" style={{textDecoration:"none"}}>Login</Link></button>
            
          </Button>
        </DialogActions>
            </form>
            </div>
            </Stack>
            </Stack>
            
        </div>
        
        </div>
      </BootstrapDialog>
    </div>
  );
}