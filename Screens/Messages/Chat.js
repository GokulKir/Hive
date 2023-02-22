import { StyleSheet, Text,  FlatList , Image , View , TouchableOpacity  } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen'
  import { Searchbar } from 'react-native-paper';

export default function Chat({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const DATA = [1 , 2 , 3  , 4]

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View>

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

            <View style={{width:wp('100%') , height:hp('10%') , backgroundColor:'grey' , marginTop:12}} >

              <TouchableOpacity >

                <View style={{width:wp('8%'), height:hp('4%')  , backgroundColor:'#fff' , }}>


                  
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