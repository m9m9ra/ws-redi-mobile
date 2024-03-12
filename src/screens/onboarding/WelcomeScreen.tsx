import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {Text} from "react-native-paper";
import {colorSchema} from "../../utils/colorSchema";
import {AuthStackParamList} from "../../navigation/AuthStack";

type props = StackScreenProps<AuthStackParamList, `WelcomeScreen`>;
export const WelcomeScreen = ({navigation, route}: props) => {

    return (
        <ScrollView horizontal={false}
                    contentContainerStyle={style.container}>
            <Image source={require(`./../../assets/image/welcome.png`)}/>
            <View style={{marginTop: 63}}>
                <Text children={`Quick Delivery At Your \nDoorstep`}
                      style={{
                          color: colorSchema.primary,
                          textAlign: `center`,
                          fontWeight: `700`,
                          fontSize: 24,
                          marginVertical: 18,
                      }}/>

                <Text children={`Enjoy quick pick-up and delivery to \nyour destination`}
                      style={{
                          fontSize: 16,
                          textAlign: `center`,
                          fontWeight: `400`
                      }}/>

                <View style={{flexDirection: `row`, justifyContent: `space-between`, marginTop: 91}}>
                    <TouchableOpacity onLongPress={() => {}}
                                      onPress={() => {
                                          navigation.navigate(`WelcomeLogin`);
                                      }}
                                      style={{
                                          borderRadius: 6,
                                          width: 100,
                                          borderStyle: `solid`,
                                          backgroundColor: `#FFF`,
                                          borderWidth: 1,
                                          borderColor: colorSchema.primary,
                                      }}
                                      children={<Text children={`Skip`}
                                                      style={{
                                                          color: colorSchema.primary,
                                                          textAlign: `center`,
                                                          fontWeight: `700`,
                                                          fontSize: 14,
                                                          padding: 12
                                                      }}/>}/>

                    <TouchableOpacity onLongPress={() => {}}
                                      onPress={() => {
                                          navigation.navigate(`WelcomeStep`);
                                      }}
                                      style={{
                                          borderRadius: 6,
                                          width: 100,
                                          borderStyle: `solid`,
                                          backgroundColor: colorSchema.primary,
                                          borderWidth: 1,
                                          borderColor: colorSchema.primary,
                                      }}
                                      children={<Text children={`Next`}
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
        paddingHorizontal: 21,
        paddingTop: 60,
        paddingBottom: 90
    }
});