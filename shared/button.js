import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'



export default function flatButton({text,onpress}){
    return (
        <TouchableOpacity onPress={onpress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
        </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#f01d71"
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize:16,
        textAlign: 'center'
    }
})