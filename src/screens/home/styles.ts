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
      width: "100%",
    },
    advertisingItem: {
      height: 80,
      width: 120,
      backgroundColor: "red",
      marginRight: 24,
    }
});

export default styles;
