import { StyleSheet, Text,  FlatList , Image , View , TouchableOpacity  } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen'
  import { Searchbar } from 'react-native-paper';
  import Icon from 'react-native-vector-icons/AntDesign';

export default function Chat({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const DATA = [1 , 2 , 3  , 4 , 5 , 6 , 7 , 8 , 9 ,10]

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={{width:hp('100%') , width:wp('100%') , backgroundColor:'#fff'}}>

  <View style={{alignItems:'center' , marginTop:hp('2%') }}>

  <Searchbar style={{height:hp('8%') , width:wp('95%') , borderRadius:5 , backgroundColor:'#FBF7ED'}}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />


  </View>
      <View style={{marginTop:hp('2%')}}>

        <FlatList 
      
        data={DATA}
        KeyExtractor={item => item.index}
        renderItem={({item})=>{
          return (

            <View style={{width:wp('100%') , height:hp('10%')  , marginTop:12}} >

              

              <TouchableOpacity onPress={()=> navigation.navigate('CRoom')} >

              <View style={{flexDirection:'row'}}>

               

                <View style={{width:65, height:65  , backgroundColor:'#fff' , borderRadius:100 , marginTop:hp('1%') , marginLeft:wp('4%') }}>
                <Image style={{width:'100%' , height:'100%' , borderRadius:100}} source={{uri : 'https://hive-app.vercel.app/_next/image?url=https%3A%2F%2Fpicsum.photos%2F200&w=128&q=75'}}/>

                  
                </View>


                <View style={{marginLeft:wp('4%') , marginTop:hp('2%')}}>

                  <Text style={{fontSize:wp('4%') , fontWeight:'bold'}}>Darlene Robertson</Text>

                  <Text style={{fontSize:wp('3.3%') , marginTop:hp('1%')}}>Head of Development</Text>

                </View>

                <View style={{marginLeft:wp('20%') , marginTop:hp('2%')}}>

<Text style={{fontSize:wp('3.5%') , fontWeight:'italic' }}>a month </Text>
<Text style={{fontSize:wp('3.5%') , fontWeight:'italic'}}>ago</Text>

  

</View>

   

                </View>

              

              </TouchableOpacity>
            

            </View>
      

          )
        }}
     
     
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        flex : 1 ,
        backgroundColor:'#fff'
    }
})