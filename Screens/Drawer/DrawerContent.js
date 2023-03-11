import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
const { height, width } = Dimensions.get('window')
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import firebase from '@react-native-firebase/app'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ClientContext, useMutation } from 'graphql-hooks'
import { Context } from '../Store'
import { Switch } from 'react-native-paper';

export default function DrawerContent({ navigation }) {
  const client = useContext(ClientContext)
  const [firstname, setFirstName] = useState()
  const [userData, setUserData] = useState()
  const [userImage, setUserImage] = useState()
  const [state, dispatch] = useContext(Context);

  const user = firebase.auth().currentUser

  const signOut = async () => {
    if (user) {
      try {
        await GoogleSignin.signOut()
        await firebase.auth().signOut();
        navigation.navigate('Login')
        console.log('User signed out successfully: Firebase')
      } catch (error) {
        console.error(error)
      }
    } else {
      try {
        await AsyncStorage.removeItem("userSession")
        //  navigation.navigate('Login')
        dispatch({ type: "SET_SESSION", payload: null });
        console.log('User signed out successfully: API')
      } catch (err) {
        console.log(err);
      }
    }


  }

  //   const signOut = async () => {
  //     try {
  //         await firebase.auth().signOut();
  //         navigation.navigate('Signup')
  //     } catch (e) {
  //         console.log(e);
  //     }
  // }

  useEffect(() => {
    AsyncStorage.getItem('userSession', (err, result) => {
      const sesData = JSON.parse(result);
      setUserData(sesData)
      setUserImage(`https://hive-dash.credot.dev/${sesData?.profileImg}`)
      // console.log("---------------------------",`https://hive-dash.credot.dev/${sesData.profileImg}`);
    })
    // console.log("---",user);
    // firestore().collection(user.email).get().then(querySnapshot => {
    //   console.log('Total users: ', querySnapshot.size);
    //   querySnapshot.forEach(documentSnapshot => {
    //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //     Data =  documentSnapshot.data()
    //     console.log("USER : "+Data)
    //     setFirstName(Data.Firstname)
    //     setLastName(Data.Lastname)
    //   });
    // });
  }, [])
  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <View
            style={{
              width: '100%',
              height: 123,
              borderWidth: 0.9,
              borderColor: 'black',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 65,
                height: 65,
                borderRadius: 100,
                backgroundColor: '#DDDDDD',
                marginLeft: 20,
                marginTop: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 100,
                  backgroundColor: 'grey',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={{ uri: firebase.auth().currentUser ? firebase.auth().currentUser.photoURL : userImage }} />
              </View>
            </View>

            <View style={{ width: 190, height: 123, marginTop: 20 }}>
              <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
                <Text
                  style={{
                    marginTop: 15,
                    color: 'black',
                    marginLeft: 14,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {firebase.auth().currentUser ? firebase.auth().currentUser.displayName : userData?.fullName}
                </Text>

                {/* // <Text style={{marginTop:15 , color:'black' , marginLeft:14 , fontSize:18 , fontWeight:'bold'}}>{user.displayName}</Text>  */}
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <Switch value={state?.mode === 0 ? true : false} color={"black"} onValueChange={() => {
                  dispatch({ type: "SET_MODE", payload: state?.mode === 0 ? 1 : 0 });

                }} style={{ marginTop: 5 }} />
                <Text
                  style={{
                    marginTop: 8,
                    // color: '#1DA1F2',
                    fontSize: 13,
                    marginLeft: 4
                  }}>
                  {state?.mode === 0 ? "Freelancer Mode" : "Client Mode"}
                </Text>
              </View>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Dashboard')}
                style={{ marginLeft: 23, marginTop: 15, flexDirection: 'row' }}>
                <Image
                  style={{ width: 16, height: 20, marginTop: 3 }}
                  source={require('../../assets/Badge.png')}
                />
                <Text style={{ marginLeft: 30, color: 'black', fontSize: 16 }}>
                  Dashboard
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Proposals',{mode:state?.mode || ""})
                }}
                style={{ marginLeft: 20, marginTop: 15, flexDirection: 'row' }}>
                <Image
                  style={{ width: 18, height: 19, marginTop: 3 }}
                  source={require('../../assets/Cube.png')}
                />
                <Text style={{ marginLeft: 30, color: 'black', fontSize: 16 }}>
                  My Proposals
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 2 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Payout')}
                style={{ marginLeft: 20, marginTop: 15, flexDirection: 'row' }}>
                <Image
                  style={{ width: 16, height: 20, marginTop: 3 }}
                  source={require('../../assets/Pay.png')}
                />
                <Text style={{ marginLeft: 30, color: 'black', fontSize: 16 }}>
                  Payouts
                </Text>
              </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 2 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Statement')}
                style={{ marginLeft: 17, marginTop: 15, flexDirection: 'row' }}>
                <Image
                  style={{ width: 20, height: 21, marginTop: 3 }}
                  source={require('../../assets/statement.png')}
                />
                <Text style={{ marginLeft: 27, color: 'black', fontSize: 16 , marginTop:2 }}>
                 Statement
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ManageT')}
                style={{ marginLeft: 20, marginTop: 15, flexDirection: 'row' }}>
                <Image
                  style={{ width: 21, height: 19, marginTop: 3 }}
                  source={require('../../assets/Bag1.png')}
                />
                <Text style={{ marginLeft: 24, color: 'black', fontSize: 16 }}>
                  Manage Tasks
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity
                style={{ marginLeft: 20, marginTop: 15, flexDirection: 'row' }}>
                <Image
                  style={{ width: 21, height: 19, marginTop: 3 }}
                  source={require('../../assets/Bag1.png')}
                />
                <Text style={{ marginLeft: 24, color: 'black', fontSize: 16 }}>
                  Manage projects
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Users')}
                style={{ marginLeft: 20, marginTop: 15, flexDirection: 'row' }}>
                <Image
                  style={{ width: 21, height: 20, marginTop: 3 }}
                  source={require('../../assets/Settings.png')}
                />
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ marginLeft: 25, color: 'black', fontSize: 16 }}>
                    Settings
                  </Text>
                  <Image
                    style={{
                      marginTop: 13,
                      width: 15,
                      height: 2,
                      marginLeft: 110,
                    }}
                    source={require('../../assets/Minus.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: '100%',
                height: 204,
                backgroundColor: '#DDDDDD',
                marginTop: 20,
              }}>
              <View style={{ flexDirection: 'row', marginTop: 0 }}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: '#22C55E',
                    marginLeft: 24,
                    marginTop: 20,
                    borderRadius: 100,
                  }}></View>

                <TouchableOpacity
                  onPress={() => navigation.navigate('MySavedScreen')}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      marginTop: 14,
                      marginLeft: 29,
                      fontWeight: 'bold',
                    }}>
                    Profile settings
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: 2,
                  height: 20,
                  backgroundColor: 'grey',
                  marginLeft: 29,
                  marginTop: 5,
                }}></View>

              <View style={{ flexDirection: 'row', marginTop: 0 }}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderWidth: 1,
                    borderColor: 'black',
                    marginLeft: 24,
                    marginTop: 10,
                    borderRadius: 100,
                  }}></View>
                <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 16,
                      marginTop: 5,
                      marginLeft: 27,
                      fontWeight: 'bold',
                    }}>
                    Identity verification
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: 2,
                  height: 20,
                  backgroundColor: 'grey',
                  marginLeft: 29,
                  marginTop: 5,
                }}></View>

              <View style={{ flexDirection: 'row', marginTop: 0 }}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderWidth: 1,
                    borderColor: 'black',
                    marginLeft: 24,
                    marginTop: 10,
                    borderRadius: 100,
                  }}></View>

                <Text
                  style={{
                    color: 'grey',
                    fontSize: 16,
                    marginTop: 5,
                    marginLeft: 27,
                    fontWeight: 'bold',
                  }}>
                  Billing information
                </Text>
              </View>

              <View
                style={{
                  width: 2,
                  height: 20,
                  backgroundColor: 'grey',
                  marginLeft: 29,
                  marginTop: 5,
                }}></View>

              <View style={{ flexDirection: 'row', marginTop: 0 }}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderWidth: 1,
                    borderColor: 'black',
                    marginLeft: 24,
                    marginTop: 10,
                    borderRadius: 100,
                  }}></View>

                <TouchableOpacity
                  onPress={() => navigation.navigate('ACS')}>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 16,
                      marginTop: 5,
                      marginLeft: 26,
                      fontWeight: 'bold',
                    }}>
                    Account Settings
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {state?.mode === 0 ?

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('InvoiceScreen')}
                  style={{ marginLeft: 20, marginTop: 10, flexDirection: 'row' }}>
                  <Image
                    style={{ width: 21, height: 23, marginTop: 2 }}
                    source={require('../../assets/Invoice.png')}
                  />
                  <Text
                    style={{
                      marginLeft: 21,
                      color: 'black',
                      fontSize: 16,
                      marginTop: 3,
                    }}>
                    Invoices
                  </Text>
                </TouchableOpacity>
              </View>
              :
              <></>
            }
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('MySavedScreen')}
                style={{ marginLeft: 20, marginTop: 15, flexDirection: 'row' }}>
                <Image
                  style={{ width: 23, height: 20, marginTop: 2 }}
                  source={require('../../assets/Lover.png')}
                />
                <Text style={{ marginLeft: 18, color: 'black', fontSize: 16 }}>
                  Saved items
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity
                onPress={signOut}
                style={{ marginLeft: 20, marginTop: 15, flexDirection: 'row' }}>
                <Image
                  style={{ width: 22, height: 24, marginTop: 2 }}
                  source={require('../../assets/Logout.png')}
                />
                <Text
                  style={{
                    marginLeft: 21,
                    color: '#EF4444',
                    fontSize: 16,
                    marginTop: 3,
                  }}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ height: 30 }}></View>
          </View>
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
