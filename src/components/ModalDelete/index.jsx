import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Delete } from '@material-ui/icons';
import { Button } from '@material-ui/core'
import api from '../../services/api';

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


export default function ModalDelete(id) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  
  function deletePost(){
    console.log(id)
    api.delete(`posts/${id.id}`)
    location.reload()
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" style={{ color:'#3f51b5', textAlign:'center'}}>Deletar a Tarefa?</h2>
      <div style={{ display:'flex', justifyContent:'center' }}>
      <Button 
        variant="contained" 
        color='primary' 
        style={{ padding: '10px', margin: '10px' }} 
        onClick={() => deletePost()}>
           SIM 
      </Button>
      <Button 
        variant="contained" 
        color="secondary" 
        style={{ padding: '10px', margin: '10px' }}
        onClick={handleClose} 
        >
          NÃO
      </Button>
      </div>
    </div>
  );

  return (
    <div>
        <Delete onClick={handleOpen} />
      
      <Modal style={{ display:"flex", justifyContent:"center" }}
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
