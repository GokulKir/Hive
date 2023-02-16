import React from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

<<<<<<< HEAD
=======


>>>>>>> b969e1dad89f9e22d03835a5a95e91bbca4ad7a7
export default function MangeTasks ({navigation}) {
  ;``
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            height: 223,
            backgroundColor: '#fff',
          }}>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 0.8,
              width: '90%',
              marginTop: 20,
              paddingTop: 20,
              flexDirection: 'row',
            }}>
            <TextInput
              style={{width: '90%', fontSize: 15, fontWeight: 'bold'}}
              placeholder='Search order here'
            />
            <Image
              style={{marginTop: 17, marginRight: 45}}
              source={require('../../assets/SR.png')}
            />
          </View>

          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 0.8,
              width: '90%',
              marginTop: 20,
              paddingTop: 20,
              flexDirection: 'row',
            }}>
            <TextInput
              style={{width: '90%', fontSize: 15, fontWeight: 'bold'}}
              placeholder='All orders'
            />
            <Image
              style={{marginTop: 25, marginRight: 45}}
              source={require('../../assets/Bar.png')}
            />
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 25}}>
          <View
            style={{
              width: wp('95%'),
              height: 275,
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            <View></View>

            <Image
              style={{width: 74, height: 26, marginLeft: 20, marginTop: 30}}
              source={require('../../assets/Ong.png')}
            />

            <Text style={{marginLeft: 20, marginTop: 5, color: '#1DA1F2'}}>
              Programming, WordPress, WP setup
            </Text>

            <Text
              style={{
                color: 'black',
                fontSize: wp('4.3%'),
                marginLeft: 20,
                marginTop: 5,
              }}>
              I will write rest APi in react native
            </Text>

            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginTop: 20, marginLeft: 20}}>
                  <Text style={{color: 'black', fontSize: wp('3.7%')}}>
                    Budget
                  </Text>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: wp('3.7%'),
                      fontWeight: '700',
                      color: 'black',
                    }}>
                    $90.19
                  </Text>
                </View>

                <View style={{marginTop: 20, marginLeft: 40}}>
                  <Text style={{color: 'black', fontSize: wp('3.7%')}}>
                    Deadline
                  </Text>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: wp('3.7%'),
                      fontWeight: '700',
                      color: 'black',
                    }}>
                    Dec 22, 2021
                  </Text>
                </View>

                <View style={{marginTop: 20, marginLeft: 40}}>
                  <Text style={{color: 'black', fontSize: wp('3.7%')}}>
                    Add-ons
                  </Text>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: wp('3.7%'),
                      fontWeight: '700',
                      color: 'black',
                    }}>
                    2 Requested
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View
                style={{
                  width: '100%',
                  borderWidth: 0.5,
                  borderColor: 'grey',
                  marginTop: 30,
                }}></View>

              <TouchableOpacity
                onPress={() => navigation.navigate('TaskDetails')}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      width: 53,
                      height: 53,
                      backgroundColor: '#DDDDDD',
                      marginLeft: 20,
                      marginTop: 10,
                      borderRadius: 100,
                    }}></View>

                  <Text style={{marginTop: 25, marginLeft: 15}}>By : </Text>
                  <Text
                    style={{
                      marginTop: 24,
                      fontSize: wp('4%'),
                      marginLeft: 2,
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    Kellyiam Walker
                  </Text>
                  <Image
                    style={{
                      width: 14,
                      height: 30,
                      marginTop: 20,
                      marginLeft: wp('25%'),
                    }}
                    source={require('../../assets/Side1.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{alignItems: 'center', marginTop: 25}}>
            <View
              style={{
                width: wp('95%'),
                height: 300,
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              <View></View>

              <Image
                style={{width: 74, height: 26, marginLeft: 20, marginTop: 30}}
                source={require('../../assets/Ong.png')}
              />

              <Text style={{marginLeft: 20, marginTop: 5, color: '#1DA1F2'}}>
                Programming, WordPress, WP setup
              </Text>

              <Text
                style={{
                  color: 'black',
                  fontSize: wp('4.3%'),
                  marginLeft: 20,
                  marginTop: 5,
                }}>
                I Will use pipeline C logic For C base
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: wp('4.3%'),
                  marginLeft: 20,
                  marginTop: 5,
                }}>
                Controller with one tag
              </Text>

              <View style={{}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: 20, marginLeft: 20}}>
                    <Text style={{color: 'black', fontSize: wp('3.7%')}}>
                      Budget
                    </Text>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: wp('3.7%'),
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      $90.19
                    </Text>
                  </View>

                  <View style={{marginTop: 20, marginLeft: 40}}>
                    <Text style={{color: 'black', fontSize: wp('3.7%')}}>
                      Deadline
                    </Text>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: wp('3.7%'),
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      Dec 22, 2021
                    </Text>
                  </View>

                  <View style={{marginTop: 20, marginLeft: 40}}>
                    <Text style={{color: 'black', fontSize: wp('3.7%')}}>
                      Add-ons
                    </Text>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: wp('3.7%'),
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      2 Requested
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View
                  style={{
                    width: '100%',
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    marginTop: 30,
                  }}></View>

                <TouchableOpacity
                  onPress={() => navigation.navigate('TaskDetails')}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        width: 53,
                        height: 53,
                        backgroundColor: '#DDDDDD',
                        marginLeft: 20,
                        marginTop: 10,
                        borderRadius: 100,
                      }}></View>

                    <Text style={{marginTop: 25, marginLeft: 15}}>By : </Text>
                    <Text
                      style={{
                        marginTop: 24,
                        fontSize: wp('4%'),
                        marginLeft: 2,
                        fontWeight: '600',
                        color: 'black',
                      }}>
                      Kellyiam Walker
                    </Text>
                    <Image
                      style={{
                        width: 14,
                        height: 30,
                        marginTop: 20,
                        marginLeft: wp('25%'),
                      }}
                      source={require('../../assets/Side1.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{height: 56}}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
})
