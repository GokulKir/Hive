import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Alert,
  ImageBackground
} from 'react-native'
import React, { useCallback, useMemo, useRef, useState, useEffect, useContext } from 'react'
import LoginB from '.././UserLogin/LoginB'
import auth from '@react-native-firebase/auth'
import firebase from '@react-native-firebase/app'
import BottomSheet from '@gorhom/bottom-sheet'
import ServiesHome from './ServiesHome'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useManualQuery, useQuery, ClientContext } from 'graphql-hooks'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import SkeletonLoaderFreelancersList from '../../Components/SkeletonLoaderFreelancersList'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CATEGORY_LIST } from '../../GraphQl/Query'
import { FlatList } from 'react-native-gesture-handler'
import CategorySkeleton from '../../Components/CategorySkeleton'
import { Context } from '../Store'
const { height, width } = Dimensions.get('window')


//Freelance api graph Ql//

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
`

//Freelance api graph Ql//

export default function Home(props) {
  // const { data: details } = useQuery(PROFILE_DETAILS)
  const { loading, error, data } = useQuery(FREELANCE_LISTING)

  // const { loading, error, data } = useQuery(CATEGORY_LIST)

  // console.log('++++++++++', data)

  const user = firebase.auth().currentUser
  const [isSelected, setSelection] = useState(false)
  const [Datas, setDatas] = useState([])
  const [state, dispatch] = useContext(Context);
  const bottomSheetRef = useRef(null)
  const snapPoints = useMemo(() => ['55%', '78%'], [])

  const client = useContext(ClientContext)
  console.log("-+-+_+_+_+_+_+_+_+_+_+_+_---+_+_+_+_+_+_+_-",client);



  useEffect(() => {
    // AsyncStorage.removeItem('userSession')
    // freeLancerList({variables: {}}).then(response => {
    //   console.log('frelncer list response', response)
    //   setData1(response)
    //    console.log(+data1);
    // })

    // console.log("data:    ",data);

    if (data?.freelancerList?.freelancers) {
    }

    // console.log("loading       :  ",loading);
    if (!loading) {
      // Alert.alert("alert",JSON.stringify(data))
      // console.log("loading completed", data)
      setDatas(data)
    }
  })
  // useEffect(() => {
  //   console.log("-------------------------", details)
  //   if (details?.getProfileDetails?.userDetails) {
  //     dispatch({ type: "SET_PROFILE", payload: details?.getProfileDetails?.userDetails });
  //   }
  // }, [details])
  //Calling API //

  const ExploreCategories = () => {
    const { loading, error, data } = useQuery(CATEGORY_LIST, {
      variables: {
        // "email": "ajnash.aju323@gmail.com",
        // "password": "12345678",
        "pageNumber": 1,
        "limit": 6
      }
    }
    )

    if (loading) {
      return (
        <CategorySkeleton />
      )
    }
    return (
      <FlatList
        style={{ padding: 10, top: 10, right: 10 }}
        data={data?.categoryList?.categories}
        keyExtractor={(item) => item._id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ margin: 10 }}
              onPress={() => { Alert.alert("oo", JSON.stringify(item)) }}>
              {/* {item.icon ?

                <Image
                  style={{ width: 50, height: 50, alignSelf: "center" }}
                  source={{uri:`https://hive-dash.credot.dev/${item.icon}`}}
                />
                : */}
              <Image
                style={{ width: 50, height: 50, alignSelf: "center" }}
                source={require('../../assets/D&T.png')}
              />
              {/* } */}
              {/* <View style={{backgroundColor:"red"}}> */}
              <Text style={{ fontSize: 12, alignSelf: "center" }}>{item.name}</Text>
              {/* </View> */}
            </TouchableOpacity>
          )
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <View
            style={{ width: '100%', height: 407, backgroundColor: '#1D1D1B' }}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  marginLeft: 40,
                  marginTop: 30,
                }}>
                Work together & create
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 28,
                  marginLeft: 40,
                  marginTop: 10,
                  fontWeight: 'bold',
                }}>
                Greate Opportunities
              </Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
              <View
                style={{
                  width: '90%',
                  height: 45,
                  borderBottomColor: '#fff',
                  borderBottomWidth: 0.5,
                  flexDirection: 'row',
                }}>
                <Image
                  style={{ width: 19, height: 20, marginTop: 10, marginLeft: 10 }}
                  source={require('../../assets/SER.png')}
                />
                <TextInput
                  style={{
                    width: '90%',
                    height: 42,
                    color: '#fff',
                    fontSize: 18,
                    marginLeft: 15,
                    fontWeight: 'bold',
                  }}
                  placeholderTextColor='#fff'
                  placeholder='What are you looking for?'
                />
              </View>
            </View>

            <View style={{ alignItems: 'center', marginTop: 50 }}>
              <View
                style={{
                  width: '90%',
                  height: 45,
                  borderBottomColor: '#fff',
                  borderBottomWidth: 0.5,
                  flexDirection: 'row',
                }}>
                <Image
                  style={{ width: 23, height: 19, marginTop: 12, marginLeft: 10 }}
                  source={require('../../assets/Users.png')}
                />

                <Text
                  style={{
                    marginTop: 10,
                    marginLeft: 15,
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#fff',
                  }}>
                  Talent
                </Text>
                <TouchableOpacity style={{ width: 10, height: 16 }}>
                  <Image
                    style={{
                      width: 10,
                      height: 16,
                      marginLeft: width - 170,
                      marginTop: 14,
                    }}
                    source={require('../../assets/SARR.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ alignItems: 'center', marginTop: 50 }}>
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 45,
                  backgroundColor: '#C89D67',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>
                  Search now
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 0 }}>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
                <Text
                  style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>
                  Explore categories
                </Text>
              </View>

              <TouchableOpacity style={{ marginLeft: 10, marginTop: 21 }} onPress={()=>{
                props.navigation.navigate("Categories")
              }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#1DA1F2',
                    marginLeft: width - 300,
                    marginTop: 4,
                    fontWeight: 'normal',
                  }}>
                  Explore all
                </Text>
              </TouchableOpacity>
            </View>
            <ExploreCategories />

            <View style={{ marginTop: 0 }}>


              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.4,
                  marginTop: 20,
                }}></View>

              <View style={{ marginLeft: 20, marginTop: 30 }}>
                <Text
                  style={{
                    fontSize: width * 0.056,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Top verified freelancers
                </Text>
              </View>

              {loading ?
                <View style={{marginTop:-60}}>
                  <SkeletonLoaderFreelancersList />
                </View>
                : null}

              {Datas?.freelancerList?.freelancers.map((obj, i) => {
                return (
                  <TouchableOpacity
                  onPress={()=>{
                    props.navigation.navigate('AccountScreen',{freelancerId:obj._id})
                  }}
                    key={i}
                    style={{ flexDirection: 'row', marginTop: hp('1%') }}>
                    <View
                      style={{
                        width: '100%',
                        height: height * 0.094,
                        marginTop: 10,
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
                        <ImageBackground style={{ width: '100%', height: '100%', }} imageStyle={{ borderRadius: 100 }} source={{ uri: `https://hive-dash.credot.dev/${obj.profileImg}` }} >
                          {obj.isActivated ?
                            <Image
                              style={{ width: 17, height: 17 }}
                              source={require('../../assets/Dot.png')}
                            /> :
                            <Image
                              style={{ width: 17, height: 17 }}
                              source={require('../../assets/Dot1.png')}
                            />

                          }
                        </ImageBackground>
                      </View>

                      <View
                        style={{
                          marginLeft: 14,
                          marginTop: 6,
                          width: 122,
                          height: 58,
                        }}>
                        <Text style={{ fontSize: width * 0.042, color: 'black' }}>
                          {obj.username}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Image
                            style={{
                              marginTop: 7,
                              marginLeft: 2,
                              width: 15,
                              height: 15,
                            }}
                            source={require('../../assets/Rate.png')}
                          />
                          <Text
                            style={{
                              marginLeft: 10,
                              marginTop: 5,
                              marginTop: 5,
                            }}>
                            4.5
                          </Text>
                          <Text
                            style={{
                              marginLeft: 10,
                              marginTop: 5,
                              color: 'grey',
                            }}>
                            (10 619)
                          </Text>
                        </View>
                      </View>

                      <View style={{ marginLeft: wp('15%'), marginTop: 8 }}>
                        <Text style={{ color: 'grey' }}>Starting from</Text>
                        <Text
                          style={{
                            color: 'black',
                            marginTop: 5,
                            fontSize: 15,
                            fontWeight: 'bold',
                          }}>
                          $479.30 /hr
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              })}

              <View style={{ alignItems: 'center', marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Users')}
                  style={{
                    width: '90%',
                    height: 45,
                    backgroundColor: '#F7F7F7',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{ color: '#C89D67', fontSize: 16, marginLeft: 10 }}>
                    Explore all freelancers
                  </Text>
                  <Image
                    style={{ width: 15, height: 15, marginLeft: 15 }}
                    source={require('../../assets/AB.png')}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 30,
                    marginLeft: 25,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Popular Tasks
                </Text>
              </View>

              <View>

                <View style={{ flexDirection: 'row' }}>

                  <ServiesHome navigation={props.navigation} />

                  <View
                    style={{
                      width: 204,
                      height: 276,
                      backgroundColor: '#fff',
                      marginTop: 30,
                      marginLeft: 25,
                    }}>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>

                    </View>
                  </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 30,bottom:20 }}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('FreelancersScreen')}
                    style={{
                      width: '90%',
                      height: 45,
                      backgroundColor: '#F7F7F7',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{ color: '#C89D67', fontSize: 16, marginLeft: 10 }}>
                      Explore all Tasks
                    </Text>
                    <Image
                      style={{ width: 15, height: 15, marginLeft: 15 }}
                      source={require('../../assets/AB.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '90%',
                  height: 0,
                }}></View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
})

// #1D1D1B
