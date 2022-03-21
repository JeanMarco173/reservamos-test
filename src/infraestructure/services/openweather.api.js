import {
  OpenWeatherToken,
  OpenWeatherAPI,
} from "../../application/persist/config.js";
import axios from "axios";

const getWeatherFor7Days = async (query) => {
  try {
    const url = `${OpenWeatherAPI}data/2.5/onecall?lat=${query.lat}&lon=${query.lon}exclude=minutely,hourly,alert&appid=${OpenWeatherToken}&lang=es&units=metric`;
    const { data } = await axios.get(url);
    if (!data.code) {
      return data.daily;
    } else {
      return {
        message:
          "Error consultando las condiciones del clima. Intentelo más tarde.",
      };
    }
  } catch (error) {
    return { message: "Error interno del servidor. Intentelo más tarde." };
  }
};

export { getWeatherFor7Days };
