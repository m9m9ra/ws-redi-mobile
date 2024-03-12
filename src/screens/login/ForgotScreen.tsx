import {ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {Text, TextInput} from "react-native-paper";
import {colorSchema} from "../../utils/colorSchema";
import {useState} from "react";
import {StackScreenProps} from "@react-navigation/stack";
import {AuthStackParamList} from "../../navigation/AuthStack";

type props = StackScreenProps<AuthStackParamList, `ForgotScreen`>;

export const ForgotScreen = ({navigation, route}: props) => {
    const [valid, setValid] = useState<boolean>(true);

    return (
        <ScrollView horizontal={false}
                    style={style.container}>

            <View style={{marginTop: 63, }}>
                <View>
                    <Text children={`Forgot Password`}
                          style={{
                              fontSize: 24,
                              fontWeight: `700`
                          }}/>

                    <Text children={`Enter your email address`}
                          style={{
                              color: `#A7A7A7`,
                              fontSize: 14,
                              fontWeight: `600`
                          }}/>
                </View>

                <View style={{flexDirection: `column`, marginVertical: 56}}>

                    <View style={style.inputContainer}>

                        <Text children={`Email Address`}
                              style={style.labelText}/>

                        <TextInput mode={`outlined`}
                                   inputMode={`email`}
                                   placeholder={`***********@mail.com`}/>
                    </View>

                </View>

                <View style={{flexDirection: `column`, marginTop: 0, alignItems: `center`, gap: 20}}>
                    <TouchableOpacity disabled={!valid}
                                      onPress={() => {
                                          navigation.navigate(`OtpScreen`);
                                      }}
                                      style={{
                                          borderRadius: 6,
                                          width: `100%`,
                                          borderStyle: `solid`,
                                          backgroundColor: valid ? colorSchema.primary : `#A7A7A7`,
                                          borderWidth: 1,
                                          borderColor: valid ? colorSchema.primary : `#A7A7A7`,
                                      }}
                                      children={<Text children={`Send OTP`}
                                                      style={{
                                                          textAlign: `center`,
                                                          fontWeight: `700`,
                                                          fontSize: 14,
                                                          color: `#FFF`,
                                                          padding: 12
                                                      }}/>}/>

                    <View style={{justifyContent: `center`, flexDirection: `row`, gap: 8}}>
                        <Text children={`Remember password? Back to `}
                              style={{
                                  color: `#A7A7A7`,
                                  fontSize: 14,
                                  fontWeight: `600`
                              }}/>

                        <TouchableOpacity children={<Text children={`Sign in`}
                                                          style={{
                                                              color: colorSchema.primary,
                                                              fontSize: 14,
                                                              fontWeight: `700`
                                                          }}/>}
                                          onPress={() => {
                                              navigation.goBack();
                                          }}/>
                    </View>
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
