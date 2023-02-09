import React from 'react' ;
import {View , StyleSheet , TouchableOpacity , TextInput , ScrollView , Text , Image} from 'react-native' ;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Sellers ({navigation}) {
    return (
        <View style={styles.container}>

            <ScrollView>
  <View style={{width:'100%' , height:534 , alignItems:'center'}}  >
    <ScrollView>

  <TouchableOpacity onPress={() => navigation.navigate('Drawer2')} style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:20 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17}} source={require('../../assets/Dot.png')}/>
  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Kellyiam W</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:6 , marginLeft:1 ,  width:12 , height:12 }} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:4 , marginTop:3 , marginTop:5 , fontSize:12}}>4.5</Text>
      <Text style={{marginLeft:8 , marginTop:4 , color:'grey' , fontSize:12}}>(11 072)</Text>
      <Image style={{height:9 , width:12 , marginTop:8 , marginLeft:9}} source={require('../../assets/Ey.png')}/>
      <Text style={{marginLeft:4 , marginTop:3  , fontSize:12}}>2,658</Text>
      </View>

    </View>

 

    
<View style={{marginLeft:wp('15%') , marginTop:6}}>
        <Text style={{color:'grey' , fontSize:13 }}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:14 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>



<TouchableOpacity onPress={() => navigation.navigate('Drawer2')} style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:10 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17}} source={require('../../assets/Dot.png')}/>
  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Leon Peterson</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:6 , marginLeft:1 ,  width:12 , height:12 }} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:4 , marginTop:3 , marginTop:5 , fontSize:12}}>4.5</Text>
      <Text style={{marginLeft:8 , marginTop:4 , color:'grey' , fontSize:12}}>(11 072)</Text>
      <Image style={{height:9 , width:12 , marginTop:8 , marginLeft:9}} source={require('../../assets/Ey.png')}/>
      <Text style={{marginLeft:4 , marginTop:3  , fontSize:12}}>3,466</Text>
      </View>

    </View>

 

    
    <View style={{marginLeft:wp('15%') , marginTop:6}}>
        <Text style={{color:'grey' , fontSize:13 }}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:14 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>




<TouchableOpacity onPress={() => navigation.navigate('Drawer2')} style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:10 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17}} source={require('../../assets/Dot.png')}/>

  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Chester Mike</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:6 , marginLeft:1 ,  width:12 , height:12 }} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:4 , marginTop:3 , marginTop:5 , fontSize:12}}>4.5</Text>
      <Text style={{marginLeft:8 , marginTop:4 , color:'grey' , fontSize:12}}>(11 072)</Text>
      <Image style={{height:9 , width:12 , marginTop:8 , marginLeft:9}} source={require('../../assets/Ey.png')}/>
      <Text style={{marginLeft:4 , marginTop:3  , fontSize:12}}>2,509</Text>
      </View>

    </View>

 

    <View style={{marginLeft:wp('15%') , marginTop:6}}>
        <Text style={{color:'grey' , fontSize:13 }}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:14 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>



<TouchableOpacity onPress={() => navigation.navigate('Drawer2')} style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:10 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17}} source={require('../../assets/Dot.png')}/>
  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Freeman Jessy</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:6 , marginLeft:1 ,  width:12 , height:12 }} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:4 , marginTop:3 , marginTop:5 , fontSize:12}}>4.5</Text>
      <Text style={{marginLeft:8 , marginTop:4 , color:'grey' , fontSize:12}}>(11 072)</Text>
      <Image style={{height:9 , width:12 , marginTop:8 , marginLeft:9}} source={require('../../assets/Ey.png')}/>
      <Text style={{marginLeft:4 , marginTop:3  , fontSize:12}}>2,899</Text>
      </View>

    </View>

 

    
    <View style={{marginLeft:wp('15%') , marginTop:6}}>
        <Text style={{color:'grey' , fontSize:13 }}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:14 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>


<TouchableOpacity onPress={() => navigation.navigate('Drawer2')} style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:10 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17}} source={require('../../assets/Dot1.png')}/>

  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Jackson Toad</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:6 , marginLeft:1 ,  width:12 , height:12 }} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:4 , marginTop:3 , marginTop:5 , fontSize:12}}>4.5</Text>
      <Text style={{marginLeft:8 , marginTop:4 , color:'grey' , fontSize:12}}>(11 072)</Text>
      <Image style={{height:9 , width:12 , marginTop:8 , marginLeft:9}} source={require('../../assets/Ey.png')}/>
      <Text style={{marginLeft:4 , marginTop:3  , fontSize:12}}>2,763</Text>
      </View>

    </View>

 

    <View style={{marginLeft:wp('15%') , marginTop:6}}>
        <Text style={{color:'grey' , fontSize:13 }}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:14 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>



<TouchableOpacity onPress={() => navigation.navigate('Drawer2')} style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:10 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17}} source={require('../../assets/Dot1.png')}/>
  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Hawkins Wings</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:6 , marginLeft:1 ,  width:12 , height:12 }} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:4 , marginTop:3 , marginTop:5 , fontSize:12}}>4.5</Text>
      <Text style={{marginLeft:8 , marginTop:4 , color:'grey' , fontSize:12}}>(11 072)</Text>
      <Image style={{height:9 , width:12 , marginTop:8 , marginLeft:9}} source={require('../../assets/Ey.png')}/>
      <Text style={{marginLeft:4 , marginTop:3  , fontSize:12}}>2,884</Text>
      </View>

    </View>

 

    <View style={{marginLeft:wp('15%') , marginTop:6}}>
        <Text style={{color:'grey' , fontSize:13 }}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:14 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>



<TouchableOpacity onPress={() => navigation.navigate('Drawer2')} style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:10 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17}} source={require('../../assets/Dot1.png')}/>

  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Stacy Brown</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:6 , marginLeft:1 ,  width:12 , height:12 }} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:4 , marginTop:3 , marginTop:5 , fontSize:12}}>4.5</Text>
      <Text style={{marginLeft:8 , marginTop:4 , color:'grey' , fontSize:12}}>(11 072)</Text>
      <Image style={{height:9 , width:12 , marginTop:8 , marginLeft:9}} source={require('../../assets/Ey.png')}/>
      <Text style={{marginLeft:4 , marginTop:3  , fontSize:12}}>2,658</Text>
      </View>

    </View>

 
    <View style={{marginLeft:wp('15%') , marginTop:6}}>
        <Text style={{color:'grey' , fontSize:13 }}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:14 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>
</ScrollView>




  </View>
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