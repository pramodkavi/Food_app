import {View, Text, Image,TouchableOpacity} from "react-native";
import * as Icon from "react-native-feather";
import {themeColors} from "../theme";
export function DishRow({item}) {
    return (
        <View className={"flex-row items-center bg-white px-3 py-2  rounded-3xl shadow-2xl mb-3 mx-2"}>
            <Image className={"rounded-3xl h-100 w-100"} style={{height:100 , width:100}}
                   source={item.image}/>

            {/*Dish details , prices and quentity*/}
            <View className={"flex flex-1 space-y-3"}>
                <View className={"pl-3"}>
                    <Text className={"text-lg font-semibold"}>{item.name}</Text>
                    <Text className={"text-sm text-gray-500"}>{item.description}</Text>
                </View>
                <View className={"flex-row justify-between pl-3 items-center"}>
                    {/*price*/}
                    <Text className={"text-gray-700 text-lg font-bold"}>${item.price}</Text>

                    {/*add remove button*/}
                    <View className={"flex-row items-center "}>

                        <TouchableOpacity className={"rounded-full p-1"} style={{backgroundColor: themeColors.bgColor(1)}}>
                            <Icon.Minus width={20} height={20} strokeWidth={2} stroke={"white"}/>
                        </TouchableOpacity>

                        <Text className={"text-gray-700 text-lg font-bold px-3"}>2</Text>

                        <TouchableOpacity className={"rounded-full p-1"} style={{backgroundColor: themeColors.bgColor(1)}}>
                            <Icon.Plus width={20} height={20} strokeWidth={2} stroke={"white"}/>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        </View>
    )
}
