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

## Imagenes

<img width="1179" height="2556" alt="image" src="https://github.com/user-attachments/assets/718ca73c-3c84-449c-8d05-096410893d33" />
<img width="1179" height="2556" alt="image" src="https://github.com/user-attachments/assets/f9fb4cb9-dbfe-44fa-bd9e-9d3345abc70f" />
<img width="1179" height="2556" alt="image" src="https://github.com/user-attachments/assets/d1422eb7-df4c-4442-b0be-a5cfa85790d4" />
<img width="1179" height="2556" alt="image" src="https://github.com/user-attachments/assets/2a8441a2-dd0e-444f-a40b-98c9d9f08a1e" />
<img width="1179" height="2556" alt="image" src="https://github.com/user-attachments/assets/b71e47fc-bcdb-4271-b768-c0be1713e0be" />




