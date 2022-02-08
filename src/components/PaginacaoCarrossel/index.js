import React, { useState } from "react";

import './style.css';

export default function PaginacaoCarrossel() {
    const [pass, setPass] = useState("1");

    const handlePass1 = () => setStatus("1");
    const handlePass2 = () => setStatus("2");
    const handlePass3 = () => setStatus("3");

    console.log(pass);

    return (
        <div className="buttons-carrossel">
            <button className="btn-carrossel" onClick={handlePass1}></button>
            <button className="btn-carrossel" onClick={handlePass2}></button>
            <button className="btn-carrossel" onClick={handlePass3}></button>
        </div>
    )
}