import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
const { height, width } = Dimensions.get('window')


export default function Logo1({ navigation }) {
  const user = firebase.auth().currentUser;
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'black', fontSize: 21, marginLeft: width * 0.17, marginTop: 5, fontWeight: 'bold' }}>Dashboard</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})