import React from "react";
import { Link } from "react-router-dom";

import './style.css';

export default function Paginacao({ page, handlePage }) {
    return (
        <div id="paginacao">
            {page ? 
            <Link to="/" className="default">
                Cancelar
            </Link>
            :
            <div className="div-buttons">
                <Link to="/" className="default">
                    Cancelar
                </Link>
                <button className="default" onClick={handlePage}>
                    Voltar
                </button>
            </div>
            }
            

            <div 
                className="div-paginacao" 
                style={page ? { width: '430px' } : { width: '454px' }}
            >
                <button
                    onClick={handlePage} 
                    className={ page ? "selected" : "unselected" }
                >1</button>
                <button 
                    onClick={handlePage}
                    className={ !page ? "selected" : "unselected" }
                >2</button>
            </div>

            {page ?
            <button className="yellow" onClick={handlePage}>
                Próxima
            </button> 
            :
            <button className="yellow" type="submit">
                Salvar
            </button> 
            }
        </div>
    );    
}