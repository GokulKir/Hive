import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const {width, height} = Dimensions.get('window')

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

export default function Freelancers ({navigation}) {
  const [Datas, setDatas] = useState([])

  const {loading, error, data} = useQuery(FREELANCE_LISTING)

  useEffect(() => {
    if (data?.freelancerList?.freelancers) {
    }

    // console.log("loading       :  ",loading);
    if (!loading) {
      // Alert.alert("alert",JSON.stringify(data))
      // console.log("loading completed", data)
      setDatas(data)
    }
  },[])


  useEffect(() =>{
    console.log("Data>>>>>>",Datas?.freelancerList?.freelancers);
    
      },[Datas])

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={{}}>
              <View
                style={{
                  width: '100%',
                  height: 73,
                  flexDirection: 'row',
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    marginLeft: '7%',
                    marginTop: 20,
                    fontWeight: 'bold',
                  }}>
                  29 search results(s) found
                </Text>

            

                <TouchableOpacity
                  onPress={() => navigation.navigate('Filter')}
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#DDDDDD',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                    marginLeft: width * 0.22,
                    marginTop: 10,
                  }}>
                  <Image
                    style={{width: 16, height: 16}}
                    source={require('../../assets/Fil.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 159,
                  height: 146,
                  backgroundColor: '#fff',
                  marginTop: 30,
                  marginLeft: wp('15%'),
                }}>



                <TouchableOpacity>
                  <View
                    style={{
                      height: 126,
                      width: '100%',
                      backgroundColor: '#DDDDDD',
                      borderRadius: 5,
                    }}>
                    <Image
                      style={{width: 80, height: 25}}
                      source={require('../../assets/Label2.png')}
                    />
                  </View>

                  <View>
                    <Text style={{color: '#1DA1F2', marginTop: 20}}>
                      Nora Carlson
                    </Text>
                    <Text style={{color: 'black'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: 'bold',
                          marginTop: 8,
                        }}>
                        I will write rest API in{' '}
                      </Text>
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: 'bold',
                            marginTop: 8,
                          }}>
                          react native{' '}
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
                    <Text style={{fontSize: 12, marginLeft: 10, marginTop: 3}}>
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
                    <Text style={{fontSize: 12, marginLeft: 10, marginTop: 3}}>
                      3,466
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 15, marginLeft: 5, marginTop: 12}}>
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
              </View>

              <View
                style={{
                  width: 159,
                  height: '100%',
                  backgroundColor: '#fff',
                  marginTop: 30,
                  marginLeft: 18,
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 126,
                      width: '100%',
                      backgroundColor: '#DDDDDD',
                      borderRadius: 5,
                    }}>
                    <Image
                      style={{width: 80, height: 25}}
                      source={require('../../assets/Label2.png')}
                    />
                  </View>

                  <View>
                    <Text style={{color: '#1DA1F2', marginTop: 20}}>
                      Nora Carlson
                    </Text>
                    <Text style={{color: 'black'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: 'bold',
                          marginTop: 8,
                        }}>
                        I will write rest API in{' '}
                      </Text>
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: 'bold',
                            marginTop: 8,
                          }}>
                          react native{' '}
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
                    <Text style={{fontSize: 12, marginLeft: 10, marginTop: 3}}>
                      (1,287)
                    </Text>
                    <Image
                      style={{
                        width: 14,
                        height: 10,
                        marginLeft: 10,
                        marginTop: 6,
                      }}
                      source={require('../../assets/Ey.png')}
                    />
                    <Text style={{fontSize: 12, marginLeft: 10, marginTop: 3}}>
                      3,466
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 15, marginLeft: 5, marginTop: 12}}>
                      From :
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
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
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 159,
                  height: 146,
                  backgroundColor: '#fff',
                  marginTop: 30,
                  marginLeft: 12,
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 126,
                      width: '100%',
                      backgroundColor: '#DDDDDD',
                      borderRadius: 5,
                    }}>
                    <Image
                      style={{width: 80, height: 25}}
                      source={require('../../assets/Label2.png')}
                    />
                  </View>

                  <View>
                    <Text style={{color: '#1DA1F2', marginTop: 20}}>
                      Nora Carlson
                    </Text>
                    <Text style={{color: 'black'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: 'bold',
                          marginTop: 8,
                        }}>
                        I will write rest API in{' '}
                      </Text>
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: 'bold',
                            marginTop: 8,
                          }}>
                          react native{' '}
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
                    <Text style={{fontSize: 12, marginLeft: 10, marginTop: 3}}>
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
                    <Text style={{fontSize: 12, marginLeft: 10, marginTop: 3}}>
                      3,466
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 15, marginLeft: 5, marginTop: 12}}>
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
              </View>

              <View
                style={{
                  width: 159,
                  height: '100%',
                  backgroundColor: '#fff',
                  marginTop: 30,
                  marginLeft: 18,
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 126,
                      width: '100%',
                      backgroundColor: '#DDDDDD',
                      borderRadius: 5,
                    }}></View>

                  <View>
                    <Text style={{color: '#1DA1F2', marginTop: 20}}>
                      Nora Carlson
                    </Text>
                    <Text style={{color: 'black'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: 'bold',
                          marginTop: 8,
                        }}>
                        I will write rest API in{' '}
                      </Text>
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: 'bold',
                            marginTop: 8,
                          }}>
                          react native{' '}
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
                    <Text style={{fontSize: 12, marginLeft: 10, marginTop: 3}}>
                      (1,287)
                    </Text>
                    <Image
                      style={{
                        width: 14,
                        height: 10,
                        marginLeft: 10,
                        marginTop: 6,
                      }}
                      source={require('../../assets/Ey.png')}
                    />
                    <Text style={{fontSize: 12, marginLeft: 10, marginTop: 3}}>
                      3,466
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 15, marginLeft: 5, marginTop: 12}}>
                      From :
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
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
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 159,
                  height: 146,
                  backgroundColor: '#fff',
                  marginTop: 30,
                  marginLeft: 12,
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 126,
                      width: '100%',
                      backgroundColor: '#DDDDDD',
                      borderRadius: 5,
                    }}></View>

                  <View>
                    <Text style={{color: '#1DA1F2', marginTop: 20}}>
                      Nora Carlson
                    </Text>
                    <Text style={{color: 'black'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: 'bold',
                          marginTop: 8,
                        }}>
                        I will write rest API in{' '}
                      </Text>
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: 'bold',
                            marginTop: 8,
                          }}>
                          react native{' '}
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
                    <Text style={{fontSize: 12, marginLeft: 10, marginTop: 3}}>
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
                    <Text style={{fontSize: 12, marginLeft: 10, marginTop: 3}}>
                      3,466
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 15, marginLeft: 5, marginTop: 12}}>
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
              </View>

              <View
                style={{
                  width: 159,
                  height: '100%',
                  backgroundColor: '#fff',
                  marginTop: 30,
                  marginLeft: 18,
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 126,
                      width: '100%',
                      backgroundColor: '#DDDDDD',
                      borderRadius: 5,
                    }}></View>

                  <View>
                    <Text style={{color: '#1DA1F2', marginTop: 20}}>
                      Nora Carlson
                    </Text>
                    <Text style={{color: 'black'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: 'bold',
                          marginTop: 8,
                        }}>
                        I will write rest API in{' '}
                      </Text>
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'black',
                            fontWeight: 'bold',
                            marginTop: 8,
                          }}>
                          react native{' '}
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
                    <Text style={{fontSize: 12, marginLeft: 10, marginTop: 3}}>
                      (1,287)
                    </Text>
                    <Image
                      style={{
                        width: 14,
                        height: 10,
                        marginLeft: 10,
                        marginTop: 6,
                      }}
                      source={require('../../assets/Ey.png')}
                    />
                    <Text style={{fontSize: 12, marginLeft: 10, marginTop: 3}}>
                      3,466
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 15, marginLeft: 5, marginTop: 12}}>
                      From :
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
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
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
