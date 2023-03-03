// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   TextInput,
//   Platform,
// } from 'react-native'
// import React, {useState, useEffect, useCallback} from 'react'
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen'
// import Icon from 'react-native-vector-icons/AntDesign'
// import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import Icon2 from 'react-native-vector-icons/Entypo'
// // import {GiftedChat, InputToolbar} from 'react-native-gifted-chat'
// import {Bubble, GiftedChat, Send, Day} from 'react-native-gifted-chat'

// export default function ChatRoom ({navigation}) {
//   const [messages, setMessages] = useState([
//     {
//       _id: 1,
//       text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
//       createdAt: new Date(),
//       quickReplies: {
//         type: 'radio', // or 'checkbox',
//         keepIt: true,
//         values: [
//           {
//             title: '😋 Yes',
//             value: 'yes',
//           },
//           {
//             title: '📷 Yes, let me show you with a picture!',
//             value: 'yes_picture',
//           },
//           {
//             title: '😞 Nope. What?',
//             value: 'no',
//           },
//         ],
//       },
//       user: {
//         _id: 2,
//         name: 'React Native',
//       },
//     },
//     {
//       _id: 2,
//       text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
//       createdAt: new Date(),
//       quickReplies: {
//         type: 'checkbox', // or 'radio',
//         values: [
//           {
//             title: 'Yes',
//             value: 'yes',
//           },
//           {
//             title: 'Yes, let me show you with a picture!',
//             value: 'yes_picture',
//           },
//           {
//             title: 'Nope. What?',
//             value: 'no',
//           },
//         ],
//       },
//       user: {
//         _id: 2,
//         name: 'React Native',
//       },
//     },
//   ])
//   const [messageText, setmessageText] = useState('')

//   useEffect(() => {}, [])

//   const renderBubble = props => {
//     return (
//       <Bubble
//         {...props}
//         wrapperStyle={{
//           right: {
//             backgroundColor: '#eb2459',
//             marginBottom: 5,
//             padding: 5,
//             left: -3,
//           },
//           left: {
//             backgroundColor: '#fff',
//             marginBottom: 5,
//             padding: 5,
//             left: -3,
//           },
//         }}
//         textStyle={{
//           right: {
//             color: '#fff',
//           },
//           left: {
//             color: 'black',
//           },
//         }}
//       />
//     )
//   }
//   const renderSend = props => {
//     return (
//       <View style={{flex: 1}}>
//         <Send {...props}>
//           <Icon1
//             name='send-circle'
//             style={{
//               alignSelf: 'flex-end',
//               marginRight: 5,
//               marginBottom: 5,
//               marginTop: Platform.OS === 'ios' ? -20 : 0,
//             }}
//             size={45}
//             color='#eb2459'
//           />
//         </Send>
//       </View>
//     )
//   }

//   const scrollToBottomComponent = () => {
//     return <FontAwesome name='angle-double-down' size={22} color='#333' />
//   }

//   const renderDay = props => {
//     return <Day {...props} textStyle={{color: '#fff', fontWeight: 'bold'}} />
//   }

//   const renderComposer = props => {
//     return (
//       <View style={styles.composerContainer}>
//         <TextInput
//           {...props}
//           placeholder={'Type a message...'}
//           onChangeText={value => {
//             setmessageText(value)
//           }}
//           // onChangeText={value => {
//           //   // setmessageTextWhensearch(value)
//           //   if (modalVisible) {
//           //     onSearchChange(value)
//           //   }
//           //   if (!modalVisible || value === '') {
//           //     setmessageText(value)
//           //   }
//           //   if (value === '') {
//           //     setMentionId([])
//           //     setModalVisible(false)
//           //   }
//           //   if (value.length === 1 && value === '@') {
//           //     setModalVisible(true)
//           //   } else if (value.substr(value.length - 2) === ' @') {
//           //     setModalVisible(true)
//           //   }
//           // }}
//           style={styles.textInput}
//           // value={modalVisible ? messageTextWhensearch : messageText}
//           multiline={true}
//         />
//       </View>
//     )
//   }

//   const onSend = useCallback((newMessage = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, newMessage))
//   }, [])

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={newMessage => onSend(newMessage)}
//       user={{
//         // _id: userId,
//         // account_id: AccountId,
//         sent: true,
//         avatar:
//           'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
//       }}
//       renderBubble={renderBubble}
//       timeTextStyle={{
//         left: {color: '#c1c1c1', fontSize: 11},
//         right: {color: '#fff', fontSize: 11},
//       }}
//       alwaysShowSend
//       renderSend={renderSend}
//       // renderChatFooter={mentionUser}
//       scrollToBottom
//       scrollToBottomComponent={scrollToBottomComponent}
//       renderDay={renderDay}
//       showUserAvatar
//       isLoadingEarlier={true}
//       renderUsernameOnMessage={true}
//       renderComposer={renderComposer}
//       minComposerHeight={50}
//       maxComposerHeight={50}
//       text={messageText}
//       wrapInSafeArea={false}
//       bottomOffset={25}
//     />
//   )
// }

