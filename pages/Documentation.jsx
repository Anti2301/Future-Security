import React from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Documentation() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <DocumentScannerIcon sx={{ mr: 2 }} />
          <Typography variant="h6">Documentación del Proyecto</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            Guard Assignment - Sistema de Gestión de Turnos
          </Typography>

          <Section
            title="1. Descripción del Proyecto"
            content="Guard Assignment es un sistema web de gestión de turnos de seguridad que permite administrar guardias, asignar turnos, gestionar cambios y monitorear alertas de manera centralizada. Cuenta con una interfaz profesional con autenticación, dashboard interactivo y notificaciones en tiempo real."
          />

          <Section title="2. Características Principales">
            <SubSection title="Autenticación y Seguridad">
              <List dense>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Login con validación de credenciales (admin@example.com / 123456)" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Sesiones seguras y cierre de sesión" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Interfaz protegida con rutas privadas" />
                </ListItem>
              </List>
            </SubSection>

            <SubSection title="Dashboard Interactivo">
              <List dense>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Tarjetas de estadísticas (Guardias, Turnos, Alertas, Eficiencia)" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Gráfico de cobertura de turnos" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Tabla de turnos recientes" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Sistema de alertas clickeable con modal detallado" />
                </ListItem>
              </List>
            </SubSection>

            <SubSection title="Gestión de Guardias">
              <List dense>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Tabla con listado de guardias" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Agregar nuevos guardias con validación" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Editar información de guardias" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Eliminar guardias con confirmación" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Mostrar contacto y estado de cada guardia" />
                </ListItem>
              </List>
            </SubSection>

            <SubSection title="Calendario de Turnos">
              <List dense>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Tabla profesional de turnos con fechas y horarios" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Filtrado por fecha" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Asignación de turnos (Mañana, Tarde, Noche)" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Notificación de confirmación al asignar guardias" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Estados: Confirmado y Pendiente" />
                </ListItem>
              </List>
            </SubSection>

            <SubSection title="Navegación y Branding">
              <List dense>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Logo SVG profesional 'Future Security'" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Sidebar persistente con menú de navegación" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="AppBar con logo clickeable (retorna al dashboard)" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Menú de usuario con opción de cierre de sesión" />
                </ListItem>
              </List>
            </SubSection>

            <SubSection title="Sistema de Alertas">
              <List dense>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Alertas con diferentes niveles de severidad (Error, Warning, Info)" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Modal interactivo para visualizar alertas detalladas" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Timestamp de cada alerta" />
                </ListItem>
                <ListItem>
                  <CheckCircleIcon sx={{ mr: 1, color: "success.main" }} />
                  <ListItemText primary="Iconografía y códigos de color por tipo de alerta" />
                </ListItem>
              </List>
            </SubSection>
          </Section>

          <Divider sx={{ my: 3 }} />

          <Section title="3. Stack Tecnológico">
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Frontend
            </Typography>
            <List dense>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "primary.main" }} />
                <ListItemText primary="React (v18.2.0) - Interfaz interactiva con hooks y componentes funcionales" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "primary.main" }} />
                <ListItemText primary="React Router DOM (v7.10.1) - Enrutamiento SPA" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "primary.main" }} />
                <ListItemText primary="Vite - Bundler rápido con hot module reload" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "primary.main" }} />
                <ListItemText primary="Material UI (v5.14.0) - Componentes profesionales y accesibles" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "primary.main" }} />
                <ListItemText primary="MUI Icons - Iconografía profesional" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "primary.main" }} />
                <ListItemText primary="Zustand (v4.4.0) - Gestión de estado global" />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3, mb: 2 }}>
              Características Técnicas
            </Typography>
            <List dense>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "warning.main" }} />
                <ListItemText primary="CSS-in-JS con Sistema X de MUI" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "warning.main" }} />
                <ListItemText primary="Notificaciones con Snackbar y Alert" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "warning.main" }} />
                <ListItemText primary="Diálogos modales para CRUD" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "warning.main" }} />
                <ListItemText primary="Tablas interactivas con filtrado" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "warning.main" }} />
                <ListItemText primary="Gráficos con Chart.js / recharts" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "warning.main" }} />
                <ListItemText primary="Responsive Design (Mobile First)" />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3, mb: 2 }}>
              Herramientas de Desarrollo
            </Typography>
            <List dense>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "info.main" }} />
                <ListItemText primary="Git - Control de versiones" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "info.main" }} />
                <ListItemText primary="npm - Gestor de paquetes" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "info.main" }} />
                <ListItemText primary="VS Code - IDE de desarrollo" />
              </ListItem>
              <ListItem>
                <CheckCircleIcon sx={{ mr: 1, color: "info.main" }} />
                <ListItemText primary="Figma - Prototipos de diseño" />
              </ListItem>
            </List>
          </Section>

          <Divider sx={{ my: 3 }} />

          <Section title="4. Estructura del Proyecto">
            <Box
              component="pre"
              sx={{
                backgroundColor: "#f5f5f5",
                p: 2,
                borderRadius: 1,
                overflow: "auto",
                fontSize: "0.85rem",
              }}
            >
              {`src/
  ├── App.jsx                    # Componente principal con rutas
  ├── main.jsx                   # Punto de entrada de la aplicación
  ├── Index.js                   # Configuración inicial
  ├── routes.jsx                 # Definición de rutas
  │
  ├── /pages                     # Páginas principales
  │   ├── Login.jsx              # Autenticación
  │   ├── Dashboard.jsx          # Panel principal con estadísticas
  │   ├── Guardias.jsx           # Gestión de guardias (CRUD)
  │   ├── Turnos.jsx             # Calendario y gestión de turnos
  │   └── Documentation.jsx      # Documentación del proyecto
  │
  ├── /components                # Componentes reutilizables
  │   ├── Layout.jsx             # Estructura (AppBar + Sidebar)
  │   ├── Navbar.jsx             # Barra de navegación
  │   ├── Sidebar.jsx            # Menú lateral
  │   ├── Button.jsx             # Botón personalizado
  │   ├── Card.jsx               # Tarjeta componente
  │   └── logo.svg               # Logo Future Security
  │
  ├── /assets                    # Recursos estáticos
  │   ├── /images                # Imágenes del proyecto
  │   │   └── logo.svg
  │   └── /styles
  │       └── main.css           # Estilos globales
  │
  ├── /utils                     # Funciones auxiliares
  │   └── mockData.js            # Datos de prueba
  │
  └── index.html                 # Punto de entrada HTML

/public                          # Archivos públicos estáticos
/docs                            # Documentación adicional
/figma                           # Prototipos Figma
/wireframes                       # Bocetos de baja fidelidad
/gestion-turnos                  # Carpeta legacy (referencia)`}
            </Box>
          </Section>

          <Divider sx={{ my: 3 }} />

          <Section title="5. Guía de Uso">
            <SubSection title="Acceso al Sistema">
              <Box sx={{ backgroundColor: "#f5f5f5", p: 2, borderRadius: 1, mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Credenciales de Demo:</strong>
                </Typography>
                <Typography variant="body2">Email: admin@example.com</Typography>
                <Typography variant="body2">Contraseña: 123456</Typography>
              </Box>
            </SubSection>

            <SubSection title="Navegación Principal">
              <List dense>
                <ListItem>
                  <Typography variant="body2">
                    <strong>Dashboard:</strong> Vista general con estadísticas y alertas
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2">
                    <strong>Guardias:</strong> Gestión completa de guardias de seguridad
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2">
                    <strong>Turnos:</strong> Calendario y asignación de turnos laborales
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2">
                    <strong>Documentación:</strong> Esta página con información del proyecto
                  </Typography>
                </ListItem>
              </List>
            </SubSection>

            <SubSection title="Funcionalidades Clave">
              <List dense>
                <ListItem>
                  <Typography variant="body2">
                    ✓ <strong>Alertas Interactivas:</strong> Haz click en la tarjeta de alertas para ver detalles
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2">
                    ✓ <strong>Notificaciones:</strong> Confirmación visual al agregar/editar guardias o turnos
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2">
                    ✓ <strong>Filtrado de Turnos:</strong> Busca turnos por fecha específica
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2">
                    ✓ <strong>Logo Clickeable:</strong> Retorna al dashboard desde cualquier página
                  </Typography>
                </ListItem>
              </List>
            </SubSection>
          </Section>

          <Box sx={{ mt: 4, p: 2, backgroundColor: "#e3f2fd", borderRadius: 1 }}>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              <strong>Estado:</strong> ✓ Sistema funcional con todas las características principales implementadas
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

function Section({ title, content, children }) {
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: "bold", mt: 3, mb: 2 }}>
        {title}
      </Typography>
      {content && <Typography paragraph>{content}</Typography>}
      {children}
    </>
  );
}

function SubSection({ title, children }) {
  return (
    <Box sx={{ ml: 2, mt: 2, mb: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
