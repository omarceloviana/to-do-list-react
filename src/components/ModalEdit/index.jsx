import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Edit } from '@material-ui/icons';
import { Button, TextField } from '@material-ui/core'
import api from '../../services/api'


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalEdit(id) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [valueText, setValueText] = useState('')
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" style={{ color:'#3f51b5', textAlign:'center'} }>Editar a Tarefa?</h2>
      <TextField label="Tarefa" variant="outlined" fullWidth onChange={(e) => (setValueText(e.target.value))} />
      <div style={{ display:'flex', justifyContent:'center' }}>
      <Button 
        variant="contained" 
        color='primary'
        style={{ padding: '10px', margin: '10px' }} 
        onClick={() => {editPost()}}
        >
           SALVAR 
      </Button>
      <Button
       variant="contained"
       color='secondary' 
       onClick={handleClose}
       style={{ padding: '10px', margin: '10px' }}     
       >
          CANCELAR
      </Button>
      </div>
    </div>
  );

  const editPost = () => {
    const data = {
      text: valueText,
    } 
    api.patch(`posts/${id.id}`, data)
     location.reload()
  }

  return (
    <div>
        <Edit onClick={handleOpen} />
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}