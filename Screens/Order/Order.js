import { StyleSheet, Text, View , TouchableOpacity , Image , ScrollView } from 'react-native'
import React from 'react'

export default function OrderD({navigation}) {
  return (
    <View style={styles.container}>
        <ScrollView>
     <View style={{width:'100%' , height:234 , backgroundColor:'#FFCBAE'}}>
     <View style={{marginTop:24 , marginLeft:34}}>
        <Text style={{color:'black' , fontSize:20 , fontWeight:'normal' , }}>Verification required</Text>
        <View style={{alignItems:'center'}}>
        <Text style={{marginTop:15 , marginRight:35 , fontSize:15 }}>You must verify your identity, please submit the required documents to get verified. As soon as you will be verified then you will be able to get online orders</Text>
        </View>
     </View>

     <View style={{alignItems:'center' , marginTop:30}}>
   <TouchableOpacity style={{width:'85%' , height:44 , backgroundColor:'#F97316' , borderRadius:5 , alignItems:'center' , justifyContent:'center'}}>
    <Text style={{color:'#fff' , fontSize:16 }}>Let's verify account</Text>
   </TouchableOpacity>
     </View>
     </View>
     <View style={{alignItems:'center'}}>
        <View style={{width:'100%' , height:223 , backgroundColor:'#DDDDDD'}}>

        </View>

        <View style={{width:'100%' , height:125 , backgroundColor:'#ffffff'}}>
        <View>
            <Text style={{color:'#1DA1F2' , fontSize:12 , marginLeft:25 , marginTop:20}}>Programming, WordPress, WP setup</Text>
            <Text style={{color:'black' , fontSize:18 , marginLeft:25 , marginTop:20 , fontWeight:'normal'}}>I will write rest APi in react native</Text>
        </View>

        <View style={{flexDirection:'row' , marginLeft:22 , marginTop:5}}>

<Image style={{marginTop:7 , marginLeft:2 ,  width:17 , height:17}} source={require('../../assets/Rate.png')}/>
<Text style={{color:'black' , fontSize:12 , marginLeft:10 , marginTop:7}}>4.5</Text>
<Text style={{ fontSize:12 , marginLeft:10 , marginTop:7}}>(1,287)</Text>

</View>
   
   


        </View>

     </View>


     <View style={{marginTop:10}} >
       <View style={{width:'100%' , height:234 ,backgroundColor:'#fff' , borderTopLeftRadius:20 , borderTopRightRadius:20}}>
        <Text style={{marginLeft:30 , marginTop:30 , fontSize:20 , color:'black' , fontWeight:'normal'}}>Order details</Text>
    
        <View style={{width:'100%' , height:104 , backgroundColor:'#F7F7F7' , marginTop:20 , flexDirection:'row'}}>
             <View style={{width:75 , height:75 , backgroundColor:'#DDDDDD' , marginLeft:30 , marginTop:15}}>

             </View>

            <View style={{width:189 , height:78 , marginTop:10 , marginLeft:25}} >
                  <Text style={{marginLeft:10 , marginTop:20 , color:'black' , fontSize:15}}>Package cost</Text>
                  <Text style={{color:'black'  , fontSize:20 , marginLeft:12 , marginTop:8}}>$250.00</Text>
            </View>
    <View>
        <Image style={{ marginTop:50 }} source={require('../../assets/BAROW.png')}/>
    </View>

    

    </View>

  

        <View>

        </View>    

       </View>
        </View>


        <View style={{ width:'100%' , height:334 , backgroundColor:'#fff' }} >
       <View style={{marginLeft:10}}>
        <Text style={{color:'black' , fontSize:19 , marginLeft:20 , fontWeight:'700'}}>Selected additional features</Text>
       </View>


       <View>
        <View style={{flexDirection:'row' , marginTop:30 , marginLeft:33}}>

            <Text style={{fontSize:17}}>Basic</Text>
         <Text style={{fontSize:16 , marginLeft:'60%' , color:"black"}}>($250.00)</Text>

        </View>


        <View style={{flexDirection:'row' , marginTop:30 , marginLeft:33}}>

<Text style={{fontSize:17}}>Additional services</Text>
<Text style={{fontSize:16 , marginLeft:'29%' , color:"black"}}>($250.00)</Text>

</View>

  <View style={{alignItems:'center'}}>

<View style={{borderWidth:0.5 , borderColor:'grey' ,  width:'90%'  , height:1 , marginTop:20}}>

</View>
 </View>
 
       </View>

       <View style={{flexDirection:'row' , marginTop:30 , marginLeft:33}}>

            <Text style={{fontSize:17}}>Subtotal</Text>
         <Text style={{fontSize:16 , marginLeft:'53%' , color:"black"}}>($250.00)</Text>

        </View>


        <View style={{alignItems:'center' , marginTop:40}}>

            <TouchableOpacity style={{width:'90%' , height:45 ,  backgroundColor:'#C89D67' , borderRadius:10 , alignItems:'center' , justifyContent:'center' , flexDirection:'row'}}>
                <Image style={{width:19 ,height:19}} source={require('../../assets/Lock.png')}/>
                <Text style={{color:'#fff' , fontSize:15 , marginLeft:10 , fontWeight:'normal' }}>Proceed to secure checkout</Text>

            </TouchableOpacity>

        </View>


</View>
     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        backgroundColor:'#DDDDDD'
    }
})