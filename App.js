import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native';
import DataProvider from './contexts/DataProvider';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import AuthScreen from './screens/Auth';
import ToDoAddScreen from './screens/ToDoAdd';

const Stack = createStackNavigator()

export default function App() {

  return (
    <DataProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Home" component={ HomeScreen } />
            <Stack.Screen name="ToDoAdd" component={ ToDoAddScreen } />
          </Stack.Navigator>
        </NavigationContainer>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
