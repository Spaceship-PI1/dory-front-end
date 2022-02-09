import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Login }  from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { CadastroAluno } from "./pages/CadastroAluno";
import { CadastroProfessor } from "./pages/CadastroProfessor";

import { Search } from "./pages/Search";
import { VisualizarProfessor } from "./pages/VisualizarProfessor";
import { VisualizarAluno } from "./pages/VisualizarAluno";
import { VisualizarTCC } from "./pages/VisualizarTCC";
import { ShortcutNavBar } from "./pages/ShortcutNavBar";
import { Home } from "./pages/Home";

import { AuthProvider } from './contexts/AuthContext';

function RoutesApp() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastro/aluno" element={<CadastroAluno />} />
          <Route path="/cadastro/professor" element={<CadastroProfessor />} />

          <Route path="/home" element={<Home />} />
          <Route path="/pesquisa" element={<Search />} />
          <Route path="/visualizar/professor" element={<VisualizarProfessor />} />
          <Route path="/visualizar/aluno" element={<VisualizarAluno />} />
          <Route path="/visualizar/TCC" element={<VisualizarTCC />} />

          <Route path="/professores" element={<ShortcutNavBar status="professores" />} />
          <Route path="/TCCs" element={<ShortcutNavBar status="TCCs" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default RoutesApp;