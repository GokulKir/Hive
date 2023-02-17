import { View, Text } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const SkeletonLoderServiesList = () => {
  return (
    <SkeletonPlaceholder>
        
        
          <View style={{ padding: 20, marginTop: -20 }}>
            <View
              style={{
                width: hp('45%'),
                height: hp('18%'),
                // borderRadius: 50,
                // marginTop: hp('4%'),
                // marginLeft: wp('5%'),
              }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View
                style={{
                  width: hp('25%'),
                  height: hp('0.8%'),
                  marginTop: hp('2%'),
                  // marginLeft: wp('5%'),
                }} />
              <View
                style={{
                  width: hp('5%'),
                  height: hp('0.8%'),
                  marginTop: hp('2%'),
                }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View
                style={{
                  width: hp('25%'),
                  height: hp('3%'),
                  marginTop: hp('2%'),
                }} />
              <View
                style={{
                  width: hp('5%'),
                  height: hp('0.8%'),
                  marginTop: hp('2%'),
                }} />
            </View>
            <View
              style={{
                width: hp('20%'),
                height: hp('0.8%'),
                marginTop: hp('2%'),
              }} />

            <View
              style={{
                width: hp('45%'),
                height: hp('5%'),
                marginTop: hp('2%'),
              }}></View>

          </View>
          <View style={{ padding: 20, marginTop: -20 }}>
            <View
              style={{
                width: hp('45%'),
                height: hp('18%'),
                // borderRadius: 50,
                // marginTop: hp('4%'),
                // marginLeft: wp('5%'),
              }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View
                style={{
                  width: hp('25%'),
                  height: hp('0.8%'),
                  marginTop: hp('2%'),
                  // marginLeft: wp('5%'),
                }} />
              <View
                style={{
                  width: hp('5%'),
                  height: hp('0.8%'),
                  marginTop: hp('2%'),
                }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View
                style={{
                  width: hp('25%'),
                  height: hp('3%'),
                  marginTop: hp('2%'),
                }} />
              <View
                style={{
                  width: hp('5%'),
                  height: hp('0.8%'),
                  marginTop: hp('2%'),
                }} />
            </View>
            <View
              style={{
                width: hp('20%'),
                height: hp('0.8%'),
                marginTop: hp('2%'),
              }} />

            <View
              style={{
                width: hp('45%'),
                height: hp('5%'),
                marginTop: hp('2%'),
              }}></View>

          </View>
          <View style={{ padding: 20, marginTop: -20 }}>
            <View
              style={{
                width: hp('45%'),
                height: hp('18%'),
                // borderRadius: 50,
                // marginTop: hp('4%'),
                // marginLeft: wp('5%'),
              }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View
                style={{
                  width: hp('25%'),
                  height: hp('0.8%'),
                  marginTop: hp('2%'),
                  // marginLeft: wp('5%'),
                }} />
              <View
                style={{
                  width: hp('5%'),
                  height: hp('0.8%'),
                  marginTop: hp('2%'),
                }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View
                style={{
                  width: hp('25%'),
                  height: hp('3%'),
                  marginTop: hp('2%'),
                }} />
              <View
                style={{
                  width: hp('5%'),
                  height: hp('0.8%'),
                  marginTop: hp('2%'),
                }} />
            </View>
            <View
              style={{
                width: hp('20%'),
                height: hp('0.8%'),
                marginTop: hp('2%'),
              }} />

            <View
              style={{
                width: hp('45%'),
                height: hp('5%'),
                marginTop: hp('2%'),
              }}></View>

          </View>
        

        </SkeletonPlaceholder>
  )
}

export default SkeletonLoderServiesList