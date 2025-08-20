import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import TaskFilter from '../components/TaskFilter';
import {
  saveTasksToStorage,
  loadTasksFromStorage,
} from '../storage/storaje.js';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Carga las tareas desde el almacenamiento local al iniciar la app
  useEffect(() => {
    loadTasksFromStorage()
      .then(loadedTasks => {
        setTasks(loadedTasks);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar tareas:', error);
        setIsLoading(false);
      });
  }, []);

  // Guarda las tareas en el almacenamiento local cuando cambian
  useEffect(() => {
    if (!isLoading) {
      saveTasksToStorage(tasks);
    }
  }, [tasks, isLoading]);

  const handleAddTask = (newTask) => {
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleFilterChange = (filterType) => {
    setCurrentFilter(filterType);
  };

  // Calcula las estadísticas de las tareas
  const getTaskStats = () => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    
    return { totalTasks, completedTasks, pendingTasks };
  };

  const { totalTasks, completedTasks, pendingTasks } = getTaskStats();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Cargando tareas...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista de Tareas</Text>
        <Text style={styles.headerSubtitle}>
          {totalTasks} tarea{totalTasks !== 1 ? 's' : ''} en total
        </Text>
      </View>

      <TodoInput onAddTask={handleAddTask} />

      <TaskFilter
        currentFilter={currentFilter}
        onFilterChange={handleFilterChange}
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        pendingTasks={pendingTasks}
      />

      <TodoList
        tasks={tasks}
        currentFilter={currentFilter}
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  loadingText: {
    fontSize: 18,
    color: '#495057',
    fontWeight: '500',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6c757d',
    fontWeight: '400',
  },
});

export default HomeScreen;
