import React, { useState } from "react";

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';

import Button from "../Button";
import ButtonModal from '../ButtonModal';

export default function Modal({ idModal, question, title, desc, body }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
            <ButtonModal
                name={idModal}
                question={question}
                required={question && "required"}
                className="buttonModal"
                placeholder={title}
                onClick={handleClickOpen}
            />

            <Dialog open={open} onClose={handleClose}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <DialogTitle 
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.8rem',
                            fontWeight: 600,
                            color: '#6283FA'
                        }}
                    >
                        {title}
                    </DialogTitle>
                
                    <button 
                        style={{
                            background: 'white',
                            cursor: 'pointer'
                        }}
                        onClick={handleClose}
                    >
                        <CloseIcon sx={{
                            marginRight: 2,
                            fontSize: 28,
                            color: '#979797',
                            '&:hover': {
                                color: '#6283FA'
                            }
                        }}/>
                    </button>
                </Box>
                <Divider />
                <DialogContent sx={{
                        fontSize: '1.4rem'
                    }}
                >
                    <DialogContentText sx={{
                        fontSize: '1.6rem',
                        marginBottom: '8px'
                    }}>
                        {desc}
                    </DialogContentText>

                    {body}
                </DialogContent> 
                <Divider />
                <DialogActions
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 2,
                        marginRight: 2
                    }}
                >
                    <Button 
                        className="defaultModal"
                        idButton="cancelar"
                        placeholder="Cancelar"
                        onClick={handleClose}
                    />

                    <Button 
                        className="secondaryModal"
                        idButton="salvar"
                        placeholder="Salvar"
                        onClick={() => {}}
                    />
                </DialogActions>
            </Dialog>
        </>
    )
}