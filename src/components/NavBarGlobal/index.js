import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

import logo from '../../assets/logo-negativa.svg';
import envelope from '../../assets/icons/envelope.svg';
import imgPerfil from '../../assets/perfil.png';

import './style.css';

export default function NavBarGlobal() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const perfil = "aluno";

    return (
        <nav className="container">
            <div className="div-logo">
                <img className="logo" src={logo} alt="Dory" />

                <div className="quick-access">
                    <Link className="access"
                        to={() => {}}
                    >
                        Professores
                    </Link>
                    <Link className="access"
                        to={() => {}}
                    >
                        TCCs
                    </Link>
                </div>
            </div>

            <div className="user-access">
                <div className="item">
                    <div className="circle-img">
                        <img className="solicitacoes-icon" src={envelope} alt="ícone de solicitação" />
                    </div>

                    <Link className="access"
                        to={() => {}}
                    >
                        Solicitações
                    </Link>
                </div>

                <Box 
                    className="item"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '20px'
                    }}
                >   
                    <Avatar 
                        alt="Cindy Baker" 
                        src={imgPerfil} 
                        sx={{ width: 32, height: 32, marginTop: 1 }}
                    />

                    <Button
                        className="access"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{
                            textTransform: 'none',
                            fontFamily: 'Roboto',
                            fontWeight: 500
                        }}
                    >
                        Alissa
                    </Button>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                    {perfil === "professor" ?
                        <>
                            <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Ver Perfil</MenuItem>
                            <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Ver "Meus TCCs"</MenuItem>
                            <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Ver Solicitações</MenuItem>
                            <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Atualizar Disponibilidade</MenuItem>
                            <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Sair</MenuItem>
                        </>
                    :
                        <>
                            <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Ver Perfil</MenuItem>
                            <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Ver Solicitações</MenuItem>
                            <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Sair</MenuItem>
                        </> 
                    }
                    </Menu>
                </Box>
            </div>
        </nav>
    )
}