import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import {themeColors} from "../theme";
import * as Icon from "react-native-feather";
import {useNavigation} from "@react-navigation/native";
import {featured} from "../constants";

export default function CartScreen() {
    let navigation = useNavigation();
    let restaurant = featured.restaurants[0];
    return (
        <View className={"bg-white flex-1"}>
            
            {/*header*/}
            <View className={"relative py-4 shadow-sm"}>
                {/*back button*/}
                <TouchableOpacity className={"absolute z-10 rounded-full p-2 shadow top-5 left-2"}
                            style={{backgroundColor:themeColors.bgColor(1)}}
                            onPress={()=> navigation.goBack()}>
                            <Icon.ArrowLeft strokeWidth={3} stroke={"white"}/>
                </TouchableOpacity>
                <View>
                    <Text className={"text-center font-bold text-xl"}>
                        Your cart
                    </Text>
                    <Text className={"text-center text-gray-500"}>
                        {restaurant.name}
                    </Text>
                </View>
            </View>
            
            <View className={"flex-row items-center px-4"} style={{backgroundColor:themeColors.bgColor(0.2)}}>
                <Image source={require("../assets/images/bikeGuy.png")} className={"w-20 h-20 rounded-full"}/>
                <Text className={"flex-1 pl-5 font-bold center"}>
                    Delivary in 20-30 min
                </Text>
                <TouchableOpacity >
                    <Text style={{color:themeColors.text}} className={"font-bold"}>Change</Text>
                </TouchableOpacity>
            </View>

            {/*Cart Items*/}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:20}}
            className={"bg-white pt-5"}>
                {
                    restaurant.dishes.map((dish, index) => {
                        return(
                            <View className={"flex-row items-center space-x-3 py-2 px-2 bg-white rounded-3xl mx-2 mb-3 shadow-md"}>
                                <Text className={"font-bold"} style={{color:themeColors.text}}>2X</Text>
                                <Image className={"w-14 h-14 rounded-full"} source={dish.image}/>
                                <Text className={"flex-1 font-bold text-gray-700 "}>{dish.name}</Text>
                                <Text className={"font-extrabold text-lg"}>${dish.price}</Text>
                                <TouchableOpacity className={"rounded-full p-1"} style={{backgroundColor:themeColors.bgColor(1)}}
                                >
                                    <Icon.Minus width={20} height={20} strokeWidth={2} stroke={"white"}/>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>

            <View className={"p-6 px-8 rounded-t-3xl space-y-4" } style={{backgroundColor:themeColors.bgColor(0.2)}}>
                {/*Order payment Details*/}
                <View className={"flex-row justify-between"}>
                    <Text className={"text-gray-700"}>Subtotal</Text>
                    <Text className={"text-gray-700"}>$30</Text>
                </View>
                <View className={"flex-row justify-between"}>
                    <Text className={"text-gray-700"}>Delivary Fee</Text>
                    <Text className={"text-gray-700"}>$2</Text>
                </View>
                <View className={"flex-row justify-between"}>
                    <Text className={"text-gray-700 font-bold "}  style={{fontSize:16}}>Order Total</Text>
                    <Text className={"text-gray-700 font-bold "} style={{fontSize:16}}>$32</Text>
                </View>

                {/*Submit button*/}
                <View>
                    <TouchableOpacity className={"p-3 rounded-full"} style={{backgroundColor:themeColors.bgColor(1)}}
                    onPress={()=>navigation.navigate('OrderPreparing')}>
                        <Text className={"text-white text-center font-bold text-lg"}>
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
