import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#5949C1",
      alignItems: "center",
      justifyContent: "center"
    },

    content: {
      flex: 1,
      width: "100%",
      justifyContent: "space-between",
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 24,
      paddingRight: 24,
    },

    photo: {
      width: "100%",
      height: 220,
    },

    topBar: {
      width: "100%",
      height: 40,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    skipButtonText: {
      color: "#FEFEFE",
      fontFamily: "ReadexPro-Bold",
      fontSize: 14,
    },

    aboutWrapper: {
      width: "100%",
      alignItems: "center",
    },
    title: {
      color: "#FEFEFE",
      fontFamily: "ReadexPro-Bold",
      fontSize: 32,
    },
    paragraph: {
      color: "#FEFEFE",
      fontFamily: "ReadexPro-Light",
      fontSize: 18,
    },

    controllersWrapper: {
      width: "100%",
      justifyContent: "flex-end",
      alignItems: "flex-end"
    },

    nextButton: {
      width: 80,
      height: 64,
      borderRadius: 8,
      backgroundColor: "#503CCF",
      alignItems: "center",
      justifyContent: "center"
    },


    stepControllersWrapper: {
      width: "100%",
      alignItems: "center"
    },
    stepControllersCirclesWrapper: {
      width: "24%",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 64,
    },
    stepControllersCircle: {
      width: 18,
      height: 12,
      backgroundColor: "#503CCF",
      borderRadius: 8
    }
});

export default styles;
