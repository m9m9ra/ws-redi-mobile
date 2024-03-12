import {ScrollView, StyleSheet} from "react-native";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {HomeStackParamList} from "../navigation/modules/HomeStack";
import {UserInfo} from "../components/UserInfo";
import {useLayoutEffect} from "react";
import {Appbar, Text} from "react-native-paper";
import {Colors} from "react-native/Libraries/NewAppScreen";

type props = BottomTabScreenProps<HomeStackParamList, `WalletScreen`>;
export const WalletScreen = ({navigation, route}: props) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Appbar.Header elevated={true}
                                         style={{
                                             paddingHorizontal: 15,
                                             backgroundColor: Colors.lighter
                                         }}>
                <Text children={`Wallet`}
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
        </ScrollView>
    )
};

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingVertical: 27
    }
});