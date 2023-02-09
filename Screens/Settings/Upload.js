import { View , TouchableOpacity , ScrollView , Button , Image , TextInput , StyleSheet , Text, Dimensions , ImageBackground } from 'react-native'
import React from 'react' ;
const {height , width} = Dimensions.get('window') ;

export default function Upload ({navigation}) {
    return (
     <View style={styles.container}>

        <ScrollView>
            <View style={{alignItems:'center'}}>


            <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:20 , paddingTop:20 }} >
    
    <TextInput style={{width:'100%' , fontSize:13 }} placeholder="your name"/>
  
          </View>


          <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:20 , paddingTop:20 }} >
    
    <TextInput style={{width:'100%' , fontSize:13 }} placeholder="Contact number"/>
  
          </View>


          <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:20 , paddingTop:20 }} >
    
    <TextInput style={{width:'100%' , fontSize:13 }} placeholder="National identity card, passport or driving license number:"/>
  
          </View>


          <View style={{borderBottomColor:'grey' , borderBottomWidth:0.8 , width:'90%' , marginTop:20 , paddingTop:20 }} >
    
    <TextInput style={{width:'100%' , fontSize:13 }} placeholder="Add address"/>
  
          </View>


  
          <View style={{marginRight:210 , marginTop:10}}>
            <Text style={{fontWeight:'bold' , marginTop:12 , color:'black'}}>Upload documents</Text>
          </View>

            </View>

            


            <View style={{alignItems:'center' , marginTop:20}}>

<ImageBackground style={{width:330 , height:330 , alignItems:'center' , justifyContent:'center'}}  source={require('../../assets/ImageUp.png')}>

<View style={{width:'99%' , height:'99%' , backgroundColor:'#F7F7F7' , borderRadius:20 , alignItems:'center'}}>
               
    <View style={{width:96 , height:96 , backgroundColor:'#DDDDDD' , marginTop:20 , borderRadius:10}}>

    </View>
    <View style={{alignItems:'center' , flexDirection:'row'}}>
        <TouchableOpacity style={{flexDirection:'row'}}>
  <Text style={{color:'#1DA1F2' , marginTop:20}}>click here</Text>
  
  </TouchableOpacity>
  <View>
  <Text style={{color:'black' , marginTop:20 , marginLeft:10}}>to upload</Text>
  </View>
 
    </View>

    <View style={{alignItems:'center' , marginTop:20}}>
    <Text style={{fontSize:15 , marginTop:3 , color:'#1C1C1C'}}>You can upload jpg, png, file format only </Text>
    <Text style={{fontSize:13 , marginTop:5 ,  color:'#1C1C1C'}}> make sure your file size should not exceed 3mb</Text>
    <Text style={{fontSize:15 , marginTop:3 ,  color:'#1C1C1C'}}>exceed 3mb</Text>
  </View>

</View>

</ImageBackground>



</View>

          
            <View style={{alignItems:'center' }}>

               

<TouchableOpacity  style={{ }} >

    <View   style={{width:320 , height:96 , backgroundColor:'#DDDD' , marginTop:10 , borderRadius:10 ,  flexDirection:'row'}}>
        <View style={{width:195 , height:60 }}>

        <Text style={{color:'balck' , marginLeft:30 , marginTop:10 , fontSize:15 , fontWeight:'bold'}}>The Summiteer: Nishat </Text>
        <Text style={{color:'balck' , marginLeft:30 , marginTop:10 , fontSize:15 , fontWeight:'bold'}}>Mazumder.pdf </Text>



        <View style={{marginLeft:40 , marginTop:20}}>
<Image source={require('../../assets/Scroll.png')}/>

</View>
       
        </View>

        <View style={{marginLeft:72 , marginTop:30}}>
        <Image source={require('../../assets/loader.png')}/>

    </View>


    </View>

  

</TouchableOpacity>



<TouchableOpacity  style={{ }} >

    <View   style={{width:320 , height:96 , backgroundColor:'#DDDD' , marginTop:10 , borderRadius:10 ,  flexDirection:'row'}}>
        <View style={{width:195 , height:60 }}>

        <Text style={{color:'balck' , marginLeft:30 , marginTop:10 , fontSize:15 , fontWeight:'bold'}}>The Engineers: Khaleda Shahriar </Text>




       
        </View>

        <View style={{marginLeft:72 , marginTop:30}}>
        <Image source={require('../../assets/DELE.png')}/>

    </View>


    </View>

  

</TouchableOpacity>




<TouchableOpacity  style={{ }} >

    <View   style={{width:320 , height:96 , backgroundColor:'#DDDD' , marginTop:10 , borderRadius:10 ,  flexDirection:'row'}}>
        <View style={{width:195 , height:60 }}>

        <Text style={{color:'balck' , marginLeft:30 , marginTop:10 , fontSize:15 , fontWeight:'bold'}}>Da and Sa Want to Visit.pdf</Text>
        



       
        </View>

        <View style={{marginLeft:72 , marginTop:30}}>
        <Image source={require('../../assets/DELE.png')}/>

    </View>


    </View>

  

</TouchableOpacity>


       

       <View style={{alignItems:'center' , }}>
<TouchableOpacity onPress={() => navigation.navigate('Drawer8')} style={{width:324 , height:40 , backgroundColor:'#C89D67' , borderRadius:5 , alignItems:'center' , justifyContent:'center' , marginTop:30}}>
 <Text style={{fontSize:17 , color:'#fff' , fontWeight:'normal'}}>Save & update</Text>
</TouchableOpacity>
    </View>


    <View style={{marginTop:9 , marginRight:86}}>
     <Text>Click “Save &C Update” to update the </Text>
     <Text>changes</Text>
    </View>

     


    


</View>

  <View style={{height:89}}></View>

        </ScrollView>

     </View>
    )

}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'#fff'
    }
})