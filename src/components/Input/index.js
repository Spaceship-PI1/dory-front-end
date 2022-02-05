import React from "react";

import './style.css';

export default function Input({ className, required, name, question, type, placeholder, size }) {
    return (
        <div id="input">
            <div className="label-required">
                <label for={name}>{question}</label>
                <label className="asterisco" id={required}>*</label>
            </div>
            <input
                className={className + " " + size}
                id={name}
                type={type}
                placeholder= {placeholder}
            />
        </div>
    )
}