import { StyleSheet, Text, View , TouchableOpacity , Dimensions , Image } from 'react-native'
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app' ;
const {height , width} =  Dimensions.get('window')

export default function Logo6({navigation}) {
  const user = firebase.auth().currentUser;
  return (
    <View>
        <View  style={{ flexDirection:'row'}}>
      <Text style={{color:'black' , fontSize:width * 0.050 , marginLeft:36 , marginTop:8 }}>All available tasks</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Drawer2')}>
      <View style={{width:40 , height:40 , backgroundColor:'#DDDDDD' , marginLeft:width * 0.14 , borderRadius:100}}>
      {/* <Image style={{width:'100%' , height:'100%' , borderRadius:100}} source={{uri: user.photoURL}}/> */}
      </View>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor:'#fff'
    }
})