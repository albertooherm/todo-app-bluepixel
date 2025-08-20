# Todo App

Aplicación móvil para gestionar tareas.

## Características

- Crear, editar y eliminar tareas
- Marcar tareas como completadas
- Filtrar tareas por estado (todas, pendientes, completadas)
- Almacenamiento local

## Tecnologías Utilizadas

- Expo
- AsyncStorage para persistencia de datos

## Instalación

1. Clona el repositorio:
```bash
git clone [https://github.com/albertooherm/todo-app-bluepixel]
cd todo-app
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta la aplicación:
```bash
npm start
```

## Estructura del Proyecto

```
todo-app/
├── App.js                 
├── screens/
│   └── HomeScreen.js      # Pantalla principal
├── components/
│   ├── TodoInput.js       # Componente para agregar tareas
│   ├── TodoList.js        # Lista de tareas
│   ├── TodoItem.js        # Item individual de tarea
│   ├── TaskFilter.js      # Filtros de tareas
│   └── EditTaskModal.js   # Modal para editar tareas
└── storage/
    └── storaje.js         # Funciones de almacenamiento local
```

## Funcionalidades

### Gestión de Tareas
- Agregar nuevas tareas con validación de entrada
- Editar el título de tareas existentes
- Eliminar tareas con confirmación
- Marcar/desmarcar tareas como completadas

### Filtros
- Ver todas las tareas
- Ver solo tareas pendientes
- Ver solo tareas completadas

## Video de Demostración

[Video]
