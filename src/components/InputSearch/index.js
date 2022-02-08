import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import searchIcon from '../../assets/icons/search-gray.svg';

import './style.css';

export default function SearchInput() {
    const navigate = useNavigate();
    const [searchText, setSearchText ] = useState({
        value: ""
    });

    const handleSearch = (e) => setSearchText({ value: e.target.value });

    const handleSubmit = (e) => {
        navigate({
            pathname: '/pesquisa',
            search: `?q=${searchText.value}`
        });

        e.preventDefault();
    }

    return (
        <form className="input-container" onSubmit={handleSubmit}>
            <button>
                <img className="search-icon" src={searchIcon} alt="Ícone de pesquisa" type="submit" />
            </button>
            
            <input 
                className="input-search"
                name="search"
                type="text"
                value={searchText.value}
                onChange={handleSearch}
                placeholder="Pesquise sobre um orientador..."
            />
        </form>
    )
}