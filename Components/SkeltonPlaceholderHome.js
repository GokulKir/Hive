import {View, Text , ScrollView , FlatList} from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen' ;



const SkeltonPlaceholderHome = () => {
 
     const count = [1 , 2  , 3 , 4 ]

  return (
   
     <View>

      <FlatList  data={count}  
      horizontal={true}
       keyExtractor={item => item.key}
       renderItem={({item})=>{

        return (

        <SkeletonPlaceholder >
        <View style={{marginLeft: 24}}>
          <View
            style={{
              width: wp('42%'),
              height: hp('20%'),
              marginTop: hp('3%'),
            }}></View>
  
          <View
            style={{
              width: '50%',
              height: hp('0.5%'),
              marginTop: hp('2%'),
            }}></View>
  
          <View
            style={{
              width: '80%',
              height: hp('0.4%'),
              marginTop: hp('2%'),
            }}></View>
  
          <View
            style={{
              width: '30%',
              height: hp('0.3%'),
              marginTop: hp('2%'),
            }}></View>
  
          <View
            style={{
              width: '40%',
              height: hp('0.2%'),
              marginTop: hp('2%'),
            }}></View>
        </View>
      </SkeletonPlaceholder>

        )



       }}
      />
              
           
               

    

   </View>

  )
}

export default SkeltonPlaceholderHome
