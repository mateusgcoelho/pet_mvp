import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignContent: "center",
        paddingTop: 12,
        paddingBottom: 12,
    },

    aboutWrapper: {
        flexDirection: "row",
        alignContent: "center"
    },
    aboutTextsWrapper: {
        marginLeft: 14,
        justifyContent: "center",
        alignContent: "center"
    },

    image: {
        width: 72,
        height: 72,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "#E5E5E5"
    },

    name: {
        fontFamily: "ReadexPro-Medium",
        color: "#2A2A2A",
        fontSize: 14,
    },

    deliveryFreeWrapper: {
        backgroundColor: "#BED6FF",

        padding: 2,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 4,

        flexDirection: "row",
        alignItems: "center",
    },
    deliveryFreeText: {
        fontFamily: "ReadexPro-Light",
        color: "#2E5392",
        fontSize: 10,
        marginLeft: 4,
    },

    rattingWrapper: {
        alignItems: "center",
        justifyContent: "center"
    },
    rattingText: {
        fontSize: 14,
        fontFamily: "ReadexPro-SemiBold",
        color: "#FFBE33"
    }
});

export default styles;
