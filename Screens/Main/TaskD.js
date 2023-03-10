import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { SERVICE_DETAILS } from '../../GraphQl/Query'
import { useManualQuery, useQuery } from 'graphql-hooks';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function TaskD(props) {
  const { loading, error, data } = useQuery(SERVICE_DETAILS, {
    variables: {
      serviceId: props?.route?.params?.serviceId

    }
  })
  const [details, setDetails] = useState([])

  useEffect(() => {
    if (data?.getServiceDetails?.details) {
      console.log("-------------------", data?.getServiceDetails?.details);
      setDetails(data?.getServiceDetails?.details)
    }
  }, [data])

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 61,
          backgroundColor: '#F7F7F7',
          elevation: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding:10
        }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../../assets/Side.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity >
          <Image
            style={{ width: 22, height: 22,resizeMode:"contain",right:10,top:5}}
            source={require('../../assets/ShareG.png')}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* <ScrollView
          horizontal
          disableIntervalMomentum={true}
          showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 354,
                height: 193,
                backgroundColor: '#DDDDDD',
                borderRadius: 10,
              }}></View>

            <View
              style={{
                width: 354,
                height: 193,
                backgroundColor: '#DDDDDD',
                borderRadius: 10,
                marginLeft: 10,
              }}></View>

            <View
              style={{
                width: 354,
                height: 193,
                backgroundColor: '#DDDDDD',
                borderRadius: 10,
                marginLeft: 10,
              }}></View>
          </View>
        </ScrollView> */}
        <Image
          style={{ width: "100%", height: 200, resizeMode: "cover" }}
          source={{ uri: `https://hive-dash.credot.dev/${details?.images?.[0]}` }}
        />

        <View
          style={{
            width: '100%',
            height: 66,
            backgroundColor: '#ffffff',
            elevation: 5,
            borderWidth: 0.8,
            borderColor: '#DDDDDD',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 56,
                height: 56,
                backgroundColor: '#DDDDDD',
                borderRadius: 100,
                marginLeft: 20,
              }}>
              <ImageBackground
                style={{ width: '100%', height: '100%' }}
                imageStyle={{ borderRadius: 100 }}
                source={{ uri: `https://hive-dash.credot.dev/${details?.owner?.profileImg}` }}>
                {details?.owner?.isActivated ? (
                  <Image
                    style={{ width: 17, height: 17 }}
                    source={require('../../assets/Dot.png')}
                  />
                ) : (
                  <Image
                    style={{ width: 17, height: 17 }}
                    source={require('../../assets/Dot1.png')}
                  />
                )}
              </ImageBackground>
            </View>

            <View
              style={{
                width: 156,
                height: 56,
                backgroundColor: '#fff',
                marginLeft: 10,
                top: 3, flex: 1
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                {details?.owner?.firstName} {details?.owner?.lastName}
              </Text>
              <Image
                style={{ width: 104, height: 18, marginLeft: 2, marginTop: 6 }}
                source={require('../../assets/Rating.png')}
              />
            </View>

            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 22,
                    height: 22,
                    // marginLeft: 62,
                    marginTop: 20,
                    right: 20
                  }}
                  source={require('../../assets/Message.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <Image
            style={{ marginLeft: 30, marginTop: 20, width: 74, height: 23 }}
            source={require('../../assets/Label1.png')}
          />
        </View>

        <View>
          <Text
            style={{
              color: '#1DA1F2',
              fontSize: 12,
              marginLeft: 34,
              marginTop: 10,
            }}>
            {details?.slug}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              marginLeft: 34,
              marginTop: 10,
            }}>
            {details?.shortDescription}
          </Text>

          <Image
            style={{ width: 160, height: 24, marginLeft: 30, marginTop: 10 }}
            source={require('../../assets/RateT.png')}
          />
        </View>

        <View
          style={{
            width: '100%',
            height: 300,
            backgroundColor: '#fff',
            marginTop: 20,
            borderBottomWidth: 0.7,
            borderBottomColor: 'grey',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 56,
                height: 56,
                backgroundColor: '#DDDDDD',
                marginLeft: 20,
                marginTop: 30,
                borderRadius: 5,
              }}></View>

            <View style={{ marginTop: 30, marginLeft: 20 }}>
              <Text style={{ color: 'black' }}>Starts from</Text>
              <Text style={{ color: '#C89D67', fontSize: 16, fontWeight: '700' }}>
                ${details?.price}
              </Text>
            </View>
          </View>

          <View style={{ alignItems: 'center', marginTop: 15 }}>
            <TouchableOpacity
              style={{
                width: '90%',
                height: 45,
                backgroundColor: '#C89D67',
                borderRadius: 5,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ color: '#fff', fontSize: 16 }}>
                  Hire me for your task
                </Text>
                <Image
                  style={{ width: 15, height: 15, marginLeft: 10 }}
                  source={require('../../assets/SideR.png')}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Image
              style={{ width: '100%', height: 98 }}
              source={require('../../assets/Stats.png')}
            />
          </View>
        </View>

        <View style={{ marginLeft: 30, marginTop: 30 }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: '700' }}>
            Common FAQs
          </Text>
        </View>

        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <View
            style={{
              width: '90%',
              height: 216,
              borderWidth: 0.6,
              elevation: 1,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 20,
                marginTop: 30,
              }}>
              Apply these 6 secret techniques to
            </Text>
            <TouchableOpacity>
              <Image
                style={{ width: 22, height: 10, marginLeft: '88%' }}
                source={require('../../assets/Minuse.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 20,
                marginTop: 10,
              }}>
              improve WordPress development
            </Text>
            <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 15 }}>
              Ativero eos et accusamus iustoan osimos
            </Text>
            <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 15 }}>
              ducimus quites blanditiis praese eisntium
            </Text>
            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 15 }}>
              uptatum deleniti atque corrupti.
            </Text>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              width: '90%',
              height: 65,
              borderWidth: 0.6,
              elevation: 1,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  fontSize: 15,
                  marginRight: 40,
                }}>
                6 enticing ways to improve skills
              </Text>
              <TouchableOpacity>
                <Image
                  style={{ width: 15, height: 16 }}
                  source={require('../../assets/Plus.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              width: '90%',
              height: 65,
              borderWidth: 0.6,
              elevation: 1,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  fontSize: 15,
                  marginRight: 30,
                }}>
                Top 80 quotes on WP development
              </Text>
              <TouchableOpacity>
                <Image
                  style={{ width: 15, height: 16, marginRight: 10 }}
                  source={require('../../assets/Plus.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              width: '90%',
              height: 85,
              borderWidth: 0.6,
              elevation: 1,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  fontSize: 15,
                  marginRight: 30,
                }}>
                Top 80 quotes on WP development
              </Text>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 15,
                    height: 16,
                    marginRight: 10,
                    marginTop: 15,
                  }}
                  source={require('../../assets/Plus.png')}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: 15,
                marginRight: 0,
                marginLeft: 20,
              }}>
              look amazing in 6 days
            </Text>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              width: '90%',
              height: 65,
              borderWidth: 0.6,
              elevation: 1,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  fontSize: 15,
                  marginRight: 30,
                  marginRight: 60,
                }}>
                Is software projects a scam?
              </Text>
              <TouchableOpacity>
                <Image
                  style={{ width: 15, height: 16 }}
                  source={require('../../assets/Plus.png')}
                />
              </TouchableOpacity>
            </View>

            
 

          </View>
          
        </View>

        <View style={{alignItems:'center'}}>

        <View style={{width:wp('90%')  , height:hp('19%')  , marginTop:hp('4%') , borderWidth:0.6 , borderColor:'grey' , borderRadius:8 ,  flexDirection:'row'}}>

          <View style={{width:70 , height:70 , backgroundColor:'#DDD' , alignItems:'center' , marginTop:hp('4%') , marginLeft:wp('5%') , borderRadius:100 }}>

          </View>

          <View style={{marginTop:hp('4%') , marginLeft:wp('4%')  }}>
            <Text style={{ fontSize:17 , fontWeight:'normal' , color:'black' , fontWeight:'bold'}}>I highly recommend this seller</Text>
            
          <View style={{marginTop:8 , flexDirection:'row'}}>
            <Image style={{width:wp('4%') , height:hp('2%')}} source={require('../../assets/Rate.png')}/>
            <Text style={{marginLeft:10 , fontWeight:'bold' , fontSize:14}}>4.5</Text>

            <Image style={{width:wp('4%') , height:hp('2.3%') , marginLeft:('20%')}} source={require('../../assets/Cal.png')}/>
            <Text style={{fontSize:15 , color:'grey' , marginLeft:5}}>1 sec ago</Text>
          </View>


          <View style={{marginTop:hp('2%')}}>

<Text>Dues aute iruretate dolor in reprehederit</Text>
<Text> in voluptate valiten essemae.</Text>

</View>
          

        

        
          
          </View>

        



          

</View>

</View>

        <View style={{ height: 256 }}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
})
