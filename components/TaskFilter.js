import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// Constantes para los tipos de filtro
const FILTER_TYPES = {
  ALL: 'all',
  COMPLETED: 'completed',
  PENDING: 'pending',
};

const TaskFilter = ({
  currentFilter,
  onFilterChange,
  totalTasks,
  completedTasks,
  pendingTasks,
}) => {
  const renderFilterButton = (filterType, label, count) => {
    const isActive = currentFilter === filterType;
    
    return (
      <TouchableOpacity
        style={[
          styles.filterButton,
          isActive && styles.filterButtonActive,
        ]}
        onPress={() => onFilterChange(filterType)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.filterButtonText,
            isActive && styles.filterButtonTextActive,
          ]}
        >
          {label}
        </Text>
        <Text
          style={[
            styles.filterCount,
            isActive && styles.filterCountActive,
          ]}
        >
          {count}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderFilterButton(FILTER_TYPES.ALL, 'Todas', totalTasks)}
      {renderFilterButton(FILTER_TYPES.PENDING, 'Pendientes', pendingTasks)}
      {renderFilterButton(FILTER_TYPES.COMPLETED, 'Completadas', completedTasks)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
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
  filterButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 6,
    marginHorizontal: 3,
    borderRadius: 24,
    backgroundColor: '#f8f9fa',
    borderWidth: 1.5,
    borderColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    minHeight: 44,
  },
  filterButtonActive: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    shadowColor: '#007bff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  filterButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6c757d',
    marginRight: 4,
    letterSpacing: 0.1,
  },
  filterButtonTextActive: {
    color: '#ffffff',
  },
  filterCount: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6c757d',
    backgroundColor: '#e9ecef',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 8,
    minWidth: 18,
    textAlign: 'center',
  },
  filterCountActive: {
    color: '#007bff',
    backgroundColor: '#ffffff',
  },
});

export default TaskFilter;
