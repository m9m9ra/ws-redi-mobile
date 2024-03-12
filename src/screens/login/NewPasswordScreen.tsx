import {ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import {StackScreenProps} from "@react-navigation/stack";
import {AuthStackParamList} from "../../navigation/AuthStack";
import {Divider, Text, TextInput} from "react-native-paper";
import {colorSchema} from "../../utils/colorSchema";
import {useRootStore} from "../../store/RootStore";

type props = StackScreenProps<AuthStackParamList, `NewPasswordScreen`>;
export const NewPasswordScreen = ({navigation, route}: props) => {
    const [valid, setValid] = useState<boolean>(true);
    const [timer, setTimer] = useState<number>(1000);
    const {userStore} = useRootStore();

    useEffect(() => {

    }, [timer]);

    return (
        <ScrollView horizontal={false}
                    contentContainerStyle={style.container}>

            <View style={{marginTop: 63}}>
                <View>
                    <Text children={`New Password`}
                          style={{
                              fontSize: 24,
                              fontWeight: `700`
                          }}/>

                    <Text children={`Enter new password`}
                          style={{
                              color: `#A7A7A7`,
                              fontSize: 14,
                              fontWeight: `600`
                          }}/>
                </View>

                <View style={{flexDirection: `column`, marginVertical: 56}}>

                    <View style={style.inputContainer}>

                        <Text children={`Password`}
                              style={style.labelText}/>

                        <TextInput mode={`outlined`}
                                   inputMode={`email`}
                                   placeholder={`***********@mail.com`}/>
                    </View>

                    <Divider style={{
                        width: 0,
                        height: 24
                    }}/>

                    <View style={style.inputContainer}>

                        <Text children={`Confirm Password`}
                              style={style.labelText}/>

                        <TextInput mode={`outlined`}
                                   inputMode={`email`}
                                   placeholder={`***********@mail.com`}/>
                    </View>

                </View>

                <View style={{flexDirection: `column`, marginTop: 0, alignItems: `center`, gap: 20}}>
                    <TouchableOpacity disabled={!valid}
                                      onPress={() => {
                                          userStore.userAuth();
                                      }}
                                      style={{
                                          borderRadius: 6,
                                          width: `100%`,
                                          borderStyle: `solid`,
                                          backgroundColor: valid ? colorSchema.primary : `#A7A7A7`,
                                          borderWidth: 1,
                                          borderColor: valid ? colorSchema.primary : `#A7A7A7`,
                                      }}
                                      children={<Text children={`Log in`}
                                                      style={{
                                                          textAlign: `center`,
                                                          fontWeight: `700`,
                                                          fontSize: 14,
                                                          color: `#FFF`,
                                                          padding: 12
                                                      }}/>}/>
                </View>
            </View>
        </ScrollView>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 90
    },
    inputContainer: {
        flexDirection: `column`,
        gap: 10
    },
    labelText: {
        fontSize: 14,
        color: `#A7A7A7`,
        fontWeight: `600`
    },
});
