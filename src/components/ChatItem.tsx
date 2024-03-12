import {StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {Avatar, Text} from "react-native-paper";
import {colorSchema} from "../utils/colorSchema";
import {useNavigation} from "@react-navigation/native";
import {MainStackParamList} from "../navigation/MainStack";

export const ChatItem = () => {
    const navigation = useNavigation<MainStackParamList>();

    return (
        <TouchableWithoutFeedback disabled={false}
                                  onPress={() => {
                                      // @ts-ignore
                                      navigation.navigate(`ChatRiderScreen`);
                                  }}>
            <View style={style.chatItem}>
                <View style={{flexDirection: `row`, alignItems: `center`, gap: 12}}>
                    <TouchableOpacity disabled={false}
                                      onPress={() => {
                                          // @ts-ignore
                                          navigation.navigate(`ChatRiderScreen`);
                                      }}
                                      children={<Avatar.Image size={56}
                                                              source={require(`./../assets/image/avatar.png`)}/>}/>

                    <View>
                        <TouchableOpacity disabled={false}
                                          onPress={() => {
                                              // @ts-ignore
                                              navigation.navigate(`ChatRiderScreen`);
                                          }}
                                          children={<Text children={`John Joshua`}
                                                          style={{
                                                              fontWeight: `700`,
                                                              fontSize: 16
                                                          }}/>}/>

                        <TouchableOpacity disabled={false}
                                          onPress={() => {
                                              // @ts-ignore
                                              navigation.navigate(`ChatRiderScreen`);
                                          }}
                                          children={<Text children={`Thanks for your service`}
                                                          style={{
                                                              fontWeight: `600`,
                                                              fontSize: 12
                                                          }}/>}/>
                    </View>
                </View>

                <TouchableOpacity disabled={false}
                                  onPress={() => {
                                      // @ts-ignore
                                      navigation.navigate(`ChatRiderScreen`);
                                  }}
                                  children={<Text children={`5`}
                                                  style={{
                                                      color: `#FFFFFF`
                                                  }}/>}
                                  style={{
                                      paddingHorizontal: 12,
                                      paddingVertical: 6,
                                      backgroundColor: colorSchema.primary,
                                      borderWidth: 1,
                                      borderColor: colorSchema.primary,
                                      borderRadius: 100
                                  }}/>
            </View>
        </TouchableWithoutFeedback>
    )
};

const style = StyleSheet.create({
    chatItem: {
        backgroundColor: `#FFFFFF`,
        width: `100%`,
        paddingHorizontal: 8,
        flexDirection: `row`,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colorSchema.textColor.gray,
        alignItems: `center`,
        paddingVertical: 12,
        justifyContent: `space-between`
    }
});