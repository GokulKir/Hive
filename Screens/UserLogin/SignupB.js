import { StyleSheet, Text, View , ScrollView , Image , TouchableOpacity , TextInput , Dimensions , Button , Alert } from 'react-native'
import React,{useCallback, useMemo, useRef , useState , useEffect} from 'react' ;
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet'
import CheckBox from '@react-native-community/checkbox';
import {GoogleSignin , GoogleSigninButton,statusCodes} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';;
const {height , width} = Dimensions.get('window')

export default function SignupB({navigation}) {
    const [isSelected, setSelection] = useState(false)
  
    const [firstname , setFirstName] = useState('')
    const [lastname , setLastName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [photo , setPhoto ] = useState('')
    const [name , setName] = useState('')
    const [id , setId] = useState('')
    const [Gemail , setGemail] = useState('')

    
 

    useEffect(()=>{

       
  GoogleSignin.configure({
    webClientId: '86575262147-5ek6sbcsva6bi38al4h641sa731s0aja.apps.googleusercontent.com',
  });

    },[])


    const  SignIn = async () => {


      const { idToken } = await GoogleSignin.signIn();
  
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
      const user_sign_in = auth().signInWithCredential(googleCredential);
  
      user_sign_in.then((user)=>{
        navigation.navigate('MyDrawer')
        console.log(user)
       
  
      }).catch((error)=>{
        console.log(error)
      })
          // try {
          //   await GoogleSignin.hasPlayServices();
          //   await GoogleSignin.signOut();
          //   const userInfo = await GoogleSignin.signIn();
          //     console.log("User detailes"+userInfo);
          //     setPhoto(userInfo.photo)
  
          //   firestore().collection(UID).doc(UID).set({
          //      USER :  userInfo
            
              
          //  }).then(() =>{
          //   console.log('Added data to DB')
          //  })
              
           
  
          //      console.log("User added to database");
          //      Alert.alert('User successfully ')
          //           navigation.navigate('MyDrawer')
  
             
              // setPhoto(userInfo.photo)
              // setName(userInfo.name)
              // setGemail(userInfo.email)
              // setId(userInfo.id)
              // DB()
  
    //  const User  = firestore().collection("Users").set({
  
    //               IMAGE : userInfo.photo ,
    //               NAME  : userInfo.name,
    //               ID  : userInfo.id ,
    //               EMAIL : userInfo.email,
    //               UID   : UID
    //           })
  
          
             
  
      //     } catch (error) {
      //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //         console.log(error);
      //         // user cancelled the login flow
      //       } else if (error.code === statusCodes.IN_PROGRESS) {
      //         console.log(error);
      //         // operation (e.g. sign in) is in progress already
      //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //         console.log(error);
      //         // play services not available or outdated
      //       } else {
      //         // some other error happened
      //         console.log(error);
      //       }
      //     }
      }
  
      //Google SignIn Api
  
  
  
      //Email && Password API //
      const SignUp = () =>{
  
        if(firstname == "") {
  
          Alert.alert(
            //Title
              "Invalid form?",
            // Body
              "Enter first name",
  
            [
              {
                text : "OK",
                onPress : () =>{
                  console.log('OK pressed')
                }
             
              }
            ]
          )
       
        console.log('Please enter details')
        
  
        }else if( lastname == "") {
          console.log('Please enter details')
          Alert.alert(
            //Title
              "Invalid form?",
            // Body
              "Enter last name",
  
            [
              {
                text : "OK",
                onPress : () =>{
                  console.log('OK pressed')
                }
             
              }
            ]
          )
       
        }else if (email == ""){
  
          console.log('Please enter details')
          Alert.alert(
            //Title
              "Invalid form?",
            // Body
              "Enter  email",
  
            [
              {
                text : "OK",
                onPress : () =>{
                  console.log('OK pressed')
                }
             
              }
            ]
          )
       
  
          
        }else if(password == " "){
          console.log('Please enter details')
  
          Alert.alert(
            //Title
              "Invalid form?",
            // Body
              "Enter password name",
  
            [
              {
                text : "OK",
                onPress : () =>{
                  console.log('OK pressed')
                }
             
              }
            ]
          )
       
  
        }else if(isSelected == false) {
          
          console.log('Accept condition')
          
  
        }else if (email !== "" && password !== ""){
          
  
        auth().createUserWithEmailAndPassword(email , password).then((res) => {
          console.log("User account created"+res)
     
             firestore().collection(email).doc(UID).set({
              Firstname : firstname ,
              Lastname : lastname ,
              Password : password ,
              Email  : email ,
              Check : isSelected,
              UID : UID
  
  
             }).then(() =>{
              console.log('user data added to the DB!') ;
             })
  
          navigation.navigate('MyDrawer')
        }).catch((error) =>{
          console.log("Signed error"+error)
  
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

  
    const bottomSheetRef = useRef(null) 
  const snapPoints = useMemo(() => ['255%', '468%'], []);

  //callbacks

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);

  }, []);
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 730,
      }}
    >
      <View style={{}}>
      
 <View style={{marginLeft:20 , marginTop:5 , flexDirection:'row'}}>
    <Text style={{color:'black' , fontSize:width * 0.05 , fontWeight:'700'}}>Login now</Text>

       <TouchableOpacity>
    <Image style={{width:19 , height:19  , marginLeft:width * 0.5 , marginTop:5}} source={require('../../assets/ReM.png')}/>
    </TouchableOpacity>
  </View>


  <View style={{alignItems:'center'}}>
  <View style={{  borderWidth:0.3 , borderColor:'grey' , width:355 , marginTop:20}}>
  </View>
  </View>
  <View style={{alignItems:'center' , marginTop:25}}>
            <TextInput onChangeText={setFirstName} style={{width:width * 0.90 , height:56 , color:'black' , paddingTop:20  ,  borderBottomColor:'black' , borderBottomWidth:0.5 , fontSize:15 , fontWeight:'700' }} placeholderColor="black" placeholder="First name *"/>

        </View>

        <View style={{alignItems:'center' , marginTop:20}}>
            <TextInput  onChangeText={setLastName} style={{width:width * 0.90 , height:56 , color:'black' , paddingTop:20  ,  borderBottomColor:'black' , borderBottomWidth:0.5 , fontSize:15 , fontWeight:'700' }} placeholderColor="black" placeholder="Last name *"/>

        </View>

        <View style={{alignItems:'center' , marginTop:20}}>
            <TextInput  onChangeText={setEmail} style={{width:width * 0.90 , height:56 , color:'black' , paddingTop:20  ,  borderBottomColor:'black' , borderBottomWidth:0.5 , fontSize:15 , fontWeight:'700' }} placeholderColor="black" placeholder="Your email address *"/>

        </View>

        <View style={{alignItems:'center' , marginTop:20}}>
            <TextInput  onChangeText={setPassword} style={{width:width * 0.90 , height:56 , color:'black' , paddingTop:20  ,  borderBottomColor:'black' , borderBottomWidth:0.5 , fontSize:15 , fontWeight:'700' }} placeholderColor="black" placeholder="Enter password *"/>

        </View>
      


        </View>

  <View style={{ flexDirection:'row' , marginLeft:"5%" , marginTop:20}}>
        <CheckBox
    disabled={false}
    value={isSelected}
    onValueChange={(newValue) => setSelection(newValue)}
  />

  <Text style={{color:'grey' , fontSize:16 , marginLeft:8 , marginTop:5}}>I have read and agree to all </Text>
  <Text style={{color:'#52d5f2' , fontSize:16 , marginLeft:8 , marginTop:5}}>Terms & </Text>
 
  </View>
  <View>
  <Text style={{color:'#52d5f2' , fontSize:16 , marginLeft:60 , marginTop:5}}>conditions</Text>
  </View>


  <View style={{alignItems:'center' , marginTop:30}}>

    <TouchableOpacity onPress={SignUp} style={{width: width * 0.92 , height:45 , backgroundColor:'#C89D67' , alignItems:'center' , justifyContent:'center' , borderRadius:5}}>
      <Text style={{color:'#fff' , fontSize:16 , fontWeight:'bold'}}>Join now</Text>
    </TouchableOpacity>

  </View>

 <View style={{alignItems:'center' , marginTop:30}}>

  <View style={{flexDirection:'row' }}>

<View style={{borderWidth:0.4 , borderColor:'grey' , width:'40%' , height:1 , marginTop:10 , marginRight:8}}>

</View>

<Text style={{fontSize:17 , fontWeight:'600' , color:'grey'}}>OR</Text>

<View style={{borderWidth:0.4 , borderColor:'grey' , width:'40%' , height:1 , marginTop:10  , marginLeft:8}}>

</View>

</View>

</View>

<View style={{alignItems:'center' , marginTop:30}}>
<TouchableOpacity onPress={() => SignIn()} style={{width:width  - 38  , height:45 , borderColor:'black' , borderWidth:0.4 , flexDirection:'row' , borderRadius:2}}>

<Image style={{width:25 , height:25 , marginTop:10 , marginLeft:75}} source={require('../../assets/Google.png')}/>

<Text style={{marginTop:10 , fontSize:17 , fontWeight:'bold' , color:'black' , marginLeft:10}}>Login with Google</Text>

</TouchableOpacity>







</View>

<View style={{marginLeft:24 , marginTop:20}}>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    <Text style={{color:'#C89D67' , fontSize:width * 0.042 , fontWeight:'bold'}}>Sign in today</Text>
    </TouchableOpacity>
</View>
    

       

    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'grey',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(0)}
        /> */}
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
}
