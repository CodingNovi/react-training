import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from "../screens/about";
import { globalStyles } from '../styles/style';



export default function AboutStack (){
    const Stack = createNativeStackNavigator();

    return (

    <Stack.Navigator screenOptions = {{
            headerStyle: {backgroundColor:"#080"},
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerShown: false
        }} >
        <Stack.Screen name="About" component={About} 
        options={{
            headerRight : ()=>(<Button title='random button'/>)}
            
    } />
    </Stack.Navigator>
)}