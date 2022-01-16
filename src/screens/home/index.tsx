import { useEffect, useRef, useState } from "react";
import { SafeAreaView, Image, Text, View, FlatList, ScrollView, TouchableOpacity } from "react-native";

import { StatusBar } from "expo-status-bar";

import { FontAwesome } from "@expo/vector-icons"; 
import { Ionicons } from "@expo/vector-icons";

import CirclesSliderShown from "../../components/circlesSliderShown";
import ShopItem from "../../components/shopItem";

import Logo from "../../../assets/logo.png";
import AdvertisingImage from "../../../assets/advertising.png";

import styles from "./styles";
import CategoryItem from "../../components/categoryItem";
import CategoryList from "../../components/categoryList";
import GlobalStyles from "../../styles/GlobalStyles";
import { useScrollToTop } from "@react-navigation/native";

export default function Home({ navigation }: any): JSX.Element {
  const [advertisingIndex, setAdvertisingIndex] = useState(0);

  const scrollRef = useRef<any>(null);
  
  useScrollToTop(scrollRef);

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

  const onViewRef = useRef(({viewableItems}: any): void => {
    if (viewableItems.length < 2) {
      setAdvertisingIndex(viewableItems[0].index);
    }
  })

  return (
    <>
      <StatusBar backgroundColor="#FEFEFE" style="dark" />

      <SafeAreaView style={{
        ...styles.container,
        ...GlobalStyles.safeAreaView,
      }}>
        <ScrollView
          ref={scrollRef}
          overScrollMode={"never"}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 56, }}
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

          <CategoryList navigation={navigation} />

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
              </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
