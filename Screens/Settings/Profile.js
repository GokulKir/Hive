// import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native'
// import React from 'react'
// import {useForm, Controller} from 'react-hook-form'

// const { height, width } = Dimensions.get('window');

// export default function Profile({ navigation }) {

//       const {
//             control, 
//             handleSubmit, 
//             formState: {errors, isValid}
//           } = useForm({mode: 'onBlur'})

//       return (
//             <View style={styles.container}>
//                   <ScrollView>
//                         <View style={{ width: '100%', height: "68%", backgroundColor: '#fff', alignItems: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
//                               <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.8, width: '90%', marginTop: 30, paddingTop: 20 }} >
//                                     <TextInput style={{ width: '100%', fontSize: 15, color: 'grey', fontWeight: 'bold' }} placeholder="Enter first name" />
//                               </View>
//                               <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.8, width: '90%', marginTop: 20, paddingTop: 20 }} >
//                                     <TextInput style={{ width: '100%', fontSize: 15, color: 'grey', fontWeight: 'bold' }} placeholder="Enter last name" />
//                               </View>
//                               <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.8, width: '90%', marginTop: 20, paddingTop: 20 }} >
//                                     <TextInput style={{ width: '100%', fontSize: 15, color: 'grey', fontWeight: 'bold' }} placeholder="Contact number" />
//                               </View>
//                               <View style={{ marginRight: 264, marginTop: 30 }}>
//                                     <Text style={{ fontSize: 16, fontWeight: '700' }}>Country</Text>
//                               </View>
//                               <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.8, width: '90%', marginTop: 20, paddingTop: 20, flexDirection: 'row' }} >
//                                     <TextInput style={{ width: '90%', fontSize: 15, color: 'grey', fontWeight: 'bold' }} placeholder="Select country" />
//                                     <Image style={{ marginTop: 25, marginRight: 45 }} source={require('../../assets/Bar.png')} />
//                               </View>
//                               <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.8, width: '90%', marginTop: 20, paddingTop: 20 }} >
//                                     <TextInput style={{ width: '100%', fontSize: 15, color: 'grey', fontWeight: 'bold' }} placeholder="Add zipcode" />
//                               </View>
//                               <View style={{ alignItems: 'center' }}>
//                                     <TouchableOpacity style={{ width: 324, height: 40, backgroundColor: '#C89D67', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
//                                           <Text style={{ fontSize: 17, color: '#fff', fontWeight: 'normal' }}>Save & update</Text>
//                                     </TouchableOpacity>
//                               </View>
//                               <View style={{ marginTop: 9, marginRight: 86 }}>
//                                     <Text style={{ fontSize: width * 0.038, }}>Click “Save &C Update” to update the </Text>
//                                     <Text style={{ fontSize: 15, marginTop: 4 }}>changes</Text>
//                               </View>
//                               <View style={{ width: '100%', height: 289, backgroundColor: '#fff', marginTop: 40, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
//                                     <View style={{ width: '100%', height: 40, backgroundColor: '#fff', flexDirection: 'row' }}>
//                                           <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 18, marginLeft: 30, marginTop: 20 }}>Education</Text>
//                                           <Text style={{ color: '#1DA1F2', fontWeight: 'normal', fontSize: 16, marginLeft: 160, marginTop: 20 }}>Add new</Text>
//                                     </View>
//                                     <View style={{ borderWidth: 0.5, borderColor: 'grey', width: '100%', marginTop: 30 }}>
//                                     </View>
//                                     <View style={{ marginTop: 20 }}>
//                                           <Text style={{ marginLeft: 20, fontSize: 13 }}>Amentotech - December ,2 2015 - December ,2 2018</Text>
//                                           <Text style={{ marginLeft: 20, fontSize: 16, marginTop: 10, color: 'black', fontWeight: "bold" }}>BCS - Bachelor ComputerScience</Text>
//                                     </View>
//                                     <View style={{ alignItems: 'center' }}>
//                                           <TouchableOpacity onPress={() => navigation.navigate('Edit')} style={{ width: 324, height: 40, backgroundColor: '#C89D67', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
//                                                 <Text style={{ fontSize: 17, color: '#fff', fontWeight: 'normal' }}>Edit</Text>
//                                           </TouchableOpacity>
//                                     </View>
//                                     <View style={{ alignItems: 'center' }}>
//                                           <TouchableOpacity>
//                                                 <Text style={{ marginTop: 20 }}>Remove</Text>
//                                           </TouchableOpacity>
//                                     </View>
//                               </View>
//                         </View>
//                   </ScrollView>
//             </View>
//       )
// }

