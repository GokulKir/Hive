import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ExploreCategorySkeleton = () => {
    const count = [1, 2, 3, 4, 5, 6]

    return (
        <View>
            <FlatList data={count}
                keyExtractor={item => item.key}
                renderItem={({ item }) => {
                    return (
                        <SkeletonPlaceholder >
                            <View style={{ marginLeft: 24 }}>
                                <View
                                    style={{
                                        width: wp('90%'),
                                        height: hp('18%'),
                                        marginTop: hp('3%'),
                                        marginLeft:-5,
                                        borderRadius:10
                                    }}></View>

                            </View>
                        </SkeletonPlaceholder>
                    )
                }}
            />
        </View>
    )
}
export default ExploreCategorySkeleton
