import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Guardias from "./pages/Guardias";
import Turnos from "./pages/Turnos";
import Login from "./pages/Login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/guardias" element={<Guardias />} />
        <Route path="/turnos" element={<Turnos />} />
      </Routes>
    </BrowserRouter>
  );
}
