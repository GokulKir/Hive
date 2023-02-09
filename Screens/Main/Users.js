import { StyleSheet, Text, View , ScrollView , Image , TouchableOpacity , Dimensions } from 'react-native'
import React,{useCallback, useMemo, useRef , useState} from 'react' ;
const {height , width} = Dimensions.get('window')
import BottomSheet from '@gorhom/bottom-sheet';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function UseFree({navigation}) {

  const bottomSheetRef = useRef(null) 
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  //callbacks

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);

  }, []);

const BottomSheetOp = () =>{
  return (
    <View style={{flex:1}}>
  <BottomSheet
  ref={bottomSheetRef}
  index={1}
  snapPoints={snapPoints}
  onChange={handleSheetChanges}
  >
 <View style={{width:'100%' , height:156 , backgroundColor:'black' }}>
          <Text>Awesome 🎉</Text>
        </View>
  </BottomSheet>
  </View>
  )
}     

  return (
    <View style={styles.container}>
     <ScrollView>


        <View style={{}} >
            <View style={{width:'100%' , height:75  , flexDirection:'row'  , marginLeft:10 }}>
             <Text style={{fontSize:width * 0.054 , color:'black' , marginLeft:width * 0.063 , marginTop:20 , fontWeight:'bold'}} >29 search results(s) found</Text>
             <TouchableOpacity onPress={() => navigation.navigate('Filter2')} style={{width:40 , height:40 , backgroundColor:'#DDDDDD' , alignItems:'center' , justifyContent:'center' , borderRadius:100 , marginLeft:wp("12%") , marginTop:14 }}>
             <Image style={{width:16  , height:16 }} source={require('../../assets/Fil.png')}/>
             </TouchableOpacity>
            </View>

        </View>


        <TouchableOpacity onPress={() => navigation.navigate('Drawer3')} style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:20 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17}} source={require('../../assets/Dot.png')}/>

 

  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Kellyiam W</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:7 , marginLeft:2 ,  width:15 , height:15}} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:10 , marginTop:5 , marginTop:5}}>4.5</Text>
      <Text style={{marginLeft:10 , marginTop:5 , color:'grey'}}>(11 072)</Text>
      </View>

    </View>

 

    
<View style={{marginLeft:wp('20%') , marginTop:8}}>
        <Text style={{color:'grey'}}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:15 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>


<TouchableOpacity style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:0 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17 ,  width:15 , height:15}} source={require('../../assets/Dot.png')}/>

   

  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Chester M</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:7 , marginLeft:2 ,  width:15 , height:15}} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:10 , marginTop:5 , marginTop:5}}>4.5</Text>
      <Text style={{marginLeft:10 , marginTop:5 , color:'grey'}}>(11 072)</Text>
      </View>

    </View>

 

    
<View style={{marginLeft:wp('20%') , marginTop:8}}>
        <Text style={{color:'grey'}}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:15 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>



<TouchableOpacity style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:0 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17 ,  width:15 , height:15}} source={require('../../assets/Dot.png')}/>


  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Freeman J</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:7 , marginLeft:2 ,  width:15 , height:15}} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:10 , marginTop:5 , marginTop:5}}>4.5</Text>
      <Text style={{marginLeft:10 , marginTop:5 , color:'grey'}}>(11 072)</Text>
      </View>

    </View>

 

    
<View style={{marginLeft:wp('20%') , marginTop:8}}>
        <Text style={{color:'grey'}}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:15 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>






<TouchableOpacity style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:0 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17}} source={require('../../assets/Dot.png')}/>



  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Jackson T</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:7 , marginLeft:2 ,  width:15 , height:15}} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:10 , marginTop:5 , marginTop:5}}>4.5</Text>
      <Text style={{marginLeft:10 , marginTop:5 , color:'grey'}}>(11 072)</Text>
      </View>

    </View>

 

    
<View style={{marginLeft:wp('20%') , marginTop:8}}>
        <Text style={{color:'grey'}}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:15 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>






<TouchableOpacity style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:0 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17}} source={require('../../assets/Dot1.png')}/>
  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Hawkins W</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:7 , marginLeft:2 ,  width:15 , height:15}} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:10 , marginTop:5 , marginTop:5}}>4.5</Text>
      <Text style={{marginLeft:10 , marginTop:5 , color:'grey'}}>(11 072)</Text>
      </View>

    </View>

 

    
<View style={{marginLeft:wp('20%') , marginTop:8}}>
        <Text style={{color:'grey'}}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:15 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>






<TouchableOpacity style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:0 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17}} source={require('../../assets/Dot1.png')}/>
  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Stacy B</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:7 , marginLeft:2 ,  width:15 , height:15}} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:10 , marginTop:5 , marginTop:5}}>4.5</Text>
      <Text style={{marginLeft:10 , marginTop:5 , color:'grey'}}>(11 072)</Text>
      </View>

    </View>

 

    
<View style={{marginLeft:wp('20%') , marginTop:8}}>
        <Text style={{color:'grey'}}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:15 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>






<TouchableOpacity style={{flexDirection:'row'}}>

<View style={{width:'100%' , height:80  , marginTop:0 , flexDirection:'row'}}>

  <View style={{width:56 , height:56 , backgroundColor:'#DDDDDD' , borderRadius:100 , marginLeft:20}}>
  <Image style={{width:17 , height:17}} source={require('../../assets/Dot1.png')}/>



  
  </View>

  <View style={{marginLeft:14 , marginTop:6 , width:122 , height:58 ,}}>
      <Text style={{fontSize:16 , color:'black'  }}>Leon P</Text>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:7 , marginLeft:2 ,  width:15 , height:15}} source={require('../../assets/Rate.png')}/>
      <Text style={{marginLeft:10 , marginTop:5 , marginTop:5}}>4.5</Text>
      <Text style={{marginLeft:10 , marginTop:5 , color:'grey'}}>(11 072)</Text>
      </View>

    </View>

 

    
<View style={{marginLeft:wp('20%') , marginTop:8}}>
        <Text style={{color:'grey'}}>Starting from</Text>
        <Text style={{color:'black' , marginTop:5 , fontSize:15 , fontWeight:'bold'}}>$987.00 /hr</Text>
      </View>

</View>

</TouchableOpacity>










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