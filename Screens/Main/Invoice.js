import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
  Text,
  Image,
} from 'react-native'

export default function Invoice ({navigation}) {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 96,
            backgroundColor: '#E9D8C2',
            alignItems: 'center',
          }}>
          <Text style={{color: '#785E3E', marginTop: 20}}>
            Invoice details are only viewable on web screens,
          </Text>
          <Text style={{color: '#785E3E', marginTop: 10}}>
            Iyou can download to view on your device
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              height: 313,
              backgroundColor: '#fff',
              marginTop: 25,
              borderRadius: 10,
              elevation: 2,
            }}>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Invoice #{' '}
                </Text>

                <Text style={{color: 'black', marginTop: 15}}>9232734</Text>
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
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Client name{' '}
                </Text>

                <Text style={{color: '#1DA1F2', marginTop: 15}}>
                  Robert Fox
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
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Invoice date
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
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Amount{' '}
                </Text>

                <Text
                  style={{color: 'black', marginTop: 15, fontWeight: 'bold'}}>
                  $450.54
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
              <TouchableOpacity
                style={{alignItems: 'center', flexDirection: 'row'}}>
                <Text style={{color: '#1DA1F2', marginTop: 16}}>
                  Download now
                </Text>
                <Image
                  style={{width: 13, height: 13, marginTop: 16, marginLeft: 10}}
                  source={require('../../assets/Download.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              height: 313,
              backgroundColor: '#fff',
              marginTop: 25,
              borderRadius: 10,
              elevation: 2,
            }}>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Invoice #{' '}
                </Text>

                <Text style={{color: 'black', marginTop: 15}}>9232734</Text>
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
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Client name{' '}
                </Text>

                <Text style={{color: '#1DA1F2', marginTop: 15}}>
                  Robert Fox
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
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Invoice date
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
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Amount{' '}
                </Text>

                <Text
                  style={{color: 'black', marginTop: 15, fontWeight: 'bold'}}>
                  $450.54
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
              <TouchableOpacity
                style={{alignItems: 'center', flexDirection: 'row'}}>
                <Text style={{color: '#1DA1F2', marginTop: 16}}>
                  Download now
                </Text>
                <Image
                  style={{width: 13, height: 13, marginTop: 16, marginLeft: 10}}
                  source={require('../../assets/Download.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              height: 313,
              backgroundColor: '#fff',
              marginTop: 25,
              borderRadius: 10,
              elevation: 2,
            }}>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Invoice #{' '}
                </Text>

                <Text style={{color: 'black', marginTop: 15}}>9232734</Text>
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
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Client name{' '}
                </Text>

                <Text style={{color: '#1DA1F2', marginTop: 15}}>
                  Robert Fox
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
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Invoice date
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
                <Text style={{color: 'black', marginTop: 20, marginRight: 130}}>
                  Amount{' '}
                </Text>

                <Text
                  style={{color: 'black', marginTop: 15, fontWeight: 'bold'}}>
                  $450.54
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
              <TouchableOpacity
                style={{alignItems: 'center', flexDirection: 'row'}}>
                <Text style={{color: '#1DA1F2', marginTop: 16}}>
                  Download now
                </Text>
                <Image
                  style={{width: 13, height: 13, marginTop: 16, marginLeft: 10}}
                  source={require('../../assets/Download.png')}
                />
              </TouchableOpacity>
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
    backgroundColor: '#fff',
  },
})
