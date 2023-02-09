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
} from 'react-native'
import React, {useCallback, useMemo, useRef, useState , useEffect} from 'react'
import LoginB from '.././UserLogin/LoginB'
import auth from '@react-native-firebase/auth'
import firebase from '@react-native-firebase/app'
import BottomSheet from '@gorhom/bottom-sheet'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {useManualQuery , useQuery} from 'graphql-hooks'
const {height, width} = Dimensions.get('window')


//Freelance api graph Ql//

const FREELANCE_LISTING = `


{
  freelancerList(pageNumber: 1, limit: 1, category: "string", allUsers: true) {
    success
    msg
    freelancers {
      _id
      username
      firstName
      lastName
      profileImg
      country
      rating
      description
      tagline
      city
      jobSuccess
      hourlyRate
      isProfileVerified
      position
      englishLevel
      joined
      isActivated
    }
    totalPages
    totalCount
  }
}
`;

//Freelance api graph Ql//

export default function Home ({navigation , props}) {
  const [freeLancerList] = useManualQuery(FREELANCE_LISTING)

 





  const user = firebase.auth().currentUser
  const [isSelected, setSelection] = useState(false)
  const [data1 , setData1] = useState([])
  const bottomSheetRef = useRef(null)
  const snapPoints = useMemo(() => ['55%', '78%'], [])

  //callbacks

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

 //Calling API //



  

  useEffect(() =>{

    freeLancerList({variables: {}}).then(response => {
      console.log('frelncer list response', response)
    })

  })
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

           
             


        
                


              <TouchableOpacity style={{flexDirection: 'row'}}>
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
                    <Image
                      style={{width: 17, height: 17}}
                      source={require('../../assets/Dot.png')}
                    />
                  </View>

                  <View
                    style={{
                      marginLeft: 14,
                      marginTop: 6,
                      width: 122,
                      height: 58,
                    }}>
                    <Text style={{fontSize: width * 0.042, color: 'black'}}>
                      Jackson T
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
                        style={{marginLeft: 10, marginTop: 5, marginTop: 5}}>
                        4.5
                      </Text>
                      <Text
                        style={{marginLeft: 10, marginTop: 5, color: 'grey'}}>
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





              <TouchableOpacity style={{flexDirection: 'row'}}>
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
                    <Image
                      style={{width: 17, height: 17}}
                      source={require('../../assets/Dot1.png')}
                    />
                  </View>

                  <View
                    style={{
                      marginLeft: 14,
                      marginTop: 6,
                      width: 122,
                      height: 58,
                    }}>
                    <Text style={{fontSize: width * 0.042, color: 'black'}}>
                      Hawkins W
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
                        style={{marginLeft: 10, marginTop: 5, marginTop: 5}}>
                        4.5
                      </Text>
                      <Text
                        style={{marginLeft: 10, marginTop: 5, color: 'grey'}}>
                        (9 867)
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
                      $1,151.54 /hr
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>






              <View style={{alignItems: 'center', marginTop: 10}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Drawer10')}
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
                <ScrollView
                  horizontal={true}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        width: 204,
                        height: 276,
                        backgroundColor: '#fff',
                        marginTop: 30,
                        marginLeft: 25,
                      }}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('TaskD')}>
                        <View
                          style={{
                            height: 126,
                            width: '100%',
                            backgroundColor: '#DDDDDD',
                            borderRadius: 5,
                          }}>
                          <Image
                            style={{width: 75, height: 23}}
                            source={require('../../assets/Feat.png')}
                          />
                        </View>

                        <View>
                          <Text style={{color: '#1DA1F2', marginTop: 20}}>
                            Nora Carlson
                          </Text>
                          <Text style={{color: 'black'}}>
                            <Text
                              style={{
                                fontSize: 18,
                                color: 'black',
                                fontWeight: 'bold',
                                marginTop: 8,
                              }}>
                              I will write rest API in{' '}
                            </Text>
                            <View>
                              <Text
                                style={{
                                  fontSize: 18,
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
                              color: 'black',
                              fontSize: 15,
                              marginLeft: 10,
                              marginTop: 3,
                            }}>
                            4.5
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              marginLeft: 10,
                              marginTop: 3,
                            }}>
                            (1,287)
                          </Text>
                          <Image
                            style={{
                              width: 20,
                              height: 15,
                              marginLeft: 10,
                              marginTop: 6,
                            }}
                            source={require('../../assets/Ey.png')}
                          />
                          <Text
                            style={{
                              fontSize: 15,
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
                            $90.19
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        width: 204,
                        height: 276,
                        backgroundColor: '#fff',
                        marginTop: 30,
                        marginLeft: 25,
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
                            style={{width: 75, height: 23}}
                            source={require('../../assets/Feat.png')}
                          />
                        </View>

                        <View>
                          <Text style={{color: '#1DA1F2', marginTop: 20}}>
                            Nora Carlson
                          </Text>
                          <Text style={{color: 'black'}}>
                            <Text
                              style={{
                                fontSize: 18,
                                color: 'black',
                                fontWeight: 'bold',
                                marginTop: 8,
                              }}>
                              I will write rest API in{' '}
                            </Text>
                            <View>
                              <Text
                                style={{
                                  fontSize: 18,
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
                              color: 'black',
                              fontSize: 15,
                              marginLeft: 10,
                              marginTop: 3,
                            }}>
                            4.5
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              marginLeft: 10,
                              marginTop: 3,
                            }}>
                            (1,287)
                          </Text>
                          <Image
                            style={{
                              width: 20,
                              height: 15,
                              marginLeft: 10,
                              marginTop: 6,
                            }}
                            source={require('../../assets/Ey.png')}
                          />
                          <Text
                            style={{
                              fontSize: 15,
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
                            $90.19
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        width: 204,
                        height: 276,
                        backgroundColor: '#fff',
                        marginTop: 30,
                        marginLeft: 25,
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
                            style={{width: 75, height: 23}}
                            source={require('../../assets/Feat.png')}
                          />
                        </View>

                        <View>
                          <Text style={{color: '#1DA1F2', marginTop: 20}}>
                            Nora Carlson
                          </Text>
                          <Text style={{color: 'black'}}>
                            <Text
                              style={{
                                fontSize: 18,
                                color: 'black',
                                fontWeight: 'bold',
                                marginTop: 8,
                              }}>
                              I will write rest API in{' '}
                            </Text>
                            <View>
                              <Text
                                style={{
                                  fontSize: 18,
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
                              color: 'black',
                              fontSize: 15,
                              marginLeft: 10,
                              marginTop: 3,
                            }}>
                            4.5
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              marginLeft: 10,
                              marginTop: 3,
                            }}>
                            (1,287)
                          </Text>
                          <Image
                            style={{
                              width: 20,
                              height: 15,
                              marginLeft: 10,
                              marginTop: 6,
                            }}
                            source={require('../../assets/Ey.png')}
                          />
                          <Text
                            style={{
                              fontSize: 15,
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
                            $90.19
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        width: 204,
                        height: 276,
                        backgroundColor: '#fff',
                        marginTop: 30,
                        marginLeft: 25,
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
                            style={{width: 75, height: 23}}
                            source={require('../../assets/Feat.png')}
                          />
                        </View>

                        <View>
                          <Text style={{color: '#1DA1F2', marginTop: 20}}>
                            Nora Carlson
                          </Text>
                          <Text style={{color: 'black'}}>
                            <Text
                              style={{
                                fontSize: 18,
                                color: 'black',
                                fontWeight: 'bold',
                                marginTop: 8,
                              }}>
                              I will write rest API in{' '}
                            </Text>
                            <View>
                              <Text
                                style={{
                                  fontSize: 18,
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
                              color: 'black',
                              fontSize: 15,
                              marginLeft: 10,
                              marginTop: 3,
                            }}>
                            4.5
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              marginLeft: 10,
                              marginTop: 3,
                            }}>
                            (1,287)
                          </Text>
                          <Image
                            style={{
                              width: 20,
                              height: 15,
                              marginLeft: 10,
                              marginTop: 6,
                            }}
                            source={require('../../assets/Ey.png')}
                          />
                          <Text
                            style={{
                              fontSize: 15,
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
                            $90.19
                          </Text>
                        </View>
                      </TouchableOpacity>

                      <View style={{alignItems: 'center', marginTop: 10}}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Drawer8')}
                          style={{
                            width: '90%',
                            height: 45,
                            backgroundColor: '#F7F7F7',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              color: '#C89D67',
                              fontSize: 16,
                              marginLeft: 10,
                            }}>
                            Explore all freelancers
                          </Text>
                          <Image
                            style={{width: 15, height: 15, marginLeft: 15}}
                            source={require('../../assets/AB.png')}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </ScrollView>
                <View style={{alignItems: 'center', marginTop: 30}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Drawer8')}
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
                style={{alignItems: 'center', width: '90%', height: 105}}></View>
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
