import React , {useState , useEffect} from 'react' ;
import {View,
        TouchableOpacity , 
        Image , 
        Button , 
        ScrollView ,
        StyleSheet
        } from 'react-native' ;
 import {widthPercentageToDP as wp,
         heightPercentageToDP as hp
        } from 'react-native-responsive-screen';

export default function ACD ({navigation}) {
    return (

        <View style={styles.container}>
    <ScrollView>
       
      

            <View style={{flexDirection:'row' , marginTop:120}}>

            <View style={{width:wp('40%') , height:56 , borderWidth:1 , borderColor:'grey' , marginTop:50 }}>
            </View>
            <View style={{width:95 , height:95 , backgroundColor:'grey' , borderRadius:100  , left:0 , right:0 , Bottom:0  , }}>

            <View style={{width:wp('60%') , height:56 , borderWidth:1 , borderColor:'grey' , marginTop:50 , }}>

</View>

     </View>

       
        </View>
    </ScrollView>
        </View>

    )

}
const styles = StyleSheet.create({
    container :{
        flex : 1 ,
        backgroundColor:'#DDDDD' ,
    }
})