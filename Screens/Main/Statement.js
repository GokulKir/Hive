import {StyleSheet, Text, View, Dimensions, Image, FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'
import Carousel from 'react-native-reanimated-carousel'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const width = Dimensions.get('window').width

export default function Statement ({navigation}) {
  const [pagingEnabled, setPagingEnabled] = React.useState(true);
  const DATA = [1, 2, 3, 4]
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Carousel
pagingEnabled={pagingEnabled}

scrollAnimationDuration={1000}
          style={{borderRadius: 10}}
          loop
          width={width / 1.1}
          height={width / 2.5}
          autoPlay={true}
          data={[...new Array(4).keys()]}
          scrollAnimationDuration={1000}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={({index}) => (
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                justifyContent: 'center',
                marginTop: 20,
                borderRadius: 10,
                marginLeft: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{height: '100%', width: wp('50%')}}>
                  <View style={{marginLeft: wp('4%'), marginBottom: hp('1%')}}>
                    <Text style={{color: '#99999'}}>Net Incom</Text>

                    <Text
                      style={{
                        marginTop: hp('1%'),
                        fontSize: wp('6%'),
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      1928 KD
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <View style={{marginTop: hp('2%'), marginLeft: wp('5%')}}>
                      <Text style={{color: 'rgba(200, 157, 103, 1)'}}>
                        99 KD
                      </Text>
                    </View>

                    <View style={{marginTop: hp('2%'), marginLeft: wp('2%')}}>
                      <Text style={{color: '#000000'}}>Last month earning</Text>
                    </View>
                  </View>
                </View>

                <View style={{justifyContent: 'center', marginLeft: wp('14%')}}>
                  <Image
                    style={{width: wp('22%'), height: hp('10%')}}
                    source={require('../../assets/icon.png')}
                  />
                </View>
              </View>
            </View>
          )}
        />





        <View
          style={{
            width: wp('100%'),
            height: hp('100%'),
            backgroundColor: 'rgba(255, 255, 255, 1)',
            marginTop: hp('4%'),
            alignItems: 'center',
            marginTop: 50,
            paddingTop: hp('2%'),
          }}>


            <FlatList data={DATA} keyExtractor={item => item.index} 
             renderItem={({item})=>{
                return (

                    <View
                    style={{
                      width: wp('90%'),
                      height: hp('29%'),
                      borderColor: '#DDD',
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop:30
                    }}>
        
        
                     
                    <View
                      style={{
                        width: wp('42%'),
                        height: hp('5%'),
                        backgroundColor: 'rgba(107, 113, 119, 1)',
                        borderBottomLeftRadius: 13,
                        borderBottomRightRadius: 13,
                        marginLeft: wp('42%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: '#fff'}}>Service Purchased</Text>
                    </View>
        
                    <View style={{marginLeft: 34}}>
                      <Text style={{color: 'rgba(160, 126, 82, 1)', fontSize: 15}}>
                        April 9 , 2022
                      </Text>
                    </View>
        
                    <View style={{marginLeft: 34, marginTop: hp('3%')}}>
                      <Text style={{fontSize: 15}}>ECommerce website development</Text>
        
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          marginTop: 17,
                          fontWeight: 'normal',
                        }}>
                        Price: 100 KD
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          marginTop: 9,
                          fontWeight: 'normal',
                        }}>
                        Service Charge: 25 KD
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          marginTop: 9,
                          fontWeight: 'normal',
                        }}>
                        Amount: 9000 KD
                      </Text>
                    </View>
                   
                  </View>
                    
                )
             }}
            />

<View style={{height:hp('40%')}}></View>
         
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
})
