import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from "../styles/style";


export default function About ()  {
  return (
    <View style={globalStyles.container}>
      <Text style ={globalStyles.titleText}>about screen
      </Text>
    </View>
  )
}

