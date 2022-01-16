import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
