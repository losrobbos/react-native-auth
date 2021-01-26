import React, { useContext } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import Context from '../contexts/Context';

export default function AuthScreen({ navigation }) {

  const { user } = useContext(Context)

  // in case user is logged in => redirect to home
  useEffect(() => {
    if(user) {
      navigation.navigate("Home")
    }
  }, [user])

  return (
    <View style={ styles.container }>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Signup" onPress={() => navigation.navigate("Signup") } />
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',    
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
