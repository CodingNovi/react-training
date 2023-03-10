import { StyleSheet, Text, View, Button, TextInput, TextInputComponent, Keyboard } from 'react-native'
import React from 'react'
import { Formik } from "formik";
import { globalStyles } from '../styles/style';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as yup from 'yup'
import FlatButton from '../shared/button';
const ReviewSchema = yup.object({
    title: yup.string()
    .required()
    .min(4),
    body:yup.string()
    .required()
    .min(8),
    rating: yup.string()
    .required()
    .test('is-num-1-5','Rating must be a number from 1-5',(val)=>{
        return parseInt(val)<6 && parseInt(val)>0
    })

})

export default function reviewForm({addReview}){
    return(
        <View>
            
            <Formik initialValues={{title: '', body:'', rating:''}} onSubmit={(values,actions)=>{
            actions.resetForm()
            addReview(values)
            }}
            validationSchema = {ReviewSchema}>
                {(props)=>(
                    <View>
                        <TextInput 
                       
                        style={globalStyles.input}
                        placeholder='Review Title'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        onBlur={props.handleBlur('title')}/>
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        <TextInput 
                         multiline minHeight={60}
                        style={globalStyles.input}
                        placeholder='Review body'
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        onBlur={props.handleBlur('body')}/>
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        <TextInput 
                        keyboardType='numeric'
                        style={globalStyles.input}
                        placeholder='Rating (1-5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        onBlur={props.handleBlur('rating')}/>
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        <FlatButton text='submit' onpress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({})