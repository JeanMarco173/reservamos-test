import React from "react";
import { View, Text, ScrollView } from "react-native";

import WeatherCard from "../weatherCard/WeatherCard.jsx";

import styles from "./weatherList.styles.js";

const WeatherList = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.city__name__text}>{item.display}</Text>
      <ScrollView horizontal={true}>
        {item.weatherPronostic.length &&
          item.weatherPronostic.map((element) => (
            <WeatherCard
              key={element.dt}
              date={parseInt(element.dt)}
              type={element.weather[0].description}
              maxTemp={parseInt(element.temp.max)}
              minTemp={parseInt(element.temp.min)}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default WeatherList;
