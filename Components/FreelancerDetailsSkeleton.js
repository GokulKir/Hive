import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



const FreelancerDetailsSkeleton = () => {
    const count = [1, 2, 3, 4, 5, 6]

    return (

        <View>
            <SkeletonPlaceholder >
                <View style={{}}>

                <View
                            style={{
                                borderRadius: 60,
                                width: wp('25%'),
                                height: hp('13%'),
                                alignSelf: 'center',
                                top: hp('6%'),
                            }}></View>
                    <View
                        style={{
                            borderTopRightRadius: 30,
                            borderTopLeftRadius: 30,
                            width: wp('100%'),
                            height: hp('100%'),
                            // marginTop: hp('12%'),
                        }}>

                    </View>

                    {/* <View
                        style={{
                            width: '100%',
                            height: hp('1%'),
                            marginTop: hp('2%'),
                            alignSelf: 'center'
                        }}></View> */}

                </View>
            </SkeletonPlaceholder>
        </View>

    )
}

export default FreelancerDetailsSkeleton
