import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { Entypo, Ionicons } from "@expo/vector-icons";

import ShopExample from "../../../assets/shop.png";

import GlobalStyles from "../../styles/GlobalStyles";

import styles from "./styles";

export default function Shop({ route, navigation }: any): JSX.Element {
  const { shop } = route.params;

  const goBack = (): void => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar backgroundColor="#FEFEFE" style="dark" />

      <SafeAreaView
        style={{
          ...styles.container,
          ...GlobalStyles.safeAreaView,
        }}
      >
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={goBack}>
            <Entypo name="chevron-left" size={24} color="#5949C1" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>{shop.name.toUpperCase()}</Text>
        </View>

        <ScrollView
          style={styles.content}
          overScrollMode={"never"}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 64 }}
          alwaysBounceVertical={true}
        >
          <View style={styles.aboutShopWrapper}>
            <View style={styles.aboutShopHeader}>
              <Image source={ShopExample} style={styles.aboutShopImage} />

              <View style={styles.aboutShopTexts}>
                <Text style={styles.aboutShopName}>{shop.name}</Text>
                <Text style={styles.aboutShopDescription}>
                  Descrição perfeita para o c c seu pet comprar e desgustar
                  todas
                </Text>
              </View>

              <View style={styles.aboutShopController}>
                <Ionicons name="heart-outline" size={24} color="#F2F2F2" />
              </View>
            </View>
            <View style={styles.ratingWrapper}>
              <Text>30 Avaliações</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
