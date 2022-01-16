import { useRef, useState } from "react";
import { Image, Text, View, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";

import { FontAwesome } from "@expo/vector-icons"; 
import { Ionicons } from "@expo/vector-icons";

import CirclesSliderShown from "../../components/circlesSliderShown";
import ShopItem from "../../components/shopItem";

import Logo from "../../../assets/icon.png";
import AdvertisingImage from "../../../assets/advertising.png";

import styles from "./styles";

export default function Home() {
  const [advertisingIndex, setAdvertisingIndex] = useState(0);

  const data = [
    {
      id: "BANNEUM",
      title: "TESTE",
    }, 
    {
      id: "BANAA",
      title: "ASIDMAS",
    }, 
    {
      id: "BasdasANAA",
      title: "asdASIDMAS",
    }
  ];

  const categoryData = [
    {
      id: "BANNEUM",
      title: "Comida",
      icon: () => <FontAwesome name="paw" size={40} color="#575757" />,
    }, 
    {
      id: "BANAA",
      title: "Saúde",
      icon: () => <Ionicons name="medical" size={40} color="#575757" />,
    }, 
    {
      id: "BANASADASDSAA",
      title: "Brinquedos",
      icon: () => <Ionicons name="medical" size={40} color="#575757" />,
    }, 
    {
      id: "BAaaaaNAA",
      title: "Saúde",
      icon: () => <Ionicons name="medical" size={40} color="#575757" />,
    }, 
    {
      id: "aaaaBANAA",
      title: "Saúde",
      icon: () => <Ionicons name="medical" size={40} color="#575757" />,
    }
  ];

  const onViewRef = useRef(({viewableItems}: any): void => {
    if (viewableItems.length < 2) {
      setAdvertisingIndex(viewableItems[0].index);
    }
  })

  return (
    <>
      <StatusBar backgroundColor="#FEFEFE" style="dark" />

      <SafeAreaView style={styles.container}>
        <ScrollView
          overScrollMode={"never"}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 64, }}
          alwaysBounceVertical={true}
          style={styles.content}
        >
          <View style={styles.headerWrapper}>
            <Image source={Logo} style={{ width: 100, height: 52 }} />
          </View>

          <View style={styles.welcomeWrapper}>
            <View style={styles.welcomeTextWrapper}>
              <Text style={styles.welcomeUserText}>
                Hey, João Mateus...
              </Text>
              <Text style={styles.welcomeText}>
                O que seu Pet precisa?
              </Text>
            </View>
          </View>

          <View
            style={styles.advertisingWrapper}
          >
            <FlatList 
              data={data}
              overScrollMode={"never"}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginBottom: -40 }}
              onViewableItemsChanged={onViewRef.current}
              keyExtractor={(item, _) => item.id}
              renderItem={({ item }: any) => {
                return (
                  <View style={styles.advertisingItem}>
                    <Image
                      source={AdvertisingImage}
                      style={styles.advertisingItemImage}
                    />
                  </View>
                );
              }}
            />

            <CirclesSliderShown
              data={data}
              stepIndex={advertisingIndex}
              design="dark"
            />
          </View>

          <View style={styles.categoryWrapper}>
            <FlatList
              data={categoryData}
              overScrollMode={"never"}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, _) => item.id}
              renderItem={({ item }: any) => {
                return (
                  <View style={styles.categoryItemWrapper}>
                    <View style={styles.categoryItem}>
                      {item.icon()}
                    </View>
                    <Text style={styles.categoryItemText}>{item.title}</Text>
                  </View>
                );
              }}
            />
          </View>

          <View style={styles.highlightsWrapper}>
              <View style={styles.highlightsTopBar}>
                <Text style={styles.highlightsTitle}>
                  Destaques
                </Text>

                <TouchableOpacity activeOpacity={.8}>
                  <Text
                    style={styles.highlightsButtonShowMore}
                  >
                    VER TODOS
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.highlightsList}>
                <ShopItem />
                <ShopItem />
                <ShopItem />
              </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
