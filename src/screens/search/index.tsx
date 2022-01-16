import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, TextInput, View } from "react-native";

import GlobalStyles from "../../styles/GlobalStyles";

import styles from "./styles";

export default function Search() {
    return (
        <>
            <StatusBar backgroundColor="#FEFEFE" style="dark" />

            <SafeAreaView style={{
                ...styles.container,
                ...GlobalStyles.safeAreaView,
            }}>
                <ScrollView
                    overScrollMode={"never"}
                    removeClippedSubviews={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 64, }}
                    alwaysBounceVertical={true}
                    style={styles.content}
                >
                    <View style={styles.headerWrapper}>
                        <View style={styles.searchInputWrapper}>
                            <AntDesign
                                name="search1"
                                size={22}
                                color={"#FF7631"} />

                            <TextInput 
                                selectionColor={"#FF7631"}
                                maxLength={20}
                                style={styles.searchInput}
                                placeholder="Item ou Loja"
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
