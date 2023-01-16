import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import React from 'react'
import { RotateInUpLeft } from 'react-native-reanimated'
import { globalStyles } from '../styles/style'



export default function Header ({title}){
    return(
        <View style={globalStyles.container}>
            <Image source={require('../assets/heart_logo.png')} style= {globalStyles.img}/>
            <Text style={globalStyles.headerText}>
             {title}
            </Text>
        </View>
    )
}

