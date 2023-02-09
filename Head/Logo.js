import { StyleSheet, Text, View , Image  , Dimensions } from 'react-native'
import React from 'react' ;
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app' ;
const {height , width} =  Dimensions.get('window')

export default function Logo({navigation}) {
  const user = firebase.auth().currentUser;
  return (
    <View>
        <View style={{marginLeft:width * 0.69}}>
      <View style={{width:36  , height:36 , backgroundColor:'#DDDDDD' , borderRadius:100}}>
      
      {/* <Image style={{width:'100%' , height:'100%' , borderRadius:100}} source={{uri: user.photoURL}}/> */}
      
     
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})