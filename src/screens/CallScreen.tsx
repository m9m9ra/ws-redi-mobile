import {View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {MainStackParamList} from "../navigation/MainStack";
import {Avatar, Icon, IconButton, Text} from "react-native-paper";
import {colorSchema} from "../utils/colorSchema";

type props = StackScreenProps<MainStackParamList, `CallScreen`>;
export const CallScreen = ({navigation, route}: props) => {

    return (
        <ScrollView horizontal={false}
                    contentContainerStyle={style.container}>

            <View style={style.avatarContainer}>
                <Avatar.Image size={94}
                              source={require(`./../assets/image/avatar.png`)}/>

                <Text children={`Chinoso James`}
                      style={{
                          fontSize: 18,
                          fontWeight: `700`,
                          color: colorSchema.primary
                      }}/>

                <Text children={`+234 603 6543 7265`}
                      style={{
                          fontSize: 18,
                          color: `#A7A7A7`
                      }}/>

                <Text children={`calling...`}
                      style={{
                          color: colorSchema.primary
                      }}/>

            </View>

            <View style={style.actionContainer}>
                <View style={{flexDirection: `row`, alignItems: `center`, gap: 44, marginVertical: 14}}>
                    <Icon size={48} source={`plus`}/>
                    <Icon size={48} source={`pause-circle-outline`}/>
                    <Icon size={48} source={`camera-outline`}/>
                </View>
                <View style={{flexDirection: `row`, alignItems: `center`, gap: 44, marginVertical: 34}}>
                    <Icon size={48} source={`microphone-plus`}/>
                    <Icon size={48} source={`microphone-off`}/>
                    <Icon size={48} source={`tune-vertical-variant`}/>
                </View>
                <TouchableOpacity disabled={false}
                                  onPress={() => {
                                      navigation.goBack();
                                  }}
                                  style={{
                                      backgroundColor: `#ED3A3A`,
                                      borderRadius: 100,
                                      marginTop: 14,
                                      padding: 8
                                  }}
                                  children={<Icon size={52}
                                                  color={`#FFFFFF`}
                                                  source={`phone-hangup`}/>}/>
            </View>
        </ScrollView>
    )
};

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingVertical: 100
    },
    avatarContainer: {
        alignItems: `center`
    },
    actionContainer: {
        flexDirection: `column`,
        alignItems: `center`,
        paddingHorizontal: 55,
        paddingVertical: 44
    }
});