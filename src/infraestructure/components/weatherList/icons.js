const base = "../../../../assets/tempIcons/";
const weatherIcons = (type) => {
  switch (type) {
    case "Clear":
      return { uri: require(`${base}clearsky.png`) };
    case "Clouds":
      return { uri: require(`${base}fewclouds.png`) };
    case "Snow":
      return { uri: require(`${base}snow.png`) };
    case "Rain":
      return { uri: require(`${base}rain.png`) };
    case "Thunderstorm":
      return { uri: require(`${base}thunderstorm.png`) };
    default:
      return { uri: require(`${base}fewclouds.png`) };
  }
};

export default weatherIcons;
