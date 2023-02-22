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
import React, {useState, useRef, useEffect} from 'react'
const {height, width} = Dimensions.get('window')
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import auth from '@react-native-firebase/auth'
import firebase from '@react-native-firebase/app'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Animated from 'react-native-reanimated'
import BottomSheet from 'reanimated-bottom-sheet'
import RBSheet from 'react-native-raw-bottom-sheet'
import { useMutation } from 'graphql-hooks'



const UPDATE_USER_PROFILE =` 
mutation UpdateProfile($profileImg: String) {
  updateProfile(profileImg: $profileImg) {
    msg
    success
  }
}
`


export default function Dashboard ({navigation}) {
  const [updateProfile] = useMutation(UPDATE_USER_PROFILE )

  const user = firebase.auth().currentUser;
  // const user = firebase.auth().currentUser;
  const [SheetOp, setSheetCl] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);

  const refRBSheet = useRef()
  

  const UPDATE_PROFILE = async ()=>{

   
  
    console.log(data);

  }


  useEffect(()=>{
    console.log(user.photoURL);
  })



  const ImageSelector = async () => {
    launchCamera({}, (response) => {
      console.log(response?.assets?.[0]?.uri);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        console.log(response);
        setSelectedImage(response?.assets?.[0]?.uri)
        user.updateProfile({photoURL : selectedImage});
       
        
      } 


      
    });

   
    
  }

  const ImageLibrary = () =>{
    launchImageLibrary({}, (response) => {
      console.log(response?.assets?.[0]?.uri);
      if (response.didCancel) {
        console.log('User cancelled image library');
      } else if (response.error) {
        console.log('ImageLibrary Error: ', response.error);
      } else {
        console.log(response);
        setSelectedImage(response?.assets?.[0]?.uri)
        user.updateProfile({photoURL : selectedImage});
      }
    });

   

  }


  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}>
      <Text>Swipe down to close</Text>
    </View>
  )

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

                    {firebase.auth().currentUser ? 
                  <ImageBackground source={{   uri:  user ? user.photoURL : selectedImage  }}
                    style={{height: '100%', width: '100%', borderRadius: 100 }}    imageStyle={{borderRadius:100}}>
                    <Image
                      style={{width: 17, height: 17}}
                      source={require('../../assets/Dot.png')}
                    />
                  </ImageBackground>
 : null}
                </View>

                <View
                  style={{
                    width: wp('35%'),
                    height: 89,
                    backgroundColor: '#fffff',
                    marginLeft: 5,
                  }}>
                    {firebase.auth().currentUser ?
                  <Text
                    style={{
                      color: 'black',
                      fontSize: width * 0.043,
                      marginTop: 30,
                      marginLeft: 10,
                      fontWeight: '600',
                    }}>{user.displayName}</Text>
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
                  <TouchableOpacity onPress={() => refRBSheet.current.open()}>
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
            <TouchableOpacity onPress={()=> navigation.navigate('Chat')}
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

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp('8%'),
            marginLeft: wp('9%'),
          }}>
          <TouchableOpacity onPress={() =>  ImageSelector()}>
            <View
              style={{
                width: 84,
                height: 84,
                borderWidth: 0.4,
                borderColor: 'grey',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: wp('12%'), height: hp('5%')}}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/685/685655.png',
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> ImageLibrary ()}>
            <View
              style={{
                width: 84,
                height: 84,
                borderWidth: 0.4,
                borderColor: 'grey',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: wp('10%'),
              }}>
              <Image
                style={{width: wp('12%'), height: hp('5%')}}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/685/685656.png',
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                width: 84,
                height: 84,
                borderWidth: 0.4,
                borderColor: 'grey',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: wp('10%'),
              }}>
              <Image
                style={{width: wp('10%'), height: hp('4%')}}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/2961/2961937.png',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
