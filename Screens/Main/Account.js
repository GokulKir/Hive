import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import React, { useState, useEffect } from 'react'
const { height, width } = Dimensions.get('window')
import auth from '@react-native-firebase/auth'
import firebase from '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useManualQuery, useQuery } from 'graphql-hooks'
import FreelancerDetailsSkeleton from '../../Components/FreelancerDetailsSkeleton'
import { FREELANCER_DETAILS } from '../../GraphQl/Query'

const user = firebase.auth().currentUser

export default function Account(props) {
  const { freelancerId } = props.route.params || ""
  const [details, setDetails] = useState([])
  const [serviceDetails, setServiceDetails] = useState([])


  const { loading, error, data } = useQuery(FREELANCER_DETAILS, {
    variables: {
      getFreelancerDetailsId: props?.route?.params?.freelancerId
    }
  })

  // const { getFreelancerDetails } = data


  useEffect(() => {
    if (data?.getFreelancerDetails?.success) {
      console.log("-------------------", data?.getFreelancerDetails?.featuredServices);
      setDetails(data?.getFreelancerDetails?.userDetails)
      setServiceDetails(data?.getFreelancerDetails?.featuredServices)
    }
  }, [data])

  if (loading) {
    return (
      <FreelancerDetailsSkeleton />
    )
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center', marginTop: 90 }}>
          <View style={styles.SecondLayer}>
            <Image
              style={{
                width: wp('22%'),
                height: hp('11%'),
                borderRadius: 50,
                marginTop: -40,
                alignSelf: 'center',
              }}
              source={{ uri: details && details.profileImg ? `https://hive-dash.credot.dev/${details?.profileImg}` : "https://medusajs.com/images/avatars/user-avatar-03.png" }}
            />

          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            marginTop: 0,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                color: '#1DA1F2',
                fontSize: width * 0.04,
              }}>
              {`${details?.firstName}${details?.lastName}`}
            </Text>

            <Text
              style={{
                marginTop: 7,
                color: 'black',
                fontSize: width * 0.04,
                fontWeight: '300',
                margin: 10
              }}>
              {details?.description}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{
                width: 19,
                height: 19,
                marginLeft: width * 0.21,
                marginTop: 10,
              }}
              source={require('../../assets/Rate.png')}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                marginTop: 9,
                marginLeft: 16,
              }}>
              {details?.rating}
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 15,
                marginTop: 9,
                marginLeft: 16,
              }}>
              (1,287)
            </Text>
            <Image
              style={{ width: 19, height: 15, marginLeft: 13, marginTop: 12 }}
              source={require('../../assets/Ey.png')}
            />
            <Text
              style={{
                color: 'grey',
                fontSize: 15,
                marginTop: 9,
                marginLeft: 14,
              }}>
              3,466
            </Text>
          </View>

          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Text style={{ color: 'black' }}>Location:</Text>
            <Text
              style={{
                marginTop: 10,
                color: 'black',
                fontSize: 17,
                fontWeight: '650',
              }}>
              {details?.country}, {details?.city}
            </Text>

            {/* <Text style={{ marginTop: 40, fontSize: 15, color: 'black' }}>
              Success rate:
            </Text>

            <Text
              style={{
                marginTop: height * 0.012,
                color: 'black',
                fontSize: 19,
                fontWeight: 'bold',
              }}>
              87% Compleated
            </Text> */}
          </View>

          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <TouchableOpacity
              style={{
                width: '60%',
                height: 45,
                backgroundColor: '#C89D67',
                borderRadius: 5,
                flexDirection: 'row',
              }}>
              <Image
                style={{ marginLeft: 30, marginTop: 12, width: 20, height: 20 }}
                source={require('../../assets/Me.png')}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: width * 0.048,
                  marginTop: 8,
                  marginLeft: 10,
                }}>
                Contact seller
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              height: 1,
              borderBottomColor: 'grey',
              borderBottomWidth: 0.5,
              marginTop: 40,
            }}></View>

          <View style={{ marginLeft: 30, marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>
              Education
            </Text>
          </View>

          {details?.education?.map((item, index) => {
            return (
              <View style={{ marginLeft: 30, marginTop: 20 }} key={index}>
                <Text style={{ marginTop: 10, color: 'black' }}>
                  {item.institution}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    marginTop: 10,
                    fontSize: 17,
                    color: 'black',
                    fontWeight: 'normal',
                  }}>
                  {item?.major}
                </Text>
                <Text style={{ marginTop: 10 }}>
                  {item.startYear} - {item.endYear}
                </Text>
              </View>
            )
          })}
          <View style={{ marginLeft: 30, marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>
              Work & Experience
            </Text>
          </View>

          {details?.experience?.map((item, index) => {
            return (
              <View style={{ marginLeft: 30, marginTop: 20 }} key={index}>
                <Text style={{ marginTop: 10, color: 'black' }}>
                  {item.role}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    marginTop: 10,
                    fontSize: 17,
                    color: 'black',
                    fontWeight: 'normal',
                  }}>
                  {item?.company}
                </Text>
                <Text style={{ marginTop: 10 }}>
                  {item.startYear} - {item.endYear}
                </Text>
              </View>
            )
          })}

          <View style={{ marginLeft: 30, marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>
              Awards and Certificates
            </Text>
          </View>

          {details?.awards?.map((item, index) => {
            return (
              <View style={{ marginLeft: 30, marginTop: 20 }} key={index}>
                <Text style={{ marginTop: 10, color: 'black' }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    marginTop: 10,
                    fontSize: 17,
                    color: 'black',
                    fontWeight: 'normal',
                  }}>
                  {item?.issuer}
                </Text>
                <Text style={{ marginTop: 10 }}>
                  {item.startYear} - {item.endYear}
                </Text>
              </View>
            )
          })}

        </View>

        <View style={{ backgroundColor: "#fff" }}>

          <View style={{ marginLeft: 30, marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
              Services Offered
            </Text>
          </View>

          {serviceDetails?.map((item, index) => {
            return (
              <View style={{ marginTop: 20, bottom: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('TaskD', { serviceId: item._id })
                  }}
                >
                  <ImageBackground
                    source={{ uri: item.images && item.images.length ? `https://hive-dash.credot.dev/${item.images[0]}` : "https://global-uploads.webflow.com/6236f2260b45449819d1988e/6261573ce87ee639f635e64e_placeholder.png" }}
                    // source={{ uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" }}
                    style={{ width: '92%', height: 134, alignSelf: 'center', left: 14 }}>
                    <Image
                      style={{ width: 80, height: 25 }}
                      source={require('../../assets/Label.png')}
                    />
                  </ImageBackground>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', left: 30 }}>
                  <Text style={{ color: '#1DA1F2', marginTop: 12 }}>
                    {item.slug}
                  </Text>
                  <Text style={{ color: 'grey', marginTop: 12, marginLeft: 50 }}>
                    From
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, left: 30 }}>
                  <Text style={{ color: 'black', fontWeight: '700' }}>
                    {item.title}
                  </Text>

                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 150,
                      fontWeight: '700',
                      fontSize: 15,
                    }}>
                    ${item.price}
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'baseline', left: 20 }}>
                  <Image
                    style={{ width: 19, height: 19, marginLeft: 10, marginTop: 10 }}
                    source={require('../../assets/Rate.png')}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginTop: 9,
                      marginLeft: 16,
                    }}>
                    {item.rating}
                  </Text>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 15,
                      marginTop: 9,
                      marginLeft: 16,
                    }}>
                    (2,659)
                  </Text>
                  <Image
                    style={{ width: 19, height: 15, marginLeft: 13, marginTop: 12 }}
                    source={require('../../assets/Ey.png')}
                  />
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 15,
                      marginTop: 9,
                      marginLeft: 14,
                    }}>
                    2,926
                  </Text>
                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  SecondLayer: {
    width: '100%',
    height: height * 0.08,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 0.5,
    borderColor: '#DDDDDD',
  },
})
