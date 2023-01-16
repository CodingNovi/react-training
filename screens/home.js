import { StyleSheet, Text, View, Button,FlatList, TouchableOpacity, Modal, Keyboard, TouchableWithoutFeedback} from 'react-native'
import React, {useState} from 'react'
import { globalStyles } from '../styles/style';
import Card from '../shared/card'
import {setTemp} from '../routes/drawer'
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from './reviewForm';


export default function Home({navigation})  {
  
  const [modalOpen, setmodalOpen] = useState(false)
const [reviews, setReviews] = useState([
  {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
  {title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2'},
  {title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},

])
const addReview = (review)=>{
  review.key = Math.random().toString()
  setReviews((currentReviews)=>(
  [review,...currentReviews]
   ))
   setmodalOpen(false)

}
    return (
      
      <View >
        
        <Modal visible={modalOpen} animationType = 'slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style = {styles.ModalContent}>
          <MaterialIcons name='close' size={24} style={{...styles.modalToggle,...styles.modalClose}} onPress = {()=> setmodalOpen(false)}/>
             <ReviewForm addReview={addReview} />
          </View>
          </TouchableWithoutFeedback>
        </Modal>
        
        <MaterialIcons name='add' size={24} style={styles.modalToggle} onPress = {()=> setmodalOpen(true)}/>
        <FlatList
        data={reviews}
        renderItem= {({item})=>(
          <TouchableOpacity onPress={()=>{
            navigation.navigate('Review Details',item) 
            navigation.getParent().setOptions({ headerShown:false }) 
          

            
            }}>
            
            <Card><Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
    )}
        />
        
      </View>
    )

}

const styles = StyleSheet.create({
  modalToggle:{
    marginBottom:10,
    borderWidth: 1,
    borderColor:'#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf:'center'
  },
  modalClose:{
    marginTop:20,
    marginBottom:0,
  },
  ModalContent:{
    flex:1
  }
})