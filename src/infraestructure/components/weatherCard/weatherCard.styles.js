import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#BFBFBF",
    paddingHorizontal: 10,
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 15,
  },
  date__text: {
    fontSize: 18,
    fontWeight: Platform.OS === "ios" ? "500" : "bold",
    color: "#737373",
  },
  icon: {
    width: 64,
    height: 64,
    resizeMode: "contain",
  },
  temperature__text: {
    fontSize: 20,
    fontWeight: Platform.OS === "ios" ? "500" : "bold",
    color: "#0D0D0D",
  },
});

export default styles;
