import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import{Icon} from '@rneui/base'
import RentsStack from './stack/RentsStack'
import ProfileStack from './stack/ProfileStack'



const Tab=createBottomTabNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName='profile'
        screenOptions={({route})=>({tabBarIcon:({color})=>
        screenOptions(route,color),tabBarActivateTinColor:'tomato',
        tabBarInactivateTinColor:'gray',
        headerShow:false
    })}
        >
            <Tab.Screen
            name='profile'
            options={{title:'Perfil'}}
            component={ProfileStack}
            />
            
            <Tab.Screen
            name='Rents'
            options={{title:'Rentas'}}
            component={RentsStack}
            />

        </Tab.Navigator>
    </NavigationContainer>
  )
}


const screenOptions=(route,color)=>{
    let iconName;
    switch(route.name){
        case'profile':
        iconName='account-circle-outline';
        break;
        case 'Rents':
            iconName='home-search-outline';
            break;
    }
    return (
        <Icon
        type='material-community'
        name={iconName}
        size={22}
        color={color}
        />
        
    )
}
