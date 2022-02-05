import React from "react";

import './style.css';

export default function RadioButton({ name, question }) {
    return (
        <div className="content-radio">
            <input
                className="radio"
                id={name}
                type="radio"
                value={name}
                checked={() => {}}
                onChange={() => {}}
            />  
            <label className="label-radio">
                {question}
            </label>
        </div>
    )
}