import React, { useEffect, useState, useContext } from 'react'
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { OWN_PROJECTS } from '../../GraphQl/Query';
import { useManualQuery, useQuery, useMutation } from 'graphql-hooks';
import { Context } from '../Store'
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list'
import { Divider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



const ManageProjects = () => {
    const [state, dispatch] = useContext(Context);
    const [selected, setSelected] = useState("Active Projects");

    const { data, loading, error } = useQuery(OWN_PROJECTS, {
        variables: {
            "pageNumber": null,
            "limit": null,
            "status": null
        }
    })

    useEffect(() => {
        console.log("-----------------", data?.cLientOwnProjectList?.projects);
    }, [data])

    const types = [
        { key: '0', value: 'Active Projects' },
        { key: '1', value: 'Ongoing Projects' },
        { key: '2', value: 'Expired Projects' },
        { key: '3', value: 'Completed Projects' },
        { key: '4', value: 'Canceled Projects' },
    ]

    return (

        <View style={{ flex: 1,backgroundColor:"#fff" }}>
            <SelectList
                setSelected={(value) => {
                    setSelected(value);
                }}
                data={types}
                placeholder="Active Projects"
                save="value"
                // defaultOption={}
                boxStyles={{ borderWidth: 0, height: 50, margin: 0, borderBottomWidth: 1 }}
            />
            <Divider/>

            <FlatList
                data={selected === "Active Projects" ? data?.cLientOwnProjectList?.projects : []}
                keyExtractor={item => item.key}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    // console.log("-------",item);
                    return (
                        <View style={{ backgroundColor: "#fff", padding: 20, borderBottomWidth:1.5,borderBottomColor:"#f0f0f0" }}>
                            <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                            <Text style={{color:"#C89D67",fontSize:10,marginTop:5}}>{item.slug}</Text>
                            <View style={{ flexDirection: 'row',marginTop:5 }}>
                                    <MaterialCommunityIcons size={15} name='map-marker-radius-outline' color='#bababa' style={{ marginTop: 2 }} />
                                    <Text style={{ fontSize: 12 , marginTop:1,marginLeft:5}}>{item?.owner?.country},{item?.owner?.city}</Text>
                                </View>
                            <View style={{ flexDirection: 'row',marginTop:5 }}>
                                    <MaterialCommunityIcons size={15} name='calendar-outline' color='#bababa' style={{ marginTop: 2 }} />
                                    {/* <Text style={{ fontSize: 12 , marginTop:1,marginLeft:5  }}>{item?.owner?.country},{item?.owner?.city}</Text> */}
                                    <Text style={{ fontSize: 12 , marginTop:1,marginLeft:5  }}>April 01, 2020</Text>
                                </View>
                        </View>
                    )

                }}
            />
        </View>

    )
}

export default ManageProjects
