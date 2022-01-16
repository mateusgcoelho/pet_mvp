import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FEFEFE",
      alignItems: "center",
      justifyContent: "center",
    },

    content: {
      flex: 1,
      width: "100%",
      maxHeight: 540,
      justifyContent: "space-around",
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 24,
      paddingRight: 24,
    },
    imageWrapper: {
      alignItems: "center",
      justifyContent: "center"
    },
    
    aboutWrapper: {
      width: "100%",
    },
    aboutTextWrapper: {},
    aboutTitle: {
      color: "#575757",
      fontFamily: "ReadexPro-SemiBold",
      fontSize: 25,
      textAlign: "center"
    },
    subTitle: {
      textAlign: "center",
      color: "#C1C1C1",
      fontSize: 18,
    },

    aboutControllersWrapper: {
      marginTop: 52,
    },

    logo: {
      width: 200,
      height: 90,
    }
});

export default styles;
