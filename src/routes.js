import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { CadastroAluno } from './pages/CadastroAluno';
import { CadastroProfessor } from './pages/CadastroProfessor';

import { Search } from './pages/Search';
import { VisualizarProfessor } from './pages/VisualizarProfessor';
import { VisualizarAluno } from './pages/VisualizarAluno';
import { VisualizarTCC } from './pages/VisualizarTCC';
import { ShortcutNavBar } from './pages/ShortcutNavBar';

import { Home } from './pages/Home';
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
            <Route path="/cadastroAluno" element={<CadastroAluno />} />
            <Route path="/cadastroProfessor" element={<CadastroProfessor />} />

            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/visualizarProfessor"
              element={<VisualizarProfessor />}
            />
            <Route path="/visualizarAluno" element={<VisualizarAluno />} />
            <Route path="/visualizarTCC" element={<VisualizarTCC />} />

            <Route
              path="/professores"
              element={<ShortcutNavBar status="professores" />}
            />
            <Route path="/TCCs" element={<ShortcutNavBar status="TCCs" />} />
          </Routes>
        </ListProvider>
      </AuthProvider>
    </Router>
  );
}

export default RoutesApp;
