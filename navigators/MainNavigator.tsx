import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Registro from '../screens/Registro';
import Perfil from '../screens/Perfil';
import Operaciones from '../screens/Operaciones';
import Historial from '../screens/Historial';


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="Perfil" component={Perfil} />
    <BottomTab.Screen name="Operaciones" component={Operaciones} />
    <BottomTab.Screen name="Historial" component={Historial} />
  </BottomTab.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Navigation;
