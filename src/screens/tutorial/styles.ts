import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5949C1',
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 24,
      paddingRight: 24,
    },

    content: {
      flex: 1,
      // backgroundColor: "green",
      justifyContent: "space-between",
    },

    photo: {
      width: "100%",
      height: 230,
    },

    topBar: {
      // backgroundColor: "red",
      height: 40,
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    skipButtonText: {
      color: "#FEFEFE",
      fontWeight: "bold",
      fontSize: 14,
    },

    aboutWrapper: {
      width: "100%",
      // backgroundColor: "red",
      alignItems: "center",
    },
    title: {
      color: "#FEFEFE",
      fontWeight: "bold",
      fontSize: 32,
    },
    paragraph: {
      color: "#FEFEFE",
      fontSize: 18,
    },

    controllersWrapper: {
      width: "100%",
      // backgroundColor: "red",
      justifyContent: "flex-end",
      alignItems: "flex-end"
    },

    nextButton: {
      width: 80,
      height: 64,
      borderRadius: 8,
      backgroundColor: "#503CCF",
    }
});

export default styles;
