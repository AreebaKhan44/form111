import { AppBar, Toolbar,Typography,Button  } from '@mui/material'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Navbar() {
  return (
    <>
    <AppBar position='fixed'>
    <Toolbar>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
           Formik
          </Typography>
          <Button varaint='text' color="inherit" startIcon={<LoginIcon/>}>Login</Button>
          <Button varaint='text' color="inherit" endIcon={<LogoutIcon/>}>Logout</Button>
          </Toolbar>
    </AppBar>
    <br/><br/>
    </>
  )
}
