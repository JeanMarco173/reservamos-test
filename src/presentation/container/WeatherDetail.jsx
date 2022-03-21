import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import commonStyles from "../../infraestructure/components/styles/common.styles.js";

const WeatherDetail = ({ navigation }) => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Return</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WeatherDetail;
