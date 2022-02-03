import React, { useState } from "react";
import Modal from 'react-modal';

import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import NavBarGlobal from "../components/NavBarGlobal";
import TextArea from "../components/TextArea";
import ButtonModal from "../components/ButtonModal";

import add from './../assets/icons/add.svg';

import '../styles/registerStudent.css';

Modal.setAppElement('#root');

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.status.danger,
    '&.Mui-checked': {
      color: theme.status.danger,
    },
    margin: 12, 
    borderRadius: 12
}));

const theme = createTheme({
    status: {
      danger: '#506DD8',
    },
  });

export function RegisterStudent1() {
    const [modalInteresses, setModalInteresses] = useState(false);
    const [open, setOpen] = useState(false);

    const handleCloseModalInteresses = () => setModalInteresses(false);
    const handleOpenModalInteresses = () => setModalInteresses(true);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const onSubmit = (e) => e.preventDefault();

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    }

    return (
        <div>
            <NavBarGlobal login={true} />
            
            <ThemeProvider theme={theme}>
                <CustomCheckbox defaultChecked  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
            </ThemeProvider>

            <section className="container" id="register-student">
                <form onSubmit={onSubmit}>
                    <h1>Identificação</h1>
                        <div className="columns-inputs">
                            <div className="div-inputs perfil">
                                <div className="add-perfil">
                                    <div className="label-add-perfil">
                                        <label>Adicione sua foto de perfil</label>
                                    </div>
                                    <button>
                                        <img className="add-icon" src={add} alt="Ícone de adicionar" />
                                    </button>
                                </div>
                                
                                <h4>Alissa Fernandes</h4>
                                <p>alifernandes@gmail.com</p>
                            </div>

                            <hr  id="line-page-1" />

                            <div className="div-inputs">
                                <TextArea
                                    name="Sobre você"
                                    question="Conte-me sobre você em um tweet"
                                    placeholder="Ex: Sou apaixonada por design.."
                                />

                                <ButtonModal
                                    name="Interesses"
                                    question="Quais são seus interesses em pesquisa?"
                                    required="required"
                                    className="buttonModal"
                                    placeholder="+ Adicionar área de interesse"
                                    onClick={handleOpenModalInteresses}
                                />

                                <Modal
                                    isOpen={modalInteresses}
                                    onRequestClose={handleCloseModalInteresses}
                                    style={customStyles}
                                >
                                    <div className="modal-container">
                                        <div className="modal-header"> 
                                            <p>Adicionar suas áreas de interesses</p>
                                            <p>X</p>
                                        </div>
                                        <hr />
                                        <input 
                                            name="interesses"
                                            type="text"
                                            placeholder="Ex: Design"
                                        />
                                        <button onClick={handleCloseModalInteresses}>Close</button>
                                    </div>
                                </Modal>

                                <Button variant="outlined" onClick={handleClickOpen}>
                                    Open form dialog
                                </Button>

                                <Dialog open={open} onClose={handleClose}>
                                    <DialogTitle>Subscribe</DialogTitle>
                                    <DialogContent>
                                    <DialogContentText>
                                        To subscribe to this website, please enter your email address here. We
                                        will send updates occasionally.
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Email Address"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                    />
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={handleClose}>Subscribe</Button>
                                    </DialogActions>
                                </Dialog>


                            </div>
                        </div>
                                                    
                    <div className="div-buttons">
                        <button className="default">
                            Cancelar
                        </button>

                        <button className="yellow" type="submit">
                            Salvar
                        </button> 
                    </div>
                </form>
            </section>
        </div>
    )      
}