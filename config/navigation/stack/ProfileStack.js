import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import Profile from '../../../module/profile/adapters/screens/Profile'

const Stack =createNativeStackNavigator();


export default function ProfileStack() {
  return (
    <Stack.Navigator
    initialRouteName='ProfileStack'
    screenOptions={{
      headersMode:'screen',
      headerTintColor:'white',
      headerStyle:{backgroundColor:'#33CEFF'}
    }}
    >
      <Stack.Screen
      name='ProfileStack'
      options={{title:'Perfil'}}
      component={Profile} 
      />

    </Stack.Navigator>
  )
}