import React, { useContext, useEffect } from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import NavInteresses from "../components/NavInteresses";
import SearchInput from "../components/InputSearch";
import Carrossel from "../components/Carrossel";
import Input from "../components/Input";
import Modal from "../components/Modal";

import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies';

import '../styles/home.css';
 
export function Home() {
    const { user, isAuthenticated } = useContext(AuthContext);

    const { 'dory.token': token } = parseCookies();

    useEffect(() => {
        if (!token) {
          window.location.href = '/';
        }
      }, []);
      
    useEffect(() => {
    if (!token) {
        window.location.href = '/';
    }
    }, [token, isAuthenticated]);

    return (
        <div>
            <NavBarGlobal login={true} />

            <section className="container" id="home">
                {user?.interests !== null ? 
                <>
                    <NavInteresses data={user?.interests}/>

                    <SearchInput />

                    <div className="resultados-container">
                        {user?.interests?.map((inter, index) => (
                            <Carrossel key={index} index={index} interesse={inter} />
                        ))}
                    </div>
                </>
                :
                <div className="add-inter">
                    <h2>Você não tem nenhum interesse cadastrado!</h2>
                    <Modal 
                        idModal="interesses"
                        title="Adicionar interesses"
                        desc="Conte-me quais são suas áreas de interesse."
                        body={
                            <Input 
                                name="title"
                                type="text"
                                placeholder="Ex: Design, Desenvolvimento web, IHC..."
                                className="inputText withoutMargin"
                                size="large"
                            />
                        }
                    />
                </div>
                }
            </section>
        </div>
    )      
}