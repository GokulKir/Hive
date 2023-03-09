import React, { useEffect, useState, useContext } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Avatar } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'



const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

//Intro Screen ui
import Splash from './Screens/Intro/Splash'
// Signup & Login page ui
import Login from './Screens/UserLogin/Login'
import Signup from './Screens/UserLogin/Signup'
import Password from './Screens/UserLogin/Password'
import LoginB from './Screens/UserLogin/LoginB'
import SignupB from './Screens/UserLogin/SignupB'
//Import Main screens ui
import Home from './Screens/Main/Home'
import Dashboard from './Screens/Main/Dashboard'
//Import head icon ui
import Logo from './Head/Logo'
import Logo1 from './Head/Logo1'
import Logo2 from './Head/Logo2'
import Logo3 from './Head/Logo3'
import Logo4 from './Head/Logo4'
import Logo5 from './Head/Logo5'
import Logo6 from './Head/Logo6'
import Logo7 from './Head/Logo7'
import Logo8 from './Head/Logo8'
import Logo9 from './Head/Logo9'
//Drawer Screen ui
import DrawerContent from './Screens/Drawer/DrawerContent'
//Profile Settings ui
import Profile from './Screens/Settings/Profile'
import Edit from './Screens/Settings/Edit'
import Upload from './Screens/Settings/Upload'
import ACS from './Screens/Settings/ACS'
//User Account page ui
import Account from './Screens/Main/Account'
import ACD from './Screens/Main/ACD'
//invoice page ui
import Invoice from './Screens/Main/Invoice'
//Saved List ui
import MySaved from './Screens/Main/MySaved'
//Payout history page ui
import Payout from './Screens/Main/Payout'
//Task Detail Page ui
import TaskD from './Screens/Main/TaskD'
//Freelacer Detail page ui
import Freelancers from './Screens/Main/Freelancers'
//Tasl mage settings ui
import ManageT from './Screens/Main/ManageT'
//Task Details page ui
import TaskDetails from './Screens/Main/TaskDetails'
//Filter page ui
import Filter from './Screens/Filter/Filter'
import Filter2 from './Screens/Filter/Filter2'
//Users Screens ui
import Users from './Screens/Main/Users'
//Order Screen ui
import Order from './Screens/Order/Order'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//Chat page ui //
import Chat from './Screens/Messages/Chat'
import ChatRoom from './Screens/Messages/ChatRoom'
import SuccessLogin from './Screens/UserLogin/SuccessLogin'
import firebase from '@react-native-firebase/app'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Categories from './Screens/Main/Categories'
import Store from './Screens/Store'
import { Context } from './Screens/Store'

const user = firebase.auth().currentUser

