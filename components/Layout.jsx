import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SecurityIcon from "@mui/icons-material/Security";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DRAWER_WIDTH = 280;

export default function Layout({ children }) {
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
    {
      label: "Guardias",
      icon: <SecurityIcon />,
      path: "/guardias",
    },
    {
      label: "Turnos",
      icon: <EventNoteIcon />,
      path: "/turnos",
    },
    {
      label: "Documentación",
      icon: <DocumentScannerIcon />,
      path: "/documentacion",
    },
  ];

  const handleDrawerToggle = () => setOpen(!open);
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${open ? DRAWER_WIDTH : 0}px)` },
          ml: { sm: `${open ? DRAWER_WIDTH : 0}px` },
          transition: (theme) =>
            theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          backgroundColor: "#1a237e",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            onClick={() => navigate("/dashboard")}
            sx={{
              width: 50,
              height: 50,
              mr: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Shield Background */}
              <path
                d="M40 5 L65 15 L65 40 C65 58 40 75 40 75 C40 75 15 58 15 40 L15 15 Z"
                fill="url(#shieldGradient2)"
                stroke="white"
                strokeWidth="1.5"
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
                  id="shieldGradient2"
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

          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Future Security
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              Sistema de Gestión de Turnos
            </Typography>
          </Box>

          <IconButton
            color="inherit"
            onClick={handleMenuOpen}
            sx={{ borderRadius: 1 }}
          >
            <AccountCircleIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem disabled>
              <Typography variant="body2">
                <strong>admin@example.com</strong>
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <LogoutIcon sx={{ mr: 1 }} />
              Cerrar Sesión
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Drawer Lateral */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            backgroundColor: "#263238",
            color: "white",
            mt: 8,
            border: "none",
          },
          display: { xs: "none", sm: "block" },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            MENÚ PRINCIPAL
          </Typography>
        </Box>
        <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.path}
              onClick={() => navigate(item.path)}
              sx={{
                backgroundColor:
                  location.pathname === item.path
                    ? "rgba(33, 150, 243, 0.2)"
                    : "transparent",
                borderLeft:
                  location.pathname === item.path ? "4px solid #2196F3" : "none",
                pl: location.pathname === item.path ? 1 : 2,
                "&:hover": {
                  backgroundColor: "rgba(33, 150, 243, 0.1)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "0.95rem",
                    fontWeight:
                      location.pathname === item.path ? "bold" : "normal",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)", my: 2 }} />

        <Box sx={{ p: 2 }}>
          <Typography variant="caption" sx={{ opacity: 0.6 }}>
            v1.0.0 • 2025
          </Typography>
        </Box>
      </Drawer>

      {/* Contenido Principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { xs: "100%", sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          mt: 8,
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
