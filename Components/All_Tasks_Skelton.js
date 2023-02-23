import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function All_Tasks_Skelton ({navigation}) {
  return (
    <SkeletonPlaceholder>
      <View style={{}}>
        <View
          style={{
            width: wp('16%'),
            height: hp('3%'),
            marginLeft: wp('8%'),
            marginTop: hp('7%'),
            borderRadius:10
          }}></View>

        <View
          style={{
            width: wp('56%'),
            height: hp('1%'),
            marginLeft: wp('8%'),
            marginTop: hp('2%'),
            borderRadius:5
          }}></View>

        <View
          style={{
            width: wp('76%'),
            height: hp('0.8%'),
            marginLeft: wp('8%'),
            marginTop: hp('4%'),
            borderRadius:10
          }}></View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <View
              style={{
                width: wp('16%'),
                height: hp('0.8%'),
                marginLeft: wp('8%'),
                marginTop: hp('4%'),
                borderRadius:10
              }}></View>

            <View
              style={{
                width: wp('16%'),
                height: hp('0.5%'),
                marginLeft: wp('8%'),
                marginTop: hp('1.5%'),
                borderRadius:10
              }}></View>
          </View>

          <View>
            <View
              style={{
                width: wp('16%'),
                height: hp('0.8%'),
                marginLeft: wp('8%'),
                marginTop: hp('4%'),
                borderRadius:10
              }}></View>

            <View
              style={{
                width: wp('16%'),
                height: hp('0.5%'),
                marginLeft: wp('8%'),
                marginTop: hp('1.5%'),
                borderRadius:10
              }}></View>
          </View>

          <View>
            <View
              style={{
                width: wp('16%'),
                height: hp('0.8%'),
                marginLeft: wp('8%'),
                marginTop: hp('4%'),
                borderRadius:10
              }}></View>

            <View
              style={{
                width: wp('16%'),
                height: hp('0.5%'),
                marginLeft: wp('8%'),
                marginTop: hp('1.5%'),
                borderRadius:10
              }}></View>
          </View>
        </View>

      <View style={{alignItems:'center'}}>

        
      <View
              style={{
                width: wp('80%'),
                height: hp('5%'),
                marginTop: hp('3%'),
                borderRadius:3
              }}></View>

      </View>


<View>


<View
          style={{
            width: wp('16%'),
            height: hp('3%'),
            marginLeft: wp('8%'),
            marginTop: hp('7%'),
            borderRadius:10
          }}></View>

        <View
          style={{
            width: wp('56%'),
            height: hp('1%'),
            marginLeft: wp('8%'),
            marginTop: hp('2%'),
            borderRadius:5
          }}></View>

        <View
          style={{
            width: wp('76%'),
            height: hp('0.8%'),
            marginLeft: wp('8%'),
            marginTop: hp('4%'),
            borderRadius:10
          }}></View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <View
              style={{
                width: wp('16%'),
                height: hp('0.8%'),
                marginLeft: wp('8%'),
                marginTop: hp('4%'),
                borderRadius:10
              }}></View>

            <View
              style={{
                width: wp('16%'),
                height: hp('0.5%'),
                marginLeft: wp('8%'),
                marginTop: hp('1.5%'),
                borderRadius:10
              }}></View>
          </View>

          <View>
            <View
              style={{
                width: wp('16%'),
                height: hp('0.8%'),
                marginLeft: wp('8%'),
                marginTop: hp('4%'),
                borderRadius:10
              }}></View>

            <View
              style={{
                width: wp('16%'),
                height: hp('0.5%'),
                marginLeft: wp('8%'),
                marginTop: hp('1.5%'),
                borderRadius:10
              }}></View>
          </View>

          <View>
            <View
              style={{
                width: wp('16%'),
                height: hp('0.8%'),
                marginLeft: wp('8%'),
                marginTop: hp('4%'),
                borderRadius:10
              }}></View>

            <View
              style={{
                width: wp('16%'),
                height: hp('0.5%'),
                marginLeft: wp('8%'),
                marginTop: hp('1.5%'),
                borderRadius:10
              }}></View>
          </View>
        </View>

      <View style={{alignItems:'center'}}>

        
      <View
              style={{
                width: wp('80%'),
                height: hp('5%'),
                marginTop: hp('3%'),
                borderRadius:3
              }}></View>

      </View>


</View>


      </View>
    </SkeletonPlaceholder>
  )
}

const styles = StyleSheet.create({})
