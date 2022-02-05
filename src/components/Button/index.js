import React from "react";

import './style.css';

export default function Button({ className, idButton, placeholder, onClick}) {
    return (
        <button
            className={className}
            id={idButton}
            onClick={onClick}
        >
            {placeholder}
        </button>
    )
}