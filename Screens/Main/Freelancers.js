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
import React, {useState, useEffect} from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {useManualQuery, useQuery} from 'graphql-hooks'
import SelectDropdown from 'react-native-select-dropdown'
import {SelectList} from 'react-native-dropdown-select-list'
const {width, height} = Dimensions.get('window')

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

export default function Freelancers ({navigation}) {
  const [Datas, setDatas] = useState([])
  const [CategoryData, setCategoryData] = useState([])
  const [Menu, setMenu] = useState(0)
  const [selected, setSelected] = React.useState('')

  const {loading, error, data} = useQuery(CATEGORY_API)

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
     <FlatList
                  data={CategoryData}
                  keyExtractor={(item) => item._id}
                  numColumns={2}
                  renderItem={({item}) => {
                    return (
                      <View
                        style={{
                          width: wp('45%'),
                          height: hp('40%'),
                          
                          marginTop: 30,
                          marginLeft: wp('3%'),
                     
                        }}>
                        <TouchableOpacity>
                          <View
                            style={{
                              height: 126,
                              width: '100%',
                              backgroundColor: '#DDDDDD',
                              borderRadius: 5,
                              marginTop:45
                            }}>
                            <Image
                              style={{width: 80, height: 25}}
                              source={require('../../assets/Label2.png')}
                            />
                          </View>

                          <View>
                            <Text
                              style={{
                                color: '#1DA1F2',
                                marginTop: 20,
                                marginLeft: wp('1%'),
                              }}>
                             {item?.owner?.username}
                            </Text>
                            <Text style={{color: 'black'}}>
                              <Text
                                style={{
                                  fontSize: 13,
                                  color: 'black',
                                  fontWeight: 'bold',
                                  marginTop: 8,
                                  marginLeft: wp('1%'),
                                }}>
                               {item?.owner?.description}
                              </Text>
                              <View>
                                <Text
                                  style={{
                                    fontSize: 15,
                                    color: 'black',
                                    fontWeight: 'bold',
                                    marginTop: 8,
                                    marginLeft: wp('1%'),
                                  }}>
                               
                                </Text>
                              </View>
                            </Text>
                          </View>

                          <View style={{flexDirection: 'row'}}>
                            <Image
                              style={{marginTop: 5, width: 15, height: 15}}
                              source={require('../../assets/Rate.png')}
                            />
                            <Text
                              style={{
                                color: 'black',
                                fontSize: 12,
                                marginLeft: 10,
                                marginTop: 3,
                              }}>
                              4.5
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

                          <View style={{flexDirection: 'row'}}>
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
                             {item?.}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                     
                    )
                  }}
                />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
