import AsyncStorage from '@react-native-async-storage/async-storage';

// Clave para almacenar las tareas en AsyncStorage
const TODO_STORAGE_KEY = 'my_tasks';

// Funcion para guardar las tareas en el almacenamiento local
export const saveTasksToStorage = async (tasks) => {
  try {
    const tasksJson = JSON.stringify(tasks);
    await AsyncStorage.setItem(TODO_STORAGE_KEY, tasksJson);
  } catch (error) {
    console.error('Error al guardar tareas:', error);
  }
};

// Carga las tareas desde el almacenamiento local
export const loadTasksFromStorage = async () => {
  try {
    const tasksJson = await AsyncStorage.getItem(TODO_STORAGE_KEY);
    return tasksJson ? JSON.parse(tasksJson) : [];
  } catch (error) {
    console.error('Error al cargar tareas:', error);
    return [];
  }
};

// Limpia todas las tareas del almacenamiento local
export const clearTasksFromStorage = async () => {
  try {
    await AsyncStorage.removeItem(TODO_STORAGE_KEY);
  } catch (error) {
    console.error('Error al limpiar tareas:', error);
  }
};
