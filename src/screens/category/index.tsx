import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Entypo } from "@expo/vector-icons";

import CategoryList from "../../components/categoryList";
import ShopItem from "../../components/shopItem";

import GlobalStyles from "../../styles/GlobalStyles";

import styles from "./styles";
import { useEffect } from "react";

export default function Category({ route, navigation }: any): JSX.Element {
    const { categoryId } = route.params;

    const goBack = (): void => {
        navigation.goBack();
    }

    return (
        <>
            <StatusBar backgroundColor="#FEFEFE" style="dark" />

            <SafeAreaView style={{
                ...styles.container,
                ...GlobalStyles.safeAreaView,
            }}>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={goBack}>
                        <Entypo name="chevron-left" size={24} color="#5949C1" />
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>{categoryId.toUpperCase()}</Text>
                </View>

                <ScrollView
                    style={styles.content}
                    overScrollMode={"never"}
                    removeClippedSubviews={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 64, }}
                    alwaysBounceVertical={true}
                >
                    <CategoryList navigation={navigation} itemActiveId={categoryId} style={{ marginTop: 12, marginBottom: 26, }} />
                    
                    <View style={styles.moreOrdersWrapper}>
                        <Text style={styles.moreOrdersText}>Mais Pedidos</Text>

                        <View style={styles.moreOrdersList}>
                            <ShopItem />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}