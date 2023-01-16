import * as React from 'react';
import { View, Text , Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import { globalStyles } from '../styles/style';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeStack ({navigation}){
    const Stack = createNativeStackNavigator();

    return (

    <Stack.Navigator screenOptions = {{
            headerStyle: {backgroundColor:"#888"},
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
                
            },
            headerShown: false

            
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name= "Review Details" component={ReviewDetails} options={{headerStyle:{
            backgroundColor:'tomato'},
            headerShown: true,
            headerLeft: ()=>(
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Home',) 
                    navigation.setOptions({ headerShown:true }) 
                    }}>
                    <AntDesign name="back" size={24} color="white" style={{padding: 15}}/>
                    </TouchableOpacity>
            )
            
            

        }}/>
    </Stack.Navigator>
)}