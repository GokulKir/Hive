import React, {useState , useEffect} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
} from 'react-native'
import Sellerce from './Sellerce'
import Service from './Service'

const SERVIECE_LIST = `

`

export default function MySaved ({navigation}) {
  const [selectedTab, setselectedTab] = useState(0)

  return (
    <View style={styles.container}>
        <View
          style={{
            width: '100%',
            height: 75,
            backgroundColor: '#fff',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => setselectedTab(0)}
            style={{
              width: '50%',
              height: 63,
              backgroundColor: selectedTab == 0 ? '#ffffff' : '#DDDDDD',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.5,
              borderColor: selectedTab == 0 ? 'grey' : '#fff',
            }}>
            <Text
              style={{
                fontSize: 17,
                color: selectedTab == 0 ? 'black' : 'grey',
                fontWeight: 'bold',
              }}>
              Sellers
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setselectedTab(1)}
            style={{
              width: '50%',
              height: 63,
              backgroundColor: selectedTab == 1 ? '#ffffff' : '#DDDDDD',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.5,
              borderColor: selectedTab == 1 ? 'grey' : '#fff',
            }}>
            <Text
              style={{
                fontSize: 17,
                color: selectedTab == 0 ? 'black' : 'grey',
                fontWeight: 'bold',
              }}>
              Service
            </Text>
          </TouchableOpacity>
        </View>
          {selectedTab == 0 ? (
            <Sellerce />
          ) : selectedTab == 1 ? (
            <Service />
          ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
