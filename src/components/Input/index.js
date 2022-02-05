import React from "react";
import { Link } from "react-router-dom";

import './style.css';

export default function Input({ className, required, name, question, type, placeholder, size }) {
    return (
        <div id="input">
            {name == "senha" ? 
                <div className="div-forgot-password">
                    <div className="label-required">
                        <label for="password">Senha</label>
                        <label id="required">*</label>
                    </div>
                    <Link to="/" className="forgot-password">
                        Esqueceu a senha?
                    </Link>
                </div>
            :
                <div className="label-required">
                    <label for={name}>{question}</label>
                    <label className="asterisco" id={required}>*</label>
                </div>
            }
            <input
                className={className + " " + size}
                id={name}
                type={type}
                placeholder= {placeholder}
            />
        </div>
    )
}