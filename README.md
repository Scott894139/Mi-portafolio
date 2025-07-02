# 🚀 Portafolio Profesional - Landing Page

Una landing page moderna y responsive creada con **React** y **Node.js** para mostrar tu perfil profesional como Ingeniero en Informática.

## ✨ Características

### 🎯 Secciones Incluidas
- **Inicio (Home)**: Presentación personal, título profesional y enlaces sociales
- **Sobre mí**: Descripción profesional, herramientas, idiomas y objetivo
- **Proyectos**: Showcases de proyectos con filtros por categoría
- **Habilidades**: Skills técnicas con barras de progreso animadas
- **Experiencia**: Timeline profesional con logros destacados
- **Contacto**: Formulario funcional y información de contacto

### 🛠️ Tecnologías Utilizadas
- **Frontend**: React 18, Framer Motion, React Router, Axios
- **Backend**: Node.js, Express, Nodemailer
- **Estilos**: CSS moderno con variables y responsive design
- **Iconos**: React Icons
- **Seguridad**: Helmet, Rate Limiting, CORS

### 🎨 Características de Diseño
- ✅ Diseño responsive para móviles, tablets y desktop
- ✅ Animaciones suaves con Framer Motion
- ✅ Tema moderno con gradientes y shadows
- ✅ Navegación smooth scroll
- ✅ Formulario de contacto funcional
- ✅ Descarga de CV
- ✅ Links a redes sociales

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de Gmail para el formulario de contacto

### 1. Clonar e Instalar Dependencias
```bash
# Instalar todas las dependencias
npm run install-all
```

### 2. Configurar Variables de Entorno
```bash
# Copiar el archivo de ejemplo
cp server/.env.example server/.env

# Editar las variables de entorno
nano server/.env
```

**Configurar Gmail para el formulario de contacto:**
1. Ve a tu cuenta de Google → Seguridad
2. Habilita la verificación en 2 pasos
3. Ve a "Contraseñas de aplicaciones"
4. Genera una nueva contraseña para "Correo"
5. Usa esa contraseña en `EMAIL_PASS`

### 3. Personalizar Contenido
Edita los siguientes archivos para personalizar tu información:

- `client/src/components/Home.js` - Tu nombre y descripción
- `client/src/components/About.js` - Información personal y herramientas
- `client/src/components/Projects.js` - Tus proyectos
- `client/src/components/Skills.js` - Tus habilidades técnicas
- `client/src/components/Experience.js` - Tu experiencia laboral
- `client/src/components/Contact.js` - Tu información de contacto

### 4. Agregar Tu CV
Coloca tu CV en PDF en: `server/public/cv.pdf`

### 5. Agregar Tu Foto
Coloca tu foto profesional en: `client/public/images/profile.jpg`

## 🖥️ Scripts de Desarrollo

```bash
# Desarrollo - Ejecuta cliente y servidor simultáneamente
npm run dev

# Solo el servidor (puerto 5000)
npm run server

# Solo el cliente (puerto 3000)
npm run client

# Build para producción
npm run build

# Ejecutar en producción
npm start
```

## 📁 Estructura del Proyecto

```
portafolio/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── App.js         # Componente principal
│   │   └── index.js       # Punto de entrada
│   └── public/            # Archivos públicos
├── server/                # Backend Node.js
│   ├── index.js          # Servidor Express
│   ├── .env              # Variables de entorno
│   └── public/           # CV y archivos estáticos
├── package.json          # Dependencias raíz
└── README.md            # Este archivo
```

## 🎨 Personalización Avanzada

### Cambiar Colores del Tema
Edita las variables CSS en `client/src/App.css`:
```css
:root {
  --primary-color: #2563eb;    /* Color principal */
  --secondary-color: #1e40af;  /* Color secundario */
  --accent-color: #3b82f6;     /* Color de acento */
}
```

### Agregar Nuevas Secciones
1. Crea un nuevo componente en `client/src/components/`
2. Importa y añade el componente en `client/src/App.js`
3. Agrega el enlace en el Navbar

### Modificar Animaciones
Las animaciones están configuradas con Framer Motion. Puedes:
- Cambiar duraciones en las propiedades `transition`
- Modificar tipos de animación en `initial` y `animate`
- Agregar nuevas animaciones con `whileHover` y `whileTap`

## 🚀 Despliegue

### Opción 1: Vercel (Frontend) + Railway (Backend)
1. Despliega el backend en Railway
2. Despliega el frontend en Vercel
3. Configura las variables de entorno en ambas plataformas

### Opción 2: Heroku (Full Stack)
```bash
# Instalar Heroku CLI y hacer login
heroku create tu-portafolio
heroku config:set NODE_ENV=production
heroku config:set EMAIL_USER=tu-email@gmail.com
heroku config:set EMAIL_PASS=tu-contraseña-app
git push heroku main
```

## 📱 Responsive Design

La landing page está optimizada para:
- 📱 **Mobile**: 320px - 768px
- 📟 **Tablet**: 768px - 1024px
- 🖥️ **Desktop**: 1024px+

## 🔧 Funcionalidades del Backend

- **Formulario de contacto**: Envío de emails con Nodemailer
- **Descarga de CV**: Endpoint para servir archivos PDF
- **Rate limiting**: Protección contra spam
- **CORS**: Configurado para desarrollo y producción
- **Seguridad**: Headers de seguridad con Helmet

## 🤝 Contribuciones

Si encuentras bugs o tienes sugerencias:
1. Abre un issue
2. Haz un fork del proyecto
3. Crea una rama para tu feature
4. Envía un pull request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para tu portafolio personal.

## 📞 Soporte

Si necesitas ayuda con la configuración:
- Revisa la documentación de cada tecnología
- Verifica que todas las dependencias estén instaladas
- Asegúrate de que las variables de entorno estén configuradas correctamente

---

¡Disfruta creando tu portafolio profesional! 🎉 