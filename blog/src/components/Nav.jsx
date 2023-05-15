import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div>
        <AppBar color="secondary">
            <Toolbar >
    <Typography align='left' sx={{flexGrow:1}}> BLOG APP </Typography>

    <Button >
      <Link to={'/'} style={{color : "white"}}>HOME</Link>
    </Button>

    <Button > 
      <Link to={'/add'} style={{color : "white"}}>ADD</Link>
    </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav