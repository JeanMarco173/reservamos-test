import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/presentation/container/Home/Home.jsx";
import PlaceFinderScreen from "./src/presentation/container/PlaceFinder/PlaceFinder.jsx";
import WeatherDetailScreen from "./src/presentation/container/WeatherDetail/WeatherDetail.jsx";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WeatherDetailScreen"
          component={WeatherDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlaceFinderScreen"
          component={PlaceFinderScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
