import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native'
import React from 'react'
const {height, width} = Dimensions.get('window')
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import auth from '@react-native-firebase/auth'
import firebase from '@react-native-firebase/app'

export default function Dashboard ({navigation}) {
  // const user = firebase.auth().currentUser;

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <ScrollView>
          <View>
            <View
              style={{
                width: width * 0.93,
                height: 105,
                borderWidth: 0.6,
                borderColor: 'grey',
                marginTop: 40,
                borderRadius: 8,
                backgroundColor: '#fff',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: width * 0.17,
                    height: width * 0.17,
                    backgroundColor: '#DDDDDD',
                    marginLeft: 20,
                    marginTop: 25,
                    borderRadius: 100,
                  }}>
                  <ImageBackground
                    style={{height: '100%', width: '100%', borderRadius: 100}}>
                    <Image
                      style={{width: 17, height: 17}}
                      source={require('../../assets/Dot.png')}
                    />
                  </ImageBackground>
                </View>

                <View
                  style={{
                    width: wp('35%'),
                    height: 89,
                    backgroundColor: '#fffff',
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: width * 0.043,
                      marginTop: 30,
                      marginLeft: 10,
                      fontWeight: '600',
                    }}></Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileScreen')}>
                    <Text
                      style={{
                        color: '#1DA1F2',
                        fontSize: 16,
                        marginTop: 5,
                        marginLeft: 10,
                        fontWeight: 'normal',
                      }}>
                      Update profile
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#F7F7F7',
                    marginLeft: wp('13%'),
                    marginTop: 25,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity>
                    <Image
                      style={{width: 20, height: 17}}
                      source={require('../../assets/Cam.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: width * 0.93,
                height: 75,
                borderColor: 'grey',
                borderWidth: 1,
                marginTop: 20,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 20, height: 20, marginLeft: 30, marginTop: 26}}
                  source={require('../../assets/Mess.png')}
                />
                <Text
                  style={{
                    marginTop: 25,
                    marginLeft: 12,
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'normal',
                  }}>
                  Message
                </Text>

                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: 'red',
                    borderRadius: 100,
                    marginLeft: '52%',
                    marginTop: 30,
                  }}></View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: width * 0.93,
                height: 105,
                borderColor: 'grey',
                borderWidth: 1,
                marginTop: 20,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: width * 0.17,
                    height: width * 0.17,
                    backgroundColor: '#E0DAFB',
                    marginTop: 20,
                    marginLeft: 20,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('../../assets/Arro.png')} />
                </View>

                <View
                  style={{width: '60%', height: 45, backgroundColor: '#fff'}}>
                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 15,
                      marginTop: 27,
                      fontSize: 17,
                      fontWeight: 'normal',
                    }}>
                    526
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 15,
                      marginTop: 10,
                      fontSize: 15,
                      fontWeight: 'normal',
                    }}>
                    Services offered
                  </Text>
                </View>

                <View style={{marginTop: 45}}>
                  <Image
                    style={{width: 10, height: 17}}
                    source={require('../../assets/Ar2.png')}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: width * 0.93,
                height: 105,
                borderColor: 'grey',
                borderWidth: 1,
                marginTop: 20,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: width * 0.17,
                    height: width * 0.17,
                    backgroundColor: '#E0DAFB',
                    marginTop: 20,
                    marginLeft: 20,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('../../assets/Arro.png')} />
                </View>

                <View
                  style={{width: '60%', height: 45, backgroundColor: '#fff'}}>
                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 15,
                      marginTop: 27,
                      fontSize: 17,
                      fontWeight: 'normal',
                    }}>
                    526
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 15,
                      marginTop: 10,
                      fontSize: 15,
                      fontWeight: 'normal',
                    }}>
                    Completed Services
                  </Text>
                </View>

                <View style={{marginTop: 45}}>
                  <Image
                    style={{width: 10, height: 17}}
                    source={require('../../assets/Ar2.png')}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: width * 0.93,
                height: 105,
                borderColor: 'grey',
                borderWidth: 1,
                marginTop: 20,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: width * 0.17,
                    height: width * 0.17,
                    backgroundColor: '#E0DAFB',
                    marginTop: 20,
                    marginLeft: 20,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('../../assets/Arro.png')} />
                </View>

                <View
                  style={{width: '60%', height: 45, backgroundColor: '#fff'}}>
                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 15,
                      marginTop: 27,
                      fontSize: 17,
                      fontWeight: 'normal',
                    }}>
                    526
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 15,
                      marginTop: 10,
                      fontSize: 15,
                      fontWeight: 'normal',
                    }}>
                    In Queue Services
                  </Text>
                </View>

                <View style={{marginTop: 45}}>
                  <Image
                    style={{width: 10, height: 17}}
                    source={require('../../assets/Ar2.png')}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: width * 0.93,
                height: 105,
                borderColor: 'grey',
                borderWidth: 1,
                marginTop: 20,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: width * 0.17,
                    height: width * 0.17,
                    backgroundColor: '#E0DAFB',
                    marginTop: 20,
                    marginLeft: 20,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('../../assets/Arro.png')} />
                </View>

                <View
                  style={{width: '60%', height: 45, backgroundColor: '#fff'}}>
                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 15,
                      marginTop: 27,
                      fontSize: 17,
                      fontWeight: 'normal',
                    }}>
                    526
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 15,
                      marginTop: 10,
                      fontSize: 15,
                      fontWeight: 'normal',
                    }}>
                    Total Revenue
                  </Text>
                </View>

                <View style={{marginTop: 45}}>
                  <Image
                    style={{width: 10, height: 17}}
                    source={require('../../assets/Ar2.png')}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{height: 45}}></View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
