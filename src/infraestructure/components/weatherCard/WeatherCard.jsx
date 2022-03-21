import React from "react";
import { View, Image, Text } from "react-native";
import moment from "moment";

import styles from "./weatherCard.styles.js";
import weatherIcons from "../weatherList/icons.js";

const WeatherCard = ({ date, maxTemp, minTemp, type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date__text}>{moment(date).format("DD/MM/YYYY")}</Text>
      <Image style={styles.icon} source={weatherIcons(type).uri} />
      <Text style={styles.temperature__text}>
        {maxTemp}°. {minTemp}° C
      </Text>
    </View>
  );
};

export default WeatherCard;
