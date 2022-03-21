import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import WeatherList from "../../../infraestructure/components/weatherList/WeatherList.jsx";

import commonStyles from "../../../infraestructure/components/styles/common.styles.js";
import styles from "./home.styles.js";

const Home = ({ navigation }) => {
  const destinations = [
    {
      id: 1,
      display: "Cusco",
      weatherPronostic: [
        {
          dt: 1647799200,
          temp: { max: 25, min: 7 },
          weather: { main: "clear sky" },
        },
        {
          dt: 1647799200,
          temp: { max: 25, min: 7 },
          weather: { main: "clear sky" },
        },
        {
          dt: 1647799200,
          temp: { max: 25, min: 7 },
          weather: { main: "rain" },
        },
      ],
    },
    {
      id: 2,
      display: "Name Test",
      weatherPronostic: [
        {
          dt: 1647799200,
          temp: { max: 25, min: 7 },
          weather: { main: "clear sky" },
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../../../assets/reservamos-logo.png")}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.finder__container}>
          <Text style={styles.finder__label}>¿A dónde quieres viajar?</Text>
          <TouchableOpacity
            style={styles.finder__button}
            onPress={() => navigation.navigate("PlaceFinderScreen")}
          >
            <Text style={styles.finder__text}>Buscar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cities__container}>
          <FlatList data={destinations} renderItem={WeatherList} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
