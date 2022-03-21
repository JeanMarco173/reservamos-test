import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import debounce from "lodash/debounce";
import { FontAwesome } from "@expo/vector-icons";
import { searchCities } from "../../../infraestructure/services/reservamos.api.js";
import { getWeatherFor7Days } from "../../../infraestructure/services/openweather.api.js";
import CityCard from "../../../infraestructure/components/cityCard/CityCard.jsx";

import { useDispatch } from "../../../application/store/CitiesProvider.js";
import { types } from "../../../application/store/CitiesReducer.js";

import commonStyles from "../../../infraestructure/components/styles/common.styles.js";
import styles from "./placeFinder.styles";

const PlaceFinder = ({ navigation }) => {
  const dispatch = useDispatch();
  const [cities, setCities] = useState([]);
  const [message, setMessage] = useState(
    "¿Listo para viajar? Busca tu destino..."
  );

  const searchCityHandler = async (text) => {
    const response = await searchCities(text);
    if (response.length) {
      setCities(response.filter((city) => city.result_type === "city"));
    } else {
      setMessage(response.message);
    }
  };

  const searchCity = debounce(searchCityHandler, 300);

  const selectCityHandler = async (city) => {
    const response = await getWeatherFor7Days({
      lat: city.lat,
      lon: city.long,
    });
    if (response.length) {
      const newCity = {
        id: city.id,
        display: city.display,
        weatherPronostic: response,
      };
      dispatch({ type: types.add, payload: newCity });
      navigation.goBack();
    } else {
      setMessage(response.message);
    }
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#254A5A" />
        </TouchableOpacity>
        <Image
          style={commonStyles.logo}
          source={require("../../../../assets/reservamos-logo.png")}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.search__container}>
          <Text style={styles.search__text}>Ciudad</Text>
          <TextInput
            style={styles.search_input}
            placeholder="Buscar"
            onChangeText={searchCity}
          />
        </View>
        <View style={styles.cities__container}>
          {cities.length ? (
            <FlatList
              data={cities}
              renderItem={({ item }) => (
                <CityCard city={item} selectCity={selectCityHandler} />
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <Text style={styles.message}>{message}</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlaceFinder;
