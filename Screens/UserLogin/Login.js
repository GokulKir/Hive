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
} from 'react-native'
import React, {useState, useEffect , useContext} from 'react'
const {width, height} = Dimensions.get('window')
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import {ClientContext, useMutation} from 'graphql-hooks'
import { Snackbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage'


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

export default function Login ({navigation}) {
  const client = useContext(ClientContext)
  const [LoginUser] = useMutation(USER_LOGIN)
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '86575262147-5ek6sbcsva6bi38al4h641sa731s0aja.apps.googleusercontent.com',
    })
  }, [])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [email, setEmail] = useState('ajnash.aju323@gmail.com')
  // const [password, setPassword] = useState('12345678')
  const [snackbarVisible, setSnackbarVisible] = useState(false)
  const [snackBarError, setSnackBarError] = useState("")

  //SignIm user Api //


  const handleLogin = async () => {
   console.log("email and passwrd",email, password)
    const { data, error } = await LoginUser({
      variables: { email, password }
    })
    
    console.log(data);
    if (error) {
      // your code to handle login error
      console.log(error);
    } else {
      const { token,success,msg,userData } = data.userLogin
      client.setHeader('Authorization', `Bearer ${token}`)
      console.log(userData);
        if(success) {
          try{
            AsyncStorage.setItem("userSession", JSON.stringify(userData));
          }catch(err){

          }finally{
            navigation.navigate('HomeScreen')
          }
          //  navigation.navigate('HomeScreen')
        } else if(msg) {
          console.log(msg);
          // Alert.alert(msg)
          setSnackBarError(msg)
          setSnackbarVisible(true)
        } else if (token) {
          console.log(token);
          Alert.alert(token)
        }
      // console.log({success,msg,token});
      
      // your code to handle token in browser and login redirection
    }
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
    const {idToken} = await GoogleSignin.signIn()

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
        <View style={{width: '100%', height: 56, backgroundColor: '#1D1D1B'}}>
          <View style={{marginLeft: width - 58, marginTop: 15}}>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: 'grey', marginTop: 3, fontSize: 15}}>
                Skip
              </Text>
            </TouchableOpacity>
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
            style={{marginTop: 60, height: 46, width: 96}}
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
          <View style={{marginLeft: 30, marginTop: 25}}>
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

        <View style={{alignItems: 'center', marginTop: 30}}>
          <View
            style={{
              alignItems: 'center',
              width: width * 0.9,
              height: 45,
              borderBottomColor: 'grey',
              borderBottomWidth: 0.7,
            }}>
            <TextInput
              onChangeText={setEmail}
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

          <View
            style={{
              alignItems: 'center',
              width: width * 0.9,
              height: 45,
              borderBottomColor: 'grey',
              borderBottomWidth: 0.7,
              marginTop: 40,
            }}>
            <TextInput
              onChangeText={setPassword}
              style={{
                width: '100%',
                height: '100%',
                fontWeight: '700',
                color: 'black',
                fontSize: 15,
              }}
              placeholder='Enter password'
            />
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 25}}>
          <TouchableOpacity
            onPress={() => handleLogin()}
            style={{
              width: '90%',
              height: 45,
              backgroundColor: '#C89D67',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>
              Login now
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', marginTop: 30}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderWidth: 0.4,
                borderColor: 'grey',
                width: '40%',
                height: 1,
                marginTop: 10,
                marginRight: 8,
              }}></View>

            <Text style={{fontSize: 17, fontWeight: '600'}}>OR</Text>

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

        <View style={{alignItems: 'center', marginTop: 30}}>
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
              style={{width: 28, height: 28}}
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

        <View style={{alignItems: 'center'}}>
          <View style={{width: '100%', height: 45, marginTop: 19}}>
            <View style={{flexDirection: 'row'}}>
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

        <View style={{height: 25}}></View>
      </ScrollView>
      <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          action={{
            label: 'Dismiss',
            onPress: () => { },
          }}
        >
          {snackBarError}
        </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
