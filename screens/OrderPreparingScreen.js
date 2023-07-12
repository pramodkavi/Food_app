import {Image, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useEffect} from "react";

export function OrderPreparingScreen() {
    let navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        },3000);
    }, []);

    return (
        <View className={"flex-1 bg-white justify-center items-center"}>
            <Image className={"h-80 w-80"} source={require("../assets/images/delivery.gif")}/>
        </View>
    )
}
