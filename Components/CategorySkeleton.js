import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



const CategorySkeleton = () => {
    const count = [1, 2, 3, 4, 5, 6]

    return (

        <View>

            <FlatList data={count}
                horizontal={true}
                keyExtractor={item => item.key}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {

                    return (

                        <SkeletonPlaceholder >
                            <View style={{ marginLeft: 24 }}>
                                <View
                                    style={{
                                        width: wp('21%'),
                                        height: hp('8%'),
                                        marginTop: hp('3%'),
                                    }}></View>

                                <View
                                    style={{
                                        width: '100%',
                                        height: hp('1%'),
                                        marginTop: hp('2%'),
                                        alignSelf: 'center'
                                    }}></View>

                            </View>
                        </SkeletonPlaceholder>

                    )

                }}
            />






        </View>

    )
}

export default CategorySkeleton
