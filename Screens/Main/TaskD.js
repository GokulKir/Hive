import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native'
import React from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function TaskD ({navigation}) {
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
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            style={{width: 30, height: 30, marginLeft: 20, marginTop: 16}}
            source={require('../../assets/Side.png')}
          />
        </TouchableOpacity>

        <View style={{marginLeft: 217, marginTop: 21, flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              style={{width: 22, height: 22}}
              source={require('../../assets/LoveG.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 20, height: 22, marginLeft: 20}}
              source={require('../../assets/ShareG.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <ScrollView
          horizontal
          disableIntervalMomentum={true}
          showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 354,
                height: 193,
                backgroundColor: '#DDDDDD',
                borderRadius: 10,
              }}></View>

            <View
              style={{
                width: 354,
                height: 193,
                backgroundColor: '#DDDDDD',
                borderRadius: 10,
                marginLeft: 10,
              }}></View>

            <View
              style={{
                width: 354,
                height: 193,
                backgroundColor: '#DDDDDD',
                borderRadius: 10,
                marginLeft: 10,
              }}></View>
          </View>
        </ScrollView>

        <View
          style={{
            width: '100%',
            height: 66,
            backgroundColor: '#ffffff',
            elevation: 5,
            borderWidth: 0.8,
            borderColor: '#DDDDDD',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#DDDDDD',
                marginLeft: 20,
                marginTop: 8,
                borderRadius: 100,
                flexDirection: 'row',
              }}>
              <Image
                style={{width: 17, height: 17}}
                source={require('../../assets/Dot.png')}
              />
              <View
                style={{
                  width: 156,
                  height: 56,
                  backgroundColor: '#fff',
                  marginLeft: 40,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '700',
                    marginLeft: 5,
                  }}>
                  Kellyiam Walker
                </Text>
                <Image
                  style={{width: 104, height: 18, marginLeft: 2, marginTop: 6}}
                  source={require('../../assets/Rating.png')}
                />
              </View>

              <View>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 22,
                      height: 22,
                      marginLeft: 62,
                      marginTop: 12,
                    }}
                    source={require('../../assets/Message.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View>
          <Image
            style={{marginLeft: 30, marginTop: 20, width: 74, height: 23}}
            source={require('../../assets/Label1.png')}
          />
        </View>

        <View>
          <Text
            style={{
              color: '#1DA1F2',
              fontSize: 12,
              marginLeft: 34,
              marginTop: 10,
            }}>
            Programming, WordPress, WP setup
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              marginLeft: 34,
              marginTop: 10,
            }}>
            I will write rest APi in react native
          </Text>

          <Image
            style={{width: 160, height: 24, marginLeft: 30, marginTop: 10}}
            source={require('../../assets/RateT.png')}
          />
        </View>

        <View style={{alignItems: 'center', marginTop: 10}}>
          <Image
            style={{width: '85%', height: 279, marginTop: 30}}
            source={require('../../assets/Ips.png')}
          />
        </View>

        <View>
          <Text
            style={{
              color: 'black',
              marginLeft: 30,
              marginTop: 30,
              fontSize: 18,
              fontWeight: '600',
            }}>
            What more can expect
          </Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text style={{fontSize: 14, marginRight: 10}}>
            Ativero eos et accusamus et iustoan odiosimos
          </Text>

          <Text style={{fontSize: 14, marginRight: 10, marginTop: 3}}>
            ducimus quites blanditiis praesentium uptatum
          </Text>

          <Text style={{fontSize: 14, marginRight: 10, marginTop: 3}}>
            deleniti atque corrupti quos dolores et quastan
          </Text>

          <Text style={{fontSize: 14, marginRight: 100, marginTop: 3}}>
            molestias excepturi occaecatie.
          </Text>
        </View>

        <View style={{alignItems: 'center'}}></View>

        <View>
          <Image
            style={{width: '80%', height: 149, marginTop: 10, marginLeft: 25}}
            source={require('../../assets/Let2.png')}
          />
        </View>

        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text style={{fontSize: 14, marginRight: 10}}>
            Ativero eos et accusamus et iustoan odiosimos{' '}
          </Text>

          <Text style={{fontSize: 14, marginRight: 10, marginTop: 3}}>
            ducimus quites blanditiis praesentium uptatum
          </Text>

          <Text style={{fontSize: 14, marginRight: 10, marginTop: 3}}>
            deleniti atque corrupti quos dolores et quastan
          </Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, marginRight: 23, marginTop: 3}}>
              molestias excepturi occaecatie.
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  marginRight: 10,
                  marginTop: 3,
                  color: '#1DA1F2',
                }}>
                show less
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 300,
            backgroundColor: '#fff',
            marginTop: 20,
            borderBottomWidth: 0.7,
            borderBottomColor: 'grey',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 56,
                height: 56,
                backgroundColor: '#DDDDDD',
                marginLeft: 20,
                marginTop: 30,
                borderRadius: 5,
              }}></View>

            <View style={{marginTop: 30, marginLeft: 20}}>
              <Text style={{color: 'black'}}>Starts from</Text>
              <Text style={{color: '#C89D67', fontSize: 16, fontWeight: '700'}}>
                $250.00
              </Text>
            </View>
          </View>

          <View style={{alignItems: 'center', marginTop: 15}}>
            <TouchableOpacity
              style={{
                width: '90%',
                height: 45,
                backgroundColor: '#C89D67',
                borderRadius: 5,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#fff', fontSize: 16}}>
                  Hire me for your task
                </Text>
                <Image
                  style={{width: 15, height: 15, marginLeft: 10}}
                  source={require('../../assets/SideR.png')}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', marginTop: 30}}>
            <Image
              style={{width: '100%', height: 98}}
              source={require('../../assets/Stats.png')}
            />
          </View>
        </View>

        <View style={{marginLeft: 30, marginTop: 30}}>
          <Text style={{color: 'black', fontSize: 17, fontWeight: '700'}}>
            Common FAQs
          </Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 50}}>
          <View
            style={{
              width: '90%',
              height: 216,
              borderWidth: 0.6,
              elevation: 1,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 20,
                marginTop: 30,
              }}>
              Apply these 6 secret techniques to
            </Text>
            <TouchableOpacity>
              <Image
                style={{width: 22, height: 10, marginLeft: '88%'}}
                source={require('../../assets/Minuse.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 20,
                marginTop: 10,
              }}>
              improve WordPress development
            </Text>
            <Text style={{marginLeft: 20, marginTop: 20, fontSize: 15}}>
              Ativero eos et accusamus iustoan osimos
            </Text>
            <Text style={{marginLeft: 20, marginTop: 5, fontSize: 15}}>
              ducimus quites blanditiis praese eisntium
            </Text>
            <Text style={{marginLeft: 20, marginTop: 10, fontSize: 15}}>
              uptatum deleniti atque corrupti.
            </Text>
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 10}}>
          <View
            style={{
              width: '90%',
              height: 65,
              borderWidth: 0.6,
              elevation: 1,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  fontSize: 15,
                  marginRight: 40,
                }}>
                6 enticing ways to improve skills
              </Text>
              <TouchableOpacity>
                <Image
                  style={{width: 15, height: 16}}
                  source={require('../../assets/Plus.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 10}}>
          <View
            style={{
              width: '90%',
              height: 65,
              borderWidth: 0.6,
              elevation: 1,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  fontSize: 15,
                  marginRight: 30,
                }}>
                Top 80 quotes on WP development
              </Text>
              <TouchableOpacity>
                <Image
                  style={{width: 15, height: 16, marginRight: 10}}
                  source={require('../../assets/Plus.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 10}}>
          <View
            style={{
              width: '90%',
              height: 85,
              borderWidth: 0.6,
              elevation: 1,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  fontSize: 15,
                  marginRight: 30,
                }}>
                Top 80 quotes on WP development
              </Text>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 15,
                    height: 16,
                    marginRight: 10,
                    marginTop: 15,
                  }}
                  source={require('../../assets/Plus.png')}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: 15,
                marginRight: 0,
                marginLeft: 20,
              }}>
              look amazing in 6 days
            </Text>
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 10}}>
          <View
            style={{
              width: '90%',
              height: 65,
              borderWidth: 0.6,
              elevation: 1,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  fontSize: 15,
                  marginRight: 30,
                  marginRight: 60,
                }}>
                Is software projects a scam?
              </Text>
              <TouchableOpacity>
                <Image
                  style={{width: 15, height: 16}}
                  source={require('../../assets/Plus.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{height: 256}}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
})
