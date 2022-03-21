import { StyleSheet, Platform, Dimensions } from "react-native";

const height = Dimensions.get("screen").height;
const headerHeight = height * 0.15;
const bodyHeight = height * 0.85;
const citiesContainerHeight = bodyHeight - 200;

const styles = StyleSheet.create({
  header: {
    height: headerHeight,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: 30,
    resizeMode: "contain",
  },
  body: {
    height: bodyHeight,
    width: "100%",
  },
  finder__container: {
    height: 100,
    paddingTop: 15,
    alignItems: "center",
  },
  finder__label: {
    fontSize: 16,
    fontWeight: Platform.OS === "ios" ? "600" : "bold",
  },
  finder__button: {
    marginTop: 10,
    height: 45,
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: "#EBEBEB",
  },
  finder__text: {
    fontSize: 18,
    fontWeight: Platform.OS === "ios" ? "500" : "normal",
    color: "#737373",
  },
  cities__container: {
    marginTop: 20,
    paddingHorizontal: "5%",
    height: citiesContainerHeight,
  },
});

export default styles;
