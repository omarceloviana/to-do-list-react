import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ModalDelete from '../ModalDelete';
import ModalEdit from '../ModalEdit';
import {Table, TableRow, TableCell,TableBody,Checkbox,IconButton, Container} from '@material-ui/core'
import api from '../../services/api'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper, 
   
  },
}));

export default function TodoItem() {
 
  const [task, setTask] = useState([])

  useEffect( () => {
    api.get('posts')
    .then( (response) => {
      setTask(response.data)
    })
    .catch( () => {
      console.log("Erro")
    })

  }, [])


  return (
   <>
    <Container>
    <Table>
     <TableBody>
     {task.map((posts) => {
       return(
         <TableRow key={posts.id}>
          <TableCell><Checkbox color='primary'/></TableCell>         
          <TableCell>{posts.text}</TableCell>
          <TableCell align="right"> 
          <IconButton edge="end" aria-label="edit">
            <ModalEdit id={posts.id} />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <ModalDelete id={posts.id}/>  
          </IconButton>
          </TableCell>
       </TableRow>
       )
      })}
      </TableBody>
    </Table>
    </Container>
  
    </>
  
  );
}
