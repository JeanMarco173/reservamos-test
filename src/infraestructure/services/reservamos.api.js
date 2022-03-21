import { reservamosAPI } from "../../application/persist/config.js";
import axios from "axios";

const getCities = async (query) => {
  try {
    const url = `${reservamosAPI}api/v2/places?q=${query}`;
    const { data } = await axios.get(url);
    if (data.length) {
      return data;
    } else if (!data.length) {
      return { message: "No se encontraron coincidencias." };
    } else {
      return { message: "Error buscando el lugar. Intentelo más tarde." };
    }
  } catch (error) {
    return { message: "Error interno del servidor. Intentelo más tarde." };
  }
};

export { getCities };
