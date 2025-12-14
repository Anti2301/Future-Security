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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SecurityIcon from "@mui/icons-material/Security";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Turnos() {
  const [turnos, setTurnos] = useState([
    {
      id: 1,
      fecha: "2025-12-15",
      guardia: "Carlos García",
      turno: "Mañana",
      hora_inicio: "06:00",
      hora_fin: "14:00",
      estado: "confirmado",
    },
    {
      id: 2,
      fecha: "2025-12-15",
      guardia: "María López",
      turno: "Tarde",
      hora_inicio: "14:00",
      hora_fin: "22:00",
      estado: "confirmado",
    },
    {
      id: 3,
      fecha: "2025-12-15",
      guardia: "Juan Rodríguez",
      turno: "Noche",
      hora_inicio: "22:00",
      hora_fin: "06:00",
      estado: "pendiente",
    },
    {
      id: 4,
      fecha: "2025-12-16",
      guardia: "Ana Martínez",
      turno: "Mañana",
      hora_inicio: "06:00",
      hora_fin: "14:00",
      estado: "confirmado",
    },
    {
      id: 5,
      fecha: "2025-12-16",
      guardia: "Pedro Sánchez",
      turno: "Tarde",
      hora_inicio: "14:00",
      hora_fin: "22:00",
      estado: "confirmado",
    },
    {
      id: 6,
      fecha: "2025-12-16",
      guardia: "Rosa García",
      turno: "Noche",
      hora_inicio: "22:00",
      hora_fin: "06:00",
      estado: "confirmado",
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [filterFecha, setFilterFecha] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [formData, setFormData] = useState({
    fecha: "",
    guardia: "",
    turno: "Mañana",
    hora_inicio: "06:00",
    hora_fin: "14:00",
    estado: "confirmado",
  });

  const guardiasList = [
    "Carlos García",
    "María López",
    "Juan Rodríguez",
    "Ana Martínez",
    "Pedro Sánchez",
    "Rosa García",
  ];

  const handleOpenDialog = () => {
    setEditingId(null);
    setFormData({
      fecha: "",
      guardia: "",
      turno: "Mañana",
      hora_inicio: "06:00",
      hora_fin: "14:00",
      estado: "confirmado",
    });
    setOpenDialog(true);
  };

  const handleEditClick = (turno) => {
    setEditingId(turno.id);
    setFormData(turno);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveTurno = () => {
    if (!formData.fecha || !formData.guardia) {
      setSnackbarMessage("Por favor completa los campos requeridos");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    if (editingId) {
      setTurnos(
        turnos.map((t) => (t.id === editingId ? { ...formData, id: editingId } : t))
      );
      setSnackbarMessage(`✓ Turno actualizado para ${formData.guardia}`);
    } else {
      setTurnos([
        ...turnos,
        { ...formData, id: Math.max(...turnos.map((t) => t.id), 0) + 1 },
      ]);
      setSnackbarMessage(`✓ ${formData.guardia} ha sido asignado al turno ${formData.turno} del ${formData.fecha}`);
    }
    
    setSnackbarSeverity("success");
    setOpenSnackbar(true);
    setOpenDialog(false);
  };

  const handleDeleteTurno = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este turno?")) {
      setTurnos(turnos.filter((t) => t.id !== id));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getStatusColor = (estado) => {
    return estado === "confirmado" ? "success" : "warning";
  };

  const getTurnoColor = (turno) => {
    switch (turno) {
      case "Mañana":
        return "#FFA500";
      case "Tarde":
        return "#1976d2";
      case "Noche":
        return "#263238";
      default:
        return "#666";
    }
  };

  const filteredTurnos = filterFecha
    ? turnos.filter((t) => t.fecha === filterFecha)
    : turnos;

  const stats = [
    {
      label: "Turnos Programados",
      value: turnos.length,
      icon: <CalendarMonthIcon sx={{ fontSize: 32, color: "#1976d2" }} />,
    },
    {
      label: "Confirmados",
      value: turnos.filter((t) => t.estado === "confirmado").length,
      icon: <SecurityIcon sx={{ fontSize: 32, color: "#388e3c" }} />,
    },
    {
      label: "Pendientes",
      value: turnos.filter((t) => t.estado === "pendiente").length,
      icon: <ScheduleIcon sx={{ fontSize: 32, color: "#f57c00" }} />,
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Calendario de Turnos
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Gestiona y visualiza los turnos asignados a los guardias
        </Typography>
      </Box>

      {/* Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Typography color="textSecondary" variant="body2">
                  {stat.label}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold", my: 1 }}>
                  {stat.value}
                </Typography>
              </CardContent>
              <Box sx={{ pr: 2 }}>{stat.icon}</Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Controles */}
      <Box sx={{ mb: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
        <TextField
          type="date"
          value={filterFecha}
          onChange={(e) => setFilterFecha(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ width: 200 }}
        />
        {filterFecha && (
          <Button
            variant="outlined"
            onClick={() => setFilterFecha("")}
            size="small"
          >
            Limpiar filtro
          </Button>
        )}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenDialog}
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          Agregar Turno
        </Button>
      </Box>

      {/* Tabla de Turnos */}
      <TableContainer
        component={Paper}
        sx={{ borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell sx={{ fontWeight: "bold" }}>Fecha</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Guardia</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Turno</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Horario</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Estado</TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTurnos.length > 0 ? (
              filteredTurnos.map((turno) => (
                <TableRow key={turno.id} hover>
                  <TableCell>
                    <strong>{turno.fecha}</strong>
                  </TableCell>
                  <TableCell>{turno.guardia}</TableCell>
                  <TableCell>
                    <Chip
                      label={turno.turno}
                      sx={{
                        backgroundColor: getTurnoColor(turno.turno),
                        color: "white",
                        fontWeight: "bold",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    {turno.hora_inicio} - {turno.hora_fin}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={
                        turno.estado.charAt(0).toUpperCase() + turno.estado.slice(1)
                      }
                      color={getStatusColor(turno.estado)}
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <IconButton
                      size="small"
                      onClick={() => handleEditClick(turno)}
                      color="primary"
                    >
                      <EditIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteTurno(turno.id)}
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
                    No hay turnos para la fecha seleccionada
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
          {editingId ? "Editar Turno" : "Agregar Nuevo Turno"}
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <TextField
            fullWidth
            type="date"
            label="Fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleInputChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Guardia</InputLabel>
            <Select
              name="guardia"
              value={formData.guardia}
              onChange={handleInputChange}
              label="Guardia"
            >
              {guardiasList.map((g) => (
                <MenuItem key={g} value={g}>
                  {g}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Turno</InputLabel>
            <Select
              name="turno"
              value={formData.turno}
              onChange={handleInputChange}
              label="Turno"
            >
              <MenuItem value="Mañana">Mañana (06:00 - 14:00)</MenuItem>
              <MenuItem value="Tarde">Tarde (14:00 - 22:00)</MenuItem>
              <MenuItem value="Noche">Noche (22:00 - 06:00)</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            type="time"
            label="Hora Inicio"
            name="hora_inicio"
            value={formData.hora_inicio}
            onChange={handleInputChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            type="time"
            label="Hora Fin"
            name="hora_fin"
            value={formData.hora_fin}
            onChange={handleInputChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Estado</InputLabel>
            <Select
              name="estado"
              value={formData.estado}
              onChange={handleInputChange}
              label="Estado"
            >
              <MenuItem value="confirmado">Confirmado</MenuItem>
              <MenuItem value="pendiente">Pendiente</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button onClick={handleSaveTurno} variant="contained">
            {editingId ? "Actualizar" : "Agregar"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar de Notificación */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{
            width: "100%",
            fontSize: "1rem",
            fontWeight: "500",
            borderRadius: 1,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
          icon={snackbarSeverity === "success" ? <CheckCircleIcon /> : undefined}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Turnos;

