import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Alert,
  AlertTitle,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import EventNoteIcon from "@mui/icons-material/EventNote";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Dashboard() {
  const [openAlertsDialog, setOpenAlertsDialog] = React.useState(false);
  const [alerts, setAlerts] = React.useState([
    {
      id: 1,
      type: "error",
      title: "Turno sin cubrir",
      description: "El turno del 15/12 a las 22:00 no tiene guardia asignada",
      severity: "error",
      timestamp: "Hace 2 horas",
    },
    {
      id: 2,
      type: "warning",
      title: "Guardia con disponibilidad limitada",
      description: "Carlos García solo tiene 2 turnos disponibles esta semana",
      severity: "warning",
      timestamp: "Hace 4 horas",
    },
    {
      id: 3,
      type: "info",
      title: "Cambio de turno pendiente",
      description: "Juan Rodríguez solicitó cambio de turno para el 16/12",
      severity: "info",
    },
    {
      id: 4,
      type: "warning",
      title: "Guardia ausente",
      description: "María López no confirmó presencia para mañana",
      severity: "warning",
    },
    {
      id: 5,
      type: "error",
      title: "Conflicto de horarios",
      description: "Ana Martínez tiene turnos superpuestos el 17/12",
      severity: "error",
    },
  ]);

  const handleCloseAlert = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  const stats = [
    {
      title: "Guardias Registrados",
      value: "42",
      icon: <SecurityIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      bg: "#e3f2fd",
      details: "+3 este mes",
    },
    {
      title: "Turnos Programados",
      value: "156",
      icon: <EventNoteIcon sx={{ fontSize: 40, color: "#388e3c" }} />,
      bg: "#e8f5e9",
      details: "85% cubiertos",
    },
    {
      title: "Alertas Activas",
      value: alerts.length,
      icon: <WarningIcon sx={{ fontSize: 40, color: "#f57c00" }} />,
      bg: "#fff3e0",
      details: "Requieren atención",
    },
    {
      title: "Eficiencia",
      value: "92%",
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#7b1fa2" }} />,
      bg: "#f3e5f5",
      details: "Óptima",
    },
  ];

  const recentTurnos = [
    {
      id: 1,
      guardia: "Carlos García",
      turno: "Mañana",
      fecha: "2025-12-15",
      estado: "confirmado",
    },
    {
      id: 2,
      guardia: "María López",
      turno: "Tarde",
      fecha: "2025-12-15",
      estado: "confirmado",
    },
    {
      id: 3,
      guardia: "Juan Rodríguez",
      turno: "Noche",
      fecha: "2025-12-15",
      estado: "pendiente",
    },
    {
      id: 4,
      guardia: "Ana Martínez",
      turno: "Mañana",
      fecha: "2025-12-16",
      estado: "confirmado",
    },
    {
      id: 5,
      guardia: "Pedro Sánchez",
      turno: "Tarde",
      fecha: "2025-12-16",
      estado: "confirmado",
    },
  ];

  const getStatusColor = (status) => {
    return status === "confirmado" ? "success" : "warning";
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Dashboard
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Bienvenido al Sistema de Gestión de Turnos. Visualiza aquí el estado
          general del sistema.
        </Typography>
      </Box>

      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card
              onClick={() => {
                if (stat.title === "Alertas Activas") {
                  setOpenAlertsDialog(true);
                }
              }}
              sx={{
                backgroundColor: stat.bg,
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.3s",
                cursor: stat.title === "Alertas Activas" ? "pointer" : "default",
                "&:hover": {
                  transform: stat.title === "Alertas Activas" ? "translateY(-8px)" : "none",
                  boxShadow: stat.title === "Alertas Activas" ? "0 8px 16px rgba(0,0,0,0.15)" : "0 2px 8px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <Typography color="textSecondary" variant="body2">
                      {stat.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", my: 1 }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {stat.details}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Chart Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Cobertura de Turnos por Día
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="body2">Lunes 15</Typography>
                <Typography variant="body2">100%</Typography>
              </Box>
              <LinearProgress variant="determinate" value={100} sx={{ mb: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="body2">Martes 16</Typography>
                <Typography variant="body2">85%</Typography>
              </Box>
              <LinearProgress variant="determinate" value={85} sx={{ mb: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="body2">Miércoles 17</Typography>
                <Typography variant="body2">72%</Typography>
              </Box>
              <LinearProgress variant="determinate" value={72} />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Distribución de Turnos
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Box sx={{ flex: 1, minWidth: 120 }}>
                <Typography variant="body2" color="textSecondary">
                  Turno Mañana
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                  45
                </Typography>
              </Box>
              <Box sx={{ flex: 1, minWidth: 120 }}>
                <Typography variant="body2" color="textSecondary">
                  Turno Tarde
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#388e3c" }}>
                  52
                </Typography>
              </Box>
              <Box sx={{ flex: 1, minWidth: 120 }}>
                <Typography variant="body2" color="textSecondary">
                  Turno Noche
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#f57c00" }}>
                  59
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Tabla de Turnos Recientes */}
      <Paper sx={{ borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Turnos Recientes
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>Guardia</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Turno</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Fecha</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentTurnos.map((turno) => (
                  <TableRow key={turno.id} hover>
                    <TableCell>{turno.guardia}</TableCell>
                    <TableCell>{turno.turno}</TableCell>
                    <TableCell>{turno.fecha}</TableCell>
                    <TableCell>
                      <Chip
                        label={turno.estado.charAt(0).toUpperCase() + turno.estado.slice(1)}
                        color={getStatusColor(turno.estado)}
                        variant="outlined"
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>

      {/* Diálogo de Alertas */}
      <Dialog
        open={openAlertsDialog}
        onClose={() => setOpenAlertsDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold" }}>
          Alertas del Sistema
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          {alerts.length > 0 ? (
            <List sx={{ width: "100%" }}>
              {alerts.map((alert, idx) => (
                <React.Fragment key={alert.id}>
                  <ListItem
                    sx={{
                      backgroundColor: alert.type === "error" ? "#ffebee" : alert.type === "warning" ? "#fff3e0" : "#e3f2fd",
                      borderRadius: 1,
                      mb: 1,
                      border: `1px solid ${alert.type === "error" ? "#ffcdd2" : alert.type === "warning" ? "#ffe0b2" : "#bbdefb"}`,
                      transition: "all 0.2s",
                      "&:hover": {
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <ListItemIcon>
                      {alert.type === "error" ? (
                        <ErrorIcon sx={{ color: "#d32f2f", fontSize: 28 }} />
                      ) : alert.type === "warning" ? (
                        <WarningIcon sx={{ color: "#f57c00", fontSize: 28 }} />
                      ) : (
                        <InfoIcon sx={{ color: "#1976d2", fontSize: 28 }} />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={<Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>{alert.title}</Typography>}
                      secondary={
                        <Box>
                          <Typography variant="caption" sx={{ display: "block", mt: 0.5 }}>
                            {alert.description}
                          </Typography>
                          <Typography variant="caption" color="textSecondary" sx={{ display: "block", mt: 0.5 }}>
                            {alert.timestamp}
                          </Typography>
                        </Box>
                      }
                    />
                    <Chip
                      label={alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                      size="small"
                      color={alert.type === "error" ? "error" : alert.type === "warning" ? "warning" : "info"}
                      variant="outlined"
                      sx={{ ml: 1 }}
                    />
                  </ListItem>
                  {idx < alerts.length - 1 && <Divider sx={{ my: 1 }} />}
                </React.Fragment>
              ))}
            </List>
          ) : (
            <Typography color="textSecondary" sx={{ textAlign: "center", py: 3 }}>
              No hay alertas en este momento
            </Typography>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={() => setOpenAlertsDialog(false)}
            variant="contained"
            color="primary"
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Dashboard;
