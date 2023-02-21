import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
const { height, width } = Dimensions.get('window')

export default function Logo8({ navigation }) {
  const user = firebase.auth().currentUser;
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'black', fontSize: width * 0.050, marginLeft: 43, marginTop: 8 }}>Invoices & bills</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})