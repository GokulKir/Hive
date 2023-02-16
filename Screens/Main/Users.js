import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground ,
  ActivityIndicator
} from 'react-native'
import {useManualQuery, useQuery} from 'graphql-hooks'
import React, {useCallback, useMemo, useRef, useState , useEffect} from 'react'
const {height, width} = Dimensions.get('window')
import BottomSheet from '@gorhom/bottom-sheet'
import {
  widthPercentageToDP as wp,

  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'


const FREELANCE_LISTING = `

query Freelancers {
  freelancerList {
    freelancers {
      _id
      city
      country
      description
      englishLevel
      firstName
      hourlyRate
      isActivated
      isProfileVerified
      jobSuccess
      joined
      lastName
      position
      profileImg
      rating
      tagline
      username
    }
  }
}
`;


export default function UseFree ({navigation}) {
  const bottomSheetRef = useRef(null)
  const snapPoints = useMemo(() => ['25%', '50%'], [])
  const [Datas, setDatas] = useState([])

  const {loading, error, data} = useQuery(FREELANCE_LISTING)

  //callbacks

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  useEffect(() =>{

    // freeLancerList({variables: {}}).then(response => {
    //   console.log('frelncer list response', response)
    //   setData1(response)
    //    console.log(+data1);
    // })

    // console.log("data:    ",data);

    if( data?.freelancerList?.freelancers){
      

    }
  
    // console.log("loading       :  ",loading);
    if(!loading){
      // Alert.alert("alert",JSON.stringify(data))
      // console.log("loading completed", data)
      setDatas(data)
    }

  })
  useEffect(() =>{
console.log("Data>>>>>>",Datas?.freelancerList?.freelancers);

  },[Datas])

  const BottomSheetOp = () => {
    return (
      <View style={{flex: 1}}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={{width: '100%', height: 156, backgroundColor: 'black'}}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      </View>
    )
  }

  return (
    <View style={styles.container}>

  {loading ? 
  
   <View>
    <ActivityIndicator size={40} color="#C89D67" style={{marginTop:hp('40%')}} />
   </View>
  
  : 



    



      <ScrollView>
        <View style={{}}>
          <View
            style={{
              width: '100%',
              height: 75,
              flexDirection: 'row',
              marginLeft: 10,
            }}>
            <Text
              style={{
                fontSize: width * 0.054,
                color: 'black',
                marginLeft: width * 0.063,
                marginTop: 20,
                fontWeight: 'bold',
              }}>
              29 search results(s) found
            </Text>


            <TouchableOpacity
              onPress={() => navigation.navigate('Filter2')}
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#DDDDDD',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
                marginLeft: wp('12%'),
                marginTop: 14,
              }}>
              <Image
                style={{width: 16, height: 16}}
                source={require('../../assets/Fil.png')}
              />
            </TouchableOpacity>
          </View>
        </View>


        {Datas?.freelancerList?.freelancers.map((obj , i)=>{
          return (

        
        <TouchableOpacity key={i}
          onPress={() => navigation.navigate('Drawer3')}
          style={{flexDirection: 'row'}}>
          <View
            style={{
              width: '100%',
              height: 80,
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 56,
                height: 56,
                backgroundColor: '#DDDDDD',
                borderRadius: 100,
                marginLeft: 20,
              }}>
                 <ImageBackground style={{width:'100%' , height:'100%' ,  }}  imageStyle={{borderRadius: 100}} source={{uri : obj.profileImg}} >
                {obj.isActivated ? 

  

              <Image
                style={{width: 17, height: 17}}
                source={require('../../assets/Dot.png')}
              /> :
              <Image
              style={{width: 17, height: 17}}
              source={require('../../assets/Dot1.png')}
            /> 
            
               }
               </ImageBackground>
            </View>

            <View
              style={{marginLeft: 14, marginTop: 6, width: 122, height: 58}}>
              <Text style={{fontSize: 16, color: 'black'}}>{obj.username}</Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{marginTop: 7, marginLeft: 2, width: 15, height: 15}}
                  source={require('../../assets/Rate.png')}
                />
                <Text style={{marginLeft: 10, marginTop: 5, marginTop: 5}}>
               {obj.rating}
                </Text>
                <Text style={{marginLeft: 10, marginTop: 5, color: 'grey'}}>
                  (11 072)
                </Text>
              </View>
            </View>

            <View style={{marginLeft: wp('20%'), marginTop: 8}}>
              <Text style={{color: 'grey'}}>Starting from</Text>
              <Text
                style={{
                  color: 'black',
                  marginTop: 5,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
               {obj.hourlyRate}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

)
})}
      </ScrollView> 
}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
