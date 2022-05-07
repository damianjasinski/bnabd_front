import { ButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import WeekendIcon from '@mui/icons-material/Weekend';
import { Box } from '@mui/system';

const iconSize = "large"



export default function Orders() {
  var arr = Array(100).fill("error");

  const [seat, setSeatState] = useState(arr);
  const handleSubmit = (event) => {
    const id = event.target.name;
  
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      }}
    >


<ButtonGroup variant="contained">
      <IconButton  name='1' color={seat[0]} size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color={seat[1]} size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>

      </ButtonGroup>

      <ButtonGroup variant="contained">
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      </ButtonGroup>

      <ButtonGroup variant="contained">
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      <IconButton color="warning" size="large"> <WeekendIcon fontSize={iconSize}/> </IconButton>
      </ButtonGroup>

      


    </Box>
      
    
  )
}