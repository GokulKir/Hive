import React, { useEffect, useState, useContext } from 'react'
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { REVIEWS } from '../../GraphQl/Query';
import { useManualQuery, useQuery, useMutation } from 'graphql-hooks';
import { Context } from '../Store'



const Reviews = () => {

    const [state, dispatch] = useContext(Context);
    const [selectedTab, setselectedTab] = useState(1)
    const { data, loading, error } = useQuery(REVIEWS, {
        variables: {
            "pageNumber": null,
            "limit": null,
            "type": selectedTab
        }
    })

    useEffect(() => {
        console.log("-----------------", data?.listReviews);
    }, [data])

    return (

        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: "#fff", flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => {
                        setselectedTab(1)
                    }}
                    style={[selectedTab == 1 &&{borderBottomWidth: 2 }, { padding: 10, }]}
                >
                    <Text style={[selectedTab == 1 && { fontWeight: 'bold' }]}>Services</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setselectedTab(0)
                    }}
                    style={[selectedTab == 0 &&{borderBottomWidth: 2 }, { padding: 10,marginLeft:20 }]}

                >
                    <Text style={[selectedTab == 0 && { fontWeight: 'bold' }]}>Profile</Text>
                </TouchableOpacity>


            </View>


            <FlatList
                data={data?.listReviews?.reviews}
                keyExtractor={item => item.key}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    // console.log("-------",item);
                    return (
                        <View style={{ backgroundColor: "#fff", padding: 20, margin: 20, borderRadius: 10 }}>
                            {/* <Text>{item.content}</Text> */}
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Image
                                    style={{ height: 60, width: 60, borderRadius: 30 }}
                                    source={{ uri: item && item.reviewer && item.reviewer.profileImg ? `https://hive-dash.credot.dev/${item?.reviewer?.profileImg}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' }}
                                />
                                <View style={{ padding: 5, marginLeft: 10 }}>
                                    <Text style={{ fontWeight: 'bold' }}>{item?.reviewer?.username}</Text>
                                    <Text style={{ marginTop: 5 }}><Image
                                        style={{ width: 12, height: 12, marginLeft: 10, marginTop: 4 }}
                                        source={require('../../assets/Rate.png')}
                                    /> {item?.rating}  28 Jan 2022</Text>
                                    {/* /> {item?.rating}  {item?.createdAt}</Text> */}
                                </View>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text>{item?.content}</Text>
                            </View>
                        </View>
                    )

                }}
            />
        </View>

    )
}

export default Reviews
