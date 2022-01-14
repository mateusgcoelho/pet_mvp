import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center"
    },

    circlesWrapper: {
      width: "24%",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 64,
    },
    
    circle: {
      width: 18,
      height: 12,
      backgroundColor: "#503CCF",
      borderRadius: 8
    }
});

export default styles;
