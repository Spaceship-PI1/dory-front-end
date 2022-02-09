import React from "react";
import { Link } from "react-router-dom";

import './style.css';

export default function Input({ className, required, name, question, type, placeholder, size, register }) {
    return (
        <div id="input">
            {name == "password" ? 
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

            {register ? 
                <input
                    {...register(name)} 
                    className={className + " " + size}
                    id={name}
                    type={type}
                    placeholder={placeholder}
                />
            :
                <input
                    className={className + " " + size}
                    id={name}
                    type={type}
                    placeholder={placeholder}
                />
            }
        </div>
    )
}