import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Alert,
  ActivityIndicator
} from 'react-native'
import React, { useState, useEffect, useContext } from 'react';
import CheckBox from '@react-native-community/checkbox'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { useForm, Controller } from 'react-hook-form'
import { Snackbar, IconButton } from 'react-native-paper';

//uniq uid for user //
import uuid from 'react-native-uuid'
//uniq uid for user //

const { height, width } = Dimensions.get('window')
import { useManualQuery, useMutation, ClientContext } from 'graphql-hooks'

//Graph ql api //
const FREELANCER_LIST = `query Categories{
  categoryFlatList {
    success
    msg
    categories {
      _id
      icon
      name
      slug
      createdAt
      parent
    }
  }
}
`

const SIGNUP_USER = `mutation Mutation($email: String, $username: String, $password: String, $confirmPassword: String, $displayName: String) {
  userRegister(email: $email, username: $username, password: $password, confirmPassword: $confirmPassword, displayName: $displayName) {
    success
    msg
  }
}
  `

//Graph ql api //

export default function Signup({ navigation }) {
  const [freeLancerList] = useManualQuery(FREELANCER_LIST)
  const [registerUser] = useMutation(SIGNUP_USER)
  const [isSignInLoader, setIsSignInLoader] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [firstname, setFirstName] = useState('')
  const [showFieldError, setShowFieldError] = useState('')
  const [displayNameError, setDisplayNameError] = useState('')
  const [lastname, setLastName] = useState('')
  const [userNameError, setUserNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [isSelected, setSelection] = useState(false)
  const [snackbarVisible, setSnackbarVisible] = useState(false)
  const [snackBarError, setSnackBarError] = useState("")
  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [Gemail, setGemail] = useState('')
  const client = useContext(ClientContext)
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '86575262147-5ek6sbcsva6bi38al4h641sa731s0aja.apps.googleusercontent.com',
    })
  }, [])

  const myAsync = async () => {
    freeLancerList({ variables: {} }).then(response => {
      console.log('frelncer list response', response)
    })
    const regUserResponse = await registerUser({
      variables: {
        displayName: firstname,
        email: email,
        username: lastname,
        password: password,
        confirmPassword: confirmPassword,
      },
    })

    console.log('registerUserResponse', regUserResponse)
    navigation.navigate('HomeScreen')
  }
  //UID//
  const UID = uuid.v4()
  //UID//

  const Sign_Up_Back = async () => {
    setIsSignInLoader(true)
    let response: any = await registerUser({
      variables: {
        displayName: firstname,
        email: email,
        username: lastname,
        password: password,
        // confirmPassword: password,
      }
    });

    if (response?.data?.userRegister?.success) {
      setIsSignInLoader(false)
      console.log("success---------------", response);
      // Alert.alert("Success", JSON.stringify(response?.data?.userRegister?.msg))
      Alert.alert('Success', response?.data?.userRegister?.msg, [
        { text: 'Login', onPress: () => navigation.navigate('Login') },
      ]);
      //  navigation.navigate('HomeScreen')
    } else if (response?.data?.userRegister?.msg) {
      setIsSignInLoader(false)
      console.log(response?.data?.userRegister?.msg);
      setSnackBarError(response?.data?.userRegister?.msg)
      setSnackbarVisible(true)
      // Alert.alert("Failed", JSON.stringify(response?.data?.userRegister?.msg));
    }

  }

  //User details store database

  const DB = () => { }

  //User details store database

  //Google SignIn  Api

  const SignIn = async () => {
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

  //Google SignIn Api

  //Email && Password API //
  const SignUp = () => {
    if (firstname == '') {
      Alert.alert(
        //Title
        'Invalid form?',
        // Body
        'Enter first name',

        [
          {
            text: 'OK',
            onPress: () => {
              console.log('OK pressed')
            },
          },
        ],
      )

      console.log('Please enter details')
    } else if (lastname == '') {
      console.log('Please enter details')
      Alert.alert(
        //Title
        'Invalid form?',
        // Body
        'Enter last name',

        [
          {
            text: 'OK',
            onPress: () => {
              console.log('OK pressed')
            },
          },
        ],
      )
    } else if (email == '') {
      console.log('Please enter details')
      Alert.alert(
        //Title
        'Invalid form?',
        // Body
        'Enter  email',

        [
          {
            text: 'OK',
            onPress: () => {
              console.log('OK pressed')
            },
          },
        ],
      )
    } else if (password == ' ') {
      console.log('Please enter details')

      Alert.alert(
        //Title
        'Invalid form?',
        // Body
        'Enter password name',

        [
          {
            text: 'OK',
            onPress: () => {
              console.log('OK pressed')
            },
          },
        ],
      )
    } else if (isSelected == false) {
      console.log('Accept condition')
    } else if (email !== '' && password !== '') {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log('User account created' + res)

          firestore()
            .collection(email)
            .doc(UID)
            .set({
              Firstname: firstname,
              Lastname: lastname,
              Password: password,
              Email: email,
              Check: isSelected,
              UID: UID,
            })
            .then(() => {
              console.log('user data added to the DB!')
            })

          navigation.navigate('HomeScreen')
        })
        .catch(error => {
          console.log('Signed error' + error)

          // Alert.alert(
          //   //Title
          //     "Signed error?",
          //   // Body
          //     "Already uses this email",

          //   [
          //     {
          //       text : "OK",
          //       onPress : () =>{
          //         console.log('OK pressed')
          //       }

          //     }
          //   ]
          // )
        })
    }
  }
  //Email && Password API //

  //Graph ql Backend api//

  const validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      return false;
    }
    else {
      console.log("Email is Correct");
      return true;
    }
  }

  const joinNowFunction = () => {

    if (password !== confirmPassword) {
      setShowFieldError(true)
    }

    if (email === "" || password === "" || firstname === "" || lastname === "" || confirmPassword === "") {
      if (email === "") {
        setEmailError("This field is required.")
      }
      if (password === "") {
        setPasswordError("This field is required.")
      }
      if (firstname === "") {
        setDisplayNameError("This field is required.")
      }
      if (lastname === "") {
        setUserNameError("This field is required.")
      }
      if (confirmPassword === "") {
        setConfirmPasswordError("This field is required.")
      }
      setShowFieldError(true)
    } else if (validate(email) && password.length >= 8 && firstname.length >= 3 && (/^[a-zA-Z]+$/.test(lastname) && lastname.length >= 3) && isSelected && (password === confirmPassword)) {
      Sign_Up_Back()
    }


    // if (password !== confirmPassword) {
    //   setSnackBarError("Password mismatch")
    //   setSnackbarVisible(true)
    // } else if (password === "") {
    //   setSnackBarError("Password can't be empty")
    //   setSnackbarVisible(true)
    // } else if (!isSelected) {
    //   setSnackBarError("Please agree the Terms & Conditions to continue")
    //   setSnackbarVisible(true)
    // } else {
    // }
  }

  const showError = () => {
    setSnackBarError("Please agree the Terms & Conditions to continue")
    setSnackbarVisible(true)
  }

  const SignUs = () => {
    try {
      userRegister({ variables: { email, password } })
      console.dir(data, { depth: null })
      console.log('This error' + error)
      console.log('Loading' + loading)
    } catch (error) {
      console.error(error)
    }
  }

  //Graph ql Backend api//

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            height: 244,
            backgroundColor: '#1D1D1B',
          }}>
          {/* <TouchableOpacity onPress={() => navigation.navigate('LoginB')}>
            <Text
              style={{
                color: 'grey',
                fontSize: 15,
                marginLeft: '76%',
                marginTop: 14,
              }}>
              Skip
            </Text>
          </TouchableOpacity> */}

          <Image
            style={{ height: 45, width: 95, marginTop: 35 }}
            source={require('../../assets/Logo.png')}
          />

          <Text
            style={{
              color: '#fff',
              marginTop: 25,
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            We love to see you joining
          </Text>
          <Text
            style={{
              color: '#fff',
              marginTop: 8,
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            our community
          </Text>
          <Text
            style={{
              color: '#fff',
              marginTop: 8,
              fontSize: 17,
              fontWeight: 'bold',
            }}></Text>
        </View>

        <View>
          <View style={{ marginLeft: 20, marginTop: 10 }}>
            <Text
              style={{
                color: 'black',
                fontSize: width * 0.05,
                fontWeight: '700',
              }}>
              Join us today
            </Text>
          </View>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TextInput
              onChangeText={(value) => {
                setFirstName(value)
                if (value === "") {
                  setDisplayNameError("This field is required")
                } else if (value.length < 3) {
                  setDisplayNameError("Please enter a value that contains at least 3 characters.")
                } else {
                  setDisplayNameError("")
                }
              }}
              style={{
                width: width * 0.9,
                height: 56,
                color: 'black',
                paddingTop: 20,
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                fontSize: 15,
                fontWeight: '700',
              }}
              placeholderColor='black'
              placeholder='Display Name *'
            />
            <Text style={{ alignSelf: "baseline", left: 23, color: "red", width: "90%" }}>{showFieldError && displayNameError}</Text>

          </View>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TextInput
              onChangeText={(value) => {
                setLastName(value)
                if (value === "") {
                  setUserNameError("This field is required")
                } else if (!/^[a-zA-Z]+$/.test(value)) {
                  setUserNameError("Only alphabets are accepted.")
                } else if (value.length < 3) {
                  setUserNameError("Please enter a value that contains at least 3 characters.")
                } else {
                  setUserNameError("")
                }
              }}
              style={{
                width: width * 0.9,
                height: 56,
                color: 'black',
                paddingTop: 20,
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                fontSize: 15,
                fontWeight: '700',
              }}
              placeholderColor='black'
              placeholder='Username *'
            />
            <Text style={{ alignSelf: "baseline", left: 23, color: "red", width: "90%" }}>{showFieldError && userNameError}</Text>

          </View>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TextInput
              onChangeText={(value) => {
                setEmail(value)
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                if (value === "") {
                  setEmailError("This field is required")
                } else if (reg.test(value) === false) {
                  setEmailError("Please enter a valid email address")
                  console.log("Email is Not Correct");
                  return false;
                }
                else {
                  setEmailError("")
                  console.log("Email is Correct");
                }
              }}
              style={{
                width: width * 0.9,
                height: 56,
                color: 'black',
                paddingTop: 20,
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                fontSize: 15,
                fontWeight: '700',
              }}
              placeholderColor='black'
              placeholder='Email address *'
            />
            <Text style={{ alignSelf: "baseline", left: 23, color: "red", width: "90%" }}>{showFieldError && emailError}</Text>
          </View>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TextInput
              onChangeText={(value) => {
                setPassword(value)
                if (value === "") {
                  setPasswordError("This field is required")
                } else if (value.length < 8) {
                  setPasswordError("Please enter a value that contains at least 8 characters.")
                } else {
                  setPasswordError("")
                }
              }}
              style={{
                width: width * 0.9,
                height: 56,
                color: 'black',
                paddingTop: 20,
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                fontSize: 15,
                fontWeight: '700',
              }}
              secureTextEntry={showPassword}
              placeholderColor='black'
              placeholder='Password *'
            />
            <Text style={{ alignSelf: "baseline", left: 23, color: "red", width: "90%" }}>{showFieldError && passwordError}</Text>
            <IconButton
            style={{alignSelf:'flex-end',marginTop:-60,right:10}}
              icon={showPassword ?"eye" : "eye-off" }
              // iconColor={MD3Colors.error50}
              size={20}
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>

          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TextInput
              onChangeText={(value) => {
                setConfirmPassword(value)
                if (value === "") {
                  setConfirmPasswordError("This field is required")
                } else if (value === password) {
                  setConfirmPasswordError("")
                } else {
                  setConfirmPasswordError("Passwords do not match")
                }
              }}
              style={{
                width: width * 0.9,
                height: 56,
                color: 'black',
                paddingTop: 20,
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                fontSize: 15,
                fontWeight: '700',
              }}
              secureTextEntry={showConfirmPassword}
              placeholderColor='black'
              placeholder='Confirm Password *'
            />
            <Text style={{ alignSelf: "baseline", left: 23, color: "red", width: "90%" }}>{showFieldError && confirmPasswordError}</Text>
            <IconButton
            style={{alignSelf:'flex-end',marginTop:-60,right:10}}
              icon={showConfirmPassword ?"eye" : "eye-off" }
              // iconColor={MD3Colors.error50}
              size={20}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </View>

        </View>

        <View style={{ flexDirection: 'row', marginLeft: '5%', marginTop: 30 }}>
          <CheckBox
            disabled={false}
            value={isSelected}
            onValueChange={newValue => setSelection(newValue)}
          />

          <Text
            style={{ color: 'grey', fontSize: 16, marginLeft: 8, marginTop: 5 }}>
            I have read and agree to all{' '}
          </Text>
          <Text
            style={{
              color: '#52d5f2',
              fontSize: 16,
              marginLeft: 8,
              marginTop: 5,
            }}>
            Terms &{' '}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: '#52d5f2',
              fontSize: 16,
              marginLeft: 60,
              marginTop: 5,
            }}>
            conditions
          </Text>
        </View>
        <Text style={{ alignSelf: "baseline", left: 23, color: "red", width: "90%" }}>{showFieldError && !isSelected && "Please agree the Terms & Conditiond to continue"} </Text>


        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <TouchableOpacity
            disabled={isSignInLoader}
            onPress={() => joinNowFunction()}
            style={[{
              width: '90%',
              height: 45,
              backgroundColor: '#C89D67',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }, isSignInLoader && { opacity: 0.7 }]}>
            {
              isSignInLoader ?
                < ActivityIndicator size={"large"} color={"#fff"} />
                :
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
                  Join now
                </Text>
            }

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

            <Text style={{ fontSize: 17, fontWeight: '600', color: 'grey' }}>
              OR
            </Text>

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
            onPress={() => SignIn()}
            style={{
              width: width - 38,
              height: 45,
              borderColor: 'black',
              borderWidth: 0.4,
              flexDirection: 'row',
              borderRadius: 2,
            }}>
            <Image
              style={{ width: 25, height: 25, marginTop: 10, marginLeft: 75 }}
              source={require('../../assets/Google.png')}
            />

            <Text
              style={{
                marginTop: 10,
                fontSize: 17,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 10,
              }}>
              Login with Google
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 24, marginTop: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('SuccessLogin')}> */}
            <Text
              style={{
                color: '#C89D67',
                fontSize: width * 0.042,
                fontWeight: 'bold',
              }}>
              Sign in today
            </Text>
          </TouchableOpacity>
        </View>

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
