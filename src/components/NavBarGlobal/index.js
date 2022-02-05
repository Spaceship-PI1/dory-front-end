import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo from '../../assets/logo-negativa.svg';
import envelope from '../../assets/icons/envelope.svg';

import './style.css';

export default function NavBarGlobal({ login }) {
    const srcPerfil = "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

    const user = {
        id: 0,
        foto: srcPerfil,
        nome: "Alissa",
        perfil: "aluno",
        solicitacoesPendentes: 0 
    }

    const [menu, setMenu] = useState(null);
    const open = Boolean(menu);

    const handleClick = (e) => setMenu(e.currentTarget);
    const handleClose = () => setMenu(null);

    return (
        <nav className="container" >
            {login ?
                <>
                <div className="div-logo">
                    <Link to="/">
                        <img className="logo" src={logo} alt="Dory" />
                    </Link>

                    <div className="quick-access">
                        <Link className="access" to="/professores">
                            Professores
                        </Link>
                        
                        <Link className="access" to="/TCCs">
                            TCCs
                        </Link>
                    </div>
                </div>

                <div className="user-access">
                    <div className="item">
                        <div className="solicitacoes-notification">
                            <div className="circle-img">
                                <img className="solicitacoes-icon" src={envelope} alt="ícone de solicitação" />
                            </div>

                            {user.solicitacoesPendentes > 0 ? <div className="badge">{user.solicitacoesPendentes}</div> : null}
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
                        {user.foto ? 
                            <Avatar 
                                alt="Cindy Baker" 
                                src={user.foto} 
                                sx={{ width: 34, height: 34, marginTop: 1, marginBottom: -0.3 }}
                            />
                        :
                            <AccountCircleIcon sx={{ fontSize: 34, color: 'white', marginTop: 1, marginBottom: -0.3 }} /> 
                        }
                
                        <Button
                            className="access"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            endIcon={<ArrowDropDownIcon sx={{ marginLeft: -0.8 }} />}
                            sx={{
                                textTransform: 'none',
                                fontFamily: 'Roboto',
                                fontWeight: 500
                            }}
                        >
                            {user.nome}
                        </Button>

                        <Menu
                            id="basic-menu"
                            anchorEl={menu}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                        {user.perfil === "professor" ?
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
            </>
            :
            <>
                <Link to="/login">
                    <img className="logo" src={logo} alt="Dory" />
                </Link>

                <div className="nav-buttons">
                    <Link to="/login" className="default">Entrar</Link>
                    <Link to="/cadastro" className="yellow">Criar conta</Link>
                </div>
            </>
            }
        </nav>
    )
}