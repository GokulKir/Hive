import React , {useState , useEffect} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Text,
  Image,
  ActivityIndicator ,
  ImageBackground
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {useManualQuery , useQuery} from 'graphql-hooks'



const SERVIECE_LIST = `
query GetFreelancerDetails($pageNumber: Int, $limit: Int, $category: String) {
  serviceList(pageNumber: $pageNumber, limit: $limit, category: $category) {
    msg
    services {
      _id
      owner {
        _id
        city
        country
        description
        englishLevel
        firstName
        hourlyRate
        isActivated
        isProfileVerified
        jobSuccess
        joined
        lastName
        position
        profileImg
        rating
        tagline
        username
      }
    }
  }
}
`


export default function Service ({navigation}) {
  const [Datas , setDatas] =  useState([])
  const {  loading, error, data } = useQuery(SERVIECE_LIST);

  useEffect(() =>{
    console.log(error);
  
    if( data?.serviceList?.services?.owner){
        
  
    }
  
    
    if(!loading){
     
      setDatas(data)
    }
    console.log(data);
   })
  
   useEffect(() =>{
    console.log("Servies Data>>>>>",Datas?.serviceList?.services);
    
      },[Datas])


  return (
    <View style={styles.container}>

    {loading ?  
 
     
  <View>
  <ActivityIndicator size={40} color="#C89D67" style={{marginTop:hp('40%')}} />
 </View>


      :
      <ScrollView>
        <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
          <View>

         { Datas?.serviceList?.services.map((obj , i)=>{
          return (
       
            
            <TouchableOpacity key={i} style={{alignItems: 'center', marginTop: 10}}>
              <View
                style={{width: '90%', height: 134, backgroundColor: '#DDDDDD'}}>
                <Image
                  style={{width: 80, height: 25}}
                  source={require('../../assets/Label.png')}
                />
              </View>

              <View style={{marginLeft: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#1DA1F2',
                      fontWeight: 'normal',
                      fontSize: wp('3.5%'),
                      marginRight: 90,
                      marginTop: 10,
                    }}>
                    Programming, WordPress, WP setup
                  </Text>
                  <Text style={{marginLeft: 0, marginTop: 10, marginRight: 10}}>
                    From
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width:wp('70%')}}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: wp('3.5%'),
                      marginRight: wp('7%'),
                      marginTop: 4,
                    }}>
                   {obj?.owner?.description}
                  </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 15,
                      marginTop: 10,
                      marginLeft: wp('0%'),
                      color: 'black',
                      marginLeft:wp('8%')
                    }}>
                   {obj?.owner?.hourlyRate}
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginRight: 215 , marginTop:2}}>
                <Image
                  style={{marginTop: 8, marginLeft: 1, width: 12, height: 12}}
                  source={require('../../assets/Rate.png')}
                />
                <Text
                  style={{
                    marginLeft: 4,
                    marginTop: 3,
                    marginTop: 5,
                    fontSize: 12,
                  }}>
                {obj?.owner?.rating}
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
                  style={{height: 9, width: 12, marginTop: 8, marginLeft: 9}}
                  source={require('../../assets/Ey.png')}
                />
                <Text style={{marginLeft: 4, marginTop: 3, fontSize: 12}}>
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
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('../../assets/Love.png')} />
                <Text style={{color: '#fff', marginLeft: 10}}>
                  Remove from saved items
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
                 
          )
        })}
        
          </View>
        </View>
      </ScrollView>
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
