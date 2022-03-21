import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import WeatherList from "../../../infraestructure/components/weatherList/WeatherList.jsx";

import { useStore } from "../../../application/store/CitiesProvider.js";

import commonStyles from "../../../infraestructure/components/styles/common.styles.js";
import styles from "./home.styles.js";

const Home = ({ navigation }) => {
  const { cities } = useStore();

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.header}>
        <Image
          style={commonStyles.logo}
          source={require("../../../../assets/reservamos-logo.png")}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.finder__container}>
          <Text style={styles.finder__label}>
            Conoce el pronóstico del tiempo antes de viajar
          </Text>
          <TouchableOpacity
            style={styles.finder__button}
            onPress={() => navigation.navigate("PlaceFinderScreen")}
          >
            <Text style={styles.finder__text}>Buscar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cities__container}>
          <FlatList
            data={cities}
            renderItem={WeatherList}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
