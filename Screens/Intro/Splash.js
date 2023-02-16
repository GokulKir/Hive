import {StyleSheet, Text, View, Image} from 'react-native'
import React, {useState, useEffect} from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import firebase from '@react-native-firebase/app'
export default function Splash ({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log('User email: ', user.email)
          navigation.navigate('MyDrawer')
        } else {
          navigation.navigate('Login')
        }
      })
    }, 2500)
  })
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: hp('40%'),
        }}>
        <Image
          style={{width: wp('35%'), height: hp('8%')}}
          source={require('../../assets/Logo.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1B',
  },
})