const DrawerScreens = (props) => {
  const [userImage, setUserImage] = useState()

  function ProfileImage({ navigation }) {
    AsyncStorage.getItem('userSession', (err, result) => {
      const sesData = JSON.parse(result)
      setUserImage(`https://hive-dash.credot.dev/${sesData?.profileImg}`)
      // console.log("---------------------------",`https://hive-dash.credot.dev/${sesData.profileImg}`);
    })
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProfileScreen')
        }}>
        <Avatar.Image
          size={35}
          source={{
            uri: firebase.auth().currentUser
              ? firebase.auth().currentUser.photoURL
              : userImage,
          }}
          style={{ right: 10 }}
        />
      </TouchableOpacity>
    )
  }

  function BackButtonAndDrawer({ navigation }) {
    return (
      <View style={{ flexDirection: 'row' }}>
        {/* <StatusBar
          backgroundColor={AppStyles.Colors.screensHeaderColor}
        /> */}
        <Icon
          name='menu'
          size={30}
          style={{ marginLeft: 10 }}
          color={'#000'}
          backgroundColor='black'
          onPress={() => navigation.openDrawer()}
        />
      </View>
    )
  }

  return (
    <Stack.Navigator>
      {/* <Stack.Screen
          name='Splash'
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{ headerShown: false }}
        /> */}
      <Stack.Screen
        name='HomeScreen'
        component={Home}
        options={{
          headerLeft: () => (
            <View style={{ flexDirection: 'row' }}>
              {/* <StatusBar
              backgroundColor={AppStyles.Colors.screensHeaderColor}
            /> */}
              <Icon
                name='menu'
                size={30}
                style={{ marginLeft: 10 }}
                color={'#fff'}
                backgroundColor='black'
                onPress={() => props.navigation.openDrawer()}
              />
            </View>
          ),
          // headerTitle: props => <Logo {...props} />,
          headerStyle: { backgroundColor: '#1D1D1B' },
          headerRight: () => <ProfileImage {...props} />,
        }}
      />
      <Stack.Screen
        name='Password'
        component={Password}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Dashboard'
        component={Dashboard}
        options={{
          headerLeft: () => <BackButtonAndDrawer {...props} />,
          headerTitle: props => <Logo1 {...props} />,
          // headerStyle: { backgroundColor: '#fff' },
          headerRight: () => <ProfileImage {...props} />,
        }}
      />
      <Stack.Screen
        name='ProfileScreen'
        component={Profile}
        options={{
          headerLeft: () => <BackButtonAndDrawer {...props} />,
          headerTitle: props => <Logo2 {...props} />,
          // headerStyle: { backgroundColor: '#fff' },
          headerRight: () => <ProfileImage {...props} />,
        }}
      />
      <Stack.Screen
        name='AccountScreen'
        component={Account}
        options={{
          headerLeft: () => <BackButtonAndDrawer {...props} />,
          headerTitle: props => <Logo3 {...props} />,
          // headerStyle: { backgroundColor: '#fff' },
          headerRight: () => <ProfileImage {...props} />,
        }}
      />
      <Stack.Screen
        name='UploadScreen'
        component={Upload}
        options={{
          headerLeft: () => <BackButtonAndDrawer {...props} />,
          headerTitle: props => <Logo4 {...props} />,
          // headerStyle: { backgroundColor: '#DDDDDD' },
          headerRight: () => <ProfileImage {...props} />,
        }}
      />
      <Stack.Screen
        name='InvoiceScreen'
        component={Invoice}
        options={{
          headerLeft: () => <BackButtonAndDrawer {...props} />,
          headerTitle: props => <Logo5 {...props} />,
          // headerStyle: { backgroundColor: '#fff' },
          headerRight: () => <ProfileImage {...props} />,
        }}
      />
      <Stack.Screen
        name='MySavedScreen'
        component={MySaved}
        options={{
          headerLeft: () => <BackButtonAndDrawer {...props} />,
          headerTitle: props => <Logo6 {...props} />,
          // headerStyle: { backgroundColor: '#F7F7F7' },
          headerRight: () => <ProfileImage {...props} />,
        }}
      />
      <Stack.Screen
        name='ACS'
        component={ACS}
        options={{
          headerLeft: () => <BackButtonAndDrawer {...props} />,
          headerTitle: props => <Logo7 {...props} />,
          // headerStyle: { backgroundColor: '#F7F7F7' },
          headerRight: () => <ProfileImage {...props} />,
        }}
      />
      <Stack.Screen
        name='FreelancersScreen'
        component={Freelancers}
        options={{
          headerLeft: () => <BackButtonAndDrawer {...props} />,
          headerTitle: props => <Logo3 {...props} />,
          // headerStyle: { backgroundColor: '#DDDDDD' },
          headerRight: () => <ProfileImage {...props} />,
        }}
      />
      <Stack.Screen
        name='ManageT'
        component={ManageT}
        options={{
          headerLeft: () => <BackButtonAndDrawer {...props} />,
          headerTitle: props => <Logo8 {...props} />,
          // headerStyle: { backgroundColor: '#fff' },
          headerRight: () => <ProfileImage {...props} />,
        }}
      />
      <Stack.Screen
        name='Users'
        component={Users}
        options={{
          headerLeft: () => <BackButtonAndDrawer {...props} />,
          headerTitle: props => <Logo3 {...props} />,
          // headerStyle: { backgroundColor: '#fff' },
          headerRight: () => <ProfileImage {...props} />,
        }}
      />
      <Stack.Screen
        name='Edit'
        component={Edit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Payout'
        component={Payout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='TaskD'
        component={TaskD}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='TaskDetails'
        component={TaskDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Filter'
        component={Filter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Filter2'
        component={Filter2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Order'
        component={Order}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='LoginB'
        component={LoginB}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignupB'
        component={SignupB}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Chat'
        component={Chat}
        options={{
          headerLeft: () => <BackButtonAndDrawer {...props} />,
          headerTitle: props => <Logo9 {...props} />,
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen
        name='SuccessLogin'
        component={SuccessLogin}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='CRoom'
        component={ChatRoom}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Categories'
        component={Categories}
        options={{
          headerLeft: () => (
            <BackButtonAndDrawer {...props} />
          ),
          headerTitle: props => <Text style={{ fontSize: 20, fontWeight: 'bold', left: 80 }}>Categories</Text>,
          // headerStyle: { backgroundColor: '#fff' },
          headerRight: () => <ProfileImage {...props} />
        }}
      />
    </Stack.Navigator>
  )
}

const MyStack = ({ route, navigation }) => {
  const [state, dispatch] = useContext(Context);
  const [isLogedin, setIslogedin] = useState(true);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '86575262147-5ek6sbcsva6bi38al4h641sa731s0aja.apps.googleusercontent.com',
    })
  }, [])

  useEffect(() => {
console.log("triggered");
    AsyncStorage.getItem('userSession', (err, result) => {
      const sesData = JSON.parse(result)
      if (sesData) {
        setIslogedin(true)
      } else {

        if (state.sessionData) {
          setIslogedin(true)
        } else {
          setIslogedin(false)
        }
      }
    })

  }, [state.sessionData])

  return (
    <>
      {isLogedin ?
        <Drawer.Navigator
          screenOptions={{
            headerTintColor: 'black',
          }}
          drawerContent={({ ...props }) => {
            return <DrawerContent {...props} route={route}></DrawerContent>
          }}>
          <Drawer.Screen
            name='ALLSCREENS'
            component={DrawerScreens}
            options={{
              headerShown: false,
            }}
          />
        </Drawer.Navigator>
        :
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Signup'
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      }

    </>
  )
}

export default function App(route) {

  return (
    <Store>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Store>
  )
}
