import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import {themeColors} from "../theme";
import RestaurantCard from "./restaurantCard";
import React from "react";

export default function FeatureRow({title,description,restaurants}){
    return (
        <View>
            <View className={"flex-row justify-between items-center px-4"}>
                <View>
                    <Text className={"font-black text-lg"}>{title}</Text>
                    <Text className={"text-gray-500 text-xs"}>{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{color:themeColors.text}} className={"font-semibold"}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal:15,
                    }
                }
                className={"overflow-visible py-5"}
            >
                {restaurants.map((restaurant, index) => (
                        <RestaurantCard key={index} item={restaurant} />
                    ))
                }

            </ScrollView>
        </View>
    )

}