import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'
import React, {useState, useEffect} from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {useManualQuery, useQuery} from 'graphql-hooks' ;
import SkeltonPlaceholderHome from '../../Components/SkeltonPlaceholderHome'

const SERVICE_LIST = `query ServiceList($category: String) {
  serviceList(category: $category) {
    msg
    services {
      _id
      owner {
        _id
        city
        country
        description
        englishLevel
        hourlyRate
        username
        tagline
        isProfileVerified
        isActivated
        rating
        profileImg
        position
      }
      category {
        _id
        createdAt
        icon
        name
        parent
        slug
      }
    }
  }
}`

const ServiesHome = ({navigation}) => {
  const [CategoryData, setCategoryData] = useState([])
  const {loading, error, data} = useQuery(SERVICE_LIST)

  useEffect(() => {
    if (data?.serviceList?.services) {
    }

    // console.log("loading       :  ",loading);
    if (!loading) {
      // Alert.alert("alert",JSON.stringify(data))
      // console.log("loading completed", data)
    }
    setCategoryData(data?.serviceList?.services)
  })

  useEffect(() => {
    console.log('CATEGORY DATA HOME PAGE >>>>>>', CategoryData)
  }, [CategoryData])

  return (
    <View>


   { loading ?  


<SkeltonPlaceholderHome/>
   
   
   :

      <FlatList
        horizontal={true}
        data={CategoryData}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={()=> navigation.navigate('TaskD',{serviceId:item._id})} style={{marginLeft: wp('8%'),top:20,right:10}}>
              <ImageBackground
                      // style={{
                      //   height: 126,
                      //   width: '100%',
                      //   backgroundColor: '#DDDDDD',
                      //   borderRadius: 5,
                      //   marginTop: 45,
                      // }}
                      style={{ width: "100%", height: 126 }}
                      source={{ uri: `https://hive-dash.credot.dev/${item?.owner?.profileImg}` }}
                    >
                      {/* <Image
                      style={{width: 80, height: 25}}
                      source={require('../../assets/Label2.png')}
                    /> */}
                      <Image
                        style={{ width: 80, height: 25 }}
                        source={require('../../assets/Label2.png')}
                      />
                    </ImageBackground>

              <View>
                <Text
                  style={{
                    color: '#1DA1F2',
                    marginTop: 10,
                    marginLeft: wp('2%'),
                  }}>
                  {item?.owner?.username}
                </Text>

                <View style={{marginLeft: wp('1%'), marginTop: 8}}>
                  <Text 
                  numberOfLines={2}
                    style={{
                      color: 'black',
                      fontSize: wp('4%'),
                      fontWeight: 'normal',
                      width: hp('20%'),
                    }}>
                    {item?.owner?.description}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: wp('4%'),
                      fontWeight: 'normal',
                    }}>
                  
                   
                  </Text>
                </View>

                <Text style={{color: 'black'}}>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'black',
                        fontWeight: 'bold',
                        marginTop: 8,
                      }}>
                      {/* react native{' '} */}
                    </Text>
                  </View>
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: wp('1%'),
                  marginTop: -24,
                }}>
                <Image
                  style={{
                    marginTop: 5,
                    marginLeft: 1,
                    width: wp('3%'),
                    height: hp('1.8%'),
                  }}
                  source={require('../../assets/Rate.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: wp('3.5%'),
                    marginLeft: 10,
                    marginTop: 3,
                  }}>
                 {item?.owner?.rating}
                </Text>
                <Text
                  style={{
                    fontSize: wp('3.5%'),
                    marginLeft: 10,
                    marginTop: 3,
                  }}>
                  (1,287)
                </Text>
                <Image
                  style={{
                    width: wp('4%'),
                    height: hp('1.5%'),
                    marginLeft: 10,
                    marginTop: 6,
                  }}
                  source={require('../../assets/Ey.png')}
                />
                <Text
                  style={{
                    fontSize: wp('3%'),
                    marginLeft: 8,
                    marginTop: 3,
                  }}>
                  3,466
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: wp('1%'),
                    marginTop: 12,
                  }}>
                  From :
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 1,
                    marginTop: 12,
                    color: 'black',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  {item?.owner?.hourlyRate}
                </Text>
              </View>
            </TouchableOpacity>
          )
        }}

       
      />

}
    </View>
  )
}

export default ServiesHome
