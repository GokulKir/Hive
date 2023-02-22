import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
const { height, width } = Dimensions.get('window')


export default function Logo5({ navigation }) {
  const user = firebase.auth().currentUser;
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'black', fontSize: width * 0.050, marginLeft: 9, marginTop: 8 }}>Upload Identity Information</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})