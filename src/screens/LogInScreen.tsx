import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {Checkbox, Divider, Text, TextInput} from "react-native-paper";
import {colorSchema} from "../utils/colorSchema";
import {StackScreenProps} from "@react-navigation/stack";
import {AuthStackParamList} from "../navigation/AuthStack";
import {useState} from "react";

type props = StackScreenProps<AuthStackParamList, `LogInScreen`>;
export const LogInScreen = ({navigation, route}: props) => {
    const [valid, setValid] = useState<boolean>(false);
    const [showPass, setShowPass] = useState<boolean>(false);

    return (
        <ScrollView horizontal={false}
                    contentContainerStyle={style.container}>
            <View style={{marginTop: 63}}>
                <View>
                    <Text children={`Welcome Back`}
                          style={{
                              fontSize: 24,
                              fontWeight: `700`
                          }}/>

                    <Text children={`Fill in your email and password to continue`}
                          style={{
                              color: `#A7A7A7`,
                              fontSize: 14,
                              fontWeight: `600`
                          }}/>
                </View>

                <View style={{flexDirection: `column`, marginTop: 24}}>
                    <View style={style.inputContainer}>

                        <Text children={`Email Address`}
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

                        <Text children={`Password`}
                              style={style.labelText}/>

                        <TextInput mode={`outlined`}
                                   secureTextEntry={!showPass}
                                   right={<TextInput.Icon icon="eye"
                                                          onPress={(e) => {
                                                              e.preventDefault();
                                                              console.log(showPass);
                                                              setShowPass(!showPass);
                                                          }}/>}
                                   placeholder={`**********`}/>
                    </View>

                    <Divider style={{
                        width: 0,
                        height: 16
                    }}/>

                    <View style={{flexDirection: `row`, alignItems: `center`, justifyContent: `space-between`}}>

                        <View style={{flexDirection: `row`, alignItems: `center`}}>
                            <Checkbox status={`checked`}
                                      color={colorSchema.primary}
                                      uncheckedColor={`#A7A7A7`}/>

                            <Text children={`Remember password`}
                                  style={style.labelText}/>
                        </View>

                        <TouchableOpacity children={<Text children={`Forgot Password?`}
                                                          style={{
                                                              fontSize: 13,
                                                              fontWeight: `700`,
                                                              color: colorSchema.primary
                                                          }}/>}
                                          onPress={() => {
                                              navigation.navigate(`ForgotScreen`)
                                          }}/>
                    </View>
                </View>

                <View style={{flexDirection: `column`, marginTop: 144, alignItems: `center`, gap: 20}}>
                    <TouchableOpacity onPress={() => {}}
                                      disabled={!valid}
                                      style={{
                                          borderRadius: 6,
                                          width: `100%`,
                                          borderStyle: `solid`,
                                          backgroundColor: valid? colorSchema.primary : `#A7A7A7`,
                                          borderWidth: 1,
                                          borderColor: valid? colorSchema.primary : `#A7A7A7`,
                                      }}
                                      children={<Text children={`Sign Up`}
                                                      style={{
                                                          textAlign: `center`,
                                                          fontWeight: `700`,
                                                          fontSize: 14,
                                                          color: `#FFF`,
                                                          padding: 12
                                                      }}/>}/>

                    <View style={{justifyContent: `center`, flexDirection: `row`, gap: 8}}>
                        <Text children={`Already have an account?`}
                              style={{
                                  color: `#A7A7A7`,
                                  fontSize: 14,
                                  fontWeight: `600`
                              }}/>

                        <TouchableOpacity children={<Text children={`Log in`}
                                                          style={{
                                                              color: colorSchema.primary,
                                                              fontSize: 14,
                                                              fontWeight: `700`
                                                          }}/>}/>
                    </View>

                    <View>
                        <Text children={`or log in using`}
                              style={{
                                  color: `#A7A7A7`,
                                  fontSize: 14,
                                  fontWeight: `600`
                              }}/>
                    </View>
                    <TouchableOpacity children={<Image source={require(`./../assets/icon/akar-icons_google-contained-fill.png`)}/>}/>
                </View>
            </View>
        </ScrollView>
    )
};

const style= StyleSheet.create({
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
