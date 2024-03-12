import {StyleSheet, TouchableOpacity, View} from "react-native";
import {colorSchema} from "../utils/colorSchema";
import {Avatar, Icon, Text} from "react-native-paper";

interface props {
    user_name: string,
    user_text: string,
    user_avatar?: string | unknown
}

export const UserCard = ({user_name, user_text, user_avatar}: props) => {
    return (
        <View style={style.userCard}>
            <View style={{flexDirection: `row`, alignItems: `center`, gap: 8}}>
                <TouchableOpacity disabled={false}
                                  children={<Avatar.Image size={56}
                                                          source={require(`./../assets/image/avatar.png`)}/>}/>

                <View>
                    <Text children={`Hello ${user_name.slice(0, 13)}!`}
                          style={{
                              fontSize: 22,
                              fontWeight: `700`,
                              color: `#FFFFFF`
                          }}/>

                    <Text children={`Hello ${user_text.slice(0, 24)}`}
                          style={{
                              fontSize: 11,
                              fontWeight: `600`,
                              color: `#CFCFCF`
                          }}/>
                </View>
            </View>
            <TouchableOpacity disabled={false}
                              children={<Icon size={32}
                                              source={`bell-outline`}
                                              color={`#FFFFFF`}/>}/>
        </View>
    )
};

const style = StyleSheet.create({
    userCard: {
        backgroundColor: colorSchema.primary,
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: `row`,
        alignItems: `center`,
        justifyContent: `space-between`,

        borderWidth: 1,
        borderRadius: 8,
        borderStyle: `solid`,
        borderColor: colorSchema.primary
    }
});