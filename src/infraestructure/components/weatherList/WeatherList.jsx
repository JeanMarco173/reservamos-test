import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import WeatherCard from "../weatherCard/WeatherCard.jsx";

import styles from "./weatherList.styles.js";

const WeatherList = ({ item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header__container}>
        <Text style={styles.city__name__text}>{item.display}</Text>
        <Feather name="delete" size={24} color="#254A5A" />
      </TouchableOpacity>
      <ScrollView horizontal={true}>
        {item.weatherPronostic.length &&
          item.weatherPronostic.map((element) => (
            <WeatherCard
              key={element.dt}
              date={parseInt(element.dt)}
              type={element.weather[0].main}
              maxTemp={parseInt(element.temp.max)}
              minTemp={parseInt(element.temp.min)}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default WeatherList;
