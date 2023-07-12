import {View, Text, TextInput, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import * as Icon from "react-native-feather";
import React from "react";
import {theme} from "../tailwind.config";
import {themeColors} from "../theme";
import Categories from "../components/categories";
import {featured} from "../constants";
import FeatureRow from "../components/featureRow";

export default function HomeScreen() {
    return (
      <SafeAreaView className="bg-white">
          <StatusBar barStyle="dark-content"/>
          <View className="flex-row items-center space-x-2 px-4 pb-2" >
              <View className="flex-row flex-1 items-center rounded-full border border-gray-300 p-3">
                  <Icon.Search width="25" height="25" stroke="gray"/>
                  <TextInput placeholder="Restuarent" className="flex-1 pl-2"/>
                  <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300 ">
                      <Icon.MapPin width="25" height="25" stroke="gray"/>
                      <Text className="text-gray-300">UCSC,Colombo7</Text>
                  </View>
              </View>
              <View style={{backgroundColor: themeColors.bgColor(1)}} className="rounded-full p-2">
                  <Icon.Sliders width="25" height="25" strokeWidth="2.5" stroke="white"/>
              </View>
          </View>

          {/*MAIN*/}
          <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                  paddingBottom :20
              }}
          >
                {/*categories*/}
              <Categories/>

              {/*feature*/}

              <View className="mt-5">
                  {
                      [featured,featured,featured].map((item, index) => {
                          return (
                              <FeatureRow
                                  key={index}
                                  title={item.title}
                                  restaurants={item.restaurants}
                                  description={item.description}
                              />

                          )
                      })

                  }
              </View>


          </ScrollView>
      </SafeAreaView>
    );

 }