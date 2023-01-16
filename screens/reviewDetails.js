import { StyleSheet, Text, View,Button, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { globalStyles, images } from '../styles/style';
import Card from '../shared/card'
import {AntDesign} from '@expo/vector-icons'
export default function ReviewDetails ({route, navigation})  {
  const pressHandler = ()=>{
    navigation.goBack()
    navigation.getParent().setOptions({headerShown:true})
  }
  
const {title, body, rating} = route.params
  return (
    <View ><Card>
      <Text style={globalStyles.titleText}>{title}
      </Text>
      <Text style={globalStyles.paragraph}>{body}
      </Text>
      <View style = {styles.rating}>
      <Text style={globalStyles.paragraph}>Gamzone rating: 
      </Text>
      <Image source = {images.ratings[rating]}/>
      </View>
      </Card>
      <Button title='go back to home' onPress={pressHandler}/>
    </View>
  )
}

const styles= StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center', 
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth:1,
    borderTopColor: '#eee'
  }
})