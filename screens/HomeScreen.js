import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>My Todo List</Text>

      <View style={styles.listContainer}>
        <Text style={styles.todoItem}>Buy milk</Text>
        <Text style={styles.todoItem}>Buy bread</Text>
        <Text style={styles.todoItem}>Buy eggs</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddTodo')}>
        <Ionicons name="add" size={20} color="#fff" />
        <Text style={styles.buttonText}>Add New Todo</Text>
      </TouchableOpacity>

    </View>
  );
}