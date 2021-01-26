import React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Context from '../contexts/Context';

export default function HomeScreen() {

  const { user } = useContext(Context)

  return (
    <View>
      <Text>Hello {user.email}</Text>
      <Text>Nice to have you logged in</Text>
    </View>
  );
}

