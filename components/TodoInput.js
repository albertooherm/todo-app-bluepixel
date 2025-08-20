import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

const TodoInput = ({ onAddTask }) => {
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    // Validar que el texto no esté vacío
    if (newTaskText.trim().length === 0) {
      Alert.alert('Error', 'Por favor ingresa el título de la tarea');
      return;
    }

    // Crear nueva tarea con estructura consistente
    const newTask = {
      id: Date.now().toString(),
      title: newTaskText.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    onAddTask(newTask);
    setNewTaskText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Agregar nueva tarea..."
        value={newTaskText}
        onChangeText={setNewTaskText}
        onSubmitEditing={handleAddTask}
        returnKeyType="done"
        maxLength={100}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddTask}
        activeOpacity={0.7}
      >
        <Text style={styles.addButtonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  textInput: {
    flex: 1,
    height: 48,
    borderWidth: 1.5,
    borderColor: '#e9ecef',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginRight: 12,
    backgroundColor: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
    color: '#212529',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 90,
    shadowColor: '#007bff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default TodoInput;
