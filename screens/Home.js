import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import Context from '../contexts/Context';

export default function HomeScreen({ navigation }) {

  const { user, token, todos, setTodos } = useContext(Context)

  return (
    <View style={ styles.container }>
      <View>
        <Text style={styles.heading}>Hello {user.email}</Text>
      </View>
      <View style={styles.todos}>
        <Text>Your todos:</Text>
        <FlatList 
          data={todos} 
          keyExtractor={(todo) => todo._id}
          renderItem={({ item } ) => <Text style={styles.item}>{item.title}</Text>}
        />
      </View>
      <View style={styles.actions}>
        <Button title="Add ToDo" onPress={() => navigation.navigate("ToDoAdd")} />
      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  heading: { fontSize: 36, fontWeight: 'bold', marginBottom: 10 },
  container: {
    padding: 5
  },
  todos: {
    margin: 10
  },
  actions: {
    margin: 10
  },
  item: {
    borderWidth: 1,
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginTop: 20,
  }
});