// const styles = StyleSheet.create({
//       container: {
//             flex: 1,
//             backgroundColor: '#DDDDDD'
//       }
// })


// const MonthAndYear = (props) => {
//       const navigation = useNavigation();
//       const { route } = props;
//       const [query, setQuery] = useState('');
//       const [goBack, setGoback] = useState(true);


//       const { OpportunityDateFromFilter } = route.params;

//       const getMonthAndYear = () => {

//             const resultList = [];
//             const date = new Date("January 01, 2018");
//             const endDate = new Date();
//             const monthNameList = [
//                   "January", "February", "March",
//                   "April", "May", "June",
//                   "July", "August", "September",
//                   "October", "November", "December"
//             ];

//             while (date <= endDate) {
//                   const stringDate = {
//                         month: monthNameList[date.getMonth()],
//                         year: date.getFullYear()
//                   };
//                   resultList.push(stringDate);
//                   date.setMonth(date.getMonth() + 1);
//             }
//             return resultList.reverse();

//       }


import React, { useState, useEffect, useContext, Component, useRef } from 'react'
import { SafeAreaView, Button, Text, ScrollView, View, TouchableOpacity, TextInput as CommentBox, ActivityIndicator } from 'react-native'
import { useForm, Controller, } from 'react-hook-form'
import { TextInput, Snackbar, Divider } from 'react-native-paper';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list'
import { LANGUAGES, SKILLS, CATEGORY_LIST, PROFILE_DETAILS } from '../../GraphQl/Query';
import { UPDATE_PROFILE, UPDATE_EDUCATION } from '../../GraphQl/Mutation';
import { useManualQuery, useQuery, useMutation } from 'graphql-hooks';
import { Context } from '../Store'
import MultiSelect from 'react-native-multiple-select';

