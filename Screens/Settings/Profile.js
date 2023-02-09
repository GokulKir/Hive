import { StyleSheet, Text, View , ScrollView , TextInput , Image , TouchableOpacity , Dimensions  } from 'react-native'
import React from 'react'

const {height , width}  = Dimensions.get('window') ;

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
       
    <ScrollView>

       <View style={{width:'100%' , height:"68%" , backgroundColor:'#fff' , alignItems:'center' , borderBottomLeftRadius:20 , borderBottomRightRadius:20}}>

       <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:30 , paddingTop:20 }} >
    
  <TextInput style={{width:'100%' , fontSize:15 , color:'grey' , fontWeight:'bold' }} placeholder="Enter first name"/>

        </View>


        <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:20 , paddingTop:20 }} >
    
    <TextInput style={{width:'100%' , fontSize:15 , color:'grey' , fontWeight:'bold' }} placeholder="Enter last name"/>
  
          </View>

          <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:20 , paddingTop:20 }} >
    
    <TextInput style={{width:'100%' , fontSize:15 , color:'grey' , fontWeight:'bold' }} placeholder="Contact number"/>
  
          </View>


          <View style={{marginRight:264 , marginTop:30}}>
            <Text style={{fontSize:16 ,fontWeight:'700'}}>Country</Text>
          </View>


          <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:20 , paddingTop:20 , flexDirection:'row' }} >
    
    <TextInput style={{width:'90%' , fontSize:15 , color:'grey' , fontWeight:'bold' }} placeholder="Select country"/>
    <Image style={{marginTop:25 , marginRight:45}} source={require('../../assets/Bar.png')}/>
  
          </View>


          <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:20 , paddingTop:20 }} >
    
    <TextInput style={{width:'100%' , fontSize:15 , color:'grey' , fontWeight:'bold' }} placeholder="Add zipcode"/>
  
          </View>

          <View style={{alignItems:'center'}}>
   <TouchableOpacity style={{width:324 , height:40 , backgroundColor:'#C89D67' , borderRadius:5 , alignItems:'center' , justifyContent:'center' , marginTop:30}}>
    <Text style={{fontSize:17 , color:'#fff' , fontWeight:'normal'}}>Save & update</Text>
   </TouchableOpacity>
       </View>


       <View style={{marginTop:9 , marginRight:86}}>
        <Text style={{fontSize: width * 0.038 , }}>Click “Save &C Update” to update the </Text>
        <Text style={{fontSize:15 , marginTop:4}}>changes</Text>
       </View>

 
     

       <View style={{width:'100%' , height:289 , backgroundColor:'#fff' , marginTop:40 , borderTopLeftRadius:20 , borderTopRightRadius:20 }}> 
     <View style={{width:'100%' , height:40 , backgroundColor:'#fff' , flexDirection:'row'}}>

      <Text style={{color:'black' , fontWeight:'normal' , fontSize:18 , marginLeft:30 , marginTop:20}}>Education</Text>
      <Text style={{color:'#1DA1F2' , fontWeight:'normal' , fontSize:16 , marginLeft:160 , marginTop:20}}>Add new</Text>
     </View>

     <View style={{borderWidth:0.5 , borderColor:'grey' , width:'100%' , marginTop:30}}>

</View>

<View style={{ marginTop:20}}>

      <Text style={{marginLeft:20 , fontSize:13}}>Amentotech - December ,2 2015 - December ,2 2018</Text>

      <Text style={{marginLeft:20 , fontSize:16 , marginTop:10 , color:'black' , fontWeight:"bold"}}>BCS - Bachelor ComputerScience</Text>

</View>
<View style={{alignItems:'center'}}>
   <TouchableOpacity onPress={() => navigation.navigate('Edit')} style={{width:324 , height:40 , backgroundColor:'#C89D67' , borderRadius:5 , alignItems:'center' , justifyContent:'center' , marginTop:30}}>
    <Text style={{fontSize:17 , color:'#fff' , fontWeight:'normal'}}>Edit</Text>
   </TouchableOpacity>
       </View>


       <View style={{alignItems:'center'}}>
           
                <TouchableOpacity>
            <Text style={{marginTop:20}}>Remove</Text>
                 </TouchableOpacity>
         

       </View>
</View>


       
    

       </View>
     

  
   {/* <View style={{width:'100%', alignItems:'center'}} >
 <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:40 , paddingTop:20 }} >

  <TextInput style={{width:'100%' , height:'100%' , fontSize:15 }} placeholder="Enter first name"/>

 </View>


 

       </View> */}
       

       </ScrollView>

       
       
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor:'#DDDDDD'
    }
})