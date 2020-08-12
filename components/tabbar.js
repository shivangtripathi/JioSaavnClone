import React from 'react'
import { StyleSheet } from 'react-native'
import 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Browse from '../components/screens/Browse';
import Home from '../components/screens/Home';
import Search from '../components/screens/Search';
import User from '../components/screens/User';
import {MaterialCommunityIcons} from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();

export default function Tabbar() {
    return (
        <Tab.Navigator
        initialRouteName='Home'
        activeColor = '#fff'
        inactiveColor = '#dedede'
        color='#f2802e'
        shifting={false}
        labeled={false}
        barStyle={{backgroundColor:'#2a2d36'}}
        keyboardHidesNavigationBar={true}
      >
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarLabel:'',
          tabBarIcon:({color})=>(
              <AntDesign name="home" size={25} color={color} />
          )
          ,
        }} />
        <Tab.Screen name="Search" component={Search}
         options={{
          tabBarLabel:'',
          tabBarIcon:({color})=>(
            <AntDesign name="search1" size={25} color={color} />
          ),
        }} />
         <Tab.Screen name="Browse" component={Browse} 
         options={{
          tabBarLabel:'',
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons
            name='compass'
            color={color}
            size={25} />
          ),
        }}/>
        <Tab.Screen name="User" component={User}
         options={{
          tabBarLabel:'',
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons
          name='account'
          color={color}
          size={25}
        />
          ),
        }} />
      </Tab.Navigator>
    
    )
}

const styles = StyleSheet.create({})