import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import WeatherCard from "../weatherCard/WeatherCard.jsx";

import styles from "./weatherList.styles.js";

const WeatherList = (props) => {
  const { city, deleteCity } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header__container}>
        <Text style={styles.city__name__text}>{city.display}</Text>
        <TouchableOpacity onPress={() => deleteCity(city.id)}>
          <Feather name="delete" size={24} color="#254A5A" />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={true}
        data={city.weatherPronostic}
        renderItem={({ item }) => (
          <WeatherCard
            date={item.dt}
            maxTemp={item.temp.max}
            minTemp={item.temp.min}
            type={item.weather[0].main}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default WeatherList;
