import {ScrollView, StyleSheet, View} from "react-native";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {HomeStackParamList} from "../navigation/modules/HomeStack";
import {useLayoutEffect} from "react";
import {Appbar, Avatar, Divider, Icon, Switch, Text} from "react-native-paper";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {ProfileSettingsList} from "../components/ProfileSettingsList";
import {UserInfo} from "../components/UserInfo";

type props = BottomTabScreenProps<HomeStackParamList, `ProfileScreen`>;
export const ProfileScreen = ({navigation, route}: props) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Appbar.Header elevated={true}
                                         style={{
                                             paddingHorizontal: 15,
                                             backgroundColor: Colors.lighter
                                         }}>
                <Text children={`Profile`}
                      style={{
                          width: `100%`,
                          textAlign: `center`,
                          fontSize: 16,
                          color: `#A7A7A7`,
                          fontWeight: `700`
                      }}/>
            </Appbar.Header>
        })
    }, []);

    return (
        <ScrollView horizontal={false}
                    contentContainerStyle={style.container}>

            <UserInfo/>

            <Divider style={{
                width: 0,
                height: 27
            }}/>

            <View style={style.darkSwitch}>
                <Text children={`Enable dark Mode`}
                      style={{
                          fontSize: 18,
                          fontWeight: `700`
                      }}/>
                <Switch/>
            </View>

            <Divider style={{
                width: 0,
                height: 27
            }}/>

            <ProfileSettingsList/>

            <Divider style={{
                width: 0,
                height: 11
            }}/>

        </ScrollView>
    )
};

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingVertical: 27
    },
    darkSwitch: {
        flexDirection: `row`,
        alignItems: `center`,
        justifyContent: `space-between`,
        paddingHorizontal: 1
    }
});