// const styles = StyleSheet.create({
//   container: {flex: 1, backgroundColor: '#fff'},
//   contain: {
//     height: 50,
//     width: 80,
//     backgroundColor: '#fff',
//   },
//   backgroundimage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   composerContainer: {
//     width: '85%',
//     height: 50,
//     backgroundColor: '#fff',
//     paddingTop: 5,
//   },
//   textInput: {
//     fontSize: 14,
//     letterSpacing: 1,
//     height: 45,
//     paddingTop: Platform.OS === 'ios' ? 8 : 5,
//     paddingBottom: 5,
//     paddingLeft: 10,
//     paddingRight: 10,
//   },
//   suggestionClickStyle: {
//     height: 60,
//     backgroundColor: '#fff',
//     marginTop: -5,
//     padding: 10,
//     marginLeft: 11,
//   },
//   suggestionRowContainer: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   userImage: {
//     height: 40,
//     width: 40,
//     borderRadius: 10,
//   },
//   userNameText: {
//     fontSize: 13,
//     letterSpacing: 1,
//     width: '80%',
//     marginLeft: 10,
//   },
//   suggestionContainer: {
//     maxHeight: 200,
//     borderRadius: 10,
//     width: '80%',
//     padding: 5,
//     left: -10,
//   },
// })
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Entypo'
// import {GiftedChat, InputToolbar} from 'react-native-gifted-chat'
	import { Bubble, GiftedChat, Send, Day } from 'react-native-gifted-chat'


export default function ChatRoom ({navigation}) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
  
  }, [])

 
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            height: hp('8%'),
            width: wp('100%'),
            borderBottomWidth: 0.5,
            borderBottomColor: 'grey',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: wp('5%'), marginTop: hp('2.2%')}}>
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Icon name='arrowleft' size={26} color='black' />
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#fff',
                borderRadius: 100,
                marginTop: hp('1.2%'),
                marginLeft: wp('4%'),
              }}>
              <Image
                style={{width: '100%', height: '100%', borderRadius: 100}}
                source={{
                  uri: 'https://hive-app.vercel.app/_next/image?url=https%3A%2F%2Fpicsum.photos%2F200&w=128&q=75',
                }}
              />
            </View>

            <View style={{marginLeft: wp('5%'), marginTop: hp('1.4%')}}>
              <Text
                style={{
                  fontSize: wp('4%'),
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Darlene Robertson
              </Text>

              <Text style={{fontSize: wp('3.3%'), marginTop: hp('0%')}}>
                Active
              </Text>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  marginLeft: wp('20%'),
                  marginTop: hp('2%'),
                  width: 33,
                  height: 33,
                }}>
                <Icon1 size={30} name='delete-outline' color='grey' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: '#fff'}}>

      
        <ScrollView>
       
          <View style={{marginTop: hp('83.4%')}}>
            
            
            <View
              style={{
                width: wp('100%'),
                height: hp('10%'),
                borderColor: '#fff',
                borderWidth: 1,
                borderRadius: 1,
                justifyContent: 'center',
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
              }}>

                

                <View style={{flexDirection:'row' , width:wp('79%') , height:hp('6%') , backgroundColor:'#fff' , alignItems:'center' , borderWidth:0.5 , borderColor:'grey' , borderRadius:5 , justifyContent:'center'}}>
                
              <TextInput onChangeText={setMessages}
                style={{
                  width: wp('67%'),
                  height: hp('5%'),
                  backgroundColor: '#fff',
                  borderRadius: 5,
                  paddingLeft: 12,
                  color: 'black',
                }}
                placeholderTextColor='grey'
                placeholder='Type a message'
              />

              <TouchableOpacity >

              <Icon2 size={22} name="attachment"/>

              </TouchableOpacity>

</View> 
            
    
              <View style={{}}>
                <TouchableOpacity
                  style={{
                    width: wp('14%'),
                    height: hp('6%'),
                    backgroundColor: '#C89D67',
                    marginLeft: 5,
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon color='#fff' name='arrowright' size={26} />
                </TouchableOpacity>
              
              </View>
            </View>
          </View>

         
         </ScrollView>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{ flex: 1,
    backgroundColor: '#fff'},
  	 contain: {
  	  height: 50,
  	  width: 80,
  	  backgroundColor: "#fff"
  	 },
  	 backgroundimage: {
  	  flex: 1,
  	  resizeMode: "cover",
   justifyContent: "center"
  	 },
  	 composerContainer: {
  	  width: '85%',
  	  height: 50,
  	  backgroundColor: "#fff",
  	  paddingTop: 5,
  	 },
  	 textInput: {
	  fontSize: 14,
	  letterSpacing: 1,
	  height: 45,
	  paddingTop: Platform.OS === "ios" ? 8 : 5,
  paddingBottom: 5,
	  paddingLeft: 10,
	  paddingRight: 10,
 	 },
 	 suggestionClickStyle: {
 	  height: 60,
 	  backgroundColor: '#fff',
 	  marginTop: -5,
 	  padding: 10,
 	  marginLeft: 11
 	 },
 	 suggestionRowContainer: {
 	  width: '100%',
  	  flexDirection: 'row',
  	  alignItems: 'center',
  	 },
  	 userImage: {
  	  height: 40,
  	  width: 40,
  	  borderRadius: 10
  	 },
  	 userNameText: {
  	  fontSize: 13,
  	  letterSpacing: 1,
  	  width: '80%',
  	  marginLeft: 10
  	 },
  	 suggestionContainer: {
  	  maxHeight: 200,
  	  borderRadius: 10,
  	  width: '80%',
  	  padding: 5,
  	  left: -10,
 	 },
 	});
 
  