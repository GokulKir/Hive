import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import React, { useState, useEffect } from 'react'
const { height, width } = Dimensions.get('window')
import auth from '@react-native-firebase/auth'
import firebase from '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useManualQuery, useQuery } from 'graphql-hooks'
import FreelancerDetailsSkeleton from '../../Components/FreelancerDetailsSkeleton'
import { FREELANCER_DETAILS } from '../../GraphQl/Query'

const user = firebase.auth().currentUser

export default function Account(props) {
  const { freelancerId } = props.route.params || ""
  const [firstname, setFirstName] = useState()
  const [lastname, setLastName] = useState()
  const [details, setDetails] = useState([])


  const { loading, error, data } = useQuery(FREELANCER_DETAILS, {
    variables: {
      getFreelancerDetailsId: props?.route?.params?.freelancerId
    }
  })

  // const { getFreelancerDetails } = data


  useEffect(() => {
    if (data?.getFreelancerDetails?.success) {
      console.log("-------------------", data?.getFreelancerDetails?.userDetails);
      setDetails(data?.getFreelancerDetails?.userDetails)
    }
  }, [data])

  if (loading) {
    return (
      <FreelancerDetailsSkeleton />
    )
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center', marginTop: 90 }}>
          <View style={styles.SecondLayer}>
            <Image
              style={{
                width: wp('22%'),
                height: hp('11%'),
                borderRadius: 50,
                marginTop: -40,
                alignSelf: 'center',
              }}
              source={{ uri:details&& details.profileImg ? `https://hive-dash.credot.dev/${details?.profileImg}`: "https://medusajs.com/images/avatars/user-avatar-03.png" }}
            />

          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
            marginTop: 0,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                color: '#1DA1F2',
                fontSize: width * 0.04,
              }}>
              {`${details?.firstName}${details?.lastName}`}
            </Text>

            <Text
              style={{
                marginTop: 7,
                color: 'black',
                fontSize: width * 0.04,
                fontWeight: '300',
                margin: 10
              }}>
              {details?.description}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{
                width: 19,
                height: 19,
                marginLeft: width * 0.21,
                marginTop: 10,
              }}
              source={require('../../assets/Rate.png')}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                marginTop: 9,
                marginLeft: 16,
              }}>
              {details?.rating}
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 15,
                marginTop: 9,
                marginLeft: 16,
              }}>
              (1,287)
            </Text>
            <Image
              style={{ width: 19, height: 15, marginLeft: 13, marginTop: 12 }}
              source={require('../../assets/Ey.png')}
            />
            <Text
              style={{
                color: 'grey',
                fontSize: 15,
                marginTop: 9,
                marginLeft: 14,
              }}>
              3,466
            </Text>
          </View>

          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Text style={{ color: 'black' }}>Location:</Text>
            <Text
              style={{
                marginTop: 10,
                color: 'black',
                fontSize: 17,
                fontWeight: '650',
              }}>
              {details?.country}, {details?.city}
            </Text>

            <Text style={{ marginTop: 40, fontSize: 15, color: 'black' }}>
              Success rate:
            </Text>

            <Text
              style={{
                marginTop: height * 0.012,
                color: 'black',
                fontSize: 19,
                fontWeight: 'bold',
              }}>
              87% Compleated
            </Text>
          </View>

          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <TouchableOpacity
              style={{
                width: '60%',
                height: 45,
                backgroundColor: '#C89D67',
                borderRadius: 5,
                flexDirection: 'row',
              }}>
              <Image
                style={{ marginLeft: 30, marginTop: 12, width: 20, height: 20 }}
                source={require('../../assets/Me.png')}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: width * 0.048,
                  marginTop: 8,
                  marginLeft: 10,
                }}>
                Contact seller
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              height: 1,
              borderBottomColor: 'grey',
              borderBottomWidth: 0.5,
              marginTop: 40,
            }}></View>

          <View style={{ marginLeft: 30, marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>
              Qualification background
            </Text>
          </View>

          {details?.education?.map((item, index) => {
            return (
              <View style={{ marginTop: 10 }} key={index}>
                <Text style={{ marginLeft: 30, marginTop: 30, color: 'black' }}>
                  {item.institution}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    marginLeft: 28,
                    marginTop: 10,
                    fontSize: 17,
                    color: 'black',
                    fontWeight: 'normal',
                  }}>
                  {item?.major}
                </Text>
                <Text style={{ marginLeft: 28, marginTop: 10 }}>
                  {item.startYear} - {item.endYear}
                </Text>
              </View>
            )
          })}


          <View
            style={{
              width: '100%',
              height: 1,
              borderBottomColor: 'grey',
              borderBottomWidth: 0.5,
              marginTop: 40,
            }}></View>

          <View style={{ marginLeft: 30, marginTop: 30 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
              Services Offered
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={{ marginTop: 34 }}>
              <View
                style={{
                  width: 345,
                  height: 145,
                  backgroundColor: '#DDDDDD',
                  marginTop: 10,
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    width: 95,
                    height: 23,
                    backgroundColor: '#C89D67',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: '#fff' }}>Featured</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#1DA1F2', marginTop: 12 }}>
                  Programming, WordPress, WP setup
                </Text>
                <Text style={{ color: 'grey', marginTop: 12, marginLeft: 70 }}>
                  From
                </Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ color: 'black', fontWeight: '700' }}>
                  I will write rest APi in react native
                </Text>

                <Text
                  style={{
                    color: 'black',
                    marginLeft: 70,
                    fontWeight: '700',
                    fontSize: 15,
                  }}>
                  $90.19
                </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{ width: 19, height: 19, marginLeft: 10, marginTop: 10 }}
                  source={require('../../assets/Rate.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    marginTop: 9,
                    marginLeft: 16,
                  }}>
                  5.0
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 15,
                    marginTop: 9,
                    marginLeft: 16,
                  }}>
                  (2,659)
                </Text>
                <Image
                  style={{ width: 19, height: 15, marginLeft: 13, marginTop: 12 }}
                  source={require('../../assets/Ey.png')}
                />
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 15,
                    marginTop: 9,
                    marginLeft: 14,
                  }}>
                  2,926
                </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                  <View
                    style={{
                      width: 344,
                      height: 89,
                      backgroundColor: '#fff',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: 45,
                        height: 45,
                        backgroundColor: '#D9ACEB',
                        marginTop: 5,
                        marginLeft: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/Buc.png')} />
                      </View>
                    </View>

                    <View style={{ marginTop: 11, marginLeft: 15 }}>
                      <Text style={{ color: 'black', fontWeight: 'bold' }}>
                        2,562
                      </Text>
                      <Text
                        style={{
                          color: 'grey',
                          fontWeight: 'normal',
                          fontSize: 12,
                        }}>
                        No. of sales
                      </Text>
                    </View>

                    <View style={{ alignItems: 'center', marginLeft: 36 }}>
                      <View
                        style={{
                          width: 344,
                          height: 89,
                          backgroundColor: '#fff',
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: 45,
                            height: 45,
                            backgroundColor: '#AAFEED',
                            marginTop: 5,
                            marginLeft: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <View style={{ alignItems: 'center' }}>
                            <Image source={require('../../assets/Buc.png')} />
                          </View>
                        </View>

                        <View style={{ marginTop: 11, marginLeft: 15 }}>
                          <Text style={{ color: 'black', fontWeight: 'bold' }}>
                            7 Days
                          </Text>
                          <Text
                            style={{
                              color: 'grey',
                              fontWeight: 'normal',
                              fontSize: 12,
                            }}>
                            Delivery time
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={{ marginTop: 14 }}>
              <View
                style={{
                  width: 345,
                  height: 145,
                  backgroundColor: '#DDDDDD',
                  marginTop: 10,
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    width: 95,
                    height: 23,
                    backgroundColor: '#C89D67',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: '#fff' }}>Featured</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#1DA1F2', marginTop: 12 }}>
                  Programming, WordPress, WP setup
                </Text>
                <Text style={{ color: 'grey', marginTop: 12, marginLeft: 70 }}>
                  From
                </Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ color: 'black', fontWeight: '700' }}>
                  I will write rest APi in react native
                </Text>

                <Text
                  style={{
                    color: 'black',
                    marginLeft: 70,
                    fontWeight: '700',
                    fontSize: 15,
                  }}>
                  $90.19
                </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{ width: 19, height: 19, marginLeft: 10, marginTop: 10 }}
                  source={require('../../assets/Rate.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    marginTop: 9,
                    marginLeft: 16,
                  }}>
                  5.0
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 15,
                    marginTop: 9,
                    marginLeft: 16,
                  }}>
                  (2,659)
                </Text>
                <Image
                  style={{ width: 19, height: 15, marginLeft: 13, marginTop: 12 }}
                  source={require('../../assets/Ey.png')}
                />
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 15,
                    marginTop: 9,
                    marginLeft: 14,
                  }}>
                  2,926
                </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                  <View
                    style={{
                      width: 344,
                      height: 89,
                      backgroundColor: '#fff',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: 45,
                        height: 45,
                        backgroundColor: '#D9ACEB',
                        marginTop: 5,
                        marginLeft: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/Buc.png')} />
                      </View>
                    </View>

                    <View style={{ marginTop: 11, marginLeft: 15 }}>
                      <Text style={{ color: 'black', fontWeight: 'bold' }}>
                        2,562
                      </Text>
                      <Text
                        style={{
                          color: 'grey',
                          fontWeight: 'normal',
                          fontSize: 12,
                        }}>
                        No. of sales
                      </Text>
                    </View>

                    <View style={{ alignItems: 'center', marginLeft: 36 }}>
                      <View
                        style={{
                          width: 344,
                          height: 89,
                          backgroundColor: '#fff',
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: 45,
                            height: 45,
                            backgroundColor: '#AAFEED',
                            marginTop: 5,
                            marginLeft: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <View style={{ alignItems: 'center' }}>
                            <Image source={require('../../assets/Buc.png')} />
                          </View>
                        </View>

                        <View style={{ marginTop: 11, marginLeft: 15 }}>
                          <Text style={{ color: 'black', fontWeight: 'bold' }}>
                            7 Days
                          </Text>
                          <Text
                            style={{
                              color: 'grey',
                              fontWeight: 'normal',
                              fontSize: 12,
                            }}>
                            Delivery time
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={{ marginTop: 14 }}>
              <View
                style={{
                  width: 345,
                  height: 145,
                  backgroundColor: '#DDDDDD',
                  marginTop: 10,
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    width: 95,
                    height: 23,
                    backgroundColor: '#C89D67',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: '#fff' }}>Featured</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#1DA1F2', marginTop: 12 }}>
                  Programming, WordPress, WP setup
                </Text>
                <Text style={{ color: 'grey', marginTop: 12, marginLeft: 70 }}>
                  From
                </Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ color: 'black', fontWeight: '700' }}>
                  I will write rest APi in react native
                </Text>

                <Text
                  style={{
                    color: 'black',
                    marginLeft: 70,
                    fontWeight: '700',
                    fontSize: 15,
                  }}>
                  $90.19
                </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{ width: 19, height: 19, marginLeft: 10, marginTop: 10 }}
                  source={require('../../assets/Rate.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    marginTop: 9,
                    marginLeft: 16,
                  }}>
                  5.0
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 15,
                    marginTop: 9,
                    marginLeft: 16,
                  }}>
                  (2,659)
                </Text>
                <Image
                  style={{ width: 19, height: 15, marginLeft: 13, marginTop: 12 }}
                  source={require('../../assets/Ey.png')}
                />
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 15,
                    marginTop: 9,
                    marginLeft: 14,
                  }}>
                  2,926
                </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                  <View
                    style={{
                      width: 344,
                      height: 89,
                      backgroundColor: '#fff',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: 45,
                        height: 45,
                        backgroundColor: '#D9ACEB',
                        marginTop: 5,
                        marginLeft: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/Buc.png')} />
                      </View>
                    </View>

                    <View style={{ marginTop: 11, marginLeft: 15 }}>
                      <Text style={{ color: 'black', fontWeight: 'bold' }}>
                        2,562
                      </Text>
                      <Text
                        style={{
                          color: 'grey',
                          fontWeight: 'normal',
                          fontSize: 12,
                        }}>
                        No. of sales
                      </Text>
                    </View>

                    <View style={{ alignItems: 'center', marginLeft: 36 }}>
                      <View
                        style={{
                          width: 344,
                          height: 89,
                          backgroundColor: '#fff',
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: 45,
                            height: 45,
                            backgroundColor: '#AAFEED',
                            marginTop: 5,
                            marginLeft: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <View style={{ alignItems: 'center' }}>
                            <Image source={require('../../assets/Buc.png')} />
                          </View>
                        </View>

                        <View style={{ marginTop: 11, marginLeft: 15 }}>
                          <Text style={{ color: 'black', fontWeight: 'bold' }}>
                            7 Days
                          </Text>
                          <Text
                            style={{
                              color: 'grey',
                              fontWeight: 'normal',
                              fontSize: 12,
                            }}>
                            Delivery time
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  SecondLayer: {
    width: '100%',
    height: height * 0.08,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 0.5,
    borderColor: '#DDDDDD',
  },
})
