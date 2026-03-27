import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; // Import styles from styles.js

// Create Navigation container and the navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import HomeScreen from './screens/HomeScreen';
import AddTodoScreen from './screens/AddTodoScreen';

// Create navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home screen (default landing page) */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Screen for adding a new todo item */}
        <Stack.Screen name="AddTodo" component={AddTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}