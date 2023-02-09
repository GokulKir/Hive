
import React,{useState , useEffect} from 'react' ;
import {View , StyleSheet , Text , TouchableOpacity , ScrollView , Image , TextInput , ImageBackground , Dimensions } from 'react-native' ;
const {height , width} = Dimensions.get('window') ;
export default function TaskDetail ({navigation}) {
    const [select , setSelect] = useState(0)

    return (
        <View style={styles.container}>
        

            <View style={{width:'100%' , height:61 , backgroundColor:'#F7F7F7' , elevation:5 , flexDirection:'row'}}>
           <TouchableOpacity onPress={() => navigation.navigate('Drawer13')}>
                <Image style={{width:30 , height:30 , marginLeft:20 , marginTop:16}} source={require('../../assets/Side.png')}/>
                  </TouchableOpacity>
                  <Text style={{color:'balck' , fontSize:18 , marginLeft:85 , marginTop:19 , color:'#1C1C1C'   }}>Task detail</Text>

                  <View style={{width:43 , height:43 , backgroundColor:'#DDDDDD' , marginLeft:70 , marginTop:10 , borderRadius:100}}>

             </View>
            </View>

          
            <ScrollView>
                <View style={{alignItems:'center'}}>

                    <View style={{width:'100%' , height:326 , backgroundColor:'#ffffff'}}>

                        <View style={{marginLeft:30 , marginTop:20}}>
                            <Image source={require('../../assets/Lab.png')}/>
                        </View>

                        <View style={{marginLeft:30 , marginTop:20}}>

                            <Text style={{color:'#1DA1F2' , fontSize:12}}>Graphics & design, Logo design, Minimalist</Text>

                            <Text style={{color:'black' , fontSize:16 , marginTop:5 , fontWeight:'normal'}}>Get premium quality logo designing and rebranding of your logo</Text>
                          <Image style={{width:324 , height:45 , marginTop:20}} source={require('../../assets/li.png')}/>
                          
                        </View>

                        <View>
                        <TouchableOpacity>
                        <Image style={{marginTop:40}} source={require('../../assets/Ts.png')}/>
                        </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{width:'100%' , height:0 , backgroundColor:'#fff'}}>
            
                    </View>

                    <View style={{width:'100%' , height:280 , backgroundColor:'#fff' , marginTop:10 ,  borderRadius:10}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{marginLeft:30 , marginTop:20 , fontSize:17 , fontWeight:'normal' , color:'black'}}>Task total budget</Text>
                                <Image  style={{marginLeft:136 , marginTop:30}} source={require('../../assets/Art.png')}/>
                            </View>

                            <View style={{flexDirection:'row'}}>

                                <Text style={{marginLeft:35 , marginTop:39 , color:'black'}}>Package cost</Text>
                                <Text style={{marginLeft:125 , marginTop:39 , color:'black'}}>($250.00)</Text>

                            </View>
                              
                            <View style={{flexDirection:'row'}}>

<Text style={{marginLeft:35 , marginTop:20 , color:'black'}}>Additional service</Text>
<Text style={{marginLeft:98 , marginTop:20 , color:'black'}}>($250.00)</Text>

</View>


<View style={{alignItems:'center'}}>

  <View style={{borderColor:'grey' , borderWidth:0.6 , marginTop:20 , width:'90%'}}>

  </View>






  </View>

      
  <View style={{flexDirection:'row'}}>

<Text style={{marginLeft:35 , marginTop:20 , color:'black'}}>Processing fee</Text>
<Text style={{marginLeft:115 , marginTop:20 , color:'black'}}>($250.00)</Text>

</View>


<View style={{alignItems:'center'}}>

  <View style={{borderColor:'grey' , borderWidth:0.6 , marginTop:20 , width:'90%'}}>

  </View>






  </View>


  <View style={{flexDirection:'row'}}>

<Text style={{marginLeft:35 , marginTop:20 , color:'black'}}>Task total budget</Text>
<Text style={{marginLeft:97 , marginTop:20 , color:'black'}}>($250.00)</Text>

</View>


                            
                    </View>  






                </View>

                <View style={{alignItems:'center' , marginTop:15}}>

<View style={{width:'100%' , height:634 , backgroundColor:'#fff' , borderRadius:10}}>

    <View style={{marginLeft:30 , marginTop:20}}>
        <Text style={{color:'black' , fontSize:18 , fontWeight:'600'}}>Task history</Text>
    </View>

     <View style={{flexDirection:'row'}}>
    <View style={{width:34 , height:34 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20 , marginTop:20}}>

    </View>

    <Text style={{marginTop:25 , marginLeft:10 , fontSize:15 , fontWeight:'600' , color:'black'}}>Kellyiam Walker</Text>

    <Text style={{marginTop:25 , marginLeft:80}}>Jan 6, 2022</Text>

   

    </View>

    <View style={{alignItems:'center'}}>
    <Text style={{fontSize:15 , marginTop:20}}>Ativero eos et accusamus et iustoan odiosimos ducimus quites blanditiis praesentium uptatum deleniti atque corrupti quos.</Text>
    </View>

      <View style={{alignItems:'center' , marginTop:20}}>
    <View style={{borderWidth:1 , borderColor:'#DDDDDD' , width:'90%'}}>

    </View>
    </View>


  

     <View style={{flexDirection:'row'}}>
    <View style={{width:34 , height:34 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20 , marginTop:20}}>

    </View>

    <Text style={{marginTop:25 , marginLeft:10 , fontSize:15 , fontWeight:'600' , color:'black'}}>Tommy Stalker</Text>

    <Text style={{marginTop:25 , marginLeft:80}}>Jan 6, 2022</Text>

   

    </View>

    <View style={{alignItems:'center'}}>
    <Text style={{fontSize:15 , marginTop:20}}>Ativero eos et accusamus et iustoan odiosimos ducimus quites blanditiis praesentium uptatum deleniti atque corrupti quos.</Text>
    </View>

    <View style={{flexDirection:'row'}}>

        <Image style={{width:18 , height:20 , marginLeft:25 , marginTop:20}} source={require('../../assets/File.png')}/>
        <Image style={{width:18 , height:20 , marginLeft:10 , marginTop:20}} source={require('../../assets/File.png')}/>
        <Image style={{width:18 , height:20 , marginLeft:10 , marginTop:20}} source={require('../../assets/File.png')}/>
        <Image style={{width:18 , height:20 , marginLeft:10 , marginTop:20}} source={require('../../assets/File.png')}/>
         <Text style={{marginTop:20 , marginLeft:10 , color:'black' , fontWeight:'600'}}>+  02  more</Text>
         <TouchableOpacity>
         <Text style={{marginTop:20 , marginLeft:50 , color:'#1DA1F2'}}>Downloade</Text>
         </TouchableOpacity>

    </View>



    

      <View style={{alignItems:'center' , marginTop:20}}>
    <View style={{borderWidth:1 , borderColor:'#DDDDDD' , width:'90%'}}>
      
    </View>

    
    <View style={{flexDirection:'row'}}>
    <View style={{width:34 , height:34 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:40 , marginTop:20 , marginRight:0}}>

    </View>

    <Text style={{marginTop:25 , marginLeft:10 , fontSize:15 , fontWeight:'600' , color:'black' , marginRight:89}}>Tommy Stalker</Text>

    <Text style={{marginTop:25 , marginRight:50 }}>Jan 6, 2022</Text>

   

    </View>

    <View style={{alignItems:'center'}}>
    <Text style={{fontSize:15 , marginTop:20}}>Ativero eos et accusamus et iustoan odiosimos ducimus quites blanditiis praesentium uptatum deleniti atque corrupti quos.</Text>
    </View>

    <View style={{flexDirection:'row'}}>

        <Image style={{width:18 , height:20 , marginLeft:0 , marginTop:20 , marginRight:10}} source={require('../../assets/File.png')}/>
        <Image style={{width:18 , height:20 , marginLeft:0 , marginTop:20 , marginRight:180}} source={require('../../assets/File.png')}/>

       
         <TouchableOpacity>
         <Text style={{marginTop:20 , marginLeft:0 , color:'#1DA1F2'}}>Downloade</Text>
         </TouchableOpacity>

    </View>
  
    </View>
    <View  style={{alignItems:'center' , marginTop:20}}>
    <TouchableOpacity style={{width:'90%' , height:45 , backgroundColor:'#6366F1' , justifyContent:'center' , borderRadius:5}}>
   <View style={{alignItems:'center' , justifyContent:'center' , flexDirection:'row'}}>
    <Image style={{width:16  , height:16 }} source={require('../../assets/Bell.png')}/>

    <Text style={{color:'#fff' , fontSize:14 , marginLeft:6 , }}>Final package</Text>
   </View>
    </TouchableOpacity>
    </View>

</View>

<View style={{width:'100%' , height:1250 , backgroundColor:'#fff'  , marginTop:20 , borderTopLeftRadius:10 , borderTopRightRadius:10}}>
  <View style={{marginLeft:30 , marginTop:20}}>
    <Text style={{color:'black' , fontSize:17 , fontWeight:'700'}}>Add task documents / files</Text>
  </View>


  <View style={{flexDirection:'row' , marginTop:30 , marginLeft:30}}>

    <TouchableOpacity onPress={() => setSelect(0)} style={{width:25 , height:25 , backgroundColor:  select  == 0 ?  'black' : "#fff" , borderRadius:100 , alignItems:'center' , justifyContent:'center'  ,borderColor: select == 0 ? "#fff" : "black" , borderWidth: select == 0  ? 0.7 : 0.7}}>

        <View style={{width:15 , height:15 ,  backgroundColor:'#fff' , borderRadius:100 }}>

        </View>

    </TouchableOpacity>


    <View style={{marginLeft:10}}>
        <Text style={{color:'black' , fontSize:15  , fontWeight:'600'}}>Send as a revision</Text>
    </View>

  </View>


  <View style={{flexDirection:'row' , marginTop:30 , marginLeft:30}}>

  <TouchableOpacity onPress={() => setSelect(1)} style={{width:25 , height:25 , backgroundColor:  select  == 1 ?  'black' : "#fff" , borderRadius:100 , alignItems:'center' , justifyContent:'center'  ,borderColor: select == 1 ? "#fff" : "black" , borderWidth: select == 1  ? 1 : 0.7}}>

<View style={{width:15 , height:15 ,  backgroundColor:'#fff' , borderRadius:100 }}>

</View>

</TouchableOpacity>



    <View style={{marginLeft:10}}>
        <Text style={{color:'black' , fontSize:15  , fontWeight:'600' , marginTop:1 }}>Send as a final attempt</Text>
    </View>



  </View>


  <View style={{alignItems:'center'}}>
    
  <View style={{width:'90%' , height:240 , borderBottomWidth:1 , borderBottomColor:'grey'}}>

    <TextInput style={{width:"100%" , height:95 , fontWeight:'700'}} placeholder="Enter description"/>

</View>


  </View>


  <View style={{alignItems:'center'}}>

    <Text style={{marginTop:23 , fontSize:15 , color:'black' , fontWeight:'700'}}>Upload task documents / files: (Add upto 3)</Text>

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


  <View style={{alignItems:'center'}}>
  <TouchableOpacity  style={{  }} >

<View   style={{width:320 , height:96 , backgroundColor:'#DDDD' , marginTop:10 , borderRadius:10 ,  flexDirection:'row'}}>
    <View style={{width:195 , height:60 }}>

    <Text style={{color:'black' , marginLeft:30 , marginTop:10 , fontSize:15 , fontWeight:'bold'}}>The Summiteer: Nishat </Text>
    <Text style={{color:'black' , marginLeft:30 , marginTop:10 , fontSize:15 , fontWeight:'bold'}}>Mazumder.pdf </Text>



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

        <Text style={{color:'black' , marginLeft:30 , marginTop:10 , fontSize:15 , fontWeight:'bold'}}>The Engineers: Khaleda Shahriar </Text>


     <Text style={{marginLeft:30 , color:'black' , marginTop:10}}>798.73 KB</Text>

       
        </View>

        <View style={{marginLeft:72 , marginTop:30}}>
            <TouchableOpacity>
        <Image source={require('../../assets/DELE.png')}/>
        </TouchableOpacity>

    </View>


    </View>

  

</TouchableOpacity>


<TouchableOpacity  style={{ }} >

    <View   style={{width:320 , height:86 , backgroundColor:'#DDDD' , marginTop:10 , borderRadius:10 ,  flexDirection:'row'}}>
        <View style={{width:225 , height:50   }}>

        <Text style={{color:'black' , marginLeft:30 , marginTop:10 , fontSize:15 , fontWeight:'bold'}}>Da and Sa Want to Visit.pdf</Text>
        
        <Text style={{marginLeft:30 , color:'black' , marginTop:10}}>798.73 KB</Text>



       
        </View>

        <View style={{marginLeft:40 , marginTop:30 }}>
          <TouchableOpacity>
        <Image source={require('../../assets/DELE.png')}/>
        </TouchableOpacity>

    </View>


    </View>

  

</TouchableOpacity>


<View style={{alignItems:'center' , }}>
<TouchableOpacity onPress={() => navigation.navigate('Drawer8')} style={{width:324 , height:40 , backgroundColor:'#C89D67' , borderRadius:5 , alignItems:'center' , justifyContent:'center' , marginTop:30}}>
 <Text style={{fontSize:17 , color:'#fff' , fontWeight:'normal'}}>Submit</Text>
</TouchableOpacity>
    </View>


    
</View>

  
</View>




</View>


<View style={{alignItems:'center' }}>

               










       



     


    


</View>





               

                
<View style={{height:0}}>

</View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
       flex:1,
        backgroundColor:'#DDDDDD'
    }
})