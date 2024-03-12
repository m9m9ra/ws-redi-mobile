import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {Text} from "react-native-paper";
import {colorSchema} from "../utils/colorSchema";
import {StackScreenProps} from "@react-navigation/stack";
import {AuthStackParamList} from "../navigation/AuthStack";

type props = StackScreenProps<AuthStackParamList, `SignUpScreen`>;
export const SignUpScreen = ({navigation, route}: props) => {
    return (
        <ScrollView horizontal={false}
                    contentContainerStyle={style.container}>
            <Image source={require(`./../assets/image/sign_id.png`)}/>
            <View style={{paddingHorizontal: 21, marginTop: 63}}>
                <Text children={`Flexible Payment`}
                      style={{
                          color: colorSchema.primary,
                          textAlign: `center`,
                          fontWeight: `700`,
                          fontSize: 24,
                          marginVertical: 18,
                      }}/>

                <Text children={`Different modes of payment either \n before and after delivery without \n stress`}
                      style={{
                          fontSize: 16,
                          textAlign: `center`,
                          fontWeight: `400`
                      }}/>

                <View style={{flexDirection: `column`, marginTop: 91, alignItems: `center`, gap: 20}}>
                    <TouchableOpacity onPress={() => {}}
                                      style={{
                                          borderRadius: 6,
                                          width: `90%`,
                                          borderStyle: `solid`,
                                          backgroundColor: colorSchema.primary,
                                          borderWidth: 1,
                                          borderColor: colorSchema.primary,
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
                                  fontSize: 14,
                                  fontWeight: `400`
                              }}/>
                        <TouchableOpacity children={<Text children={`Sign in`}
                                                          style={{
                                                              color: colorSchema.primary,
                                                              fontSize: 14,
                                                              fontWeight: `700`
                                                          }}/>}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

const style= StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        paddingTop: 60,
        paddingBottom: 90
    }
});
