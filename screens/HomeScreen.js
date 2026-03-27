import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Expo Icon Library
import styles from '../styles'; // Import styles from styles.js

export default function HomeScreen({ navigation }) {
  return (
    // Main container
    <View style={styles.container}>

      <Text style={styles.title}>My Todo List</Text>
      
      {/* Container holding the list of todo items */}
      <View style={styles.listContainer}>
        {/* Hardcoded to do items */}
        <Text style={styles.todoItem}>Buy milk</Text>
        <Text style={styles.todoItem}>Buy bread</Text>
        <Text style={styles.todoItem}>Buy eggs</Text>
      </View>

      {/* Button for to do screen with navigation trigger */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddTodo')}>
        {/* import icon from Expo library */}
        <Ionicons name="add" size={20} color="#fff" />
        <Text style={styles.buttonText}>Add New Todo</Text>
      </TouchableOpacity>

    </View>
  );
}