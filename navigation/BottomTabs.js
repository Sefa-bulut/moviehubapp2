import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ProfileScreen } from "../screens/Profile/ProfileScreen";
import { HomeStackNavigator } from "./HomeStackNavigator";
import { SearchStackNav } from "./SearchStackNav";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Movies" component={HomeStackNavigator} options={{tabBarIcon:()=><AntDesign name="home" size={24} color="black" />}} ></Tab.Screen>
            <Tab.Screen name="Search" component={SearchStackNav} options={{tabBarIcon:()=><Feather name="search" size={24} color="black" />}}></Tab.Screen>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon:()=><AntDesign name="profile" size={24} color="black" />}}></Tab.Screen>
        </Tab.Navigator>
    );
}