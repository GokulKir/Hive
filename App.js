import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'

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

const MyDrawer = route => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#fff',
      }}
      drawerContent={({...props}) => {
        return <DrawerContent {...props} route={route}></DrawerContent>
      }}>
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {backgroundColor: '#1D1D1B'},
        }}
      />
    </Drawer.Navigator>
  )
}

const Drawer10 = route => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'black',
      }}
      drawerContent={({...props}) => {
        return <DrawerContent {...props} route={route}></DrawerContent>
      }}>
      <Drawer.Screen
        name='Users'
        component={Users}
        options={{
          headerTitle: props => <Logo3 {...props} />,
          headerStyle: {backgroundColor: '#fff'},
        }}
      />
    </Drawer.Navigator>
  )
}

const Drawer9 = route => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'black',
      }}
      drawerContent={({...props}) => {
        return <DrawerContent {...props} route={route}></DrawerContent>
      }}>
      <Drawer.Screen
        name='ManageT'
        component={ManageT}
        options={{
          headerTitle: props => <Logo8 {...props} />,
          headerStyle: {backgroundColor: '#fff'},
        }}
      />
    </Drawer.Navigator>
  )
}

const Drawer8 = route => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'black',
      }}
      drawerContent={({...props}) => {
        return <DrawerContent {...props} route={route}></DrawerContent>
      }}>
      <Drawer.Screen
        name='Freelancers'
        component={Freelancers}
        options={{
          headerTitle: props => <Logo3 {...props} />,
          headerStyle: {backgroundColor: '#DDDDDD'},
        }}
      />
    </Drawer.Navigator>
  )
}

const Drawer7 = route => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'black',
      }}
      drawerContent={({...props}) => {
        return <DrawerContent {...props} route={route}></DrawerContent>
      }}>
      <Drawer.Screen
        name='ACS'
        component={ACS}
        options={{
          headerTitle: props => <Logo7 {...props} />,
          headerStyle: {backgroundColor: '#F7F7F7'},
        }}
      />
    </Drawer.Navigator>
  )
}

const Drawer6 = route => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'black',
      }}
      drawerContent={({...props}) => {
        return <DrawerContent {...props} route={route}></DrawerContent>
      }}>
      <Drawer.Screen
        name='MySaved'
        component={MySaved}
        options={{
          headerTitle: props => <Logo6 {...props} />,
          headerStyle: {backgroundColor: '#F7F7F7'},
        }}
      />
    </Drawer.Navigator>
  )
}

const Drawer5 = route => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'black',
      }}
      drawerContent={({...props}) => {
        return <DrawerContent {...props} route={route}></DrawerContent>
      }}>
      <Drawer.Screen
        name='Invoice'
        component={Invoice}
        options={{
          headerTitle: props => <Logo5 {...props} />,
          headerStyle: {backgroundColor: '#fff'},
        }}
      />
    </Drawer.Navigator>
  )
}

const Drawer4 = route => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'black',
      }}
      drawerContent={({...props}) => {
        return <DrawerContent {...props} route={route}></DrawerContent>
      }}>
      <Drawer.Screen
        name='Upload'
        component={Upload}
        options={{
          headerTitle: props => <Logo4 {...props} />,
          headerStyle: {backgroundColor: '#DDDDDD'},
        }}
      />
    </Drawer.Navigator>
  )
}

const Drawer3 = route => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'black',
      }}
      drawerContent={({...props}) => {
        return <DrawerContent {...props} route={route}></DrawerContent>
      }}>
      <Drawer.Screen
        name='Account'
        component={Account}
        options={{
          headerTitle: props => <Logo3 {...props} />,
          headerStyle: {backgroundColor: '#fff'},
        }}
      />
    </Drawer.Navigator>
  )
}

const Drawer2 = route => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'black',
      }}
      drawerContent={({...props}) => {
        return <DrawerContent {...props} route={route}></DrawerContent>
      }}>
      <Drawer.Screen
        name='Profile'
        component={Profile}
        options={{
          headerTitle: props => <Logo2 {...props} />,
          headerStyle: {backgroundColor: '#fff'},
        }}
      />
    </Drawer.Navigator>
  )
}

const Drawer1 = route => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'black',
      }}
      drawerContent={({...props}) => {
        return <DrawerContent {...props} route={route}></DrawerContent>
      }}>
      <Drawer.Screen
        name='Dashboard'
        component={Dashboard}
        options={{
          headerTitle: props => <Logo1 {...props} />,
          headerStyle: {backgroundColor: '#fff'},
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Splash'
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='MyDrawer'
          component={MyDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Password'
          component={Password}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Drawer1'
          component={Drawer1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Drawer2'
          component={Drawer2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Drawer3'
          component={Drawer3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Drawer4'
          component={Drawer4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Drawer5'
          component={Drawer5}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Drawer6'
          component={Drawer6}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Drawer7'
          component={Drawer7}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Drawer8'
          component={Drawer8}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Drawer9'
          component={Drawer9}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Drawer10'
          component={Drawer10}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Edit'
          component={Edit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Payout'
          component={Payout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='TaskD'
          component={TaskD}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='TaskDetails'
          component={TaskDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Filter'
          component={Filter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Filter2'
          component={Filter2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Order'
          component={Order}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='LoginB'
          component={LoginB}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='SignupB'
          component={SignupB}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
