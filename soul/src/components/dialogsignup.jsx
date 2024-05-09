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
import './dialogsignup.css';
import siguppic from './siguppic.png';
import yoga1 from './yoga1.png';
import { Stack } from '@mui/system';
import CustomizedDialogslOLog from './diglogin';
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

export default function CustomizedDialogs() {
  
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
        let em=document.getElementById("email").value;
        let pw=document.getElementById("pass").value;

        if(un==="")
        {
            alert("Enter a username");
        }
        if(em==="")
        {
            alert("Enter a mail id");
        }
        if(pw==="")
        {
            alert("Enter a password");
        }
        
        
        
    }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <BootstrapDialog className="box"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open} Width="100%" heigt="100%"
      >
        <div className='sign1'>
          <div>
           <Stack direction="row" spacing={1}>
          <Stack>
            <img  className="signuppic" src={yoga1} id="si"/>
          </Stack>
          <Stack>
            <div className='circle' content="width=devize-width , initial-scale=1"></div>
          <div className='rectf1'>
            <form>
              
                <table className='tablecon'>
                    <tr>
                        <td><b><lable  className="tablehead" for="name">Username</lable></b></td>
                    </tr>
                    <tr>
                        <td><input className="tableinput" type="text" placeholder="Enter a valid username" id="name" required/></td>

                    </tr>
                    <tr>
                        <td><b><lable className="tablehead" for="email">Mail</lable></b></td>
                    </tr>
                    <tr>
                        <td><input className="tableinput" type="email" placeholder="Enter a valid mail" id="email" required/></td>
                    </tr>
                    <tr>
                        <td><b><lable className="tablehead" for="pass">Password</lable></b></td>
                    </tr>
                    <tr>
                        <td><input className="tableinput" type="password" placeholder="Enter a valid password" id="pass" required/></td>
                    </tr>
                </table>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
                <button  className="sigb" onClick={checkData}>Signup</button>
            
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