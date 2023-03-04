import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native'
import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import { LANGUAGES, SKILLS } from '../../GraphQl/Query';
import { useManualQuery, useQuery } from 'graphql-hooks';
import CheckBox from '@react-native-community/checkbox'

export default function Filter({ navigation }) {
  const [skillsList, setSkillsList] = useState([])
  const [languagesList, setLanguagesList] = useState([])
  const [isSelected, setSelection] = useState(false)
  const [isSelected1, setSelection1] = useState(false)
  const [isSelected2, setSelection2] = useState(false)
  const [isSelected3, setSelection3] = useState(false)
  const [isSelected4, setSelection4] = useState(false)
  const [isSelected5, setSelection5] = useState(false)
  const [isSelected6, setSelection6] = useState(false)
  const [isSelected7, setSelection7] = useState(false)
  const [isSelected8, setSelection8] = useState(false)
  const [isSelected9, setSelection9] = useState(false)
  const [isSelected10, setSelection10] = useState(false)


  const { loading, error, data: skills } = useQuery(SKILLS)
  const { data: languages } = useQuery(LANGUAGES)

  const bottomSheetRef = useRef(null)
  const snapPoints = useMemo(() => ['55%', '188%'], [])

  useEffect(() => {
    setSkillsList(skills?.skillList?.skills)
    setLanguagesList(languages?.listLanguages?.languages)
  }, [languages, skills])

  //callbacks

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                width: '95%',
                flex: 1,
                backgroundColor: '#fff',
                marginTop: 20,
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: '100%',
                  height: 55,
                  backgroundColor: '#F7F7F7',
                  flexDirection: 'row',
                  borderRadius: 10,
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.7,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    marginLeft: 50,
                    marginTop: 10,
                  }}>
                  Narrow your search
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginTop: 16, marginLeft: 98 }}>
                  <Image
                    style={{ width: 14, height: 14 }}
                    source={require('../../assets/NOT.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: 'center', marginTop: 40 }}>
                <View
                  style={{
                    width: '90%',
                    height: 46,
                    borderBottomWidth: 0.7,
                    borderBottomColor: 'black',
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      width: 22,
                      height: 22,
                      marginTop: 10,
                      marginLeft: 10,
                    }}
                    source={require('../../assets/Search.png')}
                  />
                  <TextInput
                    style={{
                      width: '100%',
                      height: '100%',
                      paddingLeft: 10,
                      fontSize: 16,
                      color: 'black',
                    }}
                    placeholder='What is your looking for ?'
                  />
                </View>
              </View>


              <View style={{ marginTop: 30, marginLeft: 20 }}>
                <Text style={{ color: 'black', fontSize: 17 }}>Skills</Text>
              </View>
              {skillsList?.map((item, index) => {
                return (
                  <View style={{ flexDirection: 'row', left: 20 }}>
                    <CheckBox
                      disabled={false}
                    // value={isSelected}
                    // onValueChange={newValue => setSelection(newValue)}
                    />

                    <Text
                      style={{
                        marginTop: 4,
                        marginLeft: 8,
                        fontSize: 17,
                        color: 'black',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                )
              })}

              <View style={{ marginTop: 30, marginLeft: 20 }}>
                <Text style={{ color: 'black', fontSize: 17 }}>Language</Text>
              </View>
              {languagesList?.map((item, index) => {
                return (
                  <View
                    style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20 }}>
                    <CheckBox
                      disabled={false}
                    // value={isSelected7}
                    // onValueChange={newValue => setSelection7(newValue)}
                    />

                    <Text
                      style={{
                        marginTop: 4,
                        marginLeft: 8,
                        fontSize: 17,
                        color: 'black',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                )
              }
              )}

              
              {/* <View style={{ marginTop: 30, marginLeft: 20 }}>
                <Text style={{ color: 'black', fontSize: 17 }}>Location</Text>
              </View>

              <View style={{ alignItems: 'center' }}>
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
                    style={{ width: '90%', fontSize: 15, fontWeight: 'bold' }}
                    placeholder='Choose country'
                  />
                  <Image
                    style={{ marginTop: 25, marginRight: 45 }}
                    source={require('../../assets/Bar.png')}
                  />
                </View>
              </View> */}

              {/* <View style={{ alignItems: 'center', marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={{
                      width: 156,
                      height: 56,
                      backgroundColor: '#fff',
                      marginTop: 20,
                      marginLeft: 20,
                    }}>
                    <Text style={{ color: 'black', fontWeight: 'normal' }}>
                      Min Price
                    </Text>
                    <Text>$500</Text>
                  </View>

                  <View
                    style={{
                      width: 72,
                      height: 56,
                      backgroundColor: '#fff',
                      marginTop: 20,
                      marginLeft: 80,
                    }}>
                    <Text style={{ color: 'black', fontWeight: 'normal' }}>
                      Min Price
                    </Text>
                    <Text>$500</Text>
                  </View>
                </View>
              </View> */}

              {/* <View style={{ alignItems: 'center', marginTop: 20 }}>
                <ImageBackground
                  style={{ width: 264, height: 20, marginLeft: 0 }}
                  source={require('../../assets/Slider.png')}></ImageBackground>
              </View> */}

              <View style={{ alignItems: 'center', marginTop: 30 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('HomeScreen')}
                  style={{
                    width: '90%',
                    height: 45,
                    backgroundColor: '#C89D67',
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>
                    Search now
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('HomeScreen')}
                  style={{
                    width: '90%',
                    height: 45,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <Text
                    style={{
                      color: 'grey',
                      fontWeight: 'normal',
                      fontSize: 17,
                      marginTop: 10,
                    }}>
                    Clear all filters
                  </Text>
                </TouchableOpacity>

                <View style={{ height: 56 }}></View>
              </View>
              </View>
            </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
})
