import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import React from 'react'

export default function Payout ({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 61,
          backgroundColor: '#F7F7F7',
          elevation: 5,
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
          <Image
            style={{width: 30, height: 30, marginLeft: 20, marginTop: 16}}
            source={require('../../assets/Side.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'balck',
            fontSize: 18,
            marginLeft: 65,
            marginTop: 19,
            color: '#1C1C1C',
          }}>
          Payouts history
        </Text>

        <View
          style={{
            width: 43,
            height: 43,
            backgroundColor: '#DDDDDD',
            marginLeft: 50,
            marginTop: 10,
            borderRadius: 100,
          }}></View>
      </View>

      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              height: 243,
              backgroundColor: '#fff',
              marginTop: 25,
              borderRadius: 10,
              elevation: 2,
            }}>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Reference #{' '}
                </Text>

                <Text style={{color: 'black', marginTop: 22}}>6Epv9uWR</Text>
              </View>

              <View
                style={{
                  width: '90%',
                  borderColor: '#DDDDDD',
                  borderWidth: 0.7,
                  marginTop: 20,
                }}></View>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 182}}>
                  Method{' '}
                </Text>

                <Text style={{color: '#1DA1F2', marginTop: 15}}> Paypal</Text>
              </View>

              <View
                style={{
                  width: '90%',
                  borderColor: '#DDDDDD',
                  borderWidth: 0.5,
                  marginTop: 20,
                }}></View>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 170}}>
                  Date
                </Text>

                <Text
                  style={{color: 'black', marginTop: 15, fontWeight: 'bold'}}>
                  Feb 02, 2020
                </Text>
              </View>

              <View
                style={{
                  width: '90%',
                  borderColor: '#DDDDDD',
                  borderWidth: 0.5,
                  marginTop: 20,
                }}></View>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 180}}>
                  Amount{' '}
                </Text>

                <Text
                  style={{color: 'black', marginTop: 15, fontWeight: 'bold'}}>
                  $450.54
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              height: 243,
              backgroundColor: '#fff',
              marginTop: 25,
              borderRadius: 10,
              elevation: 2,
            }}>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Reference #{' '}
                </Text>

                <Text style={{color: 'black', marginTop: 22}}>6Epv9uWR</Text>
              </View>

              <View
                style={{
                  width: '90%',
                  borderColor: '#DDDDDD',
                  borderWidth: 0.7,
                  marginTop: 20,
                }}></View>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 172}}>
                  Method{' '}
                </Text>

                <Text style={{color: '#1DA1F2', marginTop: 15}}> Payoneer</Text>
              </View>

              <View
                style={{
                  width: '90%',
                  borderColor: '#DDDDDD',
                  borderWidth: 0.5,
                  marginTop: 20,
                }}></View>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 170}}>
                  Date
                </Text>

                <Text
                  style={{color: 'black', marginTop: 15, fontWeight: 'bold'}}>
                  Feb 02, 2020
                </Text>
              </View>

              <View
                style={{
                  width: '90%',
                  borderColor: '#DDDDDD',
                  borderWidth: 0.5,
                  marginTop: 20,
                }}></View>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 180}}>
                  Amount{' '}
                </Text>

                <Text
                  style={{color: 'black', marginTop: 15, fontWeight: 'bold'}}>
                  $450.54
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              height: 243,
              backgroundColor: '#fff',
              marginTop: 25,
              borderRadius: 10,
              elevation: 2,
            }}>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Reference #{' '}
                </Text>

                <Text style={{color: 'black', marginTop: 22}}>6Epv9uWR</Text>
              </View>

              <View
                style={{
                  width: '90%',
                  borderColor: '#DDDDDD',
                  borderWidth: 0.7,
                  marginTop: 20,
                }}></View>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 148}}>
                  Method{' '}
                </Text>

                <Text style={{color: '#1DA1F2', marginTop: 15}}>
                  Bank transfer
                </Text>
              </View>

              <View
                style={{
                  width: '90%',
                  borderColor: '#DDDDDD',
                  borderWidth: 0.5,
                  marginTop: 20,
                }}></View>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 170}}>
                  Date
                </Text>

                <Text
                  style={{color: 'black', marginTop: 15, fontWeight: 'bold'}}>
                  Feb 02, 2020
                </Text>
              </View>

              <View
                style={{
                  width: '90%',
                  borderColor: '#DDDDDD',
                  borderWidth: 0.5,
                  marginTop: 20,
                }}></View>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 180}}>
                  Amount{' '}
                </Text>

                <Text
                  style={{color: 'black', marginTop: 15, fontWeight: 'bold'}}>
                  $450.54
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{marginTop: 30}}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
