import { StyleSheet, Text, View  , ScrollView , TouchableHighlight , TouchableOpacity , Image , Button , TextInput , Dimensions} from 'react-native'
import React from 'react' ;

const  {height , width} = Dimensions.get('window') ;

export default function Password({navigation}) {
  return (
    <View style={styles.container}>
    <ScrollView>
    <View style={{alignItems:'center' , width:"100%" , height:325 , backgroundColor:'#1D1D1B'}}>

           <TouchableOpacity onPress={()=> navigation.navigate('MyDrawer')}>
            <Text style={{color:'#d9dbd9' , fontSize:15 , marginLeft:"76%" , marginTop:14}}>Skip</Text>
            </TouchableOpacity>
          

            <Image style={{height:45 , width:95  , marginTop:80}} source={require('../../assets/Logo.png')}/>


            <Text style={{color : "#fff" , marginTop:25 , fontSize:17 , fontWeight:'bold'}}>Last password? No need to worry,</Text>
            <Text style={{color : "#fff" , marginTop:8 , fontSize:17 , fontWeight:'bold'}}>we'll send you the password reset link</Text>

        </View>

        <View>
        <View style={{marginLeft:20 , marginTop:20}}>
            <Text style={{color:'black' , fontSize:width * 0.05 , fontWeight:'700' }}>Last password?</Text>
        </View>

        </View>


        <View style={{alignItems:'center' , marginTop:30}}>
            <TextInput style={{width:width * 0.90 , height:56 , color:'black' , paddingTop:20  ,  borderBottomColor:'grey' , borderBottomWidth:1 , fontSize:15 , fontWeight:'700' }} placeholderColor="black" placeholder="Add email or username"/>

        </View>


        <View style={{alignItems:'center' , marginTop:30}}>

    <TouchableOpacity style={{width:'90%' , height:45 , backgroundColor:'#C89D67' , alignItems:'center' , justifyContent:'center' , borderRadius:5 , flexDirection:'row'}}>
      <Text style={{color:'#fff' , fontSize:17 , fontWeight:'bold'}}>Send reset link</Text>
      <Image style={{width:16, height:17 , marginLeft:17}} source={require('../../assets/right-arrow.png')}/>

    </TouchableOpacity>

  </View>


  <View style={{alignItems:'center' , marginTop:30}}>

  <View style={{flexDirection:'row' }}>

<View style={{borderWidth:0.5 , borderColor:'grey' , width:'40%' , height:1 , marginTop:10 , marginRight:8}}>

</View>

<Text style={{fontSize:17 , fontWeight:'600'}}>OR</Text>

<View style={{borderWidth:0.5 , borderColor:'grey' , width:'40%' , height:1 , marginTop:10  , marginLeft:8}}>

</View>

</View>

</View>

<View style={{alignItems:'center' , marginTop:30}}>

<TouchableOpacity style={{width:width  - 38 , height:45 , borderColor:'black' , borderWidth:0.4 , flexDirection:'row' , borderRadius:2}}>

<Image style={{width:25 , height:25 , marginTop:10 , marginLeft:75}} source={require('../../assets/Google.png')}/>

<Text style={{marginTop:10 , fontSize:17 , fontWeight:'bold' , color:'black' , marginLeft:10}}>Login with Google</Text>

</TouchableOpacity>
</View>



<View style={{alignItems:'center' , marginTop:10}}>

  <View style={{width:"80%" , height:56 , backgroundColor:'#fff' , flexDirection:'row' , alignItems:'center' , marginLeft:width - 383 }}>


  <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
    <Text style={{color:'#C89D67' , fontSize:width * 0.042 ,  marginTop:25 , fontWeight:'bold'}} >Join us today</Text>
</TouchableOpacity>



<TouchableOpacity onPress={() => navigation.navigate('Login')}>
    <Text style={{color:'#C89D67' , fontSize:width * 0.042 , marginLeft:150 , marginTop:25 , fontWeight:'bold'}} >Sign in</Text>
</TouchableOpacity>

  </View>

</View>

{/* <View style={{flexDirection:'row' , marginTop:3 }}>

<TouchableOpacity onPress={()=> navigation.navigate('Register')}>
    <Text style={{color:'#C89D67' , fontSize:16 , marginLeft: width - 335 , marginTop:25 , fontWeight:'bold'}} >Join us today</Text>
</TouchableOpacity>


<TouchableOpacity>
    <Text style={{color:'#C89D67' , fontSize:16 , marginLeft:150 , marginTop:25 , fontWeight:'bold'}} >Sign in</Text>
</TouchableOpacity>

</View> */}

<View style={{height:25}}></View>



    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        backgroundColor:'#fff'
    }
})