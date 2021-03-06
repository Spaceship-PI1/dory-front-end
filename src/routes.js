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
import { VisualizarMeuPerfil } from "./pages/VisualizarMeuPerfil";
import { ShortcutNavBar } from "./pages/ShortcutNavBar";
import { Home } from "./pages/Home";

import { AuthProvider } from './contexts/AuthContext';
import { ListProvider } from './contexts/ListContext';

function RoutesApp() {
  return (
    <Router>
      <AuthProvider>
        <ListProvider>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cadastro/aluno" element={<CadastroAluno />} />
            <Route path="/cadastro/professor" element={<CadastroProfessor />} />

            <Route path="/home" element={<Home />} />
            <Route path="/pesquisa" element={<Search />} />
            <Route path="/professor/:idProfessor" element={<VisualizarProfessor />} />
            <Route path="/aluno/:idAluno" element={<VisualizarAluno />} />
            <Route path="/tcc/:idTCC" element={<VisualizarTCC />} />
            <Route path="/profile" element={<VisualizarMeuPerfil />} />

            <Route path="/professores" element={<ShortcutNavBar status="professores" />} />
            <Route path="/TCCs" element={<ShortcutNavBar status="TCCs" />} />
          </Routes>
        </ListProvider>
      </AuthProvider>
    </Router>
  );
}

export default RoutesApp;