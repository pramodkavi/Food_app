import {Image, Text, TouchableWithoutFeedback, View} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import {useNavigation} from "@react-navigation/native";

export default function RestaurantCard ({item}) {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Reataurant", {...item})}
        >
            <View className={"mr-6 rounded-3xl shadow-lg bg-white"}>
                {/*main image*/}
                <Image source={item.image} className={"h-36 w-64 rounded-t-3xl"}/>

                {/*name review address section*/}
                <View className={"px-3 pb-4 space-y-2"}>
                    {/*name*/}
                    <Text className={"text-lg font-bold pt-2"}>
                        {item.name}
                    </Text>
                    {/*reviews*/}
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
        </TouchableWithoutFeedback>
    )
}
