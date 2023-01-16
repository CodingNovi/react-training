import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Button, View,  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from "./routes/drawer";
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";



const getFonts = () => Font.loadAsync({
  'Nunito-Regular':require('./assets/fonts/Nunito-Regular.ttf'),
  'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf')
});


export default function App() {

const [fontsLoaded, setFontsLoaded] = useState(false);


if(fontsLoaded){
  return (
    <Navigator />
  );
} else {
  return (
  <AppLoading
   startAsync={getFonts}
   onFinish={()=> setFontsLoaded(true)} 
   onError={() => console.log('error')}
  />
  )
}

}


