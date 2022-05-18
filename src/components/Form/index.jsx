import {TextField, Button, Container} from '@material-ui/core'
import { useState } from 'react'
import api from '../../services/api'

function Form(){
    const [text, setText] = useState('')


    function handleNewTask(){
        const data = {text}
        console.log(data)
        api.post("/posts", data)
        location.reload() 
    }

    return(
        <>
            <Container>
            <h1 
                style={{ textAlign:'center',
                fontSize:'48px', 
                fontFamily:'Poppins', 
                padding:'10px', 
                color:'#3f51b5' }}
            >
                Lista de Tarefas
            </h1>
                <div style={{ display:"flex", justifyContent:"center"}}>
                <TextField 
                    label="Tarefa" 
                    variant="outlined"
                    fullWidth 
                    onChange={(e) => setText(e.target.value)} 
                    style={{ paddingRight:'5px' }}
                    />
                <Button variant="contained" color='primary' onClick={handleNewTask}  >
                    Adicionar
                </Button>
                </div>
            </Container>
        
        </>
    )
}

export default Form