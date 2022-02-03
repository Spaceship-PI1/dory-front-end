import React from "react";

import searchIcon from '../../assets/icons/search-gray.svg';

import './style.css';

export default function SearchInput() {

    return (
        <div className="input-container">
            <button>
                <img className="search-icon" src={searchIcon} alt="Ícone de pesquisa" />
            </button>
            
            <input 
                className="input-search"
                name="search"
                type="text"
                placeholder="Pesquise sobre um orientador..."
            />
        </div>
    )
}