import { StyleSheet, Platform, Dimensions } from "react-native";

const height = Dimensions.get("screen").height;
const bodyHeight = height - 70;
const citiesContainerHeight = bodyHeight - 180;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    paddingHorizontal: "5%",
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  body: {
    width: "100%",
    height: bodyHeight,
  },
  search__container: {
    width: "100%",
    height: 130,
    paddingHorizontal: "5%",
    paddingVertical: 15,
    backgroundColor: "#030A8C",
  },
  search__text: {
    fontSize: 18,
    fontWeight: Platform.OS === "ios" ? "600" : "bold",
    color: "#FFFFFF",
  },
  search_input: {
    marginTop: 15,
    width: "100%",
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 20,
  },
  cities__container: {
    width: "100%",
    height: citiesContainerHeight,
    paddingVertical: 15,
  },
  message: {
    fontSize: 16,
    color: "#030A8C",
    fontWeight: Platform.OS === "ios" ? "500" : "bold",
    textAlign: "center",
  },
});

export default styles;
