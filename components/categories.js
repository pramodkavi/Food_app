import {ScrollView, Text, TouchableOpacity, View,Image} from "react-native";
import React, {useState} from "react";
import {categories} from "../constants";

export default function Categories(){
    const [activeCategory, setactiveCategory] = useState(null);
    return (
        <View className="mt-4">
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            className="overflow-visible flex"
            >
                {
                    categories.map((category,index) => {
                        let isActive = category.id===activeCategory;
                        let btnClass = isActive? ' bg-gray-600':' bg-gray-200';
                        let textClass= isActive? ' font-semibold text-gray-800 ':' text-gray-600';

                        return(
                            <View key={index} className="flex justify-center item-center mr-6">
                                <TouchableOpacity
                                    onPress={() => setactiveCategory(category.id)}
                                    className={"rounded-full bg-gray-300 shadow p-1"+btnClass}
                                >
                                    <Image style={{width:45,height:45}} source={category.image}/>
                                </TouchableOpacity>
                                <Text className={"text-sm"+textClass} >{category.name}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}