export default function Profile({ navigation }) {

      const [state, dispatch] = useContext(Context);
      const {
            control,
            handleSubmit,
            setValue,
            getValues,
            formState: { errors, isValid }
      } = useForm()

      const [selectedGender, setSelectedGender] = useState({ key: '1', value: 'Male' });
      const [selectedCountry, setSelectedCountry] = useState({ key: '1', value: 'India' });
      const [skillsList, setSkillsList] = useState([])
      const [refresh, setRefresh] = useState(true)
      const [snackBarMsg, setSnackBarMsg] = useState("")
      const [snackbarVisible, setSnackbarVisible] = useState(false)
      const [isUpdating, setIsUpdating] = useState(false)
      const [updateProfile] = useMutation(UPDATE_PROFILE)
      const [updateEducation] = useMutation(UPDATE_EDUCATION)
      const [selected, setSelected] = React.useState([]);
      const multiSelect = useRef()
      // const [userDetails, setUse] = useState([])
      const languagesList = []
      const categoryList = []

      const items = [{
            id: '92iijs7yta',
            name: 'Ondo'
      }, {
            id: 'a0s0a8ssbsd',
            name: 'Ogun'
      }, {
            id: '16hbajsabsd',
            name: 'Calabar'
      }, {
            id: 'nahs75a5sg',
            name: 'Lagos'
      }, {
            id: '667atsas',
            name: 'Maiduguri'
      }, {
            id: 'hsyasajs',
            name: 'Anambra'
      }, {
            id: 'djsjudksjd',
            name: 'Benue'
      }, {
            id: 'sdhyaysdj',
            name: 'Kaduna'
      }, {
            id: 'suudydjsjd',
            name: 'Abuja'
      }
      ];


      // const { loading, error, data: skills } = useQuery(SKILLS)
      const { data: languages, } = useQuery(LANGUAGES)

      const [fetch, { data: details }] = useManualQuery(PROFILE_DETAILS)

      const { data: categories } = useQuery(CATEGORY_LIST, {
            variables: {
                  // "email": "ajnash.aju323@gmail.com",
                  // "password": "12345678",
                  "pageNumber": 1,
                  "limit": 8
            }
      })

      useEffect(() => {
            fetch()
      }, [])

      useEffect(() => {
            console.log("------+++ ---", details?.getProfileDetails?.userDetails);
            setValue('username', details?.getProfileDetails?.userDetails?.username || "")
            setValue('fullName', `${details?.getProfileDetails?.userDetails?.firstName}${details?.getProfileDetails?.userDetails?.lastName}` || "")
            setValue('email', details?.getProfileDetails?.userDetails?.email || "")
            setValue('mobile', details?.getProfileDetails?.userDetails?.mobile || "")
            setValue('gender', details?.getProfileDetails?.userDetails?.gender || "")  //0 1 2 3 ...
            setValue('hourlyRate', details?.getProfileDetails?.userDetails?.hourlyRate || "")
            // setValue('Country', details?.getProfileDetails?.userDetails?.country || "")
            setValue('city', details?.getProfileDetails?.userDetails?.city || "")
            // setValue('Languages',details?.getProfileDetails?.userDetails?.city || "")
            // setValue('EnglishLanguageLevel', details?.getProfileDetails?.userDetails?.englishLevel || "") //0 1 2 3 ...
            setValue('tagline', details?.getProfileDetails?.userDetails?.tagline || "")
            setValue('position', details?.getProfileDetails?.userDetails?.position || "")
            setValue('description', details?.getProfileDetails?.userDetails?.description || "")
      }, [details])

      useEffect(() => {
            // console.log("-_- -_- -_- -_- -_- -_- -_-", details);
            // if (details?.getProfileDetails?.userDetails) {
            //       dispatch({ type: "SET_PROFILE", payload: details?.getProfileDetails?.userDetails });
            // }
      }, [details])

      useEffect(() => {
            // setSkillsList(skills?.skillList?.skills)
            // setLanguagesList(languages?.listLanguages?.languages)
            // console.log("-------------",categories?.categoryList?.categoriesages);
            if (categories?.categoryList?.categories) {
                  categories?.categoryList?.categories?.map((item, index) => {
                        const stringCategories = {
                              key: item._id,
                              value: item.name
                        };
                        categoryList.push(stringCategories)
                  })
            }
            if (languages?.listLanguages?.languages) {
                  languages?.listLanguages?.languages?.map((item, index) => {
                        languagesList.push({
                              key: item._id,
                              value: item.title
                        })
                  })
            }
      }, [categories, languages])

      const gender = [
            { key: '0', value: 'Male' },
            { key: '1', value: 'Female' },
      ]

      const englishLevel = [
            { key: '0', value: 'Elementary' },
            { key: '1', value: 'Intermediate' },
            { key: '2', value: 'High Intermediate' },
            { key: '3', value: 'Advanced' },
      ]


      const onSubmit = async (data) => {
            setIsUpdating(true)
            const { data: response, error } = await updateProfile({
                  variables: data
            })
            fetch().then(({ aa }) => {
                  // console.log("{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}",aa)
                  setIsUpdating(false)
                  setSnackBarMsg(response?.updateProfile?.msg)
                  setSnackbarVisible(true)
                  setTimeout(() => {
                        setSnackbarVisible(false)
                  }, 5000);
                  setRefresh(!refresh)

            })

            // console.log("=========", response);

      }

      return (
            <>

                  <ScrollView contentContainerStyle={{}}>
                        <View style={{ backgroundColor: "#fff", padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                              <Controller
                                    control={control}
                                    name="username"
                                    render={({ field: { onChange, value, onBlur } }) => (

                                          <TextInput
                                                label="Username"
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                backgroundColor={"#fff"}
                                                textColor={"#1d1d1b"}
                                                style={{ height: 70 }}
                                          />
                                    )}

                              />
                              <Controller
                                    control={control}
                                    name="fullName"
                                    render={({ field: { onChange, value, onBlur } }) => (

                                          <TextInput
                                                label="Full name"
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                backgroundColor={"#fff"}
                                                textColor={"#1d1d1b"}
                                                style={{ height: 70 }}
                                          />
                                    )}

                              />
                              <Controller
                                    control={control}
                                    name="email"
                                    render={({ field: { onChange, value, onBlur } }) => (

                                          <TextInput
                                                label="Email Address"
                                                keyboardType='email-address'
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                backgroundColor={"#fff"}
                                                textColor={"#1d1d1b"}
                                                style={{ height: 70 }}
                                          />
                                    )}

                              />
                              <Controller
                                    control={control}
                                    name="mobile"
                                    render={({ field: { onChange, value, onBlur } }) => (

                                          <TextInput
                                                label="Phone Number"
                                                keyboardType='phone-pad'
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                backgroundColor={"#fff"}
                                                textColor={"#1d1d1b"}
                                                style={{ height: 70 }}
                                          />
                                    )}

                              />
                              <Controller
                                    control={control}
                                    name="gender"
                                    render={({ field: { onChange, value, onBlur } }) => {
                                          return (
                                                <>
                                                      <Text style={{ left: 15, top: 5, fontSize: 12, color: "#1d1d1b" }}>Gender</Text>
                                                      <SelectList
                                                            setSelected={(value) => {
                                                                  console.log(value);
                                                                  onChange(value == "Male" ? 0 : 1)
                                                            }}
                                                            onBlur={onBlur}
                                                            data={gender}
                                                            placeholder="Gender"
                                                            save="value"
                                                            defaultOption={gender[state?.userProfile?.gender]}
                                                            boxStyles={{ borderWidth: 0, height: 50, margin: 0, borderBottomWidth: 1 }}
                                                      />
                                                </>

                                                // <TextInput
                                                //       label="Gender"
                                                //       onBlur={onBlur}
                                                //       onChangeText={value => onChange(value)}
                                                //       value={value}
                                                //       backgroundColor={"#fff"}
                                                //       textColor={"#1d1d1b"}
                                                //       style={{ height: 70 }}
                                                // />

                                          )
                                    }
                                    }

                              />
                              <Controller
                                    control={control}
                                    name="hourlyRate"
                                    render={({ field: { onChange, value, onBlur } }) => (

                                          <TextInput
                                                label="Hourly rate"
                                                keyboardType='phone-pad'
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                backgroundColor={"#fff"}
                                                textColor={"#1d1d1b"}
                                                style={{ height: 70 }}
                                          />
                                    )}

                              />
                              {/* <Controller
                              control={control}
                              name="Country"
                              render={({ field: { onChange, value, onBlur } }) => (

                                    <TextInput
                                          label="Country"
                                          onBlur={onBlur}
                                          onChangeText={value => onChange(value)}
                                          value={value}
                                          backgroundColor={"#fff"}
                                          textColor={"#1d1d1b"}
                                          style={{ height: 70 }}
                                    />
                              )}

                        /> */}
                              <Controller
                                    control={control}
                                    name="city"
                                    render={({ field: { onChange, value, onBlur } }) => (

                                          <TextInput
                                                label="City"
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                backgroundColor={"#fff"}
                                                textColor={"#1d1d1b"}
                                                style={{ height: 70 }}
                                          />
                                    )}

                              />
                              <Controller
                                    control={control}
                                    name="Languages"
                                    render={({ field: { onChange, value, onBlur } }) => (


                                          <>
                                                {/* <Text style={{ left: 15, top: 5, fontSize: 12, color: "#1d1d1b" }}>Languages</Text> */}
                                                <MultiSelect
                                                styleDropdownMenu={{margin:20}}
                                                      hideTags
                                                      items={items}
                                                      uniqueKey="id"
                                                      ref={multiSelect}
                                                      onSelectedItemsChange={(value) => setSelected(value)}
                                                      selectedItems={selected}
                                                      selectText="Languages"
                                                      searchInputPlaceholderText="Search Items..."
                                                      onChangeInput={(text) => console.log(text)}
                                                      altFontFamily="ProximaNova-Light"
                                                      tagRemoveIconColor="#CCC"
                                                      tagBorderColor="#CCC"
                                                      tagTextColor="#CCC"
                                                      selectedItemTextColor="#CCC"
                                                      selectedItemIconColor="#CCC"
                                                      itemTextColor="#000"
                                                      displayKey="name"
                                                      searchInputStyle={{ color: '#CCC' }}
                                                      submitButtonColor="#C89D67"
                                                      submitButtonText="Submit"
                                                />
                                                <View>
                                                      {multiSelect?.current?.getSelectedItemsExt(selected)}
                                                      {/* {console.log(multiSelect?.current?._itemSelected())} */}
                                                </View>
                                          </>
                                          // <TextInput
                                          //       label="Languages"
                                          //       onBlur={onBlur}
                                          //       onChangeText={value => onChange(value)}
                                          //       value={value}
                                          //       backgroundColor={"#fff"}
                                          //       textColor={"#1d1d1b"}
                                          //       style={{ height: 70 }}
                                          // />
                                    )}

                              />
                              {/* <Controller
                              control={control}
                              name="EnglishLanguageLevel"
                              render={({ field: { onChange, value, onBlur } }) => (
                                    <>
                                          <Text style={{ left: 15, top: 5, fontSize: 12, color: "#1d1d1b" }}>English Language Level</Text>
                                          <SelectList
                                                setSelected={(value) => onChange(value)}
                                                onBlur={onBlur}
                                                data={englishLevel}
                                                save="value"
                                                defaultOption={englishLevel[state?.userProfile?.englishLevel]}
                                                boxStyles={{ borderWidth: 0, height: 50, margin: 0, borderBottomWidth: 1 }}
                                          />
                                    </>
                              )}

                        /> */}
                              {/* <Controller
                              control={control}
                              name="SpecialisationCategory"
                              render={({ field: { onChange, value, onBlur } }) => (

                                    <>
                                          <Text style={{ left: 15, top: 5, fontSize: 12, color: "#1d1d1b" }}>Specialisation / Category</Text>
                                          <MultipleSelectList
                                                onSelect={() => { console.log("============", selected) }}
                                                setSelected={(value) => {setSelected(value) }}
                                                onBlur={onBlur}
                                                data={categoryList}
                                                save="value"
                                                defaultOption={{ key: '1', value: 'Male' }}
                                                boxStyles={{ borderWidth: 0, minHeight: 50, margin: 0, borderBottomWidth: 1 }}
                                          />
                                    </>
                              )}

                        /> */}
                              <Controller
                                    control={control}
                                    name="tagline"
                                    render={({ field: { onChange, value, onBlur } }) => (

                                          <TextInput
                                                label="Tagline"
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                backgroundColor={"#fff"}
                                                textColor={"#1d1d1b"}
                                                style={{ height: 70 }}
                                          />
                                    )}

                              />
                              <Controller
                                    control={control}
                                    name="position"
                                    render={({ field: { onChange, value, onBlur } }) => (

                                          <TextInput
                                                label="Position"
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                                backgroundColor={"#fff"}
                                                textColor={"#1d1d1b"}
                                                style={{ height: 70 }}
                                          />
                                    )}

                              />
                              <Controller
                                    control={control}
                                    name="description"
                                    render={({ field: { onChange, value, onBlur } }) => (
                                          <>
                                                <Text style={{ left: 15, marginTop: 10, fontSize: 12, color: "#1d1d1b" }}>Introduce Yourself</Text>
                                                <CommentBox
                                                      // label="Position"
                                                      onBlur={onBlur}
                                                      onChangeText={value => onChange(value)}
                                                      value={value}
                                                      backgroundColor={"#fff"}
                                                      textColor={"#1d1d1b"}
                                                      style={{ height: 90, borderRadius: 10, borderWidth: 0.444, marginTop: 15, margin: 10, padding: 5 }}
                                                      multiline={true}
                                                />
                                          </>
                                    )}

                              />
                              <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity disabled={isUpdating} onPress={handleSubmit(onSubmit)} style={[{ width: 324, height: 40, backgroundColor: '#C89D67', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginTop: 15, marginBottom: 10 }, isUpdating && { opacity: 0.7 }]}>
                                          {isUpdating ? (
                                                <ActivityIndicator size={'large'} color={'#fff'} />
                                          ) : <Text style={{ fontSize: 17, color: '#fff', fontWeight: 'normal' }}>Save & update</Text>
                                          }
                                    </TouchableOpacity>
                              </View>
                        </View>
                        {/* <Button title='Submit' onPress={handleSubmit(onSubmit)} con backgroundColor={"#C89D67"} /> */}
                        {details?.getProfileDetails?.userDetails?.education?.map((item, index) => {

                              // {
                              //       "_id": "6406d64f6c9d522cb68158c3",
                              //       "description": " 4 years of engineering under KTu univerity in MGM  college of engineering",
                              //       "endYear": "1678083138000",
                              //       "institution": "APJ abdul kalam university",
                              //       "major": " Bachlors in Chemical engineering",
                              //       "startYear": "1678083138000"
                              //   }
                              return (
                                    <View style={{ width: '100%', backgroundColor: '#fff', marginTop: 40, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                                                <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 18, }}>Education</Text>
                                                <Text style={{ color: '#1DA1F2', fontWeight: 'normal', fontSize: 16, }}>Add new</Text>
                                          </View>
                                          <Divider />
                                          <Divider />
                                          <View style={{ padding: 10 }}>
                                                <View style={{ padding: 5 }}>
                                                      <Text style={{ fontSize: 13, left: 10 }}>{item.institution}</Text>
                                                      <Text style={{ fontSize: 16, color: 'black', fontWeight: "bold", left: 5 }}>{item.major}</Text>
                                                </View>
                                                <View style={{ alignItems: 'center', margin: 10 }}>
                                                      <TouchableOpacity onPress={() => navigation.navigate('Edit')} style={{ width: 324, height: 40, backgroundColor: '#C89D67', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ fontSize: 17, color: '#fff', fontWeight: 'normal' }}>Edit</Text>
                                                      </TouchableOpacity>
                                                </View>
                                                <View style={{ alignItems: 'center', margin: 10 }}>
                                                      <TouchableOpacity>
                                                            <Text style={{}}>Remove</Text>
                                                      </TouchableOpacity>
                                                </View>
                                          </View>
                                    </View>

                              )
                        })}

                  </ScrollView >
                  <Snackbar
                        visible={snackbarVisible}
                        onDismiss={() => setSnackbarVisible(false)}
                        action={{
                              label: 'Okay',
                              onPress: () => { },
                        }}
                  >
                        {snackBarMsg}
                  </Snackbar>
            </>
      )
}