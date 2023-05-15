import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
      <Container maxWidth='md'>
        <Box sx={{marginTop:'25%',marginLeft:'22%',bgcolor: '#a4e737e6', height: '60vh', width: '50vh' }}>
        <br/><br/><br/>  <br/><br/><br/>
        <Typography variant='h3' style={{color:"red",fontFamily:"fantasy"}}>ADD YOUR BLOGS</Typography>
        <br/><br/><br/><br/>
        <TextField name='name' label='Blog Name' variant='outlined'></TextField>
        <br/><br/>
        <TextField name='auth' label='Author Name' variant='outlined'></TextField>
        <br/><br/>
        <TextField name='des' label='Description' variant='filled'></TextField>
        <br/><br/>
        <Button color="secondary" variant='outlined'>SUBMIT</Button>
        </Box>
        </Container>
    </div>
  )
}

export default Add