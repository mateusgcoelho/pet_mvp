import { View, Image, Text, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import ShopExample from "../../../assets/shop.png";

import styles from "./styles";

export default function ShopItem({
  data,
  navigation,
  ...props
}: any): JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Shop", { shop: data })}
      activeOpacity={0.8}
      style={styles.container}
      {...props}
    >
      <View style={styles.aboutWrapper}>
        <Image source={ShopExample} style={styles.image} />

        <View style={styles.aboutTextsWrapper}>
          <Text style={styles.name}>{data.name}</Text>

          {data.deliveryFree && (
            <View style={styles.deliveryFreeWrapper}>
              <AntDesign name="inbox" size={12} color="#2E5392" />

              <Text style={styles.deliveryFreeText}>
                Entrega gratis disponível
              </Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.rattingWrapper}>
        <AntDesign name="star" size={16} color="#FFBE33" />

        <Text style={styles.rattingText}>{data.rating}</Text>
      </View>
    </TouchableOpacity>
  );
}
