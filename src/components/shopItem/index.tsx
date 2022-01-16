import { View, Image, Text, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import ShopExample from "../../../assets/shop.png";

import styles from "./styles";

export default function ShopItem(): JSX.Element {
    return (
        <TouchableOpacity 
            activeOpacity={.8}
            style={styles.container}
        >
            <View style={styles.aboutWrapper}>
                <Image source={ShopExample} style={styles.image} />

                <View style={styles.aboutTextsWrapper}>
                    <Text style={styles.name}>Ração em Casa</Text>

                    <View style={styles.deliveryFreeWrapper}>
                        <AntDesign name="inbox" size={12} color="#2E5392" />

                        <Text style={styles.deliveryFreeText}>
                            Entrega gratis disponível
                        </Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.rattingWrapper}>
                <AntDesign name="star" size={16} color="#FFBE33" />

                <Text style={styles.rattingText}>
                    5.0
                </Text>
            </View>
        </TouchableOpacity>
    );
}