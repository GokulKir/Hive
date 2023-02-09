import { StyleSheet, Text, View , ScrollView , Image , TouchableOpacity , TextInput , Dimensions , Button } from 'react-native'
import React,{useCallback, useMemo, useRef , useState} from 'react' ;
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
const {height , width} = Dimensions.get('window')

export default function LoginB({navigation}) {
    const [isSelected, setSelection] = useState(false)
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
  
    const bottomSheetRef = useRef(null) 
  const snapPoints = useMemo(() => ['155%', '68%'], []);

  //callbacks

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);

  }, []);
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 530,
      }}
    >
      <View style={{}}>
      
 <View style={{marginLeft:20 , marginTop:5 , flexDirection:'row'}}>
    <Text style={{color:'black' , fontSize:width * 0.05 , fontWeight:'700'}}>Login now</Text>

       <TouchableOpacity>
    <Image style={{width:19 , height:19  , marginLeft:width * 0.5 , marginTop:5}} source={require('../../assets/ReM.png')}/>
    </TouchableOpacity>
  </View>
  <View style={{alignItems:'center'}}>
  <View style={{  borderWidth:0.3 , borderColor:'grey' , width:355 , marginTop:20}}>
  </View>
  </View>
    </View>

    <View style={{alignItems:'center' , marginTop:50}}>

    <View style={{alignItems:'center' , width:width * 0.90 , height:45 , borderBottomColor: 'grey' , borderBottomWidth:0.7}}>

<TextInput onChangeText={setEmail} style={{width:'100%' , height:"100%" , fontWeight:'700' , color:'grey' ,  color:'black' , fontSize:15 }}  placeholder="Enter email or username" />

</View>

<View style={{alignItems:'center' , width:width * 0.90 , height:45 , borderBottomColor:   'grey' , borderBottomWidth:0.7 , marginTop:40}}>

  <TextInput onChangeText={setPassword} style={{width:'100%' , height:"100%" , fontWeight:'700' , color:'black' , fontSize:15 }}  placeholder="Enter password" />

</View>

    </View>


  

    <View style={{alignItems:'center' , marginTop:25}}>

<TouchableOpacity onPress={() => SignIn()} style={{width:width * 0.90 , height:45 , backgroundColor:'#C89D67' , borderRadius:5 , alignItems:'center' , justifyContent:'center'}}>

  <Text style={{color:'#fff' , fontSize:15 , fontWeight:'600'}}>Login now</Text>

</TouchableOpacity>



    </View>

    <View style={{alignItems:'center' , marginTop:30}}>
        <View style={{flexDirection:'row' }}>

            <View style={{borderWidth:0.4 , borderColor:'grey' , width:'40%' , height:1 , marginTop:10 , marginRight:8}}>

            </View>

            <Text style={{fontSize:17 , fontWeight:'600'}}>OR</Text>

            <View style={{borderWidth:0.4 , borderColor:'grey' , width:'40%' , height:1 , marginTop:10  , marginLeft:8}}>

            </View>

        </View>
        </View>
    
        <View style={{alignItems:'center' , marginTop:30}}>

<TouchableOpacity style={{width : width - 38 , height:45 , backgroundColor:'#fff' , borderColor:'grey' , borderWidth:0.4 , alignItems:'center' , justifyContent:'center' , borderRadius:2 , flexDirection:'row'}}>
<Image style={{width:28 , height:28}} source={require('../../assets/Google.png')}/>
<Text style={{marginTop:0 , fontSize:17 , fontWeight:'bold' , color:'black' , marginLeft:15}}>Login with Google</Text>
</TouchableOpacity>

</View>

<View style={{alignItems:'center'}}>
        <View style={{width:'100%' , height:45 , marginTop:19  }}>
 

          <View style={{flexDirection:'row'}}>
    
     <TouchableOpacity onPress={() => navigation.navigate('SignupB')}>
     <Text style={{color:'#C89D67' , fontSize:width * 0.042 , marginTop:25 , fontWeight:'bold' , marginLeft:width * 0.033}} >Join us today</Text>
     </TouchableOpacity>


     <TouchableOpacity onPress={() => navigation.navigate('Password')}>
    <Text style={{color:'grey' , fontSize:width * 0.042 , marginLeft:width * 0.313 , marginTop:25 , fontWeight:'bold'}} >Last password ?</Text>
</TouchableOpacity>

          </View>

        </View>

        </View>

    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'grey',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(0)}
        /> */}
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
}
