import React from "react";

import add from '../../assets/icons/add.svg';

import './style.css';

export default function InputImage({ user }) {
    return (
        <div className="div-inputs perfil">
            <div className="add-perfil">
                <div className="label-add-perfil">
                    <label>Adicione sua foto de perfil</label>
                </div>
                <button>
                    <img className="add-icon" src={add} alt="Ícone de adicionar" />
                </button>
            </div>
            
            <h4>{user.nome}</h4>
            <p>{user.email}</p>
        </div>
    )
}