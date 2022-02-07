import React from "react";

import './style.css';

export default function Checkbox({ name, question }) {
    return (
        <div className="content-checkbox">
            <input
                className="checkbox"
                id={name}
                type="checkbox"
                value={name}
                checked={() => {}}
                onChange={() => {}}
            />  
            <label className="label-checkbox">
                {question}
            </label>
        </div>
    )
}