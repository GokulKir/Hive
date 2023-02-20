import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Button,
  TextInput,
  Dimensions,
} from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('window')

export default function SuccessLogin({ navigation }) {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Image style={{ width: '30%', height: '30%',resizeMode:"contain"}} source={require("../../assets/successimage.gif")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    flexDirection:'row',
    alignItems:'center'
  },
})
