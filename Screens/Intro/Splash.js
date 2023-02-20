import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import firebase from '@react-native-firebase/app'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      try {
        AsyncStorage.getItem('userSession', (err, result) => {
          const ses_data = JSON.parse(result);
          if (ses_data) {
            navigation.navigate('HomeScreen')
          } else {
            firebase.auth().onAuthStateChanged(user => {
              if (user) {
                console.log('User email: ', user.email)
                navigation.navigate('HomeScreen')
              } else {
                navigation.navigate('Login')
              }
            })
          }
        })

      } catch (error) {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            console.log('User email: ', user.email)
            navigation.navigate('HomeScreen')
          } else {
            navigation.navigate('Login')
          }
        })
      }

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
          style={{ width: wp('35%'), height: hp('8%') }}
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
