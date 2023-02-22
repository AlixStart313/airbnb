import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Rents from '../../../module/rents/adapters/screens/Rents'

const Stack =createNativeStackNavigator();



export default function RentsStack() {
  return (
  <Stack.Navigator
  screenOptions={{
    headerMode:'screen',
    headerTintColor:'white',
    headerStyle:{backgroundColor:'#33CEFF'}

  }}
  >
    <Stack.Screen
    name='RentsStack'
    options={{title:'Rentasaa'}}
    component={Rents}
    />

  </Stack.Navigator>
  )
}