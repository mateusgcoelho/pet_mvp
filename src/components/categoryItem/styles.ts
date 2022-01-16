import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    categoryItemWrapper: {
      alignItems: "center",
      justifyContent: "center",
      marginRight: 16
    },
    categoryItem: {
      height: 72,
      width: 72,
      backgroundColor: "#F1F1F1",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    categoryItemText: {
      marginTop: 8,
      fontFamily: "ReadexPro-SemiBold",
      fontSize: 14,
      color: "#C1C1C1"
    },
});

export default styles;
