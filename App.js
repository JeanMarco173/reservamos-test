import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CitiesProvider from "./src/application/store/CitiesProvider.js";

import HomeScreen from "./src/presentation/container/Home/Home.jsx";
import PlaceFinderScreen from "./src/presentation/container/PlaceFinder/PlaceFinder.jsx";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <CitiesProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PlaceFinderScreen"
            component={PlaceFinderScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </CitiesProvider>
    </NavigationContainer>
  );
}

export default App;
