import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {themeColors} from "../theme";
import * as Icon from "react-native-feather";
import React, {useEffect} from "react";
import {DishRow} from "../components/dishRow";
import {CartIcon} from "../components/cartIcon";
import {StatusBar} from "expo-status-bar";
import {useDispatch} from "react-redux";
import {setRestaurant} from "../slices/restaurantSlice";

export default function ReataurantScreen() {
    const {params} = useRoute();
    const item = params;
    let navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        if(item && item.id){
            dispatch(setRestaurant({...item})) // pass the item as object
        }
    },[])

    return (
        <View>
            <CartIcon/>
            <StatusBar style={"light"}/>
            <ScrollView>

                <View className={"relative"}>
                    {/*Main Image*/}
                    <Image className={"w-full h-72"} source={item.image}/>

                    {/*back button*/}
                    <TouchableOpacity className={"absolute top-6 left-4 rounded-full bg-white shadow p-2"}
                        onPress={() => navigation.goBack()}>
                        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}/>
                    </TouchableOpacity>

                </View>

                {/*Details section*/}
                <View
                    style={{borderTopRightRadius:40,borderTopLeftRadius:40}}
                    className={"bg-white -mt-12 pt-6"}
                >
                    {/*name review address section*/}
                    <View className={"px-5"}>
                        <Text className={"text-3xl font-bold "}>
                            {item.name}
                        </Text>

                        {/*address and reviews*/}
                        <View className={"flex-row items-center space-x-2 py-1"}>
                            <View className={"flex-row items-center space-x-1"}>
                                <Image source={require("../assets/images/fullStar.png")} className={"h-4 w-4"}/>
                                <Text className={"text-xs"}>
                                    <Text className={"text-green-700"}>{item.stars}</Text>
                                    <Text className={"text-gray-700"}>
                                        ({item.reviews}.review) . <Text className={"font-semibold"}>{item.category}</Text>
                                    </Text>
                                </Text>
                            </View>
                            {/*address*/}
                            <View className={"flex-row items-center space-x-1"}>
                                <Icon.MapPin width="15" height="15" stroke="gray"/>
                                <Text className={"text-xs text-gray-500"}>
                                    NearBy . {item.address}
                                </Text>
                            </View>
                        </View>

                    </View>

                    {/*discription*/}
                    <Text className={"text-gray-500 mt-2 pl-4"}>{item.description}</Text>
                </View>

                {/*Manu Details*/}
                <View className={"bg-white pb-36"}>
                    <Text className={"px-4 py-4 text-2xl font-bold" }>Manu</Text>
                    {
                        item.dishes.map((item, index) =>
                            <DishRow item={{...item}} key={index}/>
                        )
                    }
                </View>

            </ScrollView>
        </View>
    );
}