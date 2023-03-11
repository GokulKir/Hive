import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const {height , width} =  Dimensions.get('window')

export default function Logo10({navigation}) {
  return (
    <View style={styles.container}>


<View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'black', fontSize: width * 0.050, marginLeft:wp('23%'), marginTop: hp('1.5%')}}>Statement</Text>
      </View>

     
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor : "#fff"
    }
})