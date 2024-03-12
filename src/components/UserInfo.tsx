import {StyleSheet, View} from "react-native";
import {Avatar, Icon, Text} from "react-native-paper";

export const UserInfo = () => {
    return (
        <View style={style.userInfo}>

            <View style={{flexDirection: `row`, alignItems: `center`, gap: 6}}>
                <Avatar.Image size={62}
                              source={require(`./../assets/image/avatar.png`)}/>
                <View>
                    <Text children={`Hello Ken`}
                          style={{
                              fontSize: 18,
                              fontWeight: `700`
                          }}/>

                    <Text children={`Current balance: N10,712:00`}
                          style={{
                              fontSize: 12,
                              fontWeight: `600`
                          }}/>
                </View>
            </View>

            <Icon size={24} source={`eye`}/>
        </View>
    )
};

const style = StyleSheet.create({
    userInfo: {
        flexDirection: `row`,
        alignItems: `center`,
        justifyContent: `space-between`,
    }
});