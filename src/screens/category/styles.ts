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

      padding: 12,
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

    moreOrdersWrapper: {
      width: "100%"
    },
    moreOrdersText: {
      fontFamily: "ReadexPro-Medium",
      fontSize: 18,
      color: "#575757"
    },
    moreOrdersList: {
      marginTop: 12,
    }
});

export default styles;
