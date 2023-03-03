import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
  TextInput,
  ImageBackground,
  FlatList,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useManualQuery, useQuery } from 'graphql-hooks'
import SelectDropdown from 'react-native-select-dropdown'
import { SelectList } from 'react-native-dropdown-select-list'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const { width, height } = Dimensions.get('window')

const CATEGORY_API = `query ServiceList($category: String) {
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

export default function Freelancers(props) {
  const [Datas, setDatas] = useState([])
  const [CategoryData, setCategoryData] = useState([])
  const [Menu, setMenu] = useState(0)
  const [selected, setSelected] = React.useState('')

  const { loading, error, data } = useQuery(CATEGORY_API)

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
    console.log('CATEGORY>>>>>>', CategoryData)
  }, [CategoryData])

  return (
    <View>
      {loading ? (
        <SkeletonPlaceholder>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: wp('2%'),
            }}>
            <View>
              <View
                style={{
                  width: wp('45%'),
                  height: hp('16%'),
                  marginTop: 25,
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('2%'),
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('1%'),
                  marginLeft: 10,
                }}></View>
            </View>

            <View>
              <View
                style={{
                  width: wp('45%'),
                  height: hp('16%'),
                  marginTop: 25,
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('2%'),
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('1%'),
                  marginLeft: 10,
                }}></View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: wp('2%'),
            }}>
            <View>
              <View
                style={{
                  width: wp('45%'),
                  height: hp('16%'),
                  marginTop: 25,
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('2%'),
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('1%'),
                  marginLeft: 10,
                }}></View>
            </View>

            <View>
              <View
                style={{
                  width: wp('45%'),
                  height: hp('16%'),
                  marginTop: 25,
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('2%'),
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('1%'),
                  marginLeft: 10,
                }}></View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: wp('2%'),
            }}>
            <View>
              <View
                style={{
                  width: wp('45%'),
                  height: hp('16%'),
                  marginTop: 25,
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('2%'),
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('1%'),
                  marginLeft: 10,
                }}></View>
            </View>

            <View>
              <View
                style={{
                  width: wp('45%'),
                  height: hp('16%'),
                  marginTop: 25,
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('2%'),
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('1%'),
                  marginLeft: 10,
                }}></View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: wp('2%'),
            }}>
            <View>
              <View
                style={{
                  width: wp('45%'),
                  height: hp('16%'),
                  marginTop: 25,
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('2%'),
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('1%'),
                  marginLeft: 10,
                }}></View>
            </View>

            <View>
              <View
                style={{
                  width: wp('45%'),
                  height: hp('16%'),
                  marginTop: 25,
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('2%'),
                  marginLeft: 10,
                }}></View>

              <View
                style={{
                  width: wp('45%'),
                  height: hp('1%'),
                  marginTop: hp('1%'),
                  marginLeft: 10,
                }}></View>
            </View>
          </View>
        </SkeletonPlaceholder>
      ) : (

        <View>


          <View
            style={{
              width: '100%',
              height: 55,
              flexDirection: 'row',
              marginLeft: 10,
            }}>
            <Text
              style={{
                fontSize: width * 0.048,
                color: 'black',
                marginLeft: width * 0.083,
                marginTop: 20,
                fontWeight: 'bold',
              }}>
             {CategoryData?.length} search results(s) found
            </Text>

            <TouchableOpacity
              // onPress={() => props.navigation.navigate('Filter')}
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
                style={{ width: 16, height: 16 }}
                source={require('../../assets/Fil.png')}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            data={CategoryData}
            style={{marginBottom:50}}
            keyExtractor={item => item._id}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: wp('45%'),
                    height: hp('40%'),
                    // marginTop: 10,
                    marginLeft: wp('3%'),
                  }}>
                  <TouchableOpacity onPress={()=>{
                    props.navigation.navigate('TaskD',{serviceId:item._id})
                  }}>
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
                          marginTop: 20,
                          marginLeft: wp('1%'),
                        }}>
                        {item?.owner?.username}
                      </Text>
                        <Text
                          numberOfLines={2}
                          style={{
                            fontSize: 13,
                            color: 'black',
                            fontWeight: 'bold',
                            marginTop: 8,
                            marginLeft: wp('1%'),
                          }}>
                          {item?.owner?.description}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{ marginTop: 5, width: 15, height: 15 }}
                        source={require('../../assets/Rate.png')}
                      />
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 12,
                          marginLeft: 10,
                          marginTop: 3,
                        }}>
                        $ {item?.owner?.rating}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 10,
                          marginTop: 3,
                        }}>
                        (1,287)
                      </Text>
                      <Image
                        style={{
                          width: 12,
                          height: 10,
                          marginLeft: 10,
                          marginTop: 8,
                        }}
                        source={require('../../assets/Ey.png')}
                      />
                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 10,
                          marginTop: 3,
                        }}>
                        3,466
                      </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <Text
                        style={{
                          fontSize: 15,
                          marginLeft: 5,
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
                        {item?.owner?.hourlyRate}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
