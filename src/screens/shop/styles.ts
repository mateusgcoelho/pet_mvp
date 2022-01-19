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

      padding: 14,
      borderBottomWidth: .3,
      borderBottomColor: "#E9E9E9",
      flexDirection: "row",
      alignItems: "center",
    },
    headerTitle: {
      width: "85.5%",
      fontFamily: "ReadexPro-Medium",
      fontSize: 14,
      textAlign: "center",
      color: "#575757"
    },

    aboutShopWrapper: {
      marginTop: 12,
    },
    aboutShopHeader: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center"
    },
    aboutShopImage: {
      width: 64,
      height: 64,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: "#E5E5E5"
    },
    aboutShopTexts: {
      width: "100%",
      maxWidth: 220,
      marginLeft: 8
    },
    aboutShopController: {
      marginLeft: 4,
    },
    aboutShopName: {
      fontFamily: "ReadexPro-SemiBold",
      fontSize: 14,
      lineHeight: 15,
      color: "#575757"
    },
    aboutShopDescription: {
      fontFamily: "ReadexPro-Light",
      fontSize: 12,
      color: "#C4C4C4"
    },

    ratingWrapper: {

    },
    ratingText: {
      
    }
});

export default styles;
