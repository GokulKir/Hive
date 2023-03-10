import React, { useEffect, useContext } from 'react'
import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import { PROPSALS } from '../../GraphQl/Query'
import { useManualQuery, useQuery, useMutation } from 'graphql-hooks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { Context } from '../Store'


const Proposals = (props) => {

    const [state, dispatch] = useContext(Context);
    const [fetch, { data, loading }] = useManualQuery(PROPSALS, {
        variables: {
            type: state?.mode,
            pageNumber: 1,
            limit: 6
        }
    })

    useEffect(() => {
        fetch()
        console.log("=======", state?.mode);
    }, [state])

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={data?.listOwnProposals?.proposals}
                // horizontal={true}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ backgroundColor: "#fff", flexDirection: 'row', borderBottomWidth: 0.555, borderBottomColor: "#f0f0f0", flex: 1 }}>
                            <Image
                                style={{ height: 60, width: 60, left: 10 }}
                                source={{ uri: `https://hive-dash.credot.dev/${item?.projectOwner?.profileImg}` }}
                            />
                            <View style={{ marginLeft: 10, padding: 10, flex: 1 }}>
                                {/* <Text>{item._id}</Text> */}
                                <Text style={{ fontWeight: 'bold', margin: 5 }}>Food delivery APP</Text>
                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                    <MaterialCommunityIcons size={15} name='map-marker-radius-outline' color='#bababa' style={{ marginTop: 2 }} />
                                    <Text style={{ marginLeft: 5, fontSize: 12 }}>{item?.projectOwner?.country},{item?.projectOwner?.city}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                    <MaterialCommunityIcons size={15} name='calendar-outline' color='#bababa' style={{ marginTop: 2 }} />
                                    <Text style={{ marginLeft: 5, fontSize: 12 }}>8 days ago</Text>
                                    {/* <Text style={{marginLeft:5}}>{item?.createdAt} days ago</Text> */}
                                </View>
                                <View style={{ flexDirection: 'row', margin: 5, justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: '500', fontSize: 12 }}>{item?.cost} KD {`(${item?.time?.value} Days)`}</Text>
                                    <View style={{flexDirection:'row',marginTop:-10 }}>
                                        <TouchableOpacity style={{ backgroundColor: '#FFEDE8',padding:5,borderRadius:5,marginRight:10 }}>
                                            <MaterialCommunityIcons size={15} name={state?.mode == 1 ? 'pencil-outline' : "check"} color='#000000' style={{ marginTop: 2 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ backgroundColor: '#FFEDE8',padding:5,borderRadius:5 }}>
                                            <MaterialCommunityIcons size={15} name={state?.mode == 1 ?'delete-outline':"close" } color='#000000' style={{ marginTop: 2 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />


        </View>
    )
}
export default Proposals
