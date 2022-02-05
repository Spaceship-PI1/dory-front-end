import React from "react";

import './style.css';

export default function ButtonModal({ className, required, name, question, placeholder, onClick}) {
    return (
        <div id="button-modal">
            <div className="label-required">
                <label for={name}>{question}</label>
                <label id={required}>*</label>
            </div>
            <button
                className={className}
                id={name}
                onClick={onClick}
            >
                {placeholder}
            </button>
        </div>
    )
}