import { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import CirclesSliderShown from "../../components/circlesSliderShown";
import ShopItem from "../../components/shopItem";

import Logo from "../../../assets/logo.png";
import AdvertisingImage from "../../../assets/advertising.png";

import styles from "./styles";

import CategoryList from "../../components/categoryList";
import GlobalStyles from "../../styles/GlobalStyles";

import { useScrollToTop } from "@react-navigation/native";

export default function Home({ navigation }: any): JSX.Element {
  const [advertisingIndex, setAdvertisingIndex] = useState(0);
  const [advertisingData, setAdvertisingData] = useState([
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
    },
  ]);

  const [shopsData, setShopsData] = useState([
    {
      id: "shop-1",
      name: "Ração em Casa",
      deliveryFree: true,
      rating: 5.0,
    },
    {
      id: "shop-2",
      name: "Med Pet",
      deliveryFree: false,
      rating: 3.2,
    },
  ]);

  const scrollRef = useRef<any>(null);

  useScrollToTop(scrollRef);

  const onViewRef = useRef(({ viewableItems }: any): void => {
    if (viewableItems.length < 2) {
      setAdvertisingIndex(viewableItems[0].index);
    }
  });

  return (
    <>
      <StatusBar backgroundColor="#FEFEFE" style="dark" />

      <SafeAreaView
        style={{
          ...styles.container,
          ...GlobalStyles.safeAreaView,
        }}
      >
        <ScrollView
          ref={scrollRef}
          overScrollMode={"never"}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 56 }}
          alwaysBounceVertical={true}
          style={styles.content}
        >
          <View style={styles.headerWrapper}>
            <Image source={Logo} style={{ width: 100, height: 52 }} />
          </View>

          <View style={styles.welcomeWrapper}>
            <View style={styles.welcomeTextWrapper}>
              <Text style={styles.welcomeUserText}>Hey, João Mateus...</Text>
              <Text style={styles.welcomeText}>O que seu Pet precisa?</Text>
            </View>
          </View>

          <View style={styles.advertisingWrapper}>
            <FlatList
              data={advertisingData}
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
              data={advertisingData}
              stepIndex={advertisingIndex}
              design="dark"
            />
          </View>

          <CategoryList navigation={navigation} />

          <View style={styles.highlightsWrapper}>
            <View style={styles.highlightsTopBar}>
              <Text style={styles.highlightsTitle}>Destaques</Text>

              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.highlightsButtonShowMore}>VER TODOS</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.highlightsList}>
              {shopsData.map((shop) => (
                <ShopItem key={shop.id} data={shop} navigation={navigation} />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
