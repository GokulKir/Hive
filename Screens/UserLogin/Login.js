import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
const { width, height } = Dimensions.get('window')
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { ClientContext, useMutation } from 'graphql-hooks'
import { Snackbar, IconButton } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Context } from '../Store'

const USER_LOGIN = `
mutation UserLogin($email: String!, $password: String!) {
  userLogin(email: $email, password: $password) {
    msg
    success
    token
    userData {
      profileImg
      fullName
      uid
      email
    }
  }
}
`

export default function Login({ navigation }) {
  const client = useContext(ClientContext)
  const [state, dispatch] = useContext(Context);

  const [LoginUser] = useMutation(USER_LOGIN)
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '86575262147-5ek6sbcsva6bi38al4h641sa731s0aja.apps.googleusercontent.com',
    })
  }, [])
  const [showPassword, setShowPassword] = useState(false)
  const [isSignInLoader, setIsSignInLoader] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [showFieldError, setShowFieldError] = useState('')
  // const [email, setEmail] = useState('ajnash.aju323@gmail.com')
  // const [password, setPassword] = useState('12345678')
  const [snackbarVisible, setSnackbarVisible] = useState(false)
  const [snackBarError, setSnackBarError] = useState('')

  //SignIm user Api //

  const validate = text => {
    console.log(text)
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (reg.test(text) === false) {
      console.log('Email is Not Correct')
      return false
    } else {
      console.log('Email is Correct')
      return true
    }
  }

  const handleLogin = async () => {
    if (email === '' || password === '') {
      if (email === '') {
        setEmailError('This field is required.')
      }
      if (password === '') {
        setPasswordError('This field is required.')
      }
      setShowFieldError(true)
    } else if (validate(email) && password.length >= 8) {
      setIsSignInLoader(true)
      console.log('email and passwrd', email, password)
      const { data, error } = await LoginUser({
        variables: { email, password },
      })

      console.log(data)
      if (error) {
        // your code to handle login error
        console.log(error)
        setIsSignInLoader(false)
      } else {
        const { token, success, msg, userData } = data.userLogin
        client.setHeader('Authorization', `Bearer ${token}`)
        client.setHeader('token', `${token}`)
        console.log(userData)
        if (success) {
          try {
            AsyncStorage.setItem('userSession', JSON.stringify(userData))
          } catch (err) {
          } finally {
            setIsSignInLoader(false)
            // navigation.navigate('HomeScreen')
            dispatch({ type: "SET_SESSION", payload: userData });
          }
          //  navigation.navigate('HomeScreen')
        } else if (msg) {
          setIsSignInLoader(false)
          console.log(msg)
          // Alert.alert(msg)
          setShowFieldError(true)
          setSnackBarError(msg)
          setSnackbarVisible(true)
        } else if (token) {
          setIsSignInLoader(false)
          console.log(token)
          // Alert.alert(token)
        }
        // console.log({success,msg,token});

        // your code to handle token in browser and login redirection
      }
    } else {
      setShowFieldError(true)
      console.log('error')
    }

    //  console.log("email and passwrd",email, password)
    // const { data, error } = await LoginUser({
    //   variables: { email, password }
    // })

    // console.log(data);
    // if (error) {
    //   // your code to handle login error
    //   console.log(error);
    // } else {
    //   const { token,success,msg,userData } = data.userLogin
    //   client.setHeader('Authorization', `Bearer ${token}`)
    //   console.log(userData);
    //     if(success) {
    //       try{
    //         AsyncStorage.setItem("userSession", JSON.stringify(userData));
    //       }catch(err){

    //       }finally{
    //         navigation.navigate('HomeScreen')
    //       }
    //       //  navigation.navigate('HomeScreen')
    //     } else if(msg) {
    //       console.log(msg);
    //       // Alert.alert(msg)
    //       setSnackBarError(msg)
    //       setSnackbarVisible(true)
    //     } else if (token) {
    //       console.log(token);
    //       Alert.alert(token)
    //     }
    //   // console.log({success,msg,token});

    //   // your code to handle token in browser and login redirection
    // }
  }

  const SignIn = () => {
    if (email == '') {
      console.log('email is null')
    } else if (password == '') {
      console.log('Password is null')
    } else if (email !== '' && password !== '') {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log('User created')
          navigation.navigate('HomeScreen')

          Alert.alert(
            //Title
            'Sucessfully SignIn',
            // Body
          )
        })
        .catch(e => {
          console.log(e)
          Alert.alert(
            //Title
            'User not find ?',
            // Body
          )
        })
    }
  }

  //SignIn user Api //

  //Google Sign in  API //

  const LoginGoogle = async () => {
    const { idToken } = await GoogleSignin.signIn()

    const googleCredential = auth.GoogleAuthProvider.credential(idToken)

    const user_sign_in = auth().signInWithCredential(googleCredential)

    user_sign_in
      .then(user => {
        navigation.navigate('HomeScreen')
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  //Google Sign in  API //

  //USER LOGIN BACKEND API //

  const LoginUs = async () => {
    try {
      const LOGIN = await LoginUser({
        variables: {
          email: email,
          password: password,
        },
      })
      console.log('Login Successfully' + LOGIN)
      navigation.navigate('HomeScreen')
    } catch (error) {
      console.log(error)
    }
  }

  //USER LOGIN BACKEND API //

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ width: '100%', height: 56, backgroundColor: '#1D1D1B' }}>
          <View style={{ marginLeft: width - 58, marginTop: 15 }}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{ color: 'grey', marginTop: 3, fontSize: 15 }}>
                Skip
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: height * 0.29,
            backgroundColor: '#1D1D1B',
            alignItems: 'center',
          }}>
          <Image
            style={{ marginTop: 60, height: 46, width: 96 }}
            source={require('../../assets/Logo.png')}
          />

          <Text
            style={{
              color: '#fff',
              marginTop: 25,
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            Welcome! Nice to see you again{' '}
          </Text>
        </View>

        <View>
          <View style={{ marginLeft: 20, marginTop: 25 }}>
            <Text
              style={{
                color: 'black',
                fontSize: width * 0.05,
                fontWeight: '700',
              }}>
              Login now
            </Text>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <View
            style={{
              alignItems: 'center',
              width: width * 0.9,
              height: 45,
              borderBottomColor: 'grey',
              borderBottomWidth: 0.7,
            }}>
            <TextInput
              onChangeText={value => {
                setEmail(value)
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
                if (value === '') {
                  setEmailError('This field is required')
                } else if (reg.test(value) === false) {
                  setEmailError('Please enter a valid email address')
                  console.log('Email is Not Correct')
                  return false
                } else {
                  setEmailError('')
                  console.log('Email is Correct')
                }
              }}
              style={{
                width: '100%',
                height: '100%',
                fontWeight: '700',
                color: 'grey',
                color: 'black',
                fontSize: 15,
              }}
              placeholder='Enter email'
            />
          </View>

          <Text style={{ alignSelf: 'baseline', left: 23, color: 'red' }}>
            {showFieldError && emailError}
          </Text>

          <View
            style={{
              alignItems: 'center',
              width: width * 0.9,
              height: 45,
              borderBottomColor: 'grey',
              borderBottomWidth: 0.7,
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <TextInput
              onChangeText={value => {
                setPassword(value)
                if (value === '') {
                  setPasswordError('This field is required')
                } else if (value.length < 8) {
                  setPasswordError(
                    'Please enter a value that contains at least 8 characters.',
                  )
                } else {
                  setPasswordError('')
                }
              }}
              style={{
                width: '100%',
                height: '100%',
                fontWeight: '700',
                color: 'black',
                fontSize: 15,
                flex: 1,
              }}
              secureTextEntry={showPassword}
              placeholder='Enter password'
            />
            <IconButton
              icon={showPassword ? 'eye' : 'eye-off'}
              // iconColor={MD3Colors.error50}
              size={20}
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>
          <Text
            style={{
              alignSelf: 'baseline',
              left: 23,
              color: 'red',
              width: '90%',
            }}>
            {showFieldError && passwordError}
          </Text>
          <Text
            style={{
              alignSelf: 'baseline',
              left: 23,
              color: 'red',
              width: '90%',
            }}>
            {snackbarVisible && snackBarError}
          </Text>
        </View>
        {/* <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: 'Dismiss',
          onPress: () => { },
        }}
      >
        {snackBarError}
      </Snackbar> */}

        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <TouchableOpacity
            disabled={isSignInLoader}
            onPress={() => handleLogin()}
            style={[
              {
                width: '90%',
                height: 45,
                backgroundColor: '#C89D67',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              },
              isSignInLoader && { opacity: 0.7 },
            ]}>
            {isSignInLoader ? (
              <ActivityIndicator size={'large'} color={'#fff'} />
            ) : (
              <Text style={{ color: '#fff', fontSize: 15, fontWeight: '600' }}>
                Login now
              </Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                borderWidth: 0.4,
                borderColor: 'grey',
                width: '40%',
                height: 1,
                marginTop: 10,
                marginRight: 8,
              }}></View>

            <Text style={{ fontSize: 17, fontWeight: '600' }}>OR</Text>

            <View
              style={{
                borderWidth: 0.4,
                borderColor: 'grey',
                width: '40%',
                height: 1,
                marginTop: 10,
                marginLeft: 8,
              }}></View>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <TouchableOpacity
            onPress={LoginGoogle}
            style={{
              width: width - 38,
              height: 45,
              backgroundColor: '#fff',
              borderColor: 'grey',
              borderWidth: 0.4,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
              flexDirection: 'row',
            }}>
            <Image
              style={{ width: 28, height: 28 }}
              source={require('../../assets/Google.png')}
            />
            <Text
              style={{
                marginTop: 0,
                fontSize: 17,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 15,
              }}>
              Login with Google
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={{ width: '100%', height: 45, marginTop: 19 }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text
                  style={{
                    color: '#C89D67',
                    fontSize: width * 0.042,
                    marginTop: 25,
                    fontWeight: 'bold',
                    marginLeft: width * 0.063,
                  }}>
                  Join us today
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Password')}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: width * 0.042,
                    marginLeft: width * 0.323,
                    marginTop: 25,
                    fontWeight: 'bold',
                  }}>
                  Last password ?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ height: 25 }}></View>
      </ScrollView>
      {/* <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: 'Dismiss',
          onPress: () => { },
        }}
      >
        {snackBarError}
      </Snackbar> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
