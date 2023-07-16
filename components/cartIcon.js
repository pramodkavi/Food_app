import {Text, TouchableOpacity, View} from "react-native";
import {themeColors} from "../theme";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectCartItems} from "../slices/cartSlice";

export function CartIcon() {
    const cartItems = useSelector(selectCartItems);
    let navigation = useNavigation();
    if(cartItems.length === 0) return;
    return (
        <View className={"absolute bottom-5 w-full z-50"}>
            <TouchableOpacity
                onPress={()=> navigation.navigate("Cart")}
                style={{backgroundColor: themeColors.bgColor(1)}}
                className={"flex-row justify-center items-center rounded-full py-3 mx-3 px-5"}
            >
                <View className={"p-2 px-4 rounded-full"} style={{backgroundColor: "rgba(255,255,255,0.3)"}}>
                    <Text className={"font-extrabold text-lg text-white"}>
                        3
                    </Text>
                </View>
                <Text className={"flex-1 text-center font-extrabold text-lg text-white"}>
                    View Cart
                </Text>
                <Text className={"font-extrabold text-lg text-white"}>
                    ${23}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
