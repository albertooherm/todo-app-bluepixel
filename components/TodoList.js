import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import TodoItem from './TodoItem';

const TodoList = ({
  tasks,
  currentFilter,
  onToggleComplete,
  onDeleteTask,
}) => {
  // Filtra las tareas según el filtro actual
  const getFilteredTasks = () => {
    switch (currentFilter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  const renderTaskItem = ({ item }) => (
    <TodoItem
      task={item}
      onToggleComplete={onToggleComplete}
      onDeleteTask={onDeleteTask}
    />
  );

  const renderEmptyMessage = () => {
    let message = '';
    
    switch (currentFilter) {
      case 'completed':
        message = 'No hay tareas completadas';
        break;
      case 'pending':
        message = 'No hay tareas pendientes';
        break;
      default:
        message = 'No hay tareas. Agrega una nueva tarea para comenzar.';
    }

    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{message}</Text>
      </View>
    );
  };

  const filteredTasks = getFilteredTasks();

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTasks}
        renderItem={renderTaskItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyMessage}
        contentContainerStyle={
          filteredTasks.length === 0 ? styles.emptyListContainer : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 18,
    color: '#6c757d',
    textAlign: 'center',
    lineHeight: 26,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  emptyListContainer: {
    flex: 1,
  },
});

export default TodoList;
