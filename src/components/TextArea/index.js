import React from "react";

import './style.css';

export default function TextArea(props) {
    return (
        <div>
            <div className="label-required">
                <label for={props.name}>{props.question}</label>
                <label id="required">*</label>
            </div>
            <p className={props.subtitleRequired}>{props.subtitle}</p>
            <textarea
                id={props.name}
                rows="7"
                cols="40"
                placeholder= {props.placeholder}
            />
        </div>
    )
}