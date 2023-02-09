import { StyleSheet, Text, View , Dimensions , ScrollView , Image , TouchableOpacity , ImageBackground } from 'react-native'
import React,{useState , useEffect} from 'react' ;
const {height , width} = Dimensions.get('window')
import auth from '@react-native-firebase/auth';
import firebase from "@react-native-firebase/app" ;
import firestore from  "@react-native-firebase/firestore" ;
const user = firebase.auth().currentUser;

export default function Account({navigation}) {
  const [firstname , setFirstName] = useState() 
  const [lastname , setLastName] = useState()
  useEffect(() =>{


    firestore().collection(user.email).get().then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);
  
      querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        Data =  documentSnapshot.data()
        console.log("USER : "+Data)
        setFirstName(Data.Firstname)
        setLastName(Data.Lastname)
      });
    });


  })
  return (
    <View style={styles.container}>

        <ScrollView>
            <View style={{alignItems:'center' , marginTop:90}}>
            {/* <Image style={{width:64 , height:63}} source={{uri : user.photoURL}}/> */}
            <View style ={{width: width * 0.24 , height: height * 0.06 , backgroundColor:'#DDDDDD'  , borderTopLeftRadius:100  , borderTopRightRadius:100 , alignItems:'center' , justifyContent:'center'}}>
              <ImageBackground style={{width: width * 0.24 , height: height * 0.06 }}  imageStyle={{ borderTopLeftRadius:100  , borderTopRightRadius:100 , }} source={{uri:user.photoURL}}>

              <Image style={{width:17 , height:17 , marginTop:9}} source={require('../../assets/Dot.png')}/>

              </ImageBackground>
           
            </View>
              
   
                <View style={styles.SecondLayer}>

                    

                    <View style={{alignItems:'center'}}>

                    

                <View style ={{width: width * 0.24 , height: height * 0.06 , backgroundColor:'#DDDDDD' , marginBottom:145 , borderBottomLeftRadius:100  , borderBottomRightRadius:100}}>

                <ImageBackground style={{width: width * 0.24 , height: height * 0.06 }}  imageStyle={{borderBottomLeftRadius:100  , borderBottomRightRadius:100, }} source={{uri:user.photoURL}}>



</ImageBackground>

</View>






</View>





                </View>

 

 
                

            </View>

            <View style={{width:'100%' , height:"100%" , backgroundColor:'#fff' , marginTop:0 }}>
            <View style={{alignItems:'center'}}>


              {firstname && lastname ? <Text style={{color:'#1DA1F2' , fontSize:width * 0.040 , marginTop:0 }}>{firstname} { lastname}</Text>  :  <Text style={{color:'#1DA1F2' , fontSize:width * 0.040 , marginTop:0 }}>{user.displayName}</Text>  }

    
    <Text style={{marginTop:7 , color:'black' , fontSize:width * 0.048 , fontWeight:'600'}}>I will write rest APi in react native</Text>
    </View>


    <View style={{flexDirection:'row' , alignItems:'center'}}>
    <Image style={{width:19 , height:19 , marginLeft:width * 0.21 , marginTop:10 }} source={require('../../assets/Rate.png')}/>
    <Text style={{color:'black' , fontSize:15 , marginTop:9 , marginLeft:16}}>4.5</Text>
    <Text style={{color:'grey' , fontSize:15 , marginTop:9 , marginLeft:16}}>(1,287)</Text>
    <Image style={{width:19 , height:15 , marginLeft:13 , marginTop:12 }} source={require('../../assets/Ey.png')}/> 
    <Text style={{color:'grey' , fontSize:15 , marginTop:9 , marginLeft:14}}>3,466</Text>
    </View>


   <View style={{alignItems:'center' , marginTop:30}}>
    <Text style={{color:'black'}}>Location:</Text>
    <Text style={{marginTop:10 , color:'black' , fontSize:17 , fontWeight:'650'}}>1424 Quaking Acres, Arlington, IL</Text>

    <Text style={{marginTop:40 , fontSize:15 , color:'black'}}>Success rate:</Text>

    <Text style={{marginTop: height * 0.012 , color:'black' , fontSize:19 , fontWeight:'bold'}}>87% Compleated</Text>
    </View>


    <View style={{alignItems:'center' , marginTop:30}}>

     <TouchableOpacity style={{width:'60%' , height:45 , backgroundColor:'#C89D67' , borderRadius:5 , flexDirection:'row'}}>
       <Image style={{marginLeft:30 , marginTop:12 , width:20 , height:20}} source={require('../../assets/Me.png')}/>
       <Text style={{color:'#fff' , fontSize:width * 0.048 , marginTop:8 , marginLeft:10}}>Contact seller</Text>
     </TouchableOpacity>

  </View>


  <View style={{flexDirection:'row' , alignItems:'center'}}>

<Image style={{width:25 , height:20 , marginLeft:width  * 0.30 , marginTop:30 }} source={require('../../assets/Heart.png')}/>
<Text style={{marginLeft:8 ,marginTop:30 , color:'grey' , fontSize:18}}>Add to save</Text>
</View>

<View style={{width:'100%' , height:1 , borderBottomColor:'grey' , borderBottomWidth:0.5 , marginTop:40}}>

</View>


<View style={{marginLeft:30 , marginTop:20}}>
   <Text style={{color:'black' , fontSize:20 , fontWeight:'600'}}>Qualification background</Text>
 </View>

  
<View style={{marginTop:10}}>

  <Text style={{marginLeft:30 , marginTop:30 , color:'black'}}>Florida State University</Text>
   <Text style={{color:'black' ,  marginLeft:28 , marginTop:10 , fontSize:17 , color:'black'  , fontWeight:'normal'}}>Web & Apps Project Manager</Text>
   <Text style={{marginLeft:28 , marginTop:10}}>November 24, 2018</Text>
</View>



  
<View style={{marginTop:10}}>

  <Text style={{marginLeft:30 , marginTop:20 ,}}>Valencia College</Text>
   <Text style={{color:'black' ,  marginLeft:28 , marginTop:10 , fontSize:17 , color:'black'  , fontWeight:'normal'}}>MBA - Hospital Management</Text>
   <Text style={{marginLeft:28 , marginTop:10}}>March 13, 2014</Text>
</View>


  








<View style={{marginTop:10}}>

<Text style={{marginLeft:30 , marginTop:20 }}>Texas A & M University-College Station</Text>
 <Text style={{color:'black' ,  marginLeft:28 , marginTop:10 , fontSize:17 , color:'black'  , fontWeight:'normal'}}>BCS - Bachelor Computer Science</Text>
 <Text style={{marginLeft:28 , marginTop:10}}>June 27, 2012</Text>
</View>


<View style={{width:'100%' , height:1 , borderBottomColor:'grey' , borderBottomWidth:0.5 , marginTop:40}}>

</View>


<View style={{marginLeft:30 , marginTop:30}}>

      <Text style={{color:'black' , fontSize:18 , fontWeight:'bold'}}>Services Offered</Text>

    </View>


    <View style={{alignItems:'center'}}>

<TouchableOpacity style={{ marginTop:34}}>

<View style={{width:345 , height:145 , backgroundColor:'#DDDDDD' , marginTop:10 , borderRadius:5}}>

  <View style={{width:95 , height:23 , backgroundColor:'#C89D67' , alignItems:'center' , justifyContent:'center'}}>
    <Text style={{color:'#fff' , }}>Featured</Text>

  </View>

</View>


<View style={{flexDirection:'row'}}>

  <Text style={{color:'#1DA1F2' , marginTop:12}}>Programming, WordPress, WP setup</Text>
  <Text style={{color:'grey' , marginTop:12 , marginLeft:70}}>From</Text>

</View>

<View style={{flexDirection:'row' , marginTop:10}}>

   <Text style={{color:'black' , fontWeight:'700' ,  }}>I will write rest APi in react native</Text>

   <Text style={{color:'black' , marginLeft:70 , fontWeight:'700' , fontSize:15  }}>$90.19</Text>

</View>



<View style={{flexDirection:'row'}}>
    <Image style={{width:19 , height:19 , marginLeft:10 , marginTop:10 }} source={require('../../assets/Rate.png')}/>
   <Text style={{color:'black' , fontSize:15 , marginTop:9 , marginLeft:16}}>5.0</Text>
   <Text style={{color:'grey' , fontSize:15 , marginTop:9 , marginLeft:16}}>(2,659)</Text>
   <Image style={{width:19 , height:15 , marginLeft:13 , marginTop:12 }} source={require('../../assets/Ey.png')}/> 
     <Text style={{color:'grey' , fontSize:15 , marginTop:9 , marginLeft:14}}>2,926</Text>
   </View>


 <View style={{flexDirection:'row'}}>

  <View style={{alignItems:'center' , marginTop:20}}>

  <View style={{width:344 , height:89 , backgroundColor:'#fff' , flexDirection:'row'}}>

    <View style={{width:45 , height:45 , backgroundColor:'#D9ACEB' , marginTop:5 , marginLeft:10 , alignItems:'center' , justifyContent:'center' }}>

      <View style={{alignItems:'center'}}>

      <Image source={require('../../assets/Buc.png')}/>


     
     

      

      </View>

      

    

    </View>

    <View style={{marginTop:11 , marginLeft:15}}>
      <Text style={{color:'black' , fontWeight:'bold'}}>2,562</Text>
      <Text style={{color:'grey' , fontWeight:'normal' , fontSize:12}}>No. of sales</Text>

      </View>

    
  
      <View style={{alignItems:'center' , marginLeft:36}}>

<View style={{width:344 , height:89 , backgroundColor:'#fff' , flexDirection:'row'}}>

  <View style={{width:45 , height:45 , backgroundColor:'#AAFEED' , marginTop:5 , marginLeft:10 , alignItems:'center' , justifyContent:'center' }}>

    <View style={{alignItems:'center'}}>

    <Image source={require('../../assets/Buc.png')}/>


   
   

    

    </View>

    

  

  </View>

  <View style={{marginTop:11 , marginLeft:15}}>
    <Text style={{color:'black' , fontWeight:'bold'}}>7 Days</Text>
    <Text style={{color:'grey' , fontWeight:'normal' , fontSize:12}}>Delivery time</Text>

    </View>

  




</View>


</View>


  </View>





  


 


  </View>


 


  </View> 


  



</TouchableOpacity>

</View>





<View style={{alignItems:'center'}}>

<TouchableOpacity style={{ marginTop:14}}>

<View style={{width:345 , height:145 , backgroundColor:'#DDDDDD' , marginTop:10 , borderRadius:5}}>

  <View style={{width:95 , height:23 , backgroundColor:'#C89D67' , alignItems:'center' , justifyContent:'center'}}>
    <Text style={{color:'#fff' , }}>Featured</Text>

  </View>

</View>


<View style={{flexDirection:'row'}}>

  <Text style={{color:'#1DA1F2' , marginTop:12}}>Programming, WordPress, WP setup</Text>
  <Text style={{color:'grey' , marginTop:12 , marginLeft:70}}>From</Text>

</View>

<View style={{flexDirection:'row' , marginTop:10}}>

   <Text style={{color:'black' , fontWeight:'700' ,  }}>I will write rest APi in react native</Text>

   <Text style={{color:'black' , marginLeft:70 , fontWeight:'700' , fontSize:15  }}>$90.19</Text>

</View>



<View style={{flexDirection:'row'}}>
    <Image style={{width:19 , height:19 , marginLeft:10 , marginTop:10 }} source={require('../../assets/Rate.png')}/>
   <Text style={{color:'black' , fontSize:15 , marginTop:9 , marginLeft:16}}>5.0</Text>
   <Text style={{color:'grey' , fontSize:15 , marginTop:9 , marginLeft:16}}>(2,659)</Text>
   <Image style={{width:19 , height:15 , marginLeft:13 , marginTop:12 }} source={require('../../assets/Ey.png')}/> 
     <Text style={{color:'grey' , fontSize:15 , marginTop:9 , marginLeft:14}}>2,926</Text>
   </View>


 <View style={{flexDirection:'row'}}>

  <View style={{alignItems:'center' , marginTop:20}}>

  <View style={{width:344 , height:89 , backgroundColor:'#fff' , flexDirection:'row'}}>

    <View style={{width:45 , height:45 , backgroundColor:'#D9ACEB' , marginTop:5 , marginLeft:10 , alignItems:'center' , justifyContent:'center' }}>

      <View style={{alignItems:'center'}}>

      <Image source={require('../../assets/Buc.png')}/>


     
     

      

      </View>

      

    

    </View>

    <View style={{marginTop:11 , marginLeft:15}}>
      <Text style={{color:'black' , fontWeight:'bold'}}>2,562</Text>
      <Text style={{color:'grey' , fontWeight:'normal' , fontSize:12}}>No. of sales</Text>

      </View>

    
  
      <View style={{alignItems:'center' , marginLeft:36}}>

<View style={{width:344 , height:89 , backgroundColor:'#fff' , flexDirection:'row'}}>

  <View style={{width:45 , height:45 , backgroundColor:'#AAFEED' , marginTop:5 , marginLeft:10 , alignItems:'center' , justifyContent:'center' }}>

    <View style={{alignItems:'center'}}>

    <Image source={require('../../assets/Buc.png')}/>


   
   

    

    </View>

    

  

  </View>

  <View style={{marginTop:11 , marginLeft:15}}>
    <Text style={{color:'black' , fontWeight:'bold'}}>7 Days</Text>
    <Text style={{color:'grey' , fontWeight:'normal' , fontSize:12}}>Delivery time</Text>

    </View>

  




</View>


</View>


  </View>





  


 


  </View>


 


  </View> 


  



</TouchableOpacity>

</View>





<View style={{alignItems:'center'}}>

<TouchableOpacity style={{ marginTop:14}}>

<View style={{width:345 , height:145 , backgroundColor:'#DDDDDD' , marginTop:10 , borderRadius:5}}>

  <View style={{width:95 , height:23 , backgroundColor:'#C89D67' , alignItems:'center' , justifyContent:'center'}}>
    <Text style={{color:'#fff' , }}>Featured</Text>

  </View>

</View>


<View style={{flexDirection:'row'}}>

  <Text style={{color:'#1DA1F2' , marginTop:12}}>Programming, WordPress, WP setup</Text>
  <Text style={{color:'grey' , marginTop:12 , marginLeft:70}}>From</Text>

</View>

<View style={{flexDirection:'row' , marginTop:10}}>

   <Text style={{color:'black' , fontWeight:'700' ,  }}>I will write rest APi in react native</Text>

   <Text style={{color:'black' , marginLeft:70 , fontWeight:'700' , fontSize:15  }}>$90.19</Text>

</View>



<View style={{flexDirection:'row'}}>
    <Image style={{width:19 , height:19 , marginLeft:10 , marginTop:10 }} source={require('../../assets/Rate.png')}/>
   <Text style={{color:'black' , fontSize:15 , marginTop:9 , marginLeft:16}}>5.0</Text>
   <Text style={{color:'grey' , fontSize:15 , marginTop:9 , marginLeft:16}}>(2,659)</Text>
   <Image style={{width:19 , height:15 , marginLeft:13 , marginTop:12 }} source={require('../../assets/Ey.png')}/> 
     <Text style={{color:'grey' , fontSize:15 , marginTop:9 , marginLeft:14}}>2,926</Text>
   </View>


 <View style={{flexDirection:'row'}}>

  <View style={{alignItems:'center' , marginTop:20}}>

  <View style={{width:344 , height:89 , backgroundColor:'#fff' , flexDirection:'row'}}>

    <View style={{width:45 , height:45 , backgroundColor:'#D9ACEB' , marginTop:5 , marginLeft:10 , alignItems:'center' , justifyContent:'center' }}>

      <View style={{alignItems:'center'}}>

      <Image source={require('../../assets/Buc.png')}/>


     
     

      

      </View>

      

    

    </View>

    <View style={{marginTop:11 , marginLeft:15}}>
      <Text style={{color:'black' , fontWeight:'bold'}}>2,562</Text>
      <Text style={{color:'grey' , fontWeight:'normal' , fontSize:12}}>No. of sales</Text>

      </View>

    
  
      <View style={{alignItems:'center' , marginLeft:36}}>

<View style={{width:344 , height:89 , backgroundColor:'#fff' , flexDirection:'row'}}>

  <View style={{width:45 , height:45 , backgroundColor:'#AAFEED' , marginTop:5 , marginLeft:10 , alignItems:'center' , justifyContent:'center' }}>

    <View style={{alignItems:'center'}}>

    <Image source={require('../../assets/Buc.png')}/>


   
   

    

    </View>

    

  

  </View>

  <View style={{marginTop:11 , marginLeft:15}}>
    <Text style={{color:'black' , fontWeight:'bold'}}>7 Days</Text>
    <Text style={{color:'grey' , fontWeight:'normal' , fontSize:12}}>Delivery time</Text>

    </View>

  




</View>


</View>


  </View>





  


 


  </View>


 


  </View> 


  



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
        backgroundColor :'#F7F7F7'
    },
    SecondLayer : {
    width : "100%" ,
    height:height * 0.080 , 
    backgroundColor:'#fff' , 
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderTopWidth: 0.5 , 
    borderColor:'#DDDDDD'

    }

})