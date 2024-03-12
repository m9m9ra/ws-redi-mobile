import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-paper";
import {HomeScreen} from "../../screens/HomeScreen";
import {colorSchema} from "../../utils/colorSchema";
import {WalletScreen} from "../../screens/WalletScreen";
import {TrackScreen} from "../../screens/TrackScreen";
import {ProfileScreen} from "../../screens/ProfileScreen";
import {StyleSheet} from "react-native";

export type HomeStackParamList = {
    HomeScreen: any,
    WalletScreen: any,
    TrackScreen: any,
    ProfileScreen: any
};

const Tab = createBottomTabNavigator<HomeStackParamList>()
export const HomeStack = () => {
    return (
        <Tab.Navigator initialRouteName={`HomeScreen`}
                       screenOptions={{
                           headerShown: false,
                           tabBarStyle: {
                               height: 56
                           }
                       }}>

            <Tab.Screen name={`HomeScreen`}
                        component={HomeScreen}
                        options={{
                            tabBarLabel: "Home",
                            tabBarLabelStyle: style.tabBarLabel,
                            tabBarIcon: (props) => <Icon size={28}
                                                         source={`home-outline`}
                                                         color={props.focused ? colorSchema.primary : `#A7A7A7`}/>
                        }}/>

            <Tab.Screen name={`WalletScreen`}
                        component={WalletScreen}
                        options={{
                            tabBarLabel: "Wallet",
                            tabBarLabelStyle: style.tabBarLabel,
                            tabBarIcon: (props) => <Icon size={28}
                                                         source={`wallet`}
                                                         color={props.focused ? colorSchema.primary : `#A7A7A7`}/>
                        }}/>

            <Tab.Screen name={`TrackScreen`}
                        component={TrackScreen}
                        options={{
                            tabBarLabel: "Track",
                            tabBarLabelStyle: style.tabBarLabel,
                            tabBarIcon: (props) => <Icon size={28}
                                                         source={`car`}
                                                         color={props.focused ? colorSchema.primary : `#A7A7A7`}/>
                        }}/>

            <Tab.Screen name={`ProfileScreen`}
                        component={ProfileScreen}
                        options={{
                            tabBarLabel: "Profile",
                            tabBarLabelStyle: style.tabBarLabel,
                            tabBarIcon: (props) => <Icon size={28}
                                                         source={`account-circle-outline`}
                                                         color={props.focused ? colorSchema.primary : `#A7A7A7`}/>
                        }}/>
        </Tab.Navigator>
    )
};

const style = StyleSheet.create({
    tabBarLabel: {
        paddingBottom: 4,
        fontSize: 12,
        fontWeight: `700`
    }
})