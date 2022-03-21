import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header__container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  city__name__text: {
    fontSize: 18,
    fontWeight: Platform.OS === "ios" ? "600" : "bold",
    color: "#000000",
    marginBottom: 5,
  },
});
export default styles;
