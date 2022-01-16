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

      height: 60,

      alignItems: "center",
      justifyContent: "center"
    },

    searchInputWrapper: {
      backgroundColor: "#F2F2F2",
      height: 52,
      width: "100%",
      borderRadius: 4,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 14,
    },
    searchInput: {
      width: "100%",
      color: "#949494",
      fontSize: 16,
      marginLeft: 12,
      fontFamily: "ReadexPro-Regular"
    }
});

export default styles;
