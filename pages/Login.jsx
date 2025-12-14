import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Alert,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }
    // Simple validation (en producción usar API real)
    if (email === "admin@example.com" && password === "123456") {
      navigate("/dashboard");
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7aa8d8 100%)",
        backgroundAttachment: "fixed",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(30, 60, 114, 0.3) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              width: "100%",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              borderRadius: 3,
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              {/* Header */}
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Shield Background */}
                    <path
                      d="M40 5 L65 15 L65 40 C65 58 40 75 40 75 C40 75 15 58 15 40 L15 15 Z"
                      fill="url(#shieldGradient)"
                      stroke="#1e3c72"
                      strokeWidth="2"
                    />
                    
                    {/* Left F letter */}
                    <text
                      x="28"
                      y="48"
                      fontSize="32"
                      fontWeight="bold"
                      fill="white"
                      fontFamily="Arial, sans-serif"
                    >
                      F
                    </text>
                    
                    {/* Right Checkmark */}
                    <path
                      d="M48 40 L52 45 L60 35"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    
                    {/* Gradient Definition */}
                    <defs>
                      <linearGradient
                        id="shieldGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#1e3c72" />
                        <stop offset="100%" stopColor="#2a5298" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Box>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: "bold", 
                    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 1
                  }}
                >
                  Future Security
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Sistema de Gestión de Turnos
                </Typography>
              </Box>

              {error && (
                <Alert 
                  severity="error" 
                  sx={{ 
                    mb: 3,
                    borderRadius: 2,
                    backgroundColor: "#ffebee",
                    color: "#c62828",
                    border: "1px solid #ef5350",
                    "& .MuiAlert-icon": {
                      color: "#c62828",
                    },
                  }}
                >
                  {error}
                </Alert>
              )}

              <form onSubmit={handleLogin}>
                <TextField
                  fullWidth
                  label="Correo Electrónico"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  margin="normal"
                  variant="outlined"
                  placeholder="admin@example.com"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: "text.secondary", mr: 1 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "#f5f5f5",
                      transition: "all 0.3s",
                      "&:hover": {
                        backgroundColor: "#f9ebebff",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "white",
                        "& fieldset": {
                          borderColor: "#2a5298",
                          borderWidth: 2,
                        },
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Contraseña"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  margin="normal"
                  variant="outlined"
                  placeholder="••••••••"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box
                          onClick={() => setShowPassword(!showPassword)}
                          sx={{ cursor: "pointer", color: "text.secondary" }}
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "#f5f5f5",
                      transition: "all 0.3s",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "white",
                        "& fieldset": {
                          borderColor: "#2a5298",
                          borderWidth: 2,
                        },
                      },
                    },
                  }}
                />

                <FormControlLabel
                  control={
                      <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      sx={{
                        color: "#2a5298",
                        "&.Mui-checked": {
                          color: "#2a5298",
                        },
                      }}
                    />
                  }
                  label="Recuérdame"
                  sx={{ my: 2, color: "text.secondary" }}
                />

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: "bold",
                    borderRadius: 2,
                    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                    textTransform: "none",
                    boxShadow: "0 10px 30px rgba(30, 60, 114, 0.4)",
                    transition: "all 0.3s",
                    "&:hover": {
                      boxShadow: "0 15px 40px rgba(30, 60, 114, 0.5)",
                      transform: "translateY(-2px)",
                    },
                    "&:active": {
                      transform: "translateY(0)",
                    },
                  }}
                  type="submit"
                >
                  Iniciar Sesión
                </Button>
              </form>

              {/* Demo Info */}
              <Box
                sx={{
                  mt: 3,
                  p: 2,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: "bold", color: "#2a5298" }}>
                  🔐 Credenciales de Demostración
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1, color: "text.secondary" }}>
                  Email: <strong>admin@example.com</strong>
                </Typography>
                <Typography variant="caption" display="block" sx={{ color: "text.secondary" }}>
                  Contraseña: <strong>123456</strong>
                </Typography>
              </Box>

              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Typography variant="caption" color="textSecondary">
                  ¿Necesitas ayuda? Contacta al administrador
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
