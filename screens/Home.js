import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import { fetchTodos } from '../contexts/apiCalls';
import Context from '../contexts/Context';

export default function HomeScreen() {

  const { user, token, todos, setTodos } = useContext(Context)

  useEffect(() => {

    if(user && token && todos.length == 0) {
      fetchTodos(token)
      .then(todosApi => {
        console.log({todosApi})
        setTodos(todosApi)
      })
    }

  }, [user, token])

  return (
    <View style={ styles.container }>
      <Text>Hello {user.email}</Text>
      <Text>Nice to have you logged in</Text>
      <Text>Your todos:</Text>
      <FlatList 
        data={todos} 
        keyExtractor={(todo) => todo._id}
        renderItem={({ item } ) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  item: {
    borderWidth: 1,
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginTop: 20,
  }
});
