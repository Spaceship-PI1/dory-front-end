import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Login }  from "./pages/Login";
import { Register } from "./pages/Register";
import { CadastroAluno } from "./pages/CadastroAluno";
import { CadastroProfessor } from "./pages/CadastroProfessor";

import { Search } from "./pages/Search";
import { VisualizarProfessor } from "./pages/VisualizarProfessor";
import { VisualizarAluno } from "./pages/VisualizarAluno";
import { VisualizarTCC } from "./pages/VisualizarTCC";
import { ShortcutNavBar } from "./pages/ShortcutNavBar";

import { Home } from "./pages/Home";

function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/cadastro/aluno" element={<CadastroAluno />} />
        <Route path="/cadastro/professor" element={<CadastroProfessor />} />

        <Route path="/" exact element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/visualizarProfessor" element={<VisualizarProfessor />} />
        <Route path="/visualizarAluno" element={<VisualizarAluno />} />
        <Route path="/visualizarTCC" element={<VisualizarTCC />} />

        <Route path="/professores" element={<ShortcutNavBar status="professores" />} />
        <Route path="/TCCs" element={<ShortcutNavBar status="TCCs" />} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;