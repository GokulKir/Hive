import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
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

const ServiesHome = () => {
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


   {data ?  


<SkeltonPlaceholderHome/>
   
   
   :

      <FlatList
        horizontal={true}
        data={CategoryData}
        keyExtractor={item => item._id}
        renderItem={({}) => {
          return (
            <TouchableOpacity style={{marginLeft: wp('5%')}}>
              <View
                style={{
                  height: hp('19%'),
                  width: '101%',
                  backgroundColor: '#DDDDDD',
                  borderRadius: 5,
                  marginLeft: wp('1%'),
                  marginTop: hp('3%'),
                }}>
                <Image
                  style={{width: 75, height: 23}}
                  source={require('../../assets/Feat.png')}
                />
              </View>

              <View>
                <Text
                  style={{
                    color: '#1DA1F2',
                    marginTop: 10,
                    marginLeft: wp('6%'),
                  }}>
                  Nora Carlson
                </Text>

                <View style={{marginLeft: wp('5%'), marginTop: 8}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: wp('4%'),
                      fontWeight: 'normal',
                      width: hp('20%'),
                    }}>
                    I will write rest API in
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: wp('4%'),
                      fontWeight: 'normal',
                    }}>
                    {' '}
                    react native
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
                  marginLeft: wp('4%'),
                  marginTop: -24,
                }}>
                <Image
                  style={{
                    marginTop: 5,
                    marginLeft: 2,
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
                  4.5
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
                    marginLeft: 10,
                    marginTop: 3,
                  }}>
                  3,466
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: wp('6%'),
                    marginTop: 12,
                  }}>
                  From :
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 5,
                    marginTop: 12,
                    color: 'black',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  $90.19
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
