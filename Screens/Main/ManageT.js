import React,{useState , useEffect} from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  FlatList
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {useManualQuery, useQuery} from 'graphql-hooks'
import All_Tasks_Skelton from '../../Components/All_Tasks_Skelton'


//  const AVAILABLE_TASKS = `query ServiceList($pageNumber: Int, $limit: Int, $category: String) {
//   serviceList(pageNumber: $pageNumber, limit: $limit, category: $category) {
//     msg
//     services {
//       owner {
//         _id
//         city
//         country
//         description
//         englishLevel
//         firstName
//         hourlyRate
//         isActivated
//         isProfileVerified
//         jobSuccess
//         joined
//         username
//         profileImg
//         rating
//         category {
//           _id
//           slug
//         }
//         skills {
//           title
//           slug
//           createdAt
//           _id
//         }
//       }
//       slug
//       title
//       status
//     }
//   }
// }
//  `

const AVAILABLE_TASKS =`query FreelencerOwnServicesList($status: Int) {
  freelencerOwnServicesList(status: $status) {
    msg
    success
    services {
      owner {
        _id
        city
        username
        hourlyRate
        tagline
        profileImg
        country
        description
        email
        rating
      }
    }
  }
}`

 



export default function MangeTasks ({navigation}) {
  const {loading, error, data} = useQuery(AVAILABLE_TASKS)
  const [Datas , setDatas] = useState([])

  useEffect(() => {
    // freeLancerList({variables: {}}).then(response => {
    //   console.log('frelncer list response', response)
    //   setData1(response)
    //    console.log(+data1);
    // })

    // console.log("data:    ",data);

    if (data?.freelencerOwnServicesList?.services) {
    }

    // console.log("loading       :  ",loading);
    if (!loading) {
      // Alert.alert("alert",JSON.stringify(data))
      // console.log("loading completed", data)
      setDatas(data)
    }
  })
  useEffect(() => {
    console.log('SERVIES_DATA>>>>>>', Datas?.freelencerOwnServicesList?.services)
  }, [Datas])
  //Calling API //



  return (
    <View style={styles.container}>
    
        <View
          style={{
            alignItems: 'center',
            width: wp('100%'),
            height: 213,
            backgroundColor: '#fff',
          }}>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 0.8,
              width: '90%',
              marginTop: 20,
              paddingTop: 20,
              flexDirection: 'row',
            }}>
            <TextInput
              style={{width: '90%', fontSize: 15, fontWeight: 'bold'}}
              placeholder='Search order here'
            />
            <Image
              style={{marginTop: 17, marginRight: 45}}
              source={require('../../assets/SR.png')}
            />
          </View>

          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 0.8,
              width: '90%',
              marginTop: 20,
              paddingTop: 20,
              flexDirection: 'row',
            }}>
            <TextInput
              style={{width: '90%', fontSize: 15, fontWeight: 'bold'}}
              placeholder='All orders'
            />
            <Image
              style={{marginTop: 25, marginRight: 45}}
              source={require('../../assets/Bar.png')}
            />
          </View>
        </View>

        {loading ? <All_Tasks_Skelton/>  :
  

    <FlatList
      
      data={Datas?.freelencerOwnServicesList?.services}
      keyExtractor={item => item._id}
      renderItem={({item})=>{
        return (
    
      
      
          <View style={{alignItems: 'center', marginTop: 25}}>

           <View style={{width:wp('90%') , height:hp('35%') , backgroundColor:'#fff' , borderRadius:10}}>

           <Image
                style={{width: 74, height: 26, marginLeft: 20, marginTop: 30}}
                source={require('../../assets/Ong.png')}
              />

<Text style={{marginLeft: 20, marginTop: 5, color: '#1DA1F2'}}>
                Programming, WordPress, WP setup
              </Text>

              <Text
                style={{
                  color: 'black',
                  fontSize: wp('4.3%'),
                  marginLeft: 25,
                  marginTop: 5,
                }}>
                {item?.owner?.description}
              </Text>

           
              <View style={{}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: 20, marginLeft: 20}}>
                    <Text style={{color: 'black', fontSize: wp('3.7%')}}>
                      Budget
                    </Text>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: wp('3.7%'),
                        fontWeight: '700',
                        color: 'black',
                      }}>
                     {item?.owner?.hourlyRate}
                    </Text>
                  </View>

                  <View style={{marginTop: 20, marginLeft: 40}}>
                    <Text style={{color: 'black', fontSize: wp('3.7%')}}>
                      Deadline
                    </Text>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: wp('3.7%'),
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      Dec 22, 2021
                    </Text>
                  </View>

                  <View style={{marginTop: 20, marginLeft: 40}}>
                    <Text style={{color: 'black', fontSize: wp('3.7%')}}>
                      Add-ons
                    </Text>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: wp('3.7%'),
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      2 Requested
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{width:'100%' , height:1 , backgroundColor:'grey' , marginTop:20}}>

              <TouchableOpacity
                  onPress={() => navigation.navigate('TaskDetails')}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        width: 43,
                        height: 43,
                        backgroundColor: '#DDDDDD',
                        marginLeft: 20,
                        marginTop: 10,
                        borderRadius: 100,
                      }}>
                <Image style={{width:'100%' , height:'100%' , borderRadius:100}} source={{uri : item?.owner?.profileImg}}/>

                      </View>

                    <Text style={{marginTop: 23, marginLeft: 15}}>By : </Text>
                    <Text
                      style={{
                        marginTop: 23,
                        fontSize: wp('4%'),
                        marginLeft: 2,
                        fontWeight: '600',
                        color: 'black',
                      }}>
                      {item?.owner?.username}
                    </Text>
                    <Image
                      style={{
                        width: 14,
                        height: 30,
                        marginTop: 20,
                        marginLeft: wp('35%'),
                      }}
                      source={require('../../assets/Side1.png')}
                    />
                  </View>
                </TouchableOpacity>
                </View>
                </View>
            
          </View>
      


              
        )
      }}
