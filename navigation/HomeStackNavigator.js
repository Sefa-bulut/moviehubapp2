import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { MovieDetail } from "../screens/Home/MovieDetail";

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} /> 
      </Stack.Navigator>
    );
};