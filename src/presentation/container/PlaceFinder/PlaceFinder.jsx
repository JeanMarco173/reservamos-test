import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import commonStyles from "./placeFinder.styles.js";

const PlaceFinder = ({ navigation }) => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Text>Ciudad</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Return</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PlaceFinder;
