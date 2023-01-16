import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from "./homestack";
import AboutStack from "./aboutStack";
import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, Text, Image, View} from 'react-native'
import Header from '../shared/header';
import { globalStyles } from '../styles/style';


export default function Navigator () {
    const Drawer = createDrawerNavigator()
    

 return (   
<NavigationContainer >
 <Drawer.Navigator  screenOptions={
    {
        headerStyle:{
            height: 80},
        headerBackground: ()=>(<Image source = {require('../assets/game_bg.png')} style={{flex:1}}/>)
    }
 }>
<Drawer.Screen name='Homestack' component={HomeStack} 
options={{
    title: 'Home',
    headerTitleAlign: 'center',
    headerTitle:()=>(
    <Header title={'Gamezone'}/>),
    
    
 }} 
 
 
/>
<Drawer.Screen name='Aboutstack' component={AboutStack}
options={{
    title: 'About ',
    headerTitleAlign: 'center',
    headerTitle:()=>(
    <Header title={'About Gamezone'}/>)
 }}/>
 </Drawer.Navigator>
 </NavigationContainer>

)}
 
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    img:{
        width: 26,
        height: 26,
        marginHorizontal: 10,


    }
})