/>
}
        

{/* <View
              style={{
                width: wp('100%'),
                height: hp('40%'),
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              <View></View>

              <Image
                style={{width: 74, height: 26, marginLeft: 20, marginTop: 30}}
                source={require('../../assets/Ong.png')}
              />

              <Text style={{marginLeft: 20, marginTop: 5, color: '#1DA1F2'}}>
                Programming, WordPress, WP setup
              </Text>

              <Text
                style={{
                  color: 'black',
                  fontSize: wp('4.3%'),
                  marginLeft: 20,
                  marginTop: 5,
                }}>
                {item?.owner?.description}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: wp('4.3%'),
                  marginLeft: 20,
                  marginTop: 5,
                }}>
                Controller with one tag
              </Text>

              <View style={{}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: 20, marginLeft: 20}}>
                    <Text style={{color: 'black', fontSize: wp('3.7%')}}>
                      Budget
                    </Text>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: wp('3.7%'),
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      $90.19
                    </Text>
                  </View>

                  <View style={{marginTop: 20, marginLeft: 40}}>
                    <Text style={{color: 'black', fontSize: wp('3.7%')}}>
                      Deadline
                    </Text>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: wp('3.7%'),
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      Dec 22, 2021
                    </Text>
                  </View>

                  <View style={{marginTop: 20, marginLeft: 40}}>
                    <Text style={{color: 'black', fontSize: wp('3.7%')}}>
                      Add-ons
                    </Text>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: wp('3.7%'),
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      2 Requested
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View
                  style={{
                    width: '100%',
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    marginTop: 30,
                  }}></View>

                <TouchableOpacity
                  onPress={() => navigation.navigate('TaskDetails')}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        width: 53,
                        height: 53,
                        backgroundColor: '#DDDDDD',
                        marginLeft: 20,
                        marginTop: 10,
                        borderRadius: 100,
                      }}></View>

                    <Text style={{marginTop: 25, marginLeft: 15}}>By : </Text>
                    <Text
                      style={{
                        marginTop: 24,
                        fontSize: wp('4%'),
                        marginLeft: 2,
                        fontWeight: '600',
                        color: 'black',
                      }}>
                      {item?.owner?.username}
                    </Text>
                    <Image
                      style={{
                        width: 14,
                        height: 30,
                        marginTop: 20,
                        marginLeft: wp('45%'),
                      }}
                      source={require('../../assets/Side1.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
   */}

      
        
        

        <View style={{height: 6}}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
})
