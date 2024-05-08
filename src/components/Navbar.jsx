import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { useUser } from '../hooks/UserContext';

export default function Navbar() {

const {user, setUser} = useUser();

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{backgroundColor: "#fff",
      color: "#3c009d", 
    }}>
        <Toolbar>
    
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Healthcare Hub
          </Typography>
          <Button sx={{backgroundColor: "#3c009d", color:"#eaeaea", borderRadius: "20px"} } onClick={()=>setUser(!user)}>{user ? "Patient" : "Admin"} login<span><SwitchAccountIcon/></span></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



