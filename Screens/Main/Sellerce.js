import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Text,
  Image,
  FlatList,
  ImageBackground
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useManualQuery, useQuery } from 'graphql-hooks'
import { SELLERS_LIST } from '../../GraphQl/Query'


export default function Sellers({ navigation }) {

  const { loading, error, data } = useQuery(SELLERS_LIST);

  const [sellers, setSellers] = useState([])

  useEffect(() => {
    setSellers(data?.freelancerList?.freelancers)
    console.log("=========", data?.freelancerList?.freelancers);
  }, [loading])

  const renderItems = ({ item }) => (
    <TouchableOpacity
      // onPress={() => navigation.navigate('Drawer2')}
      style={{ flexDirection: 'row' }}>
      <View
        style={{
          width: '100%',
          height: 80,
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: 56,
            height: 56,
            backgroundColor: '#DDDDDD',
            borderRadius: 100,
            marginLeft: 20,
          }}>
          <ImageBackground style={{ width: '100%', height: '100%', }} imageStyle={{ borderRadius: 100 }} source={{ uri: item.profileImg }} >
            {/* {item.isActivated ?
              <Image
                style={{ width: 17, height: 17 }}
                source={require('../../assets/Dot.png')}
              /> :
              <Image
                style={{ width: 17, height: 17 }}
                source={require('../../assets/Dot1.png')}
              />

            } */}
          </ImageBackground>
        </View>

        <View
          style={{
            marginLeft: 14,
            marginTop: 6,
            width: 122,
            height: 58,
          }}>
          <Text style={{ fontSize: 16, color: 'black' }}>
            {item.username}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{
                marginTop: 6,
                marginLeft: 1,
                width: 12,
                height: 12,
              }}
              source={require('../../assets/Rate.png')}
            />
            <Text
              style={{
                marginLeft: 4,
                marginTop: 3,
                marginTop: 5,
                fontSize: 12,
              }}>
            {item.rating}
            </Text>
            <Text
              style={{
                marginLeft: 8,
                marginTop: 4,
                color: 'grey',
                fontSize: 12,
              }}>
              (11 072) 
            </Text>
            <Image
              style={{
                height: 9,
                width: 12,
                marginTop: 8,
                marginLeft: 9,
              }}
              source={require('../../assets/Ey.png')}
            />
            <Text style={{ marginLeft: 4, marginTop: 3, fontSize: 12 }}>
              2,658
            </Text>
          </View>
        </View>

        <View style={{ marginLeft: wp('15%'), marginTop: 6 }}>
          <Text style={{ color: 'grey', fontSize: 13 }}>
            Starting from
          </Text>
          <Text
            style={{
              color: 'black',
              marginTop: 5,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            {item.hourlyRate}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )


  return (
    <View style={styles.container}>
        <FlatList
          data={sellers}
          renderItem={renderItems}
          keyExtractor={item => item._id}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
