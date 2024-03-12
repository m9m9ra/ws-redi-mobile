import {View, StyleSheet, TouchableOpacity, Image} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {MainStackParamList} from "../navigation/MainStack";
import {useLayoutEffect, useState} from "react";
import {Appbar, Avatar, Icon, Text, TextInput} from "react-native-paper";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {colorSchema} from "../utils/colorSchema";

type props = StackScreenProps<MainStackParamList, `ChatRiderScreen`>;
export const ChatRiderScreen = ({navigation, route}: props) => {
    const [message, setMessage] = useState<string>(``);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Appbar.Header elevated={true}
                                         style={{
                                             paddingHorizontal: 15,
                                             backgroundColor: Colors.lighter,
                                             justifyContent: `space-between`,
                                         }}>
                <TouchableOpacity disabled={false}
                                  children={<Icon size={32}
                                                  source={`arrow-left-bold-box-outline`}
                                                  color={colorSchema.primary}/>}
                                  onPress={() => {
                                      navigation.goBack();
                                  }}/>
                <View style={{flexDirection: `row`, alignItems: `center`, gap: 6}}>
                    <Avatar.Image size={38}
                                  source={require(`./../assets/image/avatar.png`)}/>
                    <Text children={`Chinoso James`}
                          style={{
                              textAlign: `center`,
                              fontSize: 16,
                              fontWeight: `600`
                          }}/>
                </View>
                <TouchableOpacity disabled={false}
                                  children={<Icon size={32}
                                                  source={`phone-outline`}
                                                  color={colorSchema.primary}/>}
                                  onPress={() => {
                                      navigation.navigate(`CallScreen`);
                                  }}/>
            </Appbar.Header>
        })
    }, []);

    return (
        <View style={style.container}>
            <View style={{flex: 1}}/>

            <View style={style.messageBlock}>
                <TouchableOpacity children={<Icon size={32} source={`emoticon-devil-outline`}/>}/>

                <TextInput value={message}
                           onChangeText={text => setMessage(text)}
                           mode={`outlined`}
                           onFocus={(e) => {
                               // console.log(e);
                           }}
                           inputMode={`text`}
                           placeholder={`Enter message`}
                           right={<TextInput.Icon size={24} icon={`microphone-outline`}/>}
                           style={{
                               width: `70%`,
                               height: 40,
                               // backgroundColor: `#CFCFCF`
                               backgroundColor: `#FFFFFF`
                           }}/>

                <Image source={require(`./../assets/icon/triangle.png`)}/>
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: `column`
    },
    messageBlock: {
        backgroundColor: `#FFFFFF`,
        paddingHorizontal: 22,
        paddingVertical: 8,
        flexDirection: `row`,
        alignItems: `center`,
        justifyContent: `space-between`
    }
});