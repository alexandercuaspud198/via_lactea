# 🌌 Proyecto Vía Láctea

Este proyecto es una plataforma de turismo rural y astroturismo para el municipio de Guachucal, Nariño.  
Incluye módulos para visualización de eventos, sostenibilidad, tienda rural y experiencias en el páramo.  

---

## 📂 Estructura del Proyecto

```

vialactea/
│
├── backend/         # API y lógica del servidor
├── frontend/        # Interfaz de usuario (React + CRACO)
├── tests/           # Pruebas y documentación de testing
├── .gitignore
├── README.md
└── yarn.lock

````

---

## 🚀 Instalación y Ejecución

Sigue estos pasos para instalar y correr el proyecto en tu máquina:

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/alexandercuaspud198/vialactea.git
cd vialactea/frontend
````

### 2️⃣ Limpiar instalación previa (opcional)

Si ya habías instalado dependencias antes:

```bash
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json -ErrorAction SilentlyContinue
```

### 3️⃣ Instalar dependencias

```bash
npm install --legacy-peer-deps
npm install ajv@6 ajv-keywords@3 --save --legacy-peer-deps
```

### 4️⃣ Ejecutar el proyecto

```bash
npm start
```

Luego abre en tu navegador:

```
http://localhost:3000
```

---

## 🛠 Requisitos

* Node.js v16, v18 o v20 (recomendado usar [NVM](https://github.com/coreybutler/nvm-windows) para manejar versiones)
* npm v9 o superior

---

## 👨‍💻 Tecnologías Usadas

* React (con [CRACO](https://github.com/dilanx/craco) para configuración personalizada)
* Node.js
* Yarn / npm
* date-fns para manejo de fechas
* react-day-picker para calendarios interactivos
