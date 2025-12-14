import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Guardias from "./pages/Guardias";
import Turnos from "./pages/Turnos";
import Login from "./pages/Login";
import Documentation from "./pages/Documentation";
import Layout from "./components/Layout";

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  if (isLoginPage) {
    return <Login />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/guardias" element={<Guardias />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/documentacion" element={<Documentation />} />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
