import {View,Text,Image,TouchableOpacity } from "react-native";
import MapView,{Marker} from 'react-native-maps';
import {featured} from "../constants";
import {useNavigation} from "@react-navigation/native";
import {themeColors} from "../theme";
import {StatusBar} from "expo-status-bar";
import * as Icon from "react-native-feather";
import {useSelector} from "react-redux";
import {selectRestaurant} from "../slices/restaurantSlice";

export function DeliveryScreen() {
    let resturant = useSelector(selectRestaurant);
    let navigation = useNavigation();
    return (
        <View className={"flex-1"}>
            <StatusBar style={"dark"}/>
            <MapView
                initialRegion={{
                    latitude: resturant.lat,
                    longitude: resturant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                className="flex-1"
                mapType="standard"
            >
                <Marker
                    coordinate={{
                        latitude: resturant.lat,
                        longitude: resturant.lng
                    }}
                    title={resturant.title}
                    description={resturant.description}
                    pinColor={themeColors.bgColor(1)}
                />
            </MapView>
            {/*Bottom Bar*/}
            <View className={"rounded-t-3xl -mt-12 bg-white relative"}>
                {/*Details and Image*/}
                <View className={"flex-row justify-between px-5 pt-10"}>
                    <View >
                        <Text className={"text-lg font-bold"}>Estimated Arrival</Text>
                        <Text className={"text-3xl font-bold"} >20-30 Minutes</Text>
                        <Text className={"font-bold"}>Your Order is on the way!</Text>
                    </View>
                    {/*Image*/}
                    <Image className={"h-24 w-24 "} source={require("../assets/images/bikeGuy2.gif")}/>
                </View>
                {/*Handel section*/}
                <View className={"flex-row items-center rounded-full my-5 mx-2 p-1 px-2"} style={{backgroundColor:themeColors.bgColor(1)}}>
                    <View className={"rounded-full p-1 "} style={{backgroundColor: 'rgba(255,255,255,0.4)'}}>
                        <Image style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="w-16 h-16 rounded-full" source={require('../assets/images/myimg.png')} />
                    </View>
                    <View className={"flex-1 ml-3"}>
                        <Text className={"text-lg font-bold text-white"}>Kavindu Pramod</Text>
                        <Text className={"font-semibold text-white"}>Your Rider</Text>
                    </View>

                    <View className={"flex-row justify-center items-center space-x-3 mr-4"}>
                        <TouchableOpacity  className={"rounded-full bg-white p-2"}>
                            <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1}/>
                        </TouchableOpacity >
                        <TouchableOpacity  className={"rounded-full bg-white p-2"}>
                            <Icon.X stroke={"red"} strokeWidth={3}/>
                        </TouchableOpacity >
                    </View>
                </View>

            </View>

        </View>
    )
}
