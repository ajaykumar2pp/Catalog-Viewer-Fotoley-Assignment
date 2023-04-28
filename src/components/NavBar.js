import { AppBar,Typography,Button,Toolbar } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'

const NavBar = () => {
  return (
   <AppBar position="static"color="secondary">
    <Toolbar>
    <Typography variant="h6"flexGrow={1} >
            Catalog Viewer
        </Typography>
        <Button  variant="text h6 inherit" startIcon={<LoginIcon/>}>SignIn</Button>
        <Button  variant="text h6 inherit" endIcon={<LogoutIcon />}>LogOut</Button>
    </Toolbar>
      
   </AppBar>
  )
}

export default NavBar