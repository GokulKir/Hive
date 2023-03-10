import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
  TouchableOpacity,
} from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {Searchbar} from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import {useManualQuery, useQuery, ClientContext} from 'graphql-hooks'

const CHAT_LIST = ` query Query {
  chatList {
    chatRoom {
      user {
        _id
        firstName
        lastName
        profileImg
        username
      }
    }
    msg
    success
  }
}`


  

export default function Chat ({navigation , props}) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const {loading, error, data} = useQuery(CHAT_LIST)
  const [Datas, setDatas] = useState([])

  // const client = useContext(ClientContext)
  //  console.log(client);

  const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    // AsyncStorage.removeItem('userSession')
    // freeLancerList({variables: {}}).then(response => {
    //   console.log('frelncer list response', response)
    //   setData1(response)
    //    console.log(+data1);
    // })

    console.log('data:    ', data?.chatList?.chatRoom)

    // client.setHeader('Authorization', `Bearer ${token}`)
    // client.setHeader('token', `${token}`)
    if (data?.chatList?.chatRoom) {
    }

    // console.log("loading       :  ",loading);
    if (!loading) {
      // Alert.alert("alert",JSON.stringify(data))
      // console.log("loading completed", data)
      setDatas(data)
    }
  })
  // useEffect(() => {
  //   console.log('CHAT_DATA>>>>>>', data)
  // }, [Datas])
  //Calling API //

  const onChangeSearch = query => setSearchQuery(query)
  return (
    <View
      style={{width: hp('100%'), width: wp('100%'), backgroundColor: '#fff'}}>
      <View style={{alignItems: 'center', marginTop: hp('2%')}}>
        <Searchbar
          style={{
            height: hp('8%'),
            width: wp('95%'),
            borderRadius: 5,
            backgroundColor: '#FBF7ED',
          }}
          placeholder='Search'
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={{marginTop: hp('2%')}}>
        <View style={{width:'100%' , height:'100%' , backgroundColor:'#fff'}}>
        <FlatList
          data={data?.chatList?.chatRoom}
          KeyExtractor={item => item.index}
          renderItem={({item}) => {
            return (
              <View
                style={{width: wp('100%'), height: hp('10%'), marginTop: 12}}>
                <TouchableOpacity onPress={() => navigation.navigate('CRoom',{CHAT_DETAIL : item?.user?.id})}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        width: 65,
                        height: 65,
                        backgroundColor: '#fff',
                        borderRadius: 100,
                        marginTop: hp('1%'),
                        marginLeft: wp('4%'),
                      }}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 100,
                        }}
                        source={{uri:item && item.user &&item.user.profileImg ?  `https://hive-dash.credot.dev/${item?.user?.profileImg}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDO5DTQhjF9-CTjNPRRV6dzyRKEasPpBRw-O9zmE-YMll7FtrjtgezuqaGONeldzUmDxM&usqp=CAUdata:image/jpeg;base64,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"}}
                      />
                    </View>

                    <View style={{marginLeft: wp('4%'), marginTop: hp('2%')}}>
                      <Text style={{fontSize: wp('4%'), fontWeight: 'bold'}}>
                        {item?.user?.username}
                      </Text>

                      <Text style={{fontSize: wp('3.3%'), marginTop: hp('1%')}}>
                        Head of Development
                      </Text>
                    </View>

                    <View style={{marginLeft: wp('20%'), marginTop: hp('2%')}}>
                      <Text
                        style={{fontSize: wp('3.5%'), fontWeight: 'italic'}}>
                        a month{' '}
                      </Text>
                      <Text
                        style={{fontSize: wp('3.5%'), fontWeight: 'italic'}}>
                        ago
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )
          }}
        />
        </View>
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
