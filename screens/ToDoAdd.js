import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import { addToDo } from '../contexts/apiCalls';
import Context from '../contexts/Context';

export default function ToDoAddScreen({ navigation }) {

  const { token, todos, setTodos } = useContext(Context)
  const [ title, setTitle ] = useState("")

  const addPressed = async () => {
    if(!title) { return } // just allow adding a title
    const todoNew = await addToDo(title, token) // add todo to API
    console.log({ todoNew } )
    setTodos([...todos, todoNew]) // add to new todo to local todos
    // navigate to home route
    navigation.navigate("Home")
  }

  return (
    <View style={ styles.container }>
      <View>
        <Text style={styles.heading}>Add ToDo</Text>
      </View>
      <View>
        <TextInput 
          style={styles.input}
          placeholder="Title..."  
          value={title}
          onChangeText={(val) => setTitle(val)}
        />
        <View style={styles.actions} >
          <Button title="Add" onPress={addPressed} />
        </View>
      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  heading: { fontSize: 36, fontWeight: 'bold', marginBottom: 10 },
  container: {
    padding: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },
  actions: {
    padding: 5,
    margin: 10
  }
});
