import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { RegisterStudent1 } from './pages/RegisterStudent1';
import { RegisterStudent2 } from './pages/RegisterStudent2';
import { RegisterTeacher1 } from './pages/RegisterTeacher1';
import { RegisterTeacher2 } from './pages/RegisterTeacher2';
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
            <Route path="/register" element={<Register />} />
            <Route path="/registerStudent" element={<RegisterStudent1 />} />
            <Route
              path="/registerStudent/page=1"
              element={<RegisterStudent1 />}
            />
            <Route
              path="/registerStudent/page=2"
              element={<RegisterStudent2 />}
            />
            <Route path="/registerTeacher" element={<RegisterTeacher1 />} />
            <Route
              path="/registerTeacher/page=1"
              element={<RegisterTeacher1 />}
            />
            <Route
              path="/registerTeacher/page=2"
              element={<RegisterTeacher2 />}
            />

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
