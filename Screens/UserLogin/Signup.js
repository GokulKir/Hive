




















































































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
} from 'react-native'
import React, {useState, useEffect , useContext} from 'react' ;
import CheckBox from '@react-native-community/checkbox'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import {useForm, Controller} from 'react-hook-form'

//uniq uid for user //
import uuid from 'react-native-uuid'
//uniq uid for user //

const {height, width} = Dimensions.get('window')
import {useManualQuery, useMutation , ClientContext} from 'graphql-hooks'

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

const Integrate = `mutation {
  userRegister(
    displayName: "string"
    email: "string"
    username: "string"
    password: "string"
    confirmPassword: "string"
  ) {
    success
    msg
  }
}`


const SIGNUP_USER = `mutation UserRegister($displayName: String, $email: String, $username: String, $password: String, $confirmPassword: String) {
  userRegister(displayName: $displayName, email: $email, username: $username, password: $password, confirmPassword: $confirmPassword) {
    msg
    success
  }
}
  `

//Graph ql api //

export default function Signup ({navigation}) {
  const [freeLancerList] = useManualQuery(FREELANCER_LIST)
  const [registerUser] = useMutation(SIGNUP_USER)

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSelected, setSelection] = useState(false)
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
  })
  const myAsync=async()=>{
    freeLancerList({variables: {}}).then(response => {
      console.log('frelncer list response', response)
    })
    const regUserResponse = await registerUser({
      variables: {
        displayName: firstname,
        email: email,
        username: lastname,
        password: password,
        confirmPassword: password,
      },
    })
    
    console.log('registerUserResponse', regUserResponse)
    navigation.navigate('MyDrawer')
  }
  useEffect(() => {
    
   
  }, [])
  //UID//
  const UID = uuid.v4()
  //UID//

   const Sign_Up_Back = async ()=>{

   
    const { data, error } = await registerUser({
      variables: {
        displayName: firstname,
        email: email,
        username: firstname,
        password: password,
        confirmPassword: password,
      },
      
    })
    console.log(data);


    
    if (error) {
      // your code to handle login error
      console.log(error);
     
    } else {
      let response : any = await registerUser({ variables : data});
      
     

      console.log("msg >>>>>>>>>",response);
        if(response?.data?.userRegister?.success) {
           console.log("success");
           navigation.navigate('MyDrawer')
        } else if(response?.data?.userRegister?.msg) {
          console.log(response?.data?.userRegister?.msg);
          Alert.alert(response?.data?.userRegister?.msg);
        } 
      // console.log({success,msg,token});
      
      // your code to handle token in browser and login redirection
    }

 
  

   }

  //User details store database

  const DB = () => {}

  //User details store database

  //Google SignIn  Api

  const SignIn = async () => {
    const {idToken} = await GoogleSignin.signIn()

    const googleCredential = auth.GoogleAuthProvider.credential(idToken)

    const user_sign_in = auth().signInWithCredential(googleCredential)

    user_sign_in
      .then(user => {
        navigation.navigate('MyDrawer')
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

          navigation.navigate('MyDrawer')
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

  const SignUs = () => {
    try {
      userRegister({variables: {email, password}})
      console.dir(data, {depth: null})
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
          <TouchableOpacity onPress={() => navigation.navigate('LoginB')}>
            <Text
              style={{
                color: 'grey',
                fontSize: 15,
                marginLeft: '76%',
                marginTop: 14,
              }}>
              Skip
            </Text>
          </TouchableOpacity>

          <Image
            style={{height: 45, width: 95, marginTop: 35}}
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
          <View style={{marginLeft: 20, marginTop: 20}}>
            <Text
              style={{
                color: 'black',
                fontSize: width * 0.05,
                fontWeight: '700',
              }}>
              Join us today
            </Text>
          </View>

          <View style={{alignItems: 'center', marginTop: 25}}>
            <TextInput
              onChangeText={setFirstName}
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
              placeholder='First name *'
            />
          </View>

          <View style={{alignItems: 'center', marginTop: 20}}>
            <TextInput
              onChangeText={setLastName}
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
              placeholder='Last name *'
            />
          </View>

          <View style={{alignItems: 'center', marginTop: 20}}>
            <TextInput
              onChangeText={setEmail}
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
              placeholder='Your email address *'
            />
          </View>

          <View style={{alignItems: 'center', marginTop: 20}}>
            <TextInput
              onChangeText={setPassword}
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
              placeholder='Enter password *'
            />
          </View>

          <View style={{alignItems: 'center', marginTop: 20}}>
            <TextInput
              onChangeText={setPassword}
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
              placeholder='Confirm password *'
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: '5%', marginTop: 20}}>
          <CheckBox
            disabled={false}
            value={isSelected}
            onValueChange={newValue => setSelection(newValue)}
          />

          <Text
            style={{color: 'grey', fontSize: 16, marginLeft: 8, marginTop: 5}}>
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

        <View style={{alignItems: 'center', marginTop: 30}}>
          <TouchableOpacity
            onPress={() =>  Sign_Up_Back()}
            style={{
              width: '90%',
              height: 45,
              backgroundColor: '#C89D67',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
              Join now
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

            <Text style={{fontSize: 17, fontWeight: '600', color: 'grey'}}>
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

        <View style={{alignItems: 'center', marginTop: 30}}>
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
              style={{width: 25, height: 25, marginTop: 10, marginLeft: 75}}
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

        <View style={{marginLeft: 24, marginTop: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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

        <View style={{height: 45}}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
