
import React from 'react' ;
import {View , TouchableOpacity , Image , ScrollView , Button , Text , TextInput , StyleSheet} from 'react-native' ;

export default function Edit({navigation}) {
    return (
   <View style={styles.container}>
    <ScrollView>
        <View style={{alignItems:'center' , marginTop:20}}>
        <View style={{width:'95%' , height:865 , backgroundColor:'#fff' , borderTopLeftRadius:20 , borderTopRightRadius:20}}>
         <View style={{width:'100%' , height:65 , backgroundColor:'#DDDDDD' , flexDirection:'row' ,  borderTopLeftRadius:20 , borderTopRightRadius:20}}>
 
            <Text style={{marginLeft:30 , fontSize:17 , marginTop:10 , color:'black' , fontWeigth:'bold' , marginTop:20}}>Add/edit educational details</Text>
          <TouchableOpacity>
            <Image style={{width:15 , height:15 , marginLeft:60 , marginTop:12 , marginTop:20}} source={require('../../assets/remark.png')}/>
            </TouchableOpacity>

         </View>
 
    <View style={{alignItems:'center'}}>

         <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:20 , paddingTop:20 }} >
    
    <TextInput style={{width:'100%' , fontSize:15 }} placeholder="Add degree title"/>
  
          </View>

          <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:20 , paddingTop:20 }} >
    
    <TextInput style={{width:'100%' , fontSize:15 }} placeholder="Add institute name"/>
  
          </View>


          </View>

          <View style={{marginTop:45 , marginLeft:20}}>

            <Text style={{color:'black' , fontWeight:'normal' , fontSize:17}}>Choose date</Text>

          </View>

 <View style={{alignItems:'center'}}>

          <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:20 , paddingTop:20 , flexDirection:'row' }} >
    
    <TextInput style={{width:'90%' , fontSize:15 }} placeholder="Date from"/>
    <Image style={{marginTop:25 , marginRight:45}} source={require('../../assets/Bar.png')}/>
  
          </View>

          <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:20 , paddingTop:20 , flexDirection:'row' }} >
    
    <TextInput style={{width:'90%' , fontSize:15 }} placeholder="Date to"/>
    <Image style={{marginTop:25 , marginRight:45}} source={require('../../assets/Bar.png')}/>
  
          </View>
    

          <View style={{ width:'90%' , marginTop:20 , paddingTop:20 , flexDirection:'row' }} >
    
    <TextInput style={{width:'90%' , fontSize:15 }} placeholder="Add description"/>
  
    
  
          </View>

          <View style={{borderColor:'grey' , borderWidth:0.4 , width:'90%' , marginTop:160}}></View>


          <View style={{alignItems:'center' , }}>
   <TouchableOpacity onPress={()=> navigation.navigate('Drawer4')} style={{width:324 , height:40 , backgroundColor:'#C89D67' , borderRadius:5 , alignItems:'center' , justifyContent:'center' , marginTop:30}}>
    <Text style={{fontSize:17 , color:'#fff' , fontWeight:'normal'}}>Save & update</Text>
   </TouchableOpacity>
       </View>


       <View style={{marginTop:9 , marginRight:86}}>
        <Text>Click “Save &C Update” to update the </Text>
        <Text>changes</Text>
       </View>

          </View>


        </View>


        
        </View>
    </ScrollView>

   </View>
    )
}

const styles =  StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor:'grey'
    }
})
