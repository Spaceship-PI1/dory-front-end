import React from "react";
import ButtonNav from "../ButtonNav";

export default function NavFiltrosGlobais({ status, setProfessores, setTCCs }) {
    return (
        <div className="filtros" style={{ display: 'flex' }}> 
            <ButtonNav 
                setStatus={setProfessores}
                name="Professores"
                id={status == "professores" ? "selected" : null}
            />

            <ButtonNav 
                setStatus={setTCCs}
                name="TCCs"
                id={status == "TCCs" ? "selected" : null}
            />
        </div>
    )
}