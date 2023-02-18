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
} from 'react-native'
import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react'
import LoginB from '.././UserLogin/LoginB'
import auth from '@react-native-firebase/auth'
import firebase from '@react-native-firebase/app'
import BottomSheet from '@gorhom/bottom-sheet'
import ServiesHome from './ServiesHome'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {useManualQuery, useQuery} from 'graphql-hooks'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import SkeletonLoaderFreelancersList from '../../Components/SkeletonLoaderFreelancersList'
const {height, width} = Dimensions.get('window')

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

export default function Home ({navigation, props}) {
  const {loading, error, data} = useQuery(FREELANCE_LISTING)

  // console.log('++++++++++', data)

  const user = firebase.auth().currentUser
  const [isSelected, setSelection] = useState(false)
  const [Datas, setDatas] = useState([])
  const bottomSheetRef = useRef(null)
  const snapPoints = useMemo(() => ['55%', '78%'], [])


  useEffect(() => {
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
  useEffect(() => {
    console.log('Data>>>>>>', Datas?.freelancerList?.freelancers)
  }, [Datas])
  //Calling API //

  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <View
            style={{width: '100%', height: 407, backgroundColor: '#1D1D1B'}}>
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

            <View style={{alignItems: 'center', marginTop: 30}}>
              <View
                style={{
                  width: '90%',
                  height: 45,
                  borderBottomColor: '#fff',
                  borderBottomWidth: 0.5,
                  flexDirection: 'row',
                }}>
                <Image
                  style={{width: 19, height: 20, marginTop: 10, marginLeft: 10}}
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

            <View style={{alignItems: 'center', marginTop: 50}}>
              <View
                style={{
                  width: '90%',
                  height: 45,
                  borderBottomColor: '#fff',
                  borderBottomWidth: 0.5,
                  flexDirection: 'row',
                }}>
                <Image
                  style={{width: 23, height: 19, marginTop: 12, marginLeft: 10}}
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
                <TouchableOpacity style={{width: 10, height: 16}}>
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

            <View style={{alignItems: 'center', marginTop: 50}}>
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 45,
                  backgroundColor: '#C89D67',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 17}}>
                  Search now
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginTop: 0}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{marginTop: 20, marginLeft: 20, flexDirection: 'row'}}>
                <Text
                  style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                  Explore categories
                </Text>
              </View>

              <TouchableOpacity style={{marginLeft: 10, marginTop: 21}}>
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

            <View style={{height: '82%', marginTop: 20}}>
              <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    width: 123,
                    height: 95,
                    marginTop: 30,
                    marginLeft: width * 0.06,
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 65,
                        height: 65,
                        backgroundColor: '#DDDDDD',
                        borderRadius: 5,
                      }}></View>
                    <View style={{marginTop: 8, alignItems: 'center'}}>
                      <Text style={{color: 'black', fontSize: width * 0.035}}>
                        Development
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    marginTop: 30,
                    marginLeft: width * 0.01,
                    marginRight: 20,
                  }}>
                  <View
                    style={{
                      width: 65,
                      height: 65,
                      backgroundColor: '#DDDDDD',
                      borderRadius: 5,
                    }}></View>
                  <View style={{marginTop: 8, alignItems: 'center'}}>
                    <Text style={{color: 'black', fontSize: width * 0.035}}>
                      Designing
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    marginTop: 30,
                    marginLeft: width * 0.09,
                  }}>
                  <View
                    style={{
                      width: 65,
                      height: 65,
                      backgroundColor: '#DDDDDD',
                      borderRadius: 5,
                    }}></View>
                  <View style={{marginTop: 8, alignItems: 'center'}}>
                    <Text style={{color: 'black', fontSize: width * 0.035}}>
                      Marketing
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    marginTop: 30,
                    marginLeft: width * 0.11,
                  }}>
                  <View
                    style={{
                      width: 65,
                      height: 65,
                      backgroundColor: '#DDDDDD',
                      borderRadius: 5,
                    }}></View>
                  <View style={{marginTop: 8, alignItems: 'center'}}>
                    <Text style={{color: 'black', fontSize: width * 0.035}}>
                      Music & Audio
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    marginTop: 30,
                    marginLeft: width * 0.07,
                  }}>
                  <View
                    style={{
                      width: 65,
                      height: 65,
                      backgroundColor: '#DDDDDD',
                      borderRadius: 5,
                    }}></View>
                  <View style={{marginTop: 8, alignItems: 'center'}}>
                    <Text style={{color: 'black', fontSize: width * 0.035}}>
                      House Cleaning
                    </Text>
                  </View>
                </TouchableOpacity>

                <View style={{width: 10}}></View>
              </ScrollView>

              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.4,
                  marginTop: 20,
                }}></View>

              <View style={{marginLeft: 20, marginTop: 30}}>
                <Text
                  style={{
                    fontSize: width * 0.056,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Top verified freelancers
                </Text>
              </View>

              {loading ? <SkeletonLoaderFreelancersList /> : null}

              {Datas?.freelancerList?.freelancers.map((obj, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    style={{flexDirection: 'row', marginTop: hp('1%')}}>
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
                        {obj.isActivated ? (
                          <Image
                            style={{width: 17, height: 17}}
                            source={require('../../assets/Dot.png')}
                          />
                        ) : (
                          <Image
                            style={{width: 17, height: 17}}
                            source={require('../../assets/Dot1.png')}
                          />
                        )}
                      </View>

                      <View
                        style={{
                          marginLeft: 14,
                          marginTop: 6,
                          width: 122,
                          height: 58,
                        }}>
                        <Text style={{fontSize: width * 0.042, color: 'black'}}>
                          {obj.username}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
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

                      <View style={{marginLeft: wp('15%'), marginTop: 8}}>
                        <Text style={{color: 'grey'}}>Starting from</Text>
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

              <View style={{alignItems: 'center', marginTop: 10}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Users')}
                  style={{
                    width: '90%',
                    height: 45,
                    backgroundColor: '#F7F7F7',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{color: '#C89D67', fontSize: 16, marginLeft: 10}}>
                    Explore all freelancers
                  </Text>
                  <Image
                    style={{width: 15, height: 15, marginLeft: 15}}
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
                
                  <View style={{flexDirection: 'row'}}>
               
                  <ServiesHome/>

                    <View
                      style={{
                        width: 204,
                        height: 276,
                        backgroundColor: '#fff',
                        marginTop: 30,
                        marginLeft: 25,
                      }}>
                      <View style={{alignItems: 'center', marginTop: 10}}>

                      </View>
                    </View>
                  </View>
              
                <View style={{alignItems: 'center', marginTop: 30}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('FreelancersScreen')}
                    style={{
                      width: '90%',
                      height: 45,
                      backgroundColor: '#F7F7F7',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{color: '#C89D67', fontSize: 16, marginLeft: 10}}>
                      Explore all Tasks
                    </Text>
                    <Image
                      style={{width: 15, height: 15, marginLeft: 15}}
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
