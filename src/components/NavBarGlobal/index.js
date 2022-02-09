import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { AuthContext } from '../../contexts/AuthContext';

import logo from '../../assets/logo-negativa.svg';
// import envelope from '../../assets/icons/envelope.svg';
// import Button from "../Button";

import './style.css';

export default function NavBarGlobal({ login }) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [menu, setMenu] = useState(null);
    const open = Boolean(menu);

    const handleClick = (e) => setMenu(e.currentTarget);
    const handleClose = () => setMenu(null);

    const [openModal, setOpenModal] = useState(false);
    const [disponibilidade, setDisponibilidade] = useState("");

    const handleClickModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleDisponivel = () => setDisponibilidade("disponivel");

    const handleViewMyPerfil = (e) => {
        navigate({
            pathname: `/profile`,
        });

        e.preventDefault();
    }


    return (
        <nav className="container" >
            {login ?
                <>
                <div className="div-logo">
                    <Link to="/home">
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
                    {/* <div className="item">
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
                    </div> */}

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
                        {user?.photo ? 
                            <Avatar 
                                alt={user?.firstName}
                                src={user?.photo} 
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
                            {user?.firstName}
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
                        {user?.role === "teacher" ?
                            <>
                                <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Ver Perfil</MenuItem>
                                <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Ver "Meus TCCs"</MenuItem>
                                {/* <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Ver Solicitações</MenuItem> */}
                                <MenuItem onClick={handleClickModal} sx={{fontSize: '1.4rem'}}>Atualizar Disponibilidade</MenuItem>
                                <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Sair</MenuItem>
                            </>
                        :
                            <>
                                <MenuItem onClick={handleViewMyPerfil} sx={{fontSize: '1.4rem'}}>Ver Perfil</MenuItem>
                                {/* <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Ver Solicitações</MenuItem> */}
                                <MenuItem onClick={() => {}} sx={{fontSize: '1.4rem'}}>Sair</MenuItem>
                                
                            </> 
                        }
                        </Menu>
                    </Box>

                    <Dialog open={openModal} onClose={handleCloseModal}>
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
                                Atualizar a Disponibilidade para Orientação
                            </DialogTitle>
                        
                            <button 
                                style={{
                                    background: 'white',
                                    cursor: 'pointer'
                                }}
                                onClick={handleCloseModal}
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
                                fontWeight: 500,
                                color: '#3D345E',
                                marginBottom: '8px'
                            }}>
                                Qual a sua disponibilidade para orientar nesse semestre?
                            </DialogContentText>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start'
                            }}>
                                <button className="btn-status" id="disponivel">
                                    Disponível
                                </button>
                                <button className="btn-status" id="indisponivel">
                                    Indisponível
                                </button>
                                <button className="btn-status" id="analise">
                                    Disponibilidade em análise
                                </button>
                            </Box>
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
                            oi
                            {/* <Button 
                                className="defaultModal"
                                idButton="cancelar"
                                placeholder="Cancelar"
                                onClick={handleCloseModal}
                            />

                            <Button 
                                className="secondaryModal"
                                idButton="salvar"
                                placeholder="Salvar"
                                onClick={() => {}}
                            /> */}
                        </DialogActions>
                    </Dialog>
                </div>
            </>
            :
            <>
                <Link to="/">
                    <img className="logo" src={logo} alt="Dory" />
                </Link>

                <div className="nav-buttons">
                    <Link to="/" className="default">Entrar</Link>
                    <Link to="/cadastro" className="yellow">Criar conta</Link>
                </div>
            </>
            }
        </nav>
    )
}