import React from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import NavInteresses from "../components/NavInteresses";
import SearchInput from "../components/InputSearch";
import Carrossel from "../components/Carrossel";
 
export function Home() {
    const user = {
        interesses : [
            'Jogos', 'Design', 'Criação de personagens', 'Ilustração', 'Desenho' 
        ]
    }

    return (
        <div>
            <NavBarGlobal login={true} />

            <section className="container" id="home">
                <NavInteresses data={user.interesses}/>

                <SearchInput />

                <div className="resultados-container">
                    {user.interesses.map((inter, index) => (
                       <Carrossel index={index} interesse={inter} />
                    ))}
                </div>
            </section>
        </div>
    )      
}