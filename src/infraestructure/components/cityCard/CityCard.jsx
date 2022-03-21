import React from "react";
import { TouchableOpacity, Text, ScrollView } from "react-native";

import WeatherCard from "../weatherCard/WeatherCard.jsx";

import styles from "./cityCard.styles.js";

const CityCard = (props) => {
  const { city, selectCity } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={() => selectCity(city)}>
      <Text style={styles.city__text}>{city.display}</Text>
    </TouchableOpacity>
  );
};

export default CityCard;
