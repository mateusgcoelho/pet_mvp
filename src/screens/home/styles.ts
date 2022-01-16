import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FEFEFE",
    },
    
    content: {
      flex: 1,
      width: "100%",
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 20,
      paddingRight: 20,
    },

    headerWrapper: {
      width: "100%",
      height: 72,
      alignItems: "flex-start",
      justifyContent: "center"
    },

    welcomeWrapper: {
      width: "100%",
      height: 72,
      alignItems: "center",
      justifyContent: "center"
    },
    welcomeTextWrapper: {
      width: "100%",
    },
    welcomeUserText: {
      fontFamily: "ReadexPro-Light",
      color: "#949494",
      fontSize: 16,
      lineHeight: 17
    },
    welcomeText: {
      fontFamily: "ReadexPro-SemiBold",
      color: "#575757",
      fontSize: 24,
      lineHeight: 26
    },

    advertisingWrapper: {
      // width: "100%",
    },
    advertisingItem: {
      marginRight: 24,
    },
    advertisingItemImage: {
      width: 320,
      height: 140,
      borderRadius: 8
    },

    highlightsWrapper: {
      width: "100%",
      borderTopWidth: .5,
      borderTopColor: "#E9E9E9"
    },
    highlightsTopBar: {
      width: "100%",
      paddingTop: 14,
      paddingBottom: 14,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    highlightsTitle: {
      fontFamily: "ReadexPro-SemiBold",
      fontSize: 20,
      color: "#575757"
    },
    highlightsButtonShowMore: {
      fontSize: 12,
      fontFamily: "ReadexPro-Bold",
      color: "#C4C4C4"
    },
    highlightsList: {
      marginTop: 14,
    },

    // categoryWrapper: {
    //   marginTop: 40,
    //   marginBottom: 40,
    // },
});

export default styles;
