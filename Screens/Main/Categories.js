import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image, Platform, Dimensions, Animated } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Card, List, Divider } from 'react-native-paper';
import { CATEGORIES } from '../../GraphQl/Query';
import { useManualQuery, useQuery } from 'graphql-hooks';
import ExploreCategorySkeleton from '../../Components/ExploreCategory';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header_Maximum_Height = Platform.OS == 'ios' ? (windowWidth == 375 && windowHeight == 667) ? 200 : 250 : 100;
const Header_Minimum_Height = Platform.OS == 'ios' ? 90 : 50;

const AnimatedHeaderValue = new Animated.Value(0);


const AnimateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: ['#177d99', '#177d99'],
    extrapolate: 'clamp',
});
const HeaderFirstColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: ['#fff', '#177d99'],
    extrapolate: 'clamp',
});
const HeaderSecondColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: ['#fff', '#C89D67'],
    extrapolate: 'clamp',
});
const AnimatedMarginTOP = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: [10, Platform.OS == 'ios' ? 140 : 110],
    extrapolate: 'clamp',
});
const AnimatedFilterIconWidth = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: [0, 170],
    extrapolate: 'clamp',
});
const AnimateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: [Header_Maximum_Height, Header_Minimum_Height],
    extrapolate: 'clamp',
});
const AnimateItemHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: [Header_Maximum_Height, 0],
    extrapolate: 'clamp',
});




const Categories = () => {

    const array = [0, 1, 2, 3, 4, 5, 6, 7]
    const [selectedItem, setSelectedItem] = useState("")
    const [datas, setDatas] = useState([])
    const { loading, error, data } = useQuery(CATEGORIES)

    useEffect(() => {
        if (data?.categoryList?.categories) {
            setDatas(data?.categoryList?.categories)
            setSelectedItem(data?.categoryList?.categories?.[0])
            // console.log("-------------------", data?.categoryList?.categories?.[0]?.children);
        }
    }, [data])

    if(loading){
        return(
            <ExploreCategorySkeleton/>
        )
    }

    return (
        <View style={{ flex: 1,backgroundColor:"#fff" }}>

            <ScrollView
                //  contentContainerStyle={styles.container}
                contentContainerStyle={{ paddingTop: Header_Maximum_Height, zIndex: 9, elevation: 3 }}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } },
                ])}>


                <View style={{ padding: 5 }}>
                    <FlatList
                        data={selectedItem.children}
                        keyExtractor={(item) => item._id}
                        ListEmptyComponent={() => {
                            return (
                                <View style={{ marginTop: 100 }}>

                                    <Image
                                        style={{ width: 100, height: 100, alignSelf: "center" }}
                                        source={{ uri: "http://surl.li/fcarv" }}
                                    />
                                </View>
                            )
                        }}
                        renderItem={({ item, index }) => {
                            return (

                                <Card style={{ backgroundColor: "#fff", margin: 10 }}>
                                    <Card.Title
                                        title={item.name}
                                        titleStyle={{ fontSize: 16 }}
                                        right={(props) => (
                                            <List.Icon
                                                {...props}
                                                icon="chevron-right"
                                                color={"#C89D67"}
                                                style={{ right: 10 }}
                                            />
                                        )}
                                    />
                                    {item?.children?.length ?
                                        <>
                                            <Divider />
                                            <Divider />
                                            <Card.Content>
                                                <FlatList
                                                    data={item.children}
                                                    keyExtractor={(item) => item._id}
                                                    ListEmptyComponent={() => {
                                                        return (
                                                            <View>

                                                                <Image
                                                                    style={{ width: 60, height: 60, alignSelf: "center" }}
                                                                    source={{ uri: "http://surl.li/fcarv" }}
                                                                />
                                                            </View>
                                                        )
                                                    }}
                                                    renderItem={({ item, index }) => {
                                                        return (

                                                            <List.Item
                                                                style={{ padding: 0, marginLeft: -8 }}
                                                                titleStyle={{ fontSize: 12 }}
                                                                title={item.name}
                                                                right={(props) => (
                                                                    <List.Icon
                                                                        {...props}
                                                                        icon="chevron-right"
                                                                        color={"#bababa"}
                                                                    />
                                                                )}
                                                            />

                                                        )
                                                    }}
                                                />
                                            </Card.Content>
                                        </>
                                        : <></>}
                                </Card>
                            )
                        }}
                    />
                </View>
            </ScrollView>


            <Animated.View
                style={[
                    styles.Header,
                    {
                        height: AnimateHeaderHeight,
                        // backgroundColor: AnimateHeaderBackgroundColor,
                        backgroundColor:"#fff"
                        // borderBottomLeftRadius: 30,
                        // borderBottomRightRadius: 30
                    },
                ]}>
                        <Animated.Text style={{ color: HeaderSecondColor, fontSize: 15,alignSelf:"baseline",left:20 }} >{selectedItem?.name}</Animated.Text>

                <Animated.View style={{ 
                    backgroundColor: "#fff"
                    // backgroundColor: AnimateHeaderBackgroundColor
                     }}>

                    {/* <Animated.View style={{
                        flexDirection: "row",
                        marginTop: AnimatedMarginTOP,
                        alignItems: "center",
                        paddingHorizontal: 10,
                    }}>
                        <Animated.Text style={{ color: HeaderSecondColor, fontSize: 20, marginLeft: 10, marginBottom: Platform.OS === "ios" ? null : 20 }} >Sales KPI</Animated.Text>
                        <Animated.View style={{ width: AnimatedFilterIconWidth, left: 40 }}>

                        </Animated.View>
                    </Animated.View> */}

                    <Animated.View style={{ padding: 5,height:AnimateItemHeight,top:-10 }}>
                        <FlatList
                            data={datas}
                            keyExtractor={(item) => item._id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return (
                                    <Card
                                        onPress={() => { setSelectedItem(item) }}
                                        style={{ width: 100, margin: 5, borderWidth: 1, borderRadius: 5, borderColor: selectedItem?._id === item._id ? "#C89D67" : "#fff", padding: 1, backgroundColor: "#fff",justifyContent:'center' }}

                                    >
                                        <Image
                                            style={{ width: 20, height: 20, alignSelf: "center" }}
                                            source={{ uri: "https://hive-front-demo.vercel.app/_next/image?url=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1160%2F1160358.png&w=32&q=75" }}
                                        />
                                        <Text style={{ fontSize: 10, alignSelf: "center", color: selectedItem?._id === item._id ? "#C89D67" : "black" }}>{item.name}</Text>
                                    </Card>
                                )
                            }}
                        />
                    </Animated.View>

                </Animated.View>
            </Animated.View>


        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    Header: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        overflow: 'hidden',
        elevation: 2,
    },
})
