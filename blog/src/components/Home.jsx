import { Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var [page,setPage] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data)
            setPage(response.data)
        })
    },[])
  return (
    <div>
        <br/><br/><br/><br/><br/><br/>
        <Typography variant='h3'  style={{color:'red', fontFamily:'cursive'}}>BLOGS</Typography>
        <br/>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell variant='h2' style={{color:"red",fontFamily:"fantasy"}}>ID </TableCell>
                    <TableCell variant='h2' style={{color:"red",fontFamily:"fantasy"}}>Title</TableCell>
                    <TableCell variant='h2' style={{color:"red",fontFamily:"fantasy"}}>Description</TableCell>
                </TableRow>
            </TableHead>
            {page.map((value,index)=>{
                return(
                    <TableRow>
                        <TableCell style={{fontFamily:'serif'}}>{value.id} </TableCell>
                        <TableCell style={{fontFamily:'serif'}}>{value.title} </TableCell>
                        <TableCell style={{fontFamily:'serif'}}>{value.body} </TableCell>
                    </TableRow>
                )
            })}
        </Table>
    </div>
  )
}

export default Home