import { createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { ScreenHome, ScreenProfile, ScreenLogBook} from '../screens';
import { Ionicons, FontAwesome, Octicons } from '@expo/vector-icons';

type MenuTabParam = {
    Home: undefined
    Profile: undefined
    LogBook: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Home">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTab() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ScreenHome}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="home-outline" size={24} color="black" />
                    )
                }}

            />

            <Tab.Screen name="LogBook" component={ScreenLogBook}
                options={{
                    tabBarIcon: () => (
                        <Octicons name="graph" size={24} color="black" />                    )
                }}

            />

            <Tab.Screen name="Profile" component={ScreenProfile}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="user-o" size={24} color="black" />
                   )
                }}

            />

        </Tab.Navigator>
    )
}