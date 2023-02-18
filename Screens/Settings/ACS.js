import React, {useState} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Switch,
  Image,
  TextInput,
} from 'react-native'

export default function ACS ({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 299,
            backgroundColor: '#fff',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <View style={{marginLeft: 30, marginTop: 20}}>
            <Text style={{color: 'black', fontWeight: '700', fontSize: 16}}>
              Lost password?
            </Text>
          </View>

          <View
            style={{alignItems: 'center', marginTop: 30, flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                width: '90%',
                height: 75,
                backgroundColor: '#DDDDDD',
                borderRadius: 10,
                borderWidth: 0.6,
                borderColor: 'grey',
                marginLeft: 15,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: 25,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'normal',
                    marginLeft: 40,
                    color: 'black',
                  }}>
                  Disable account temporarily
                </Text>
                <Switch
                  style={{marginLeft: 20}}
                  trackColor={{false: '#767577', true: 'grey'}}
                  thumbColor={isEnabled ? '#0bba1a' : '#f4f3f4'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', marginTop: 0}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ACS')}
              style={{
                width: 324,
                height: 40,
                backgroundColor: '#C89D67',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
              }}>
              <Text style={{fontSize: 17, color: '#fff', fontWeight: 'normal'}}>
                Save & update
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 12, marginRight: 46, marginLeft: 20}}>
            <Text>Click “Save &C Update” to update the </Text>
            <Text style={{marginTop: 9}}>changes</Text>
          </View>

          <View
            style={{
              borderColor: 'grey',
              borderWidth: 0.7,
              width: '100%',
              marginTop: 160,
            }}></View>
        </View>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <View
            style={{
              width: '100%',
              height: 556,
              backgroundColor: '#fff',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            <View style={{marginLeft: 30, marginTop: 20}}>
              <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold'}}>
                Deactivate account
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  marginTop: 20,
                  fontWeight: '500',
                }}>
                Choose reason
              </Text>

              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.8,
                  width: '90%',
                  marginTop: 20,
                  paddingTop: 20,
                  flexDirection: 'row',
                }}>
                <TextInput
                  style={{width: '90%', fontSize: 15}}
                  placeholder='Why you want to leave?'
                />
                <Image
                  style={{marginTop: 25, marginRight: 45}}
                  source={require('../../assets/Bar.png')}
                />
              </View>

              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.8,
                  width: '90%',
                  marginTop: 1,
                  paddingTop: 20,
                  flexDirection: 'row',
                  height: 180,
                }}>
                <TextInput
                  style={{width: '90%', fontSize: 15}}
                  placeholder='Add more details'
                />
              </View>

              <View style={{alignItems: 'center', marginTop: 30}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ACS')}
                  style={{
                    width: 324,
                    height: 40,
                    backgroundColor: 'red',
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                    marginRight: 26,
                  }}>
                  <Text
                    style={{fontSize: 17, color: '#fff', fontWeight: 'normal'}}>
                    Deactivate now
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{marginTop: 9, marginRight: 46, marginLeft: 1}}>
                <Text>Click “deactivate now” to disable your </Text>

                <Text style={{marginTop: 7}}>account permanently</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
})
