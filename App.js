import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>My Todo List</Text>

      <View style={styles.listContainer}>
        <Text style={styles.todoItem}>Buy milk</Text>
        <Text style={styles.todoItem}>Buy bread</Text>
        <Text style={styles.todoItem}>Buy eggs</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add New Todo</Text>
      </TouchableOpacity>

    </View>
  );
}