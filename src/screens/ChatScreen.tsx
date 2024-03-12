import {RefreshControl, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {ChatItem} from "../components/ChatItem";
import {useLayoutEffect, useState} from "react";
import {Appbar, Icon, Searchbar, Text} from "react-native-paper";
import {colorSchema} from "../utils/colorSchema";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {MainStackParamList} from "../navigation/MainStack";

type props = StackScreenProps<MainStackParamList, `ChatScreen`>;
export const ChatScreen = ({navigation, route}: props) => {
    const [refreshing, setRefreshing] = useState<boolean>(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Appbar.Header elevated={true}
                                         style={{
                                             paddingHorizontal: 15,
                                             backgroundColor: Colors.lighter
                                         }}>
                <TouchableOpacity disabled={false}
                                  children={<Icon size={32}
                                                  source={`arrow-left-bold-box-outline`}
                                                  color={colorSchema.primary}/>}
                                  onPress={() => {
                                      navigation.goBack();
                                  }}/>
                <Text children={`Chats`}
                      style={{
                          width: `70%`,
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
                    contentContainerStyle={style.container}
                    refreshControl={<RefreshControl refreshing={refreshing}
                                                    onRefresh={() => {
                                                        setRefreshing(true);
                                                        setTimeout(() => {
                                                            setRefreshing(false);
                                                        }, 2000);
                                                    }}/>}>
            <View>
                <Searchbar value={``}
                           mode={`bar`}
                           placeholder={`Search for a driver`}
                           inputMode={`text`}
                           style={{
                               backgroundColor: `#CFCFCF`,
                               borderRadius: 8
                           }}/>
            </View>

            <View children={[...Array(33).keys()].map((item, index) => <ChatItem key={index}/>)}
                  style={{
                      gap: 16
                  }}/>
        </ScrollView>
    )
};

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 25,
        paddingTop: 21,
        gap: 27
    }
});