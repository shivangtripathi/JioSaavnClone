import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabbar from './components/tabbar';
const Tab = createBottomTabNavigator();

export default function App() {
  console.disableYellowBox=true;
  return (
    <>

    <StatusBar style='dark'/>
    <NavigationContainer>
      <Tabbar />
    </NavigationContainer>
   </>
  );
}


