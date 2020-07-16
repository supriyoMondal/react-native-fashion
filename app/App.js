import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from './Authentication/Onboarding';

const AuthenticationStack = createStackNavigator();


const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      headerMode='none'
    >
      <AuthenticationStack.Screen
        name="Onboarding">
        {(props) => <Onboarding {...props} />}
      </AuthenticationStack.Screen>
    </AuthenticationStack.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer >
      <AuthenticationNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
