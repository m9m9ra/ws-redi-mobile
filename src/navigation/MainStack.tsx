import {createStackNavigator} from "@react-navigation/stack";
import {HomeStack} from "./modules/HomeStack";
import {ChatScreen} from "../screens/ChatScreen";
import {ChatRiderScreen} from "../screens/ChatRiderScreen";
import {CallScreen} from "../screens/CallScreen";


export type MainStackParamList = {
    HomeStack: any,
    ChatScreen: any,
    ChatRiderScreen: any,
    CallScreen: any
}

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack = () => {

    return (
        <Stack.Navigator key={``}
                         initialRouteName={`HomeStack`}
                         screenOptions={{
                             headerShown: false
                         }}>

            <Stack.Screen name={`HomeStack`}
                          component={HomeStack}/>

            <Stack.Screen name={`ChatScreen`}
                          component={ChatScreen}/>

            <Stack.Screen name={`ChatRiderScreen`}
                          component={ChatRiderScreen}/>

            <Stack.Screen name={`CallScreen`}
                          component={CallScreen}/>
        </Stack.Navigator>
    )
}