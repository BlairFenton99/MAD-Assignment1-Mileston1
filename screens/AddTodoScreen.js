import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Expo Icon Library
import styles from '../styles'; // Import styles from styles.js


export default function AddTodoScreen({ navigation }) {
  return (
    <View style={styles.container}> 

      <Text style={styles.title}>Add New Todo</Text>

      {/* Single line title input field */}
      <TextInput style={styles.input} placeholder="Title"/>

      {/* Multiline description input field */}
      <TextInput style={[styles.input, styles.textArea]} placeholder="Description" multiline />

      {/* Cancel and save button container */}
      <View style={styles.buttonRow}>
        {/* Cancel button */}
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          {/* import icon from Expo library */}
          <Ionicons name="close" size={20} color="#fff" /> 
          <Text style={styles.buttonText}> Cancel</Text>
        </TouchableOpacity>
        {/* Save button, not functional */}
        <TouchableOpacity style={styles.saveButton}>
          {/* import icon from Expo library */}
          <Ionicons name="checkmark" size={20} color="#fff" /> 
          <Text style={styles.buttonText}> Save</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}