import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: "100%",
    paddingHorizontal: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: "#EBEBEB",
    justifyContent: "center",
  },
  city__text: {
    fontSize: 16,
    color: "#030A8C",
    fontWeight: Platform.OS === "ios" ? "600" : "bold",
  },
});

export default styles;
