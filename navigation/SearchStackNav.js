import { createStackNavigator } from "@react-navigation/stack";
import { MovieDetail } from "../screens/Home/MovieDetail";
import { SearchScreen } from "../screens/Search/SearchScreen";

const Stack = createStackNavigator();

export const SearchStackNav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} /> 
      </Stack.Navigator>
    );
};