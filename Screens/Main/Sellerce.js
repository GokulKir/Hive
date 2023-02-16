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


export default function Sellers ({navigation}) {
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
        <View style={{width: '100%', height: hp('100%'), alignItems: 'center'}}>
          <ScrollView>
 
  {Datas?.serviceList?.services.map((obj , i)=>{
    return (

  

            <TouchableOpacity  key={i}
              onPress={() => navigation.navigate('Drawer2')}
              style={{flexDirection: 'row'}}>
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

                    <ImageBackground style={{width:'100%' , height:'100%' }}  source={{uri :obj?.owner?.profileImg}} imageStyle={{borderRadius:100}}>

                    {obj?.owner?.isActivated ?   
                  <Image
                    style={{width: 17, height: 17}}
                    source={require('../../assets/Dot.png')}
                  />
                  :
                  <Image
                    style={{width: 17, height: 17}}
                    source={require('../../assets/Dot1.png')}
                  />
                  }
                  </ImageBackground>
                </View>

                <View
                  style={{
                    marginLeft: 14,
                    marginTop: 6,
                    width: 122,
                    height: 58,
                  }}>
                  <Text style={{fontSize: 16, color: 'black'}}>{obj?.owner?.username}</Text>
                  <View style={{flexDirection: 'row'}}>
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
                      style={{
                        height: 9,
                        width: 12,
                        marginTop: 8,
                        marginLeft: 9,
                      }}
                      source={require('../../assets/Ey.png')}
                    />
                    <Text style={{marginLeft: 4, marginTop: 3, fontSize: 12}}>
                      2,658
                    </Text>
                  </View>
                </View>

                <View style={{marginLeft: wp('15%'), marginTop: 6}}>
                  <Text style={{color: 'grey', fontSize: 13}}>
                    Starting from
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      marginTop: 5,
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    $987.00 /hr
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

)
})}

            
          </ScrollView>
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
