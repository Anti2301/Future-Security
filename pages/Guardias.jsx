import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Card,
  CardContent,
  IconButton,
  Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Guardias() {
  const [guardias, setGuardias] = useState([
    {
      id: 1,
      nombre: "Carlos García López",
      email: "carlos@example.com",
      telefono: "+57 300 123 4567",
      turno: "Mañana",
      estado: "activo",
    },
    {
      id: 2,
      nombre: "María López Rodríguez",
      email: "maria@example.com",
      telefono: "+57 301 234 5678",
      turno: "Tarde",
      estado: "activo",
    },
    {
      id: 3,
      nombre: "Juan Rodríguez Martínez",
      email: "juan@example.com",
      telefono: "+57 302 345 6789",
      turno: "Noche",
      estado: "activo",
    },
    {
      id: 4,
      nombre: "Ana Martínez García",
      email: "ana@example.com",
      telefono: "+57 303 456 7890",
      turno: "Mañana",
      estado: "inactivo",
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    turno: "Mañana",
    estado: "activo",
  });

  const handleOpenDialog = () => {
    setEditingId(null);
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      turno: "Mañana",
      estado: "activo",
    });
    setOpenDialog(true);
  };

  const handleEditClick = (guardia) => {
    setEditingId(guardia.id);
    setFormData(guardia);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveGuardia = () => {
    if (!formData.nombre || !formData.email || !formData.telefono) {
      alert("Por favor completa todos los campos");
      return;
    }

    if (editingId) {
      setGuardias(
        guardias.map((g) => (g.id === editingId ? { ...formData, id: editingId } : g))
      );
    } else {
      setGuardias([
        ...guardias,
        { ...formData, id: Math.max(...guardias.map((g) => g.id), 0) + 1 },
      ]);
    }
    setOpenDialog(false);
  };

  const handleDeleteGuardia = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este guardia?")) {
      setGuardias(guardias.filter((g) => g.id !== id));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getStatusColor = (estado) => {
    return estado === "activo" ? "success" : "default";
  };

  const stats = [
    {
      label: "Total de Guardias",
      value: guardias.length,
      color: "#1976d2",
    },
    {
      label: "Activos",
      value: guardias.filter((g) => g.estado === "activo").length,
      color: "#388e3c",
    },
    {
      label: "Inactivos",
      value: guardias.filter((g) => g.estado === "inactivo").length,
      color: "#f57c00",
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Gestión de Guardias
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Administra el registro de guardias y su información de contacto
        </Typography>
      </Box>

      {/* Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <CardContent>
                <Typography color="textSecondary" variant="body2">
                  {stat.label}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: stat.color, my: 1 }}
                >
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Botón Agregar */}
      <Box sx={{ mb: 3 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenDialog}
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          Agregar Guardia
        </Button>
      </Box>

      {/* Tabla de Guardias */}
      <TableContainer
        component={Paper}
        sx={{ borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell sx={{ fontWeight: "bold" }}>Nombre</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Teléfono</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Turno Asignado</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Estado</TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {guardias.length > 0 ? (
              guardias.map((guardia) => (
                <TableRow key={guardia.id} hover>
                  <TableCell>{guardia.nombre}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <EmailIcon sx={{ fontSize: 18, color: "#1976d2" }} />
                      {guardia.email}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <PhoneIcon sx={{ fontSize: 18, color: "#388e3c" }} />
                      {guardia.telefono}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip label={guardia.turno} variant="outlined" size="small" />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={guardia.estado.charAt(0).toUpperCase() + guardia.estado.slice(1)}
                      color={getStatusColor(guardia.estado)}
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <IconButton
                      size="small"
                      onClick={() => handleEditClick(guardia)}
                      color="primary"
                    >
                      <EditIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteGuardia(guardia.id)}
                      color="error"
                    >
                      <DeleteIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: "center", py: 4 }}>
                  <Typography color="textSecondary">
                    No hay guardias registrados. Haz clic en "Agregar Guardia" para
                    crear uno.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog para Agregar/Editar */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingId ? "Editar Guardia" : "Agregar Nuevo Guardia"}
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <TextField
            fullWidth
            label="Nombre Completo"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Teléfono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            fullWidth
            select
            label="Turno Asignado"
            name="turno"
            value={formData.turno}
            onChange={handleInputChange}
            margin="normal"
            SelectProps={{
              native: true,
            }}
          >
            <option value="Mañana">Mañana</option>
            <option value="Tarde">Tarde</option>
            <option value="Noche">Noche</option>
          </TextField>
          <TextField
            fullWidth
            select
            label="Estado"
            name="estado"
            value={formData.estado}
            onChange={handleInputChange}
            margin="normal"
            SelectProps={{
              native: true,
            }}
          >
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button onClick={handleSaveGuardia} variant="contained">
            {editingId ? "Actualizar" : "Agregar"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Guardias;

