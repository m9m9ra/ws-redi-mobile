import {ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {AuthStackParamList} from "../../navigation/AuthStack";
import {Text, TextInput} from "react-native-paper";
import {colorSchema} from "../../utils/colorSchema";
import {useEffect, useState} from "react";

type props = StackScreenProps<AuthStackParamList, `OtpScreen`>
export const OtpScreen = ({navigation, route}: props) => {
    const [valid, setValid] = useState<boolean>(true);
    const [timer, setTimer] = useState<number>(1000);

    useEffect(() => {

    }, [timer]);

    return (
        <ScrollView horizontal={false}
                    contentContainerStyle={style.container}>
            <View style={{marginTop: 63}}>
                <View>
                    <Text children={`OTP Verification`}
                          style={{
                              fontSize: 24,
                              fontWeight: `700`
                          }}/>

                    <Text children={`Enter the 6 digit numbers sent to your email`}
                          style={{
                              color: `#A7A7A7`,
                              fontSize: 14,
                              fontWeight: `600`
                          }}/>
                </View>

                <View style={{flexDirection: `column`, marginVertical: 56}}>

                    <View style={style.inputContainer}>

                        <TextInput mode={`outlined`}
                                   inputMode={`email`}
                                   placeholder={`***********@mail.com`}/>

                        <Text children={`If you didn’t receive code, ${'resend after 1:00'}`}
                              style={style.labelText}/>
                    </View>

                </View>

                <View style={{flexDirection: `column`, marginTop: 0, alignItems: `center`, gap: 20}}>
                    <TouchableOpacity disabled={!valid}
                                      onPress={() => {
                                          navigation.navigate(`NewPasswordScreen`);
                                      }}
                                      style={{
                                          borderRadius: 6,
                                          width: `100%`,
                                          borderStyle: `solid`,
                                          backgroundColor: valid ? colorSchema.primary : `#A7A7A7`,
                                          borderWidth: 1,
                                          borderColor: valid ? colorSchema.primary : `#A7A7A7`,
                                      }}
                                      children={<Text children={`Set New Password`}
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
        textAlign: `center`,
        fontWeight: `600`
    },
});