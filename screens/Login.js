import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import { fetchTodos, login } from '../contexts/apiCalls';
import Context from '../contexts/Context';

export default function LoginScreen( { navigation }) {

  const { user, setUser, setToken, error, setError } = useContext(Context)
  const [ email, setEmail ] = useState("rob@dci.org")
  const [ pw, setPw ] = useState("hello123")

  // in case user is logged in => redirect to home
  useEffect(() => {
    if(user) {
      navigation.navigate("Home")
    }
  }, [user])

  const loginPressed = async () => {

    // login to API...
    const data = await login(email, pw)

    // store the logged in user in Context state...
    if(data && data.token) {
      console.log("Login worked")
      setToken(data.token)
      setUser(data.user)
    }
    else {
      console.log("Login failed")
      let errors = data.error
      if(Array.isArray(error)) {
        errors = data.error.join(",")
      }
      setError(errors)
    }

  }

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput 
        style={styles.input}
        placeholder="Email..."  
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
      <Text>Password</Text>
      <TextInput 
        style={styles.input}
        placeholder="Password..."  
        value={pw}
        onChangeText={(val) => setPw(val)}
      />
      <Button title="Login" onPress={loginPressed} />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },
  error: {
    color: 'red',
    fontWeight: 'bold'
  }
});
