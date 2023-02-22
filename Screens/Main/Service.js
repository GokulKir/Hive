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
import { useManualQuery, useQuery } from 'graphql-hooks'
import { SERVICE_LIST } from '../../GraphQl/Query'
import SkeletonLoderServiesList from '../../Components/SkeletonLoderServiesList'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function Service({ navigation }) {
  const { loading, error, data } = useQuery(SERVICE_LIST);

  const [services, setServices] = useState([])

  useEffect(() => {
    setServices(data?.serviceList?.services)
  }, [loading])

  const renderItems = ({ item }) => (
    <TouchableOpacity style={{ marginBottom: 20 }}>
      <View style={{ alignItems: 'center' }}>
        <ImageBackground
          source={{ uri: item.images && item.images.length ? `https://hive-dash.credot.dev/${item.images[0]}` : "https://global-uploads.webflow.com/6236f2260b45449819d1988e/6261573ce87ee639f635e64e_placeholder.png" }}
          // source={{ uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" }}
          style={{ width: '95%', height: 134, alignSelf: 'center', left: 10 }}>
          <Image
            style={{ width: 80, height: 25 }}
            source={require('../../assets/Label.png')}
          />
        </ImageBackground>

        <View style={{ marginLeft: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text
              style={{
                color: '#1DA1F2',
                fontWeight: 'normal',
                fontSize: 12,
                marginTop: 10,
              }}>
              {item.slug}
            </Text>
            <Text style={{ marginLeft: 0, marginTop: 10 }}>
              From
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text
            numberOfLines={2}
              style={{
                color: 'black',
                fontWeight: 'normal',
                fontSize: 16,
                marginTop: 10,
                width: "80%"
              }}>

              {item?.owner?.description}
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                color: 'black',
              }}>
              ${item.price}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', left: 22 }}>
        <Image
          style={{ marginTop: 6, marginLeft: 1, width: 12, height: 12 }}
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
          style={{ height: 9, width: 12, marginTop: 8, marginLeft: 9 }}
          source={require('../../assets/Ey.png')}
        />
        <Text style={{ marginLeft: 4, marginTop: 3, fontSize: 12 }}>
          2,658
        </Text>
      </View>

      <TouchableOpacity
        style={{
          width: '90%',
          height: 45,
          backgroundColor: '#EF4444',
          marginTop: 15,
          borderRadius: 5,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={require('../../assets/Love.png')} />
        <Text style={{ color: '#fff', marginLeft: 10 }}>
          Remove from saved items
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )


  return (
    <View style={styles.container}>
      {loading ?
        <SkeletonLoderServiesList/>
        
        :

        <FlatList
          data={services}
          renderItem={renderItems}
          keyExtractor={item => item._id}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
