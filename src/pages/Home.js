import React from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import Carrossel from "../components/Carrossel";

import search from '../assets/icons/search-gray.svg';
 
import '../styles/home.css';

export function Home() {
    const user = {
        interesses : [
            'Jogos', 'Design', 'Criação de personagens', 'Ilustração', 'Desenho' 
        ]
    }

    return (
        <div>
            <NavBarGlobal />

            <section className="container" id="home">
                <div className="interesses-container">
                    <p>Seus interesses</p>
                    <ul className="interesses-list-tags">
                        { user.interesses.map((inter, index) => <li key={index}>{inter}</li>)}
                    </ul>
                </div>

                <div className="input-container">
                    <button>
                        <img className="search-icon" src={search} alt="Ícone de pesquisa" />
                    </button>
                    
                    <input 
                        className="input-search"
                        name="search"
                        type="text"
                        placeholder="Pesquise sobre um orientador..."
                    />
                </div>

                <div className="resultados-container">
                    {user.interesses.map((inter, index) => (
                       <Carrossel index={index} interesse={inter} />
                    ))}
                </div>
            </section>
        </div>
    )      
}