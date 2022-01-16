import { Platform, StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    safeAreaView: {
        paddingTop: Platform.OS === 'android' ? 24 : 0
    }
});

export default GlobalStyles;
