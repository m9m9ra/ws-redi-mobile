import {StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {MainStackParamList} from "../navigation/MainStack";
import {ComponentProps, useEffect} from "react";
import {Icon, Text} from "react-native-paper";
import {colorSchema} from "../utils/colorSchema";
import {useRootStore} from "../store/RootStore";

interface props {
    title: string,
    icon: string,
    label: string,
    goRouter: string,
    props?: ComponentProps<any>
}

export const ProfileCard = ({title, icon, label, goRouter, props}: props) => {
    const {userStore} = useRootStore();
    const navigation = useNavigation<MainStackParamList>();

    return (
        <TouchableWithoutFeedback disabled={false}
                                  onPress={() => {
                                      icon == `logout` ? userStore.userExit() : false;
                                  }}>
            <View style={style.profileCard} {...props}>
                <View style={{flexDirection: `row`, alignItems: `center`, gap: 4}}>
                   <TouchableOpacity children={<Icon size={34}
                                                     color={icon == `logout` ? colorSchema.stateColor.error : `black`}
                                                     source={icon}/>}/>
                    <TouchableOpacity>
                        <View>
                            <Text children={title}
                                  style={{
                                      fontWeight: `700`,
                                      fontSize: 16
                                  }}/>
                            {icon == `logout` ? false : <Text children={label.slice(0, 48)}
                                                              style={{
                                                                  color: `#A7A7A7`,
                                                                  fontSize: 11
                                                              }}/>}

                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity children={<Icon size={24} source={`chevron-right`}/>}/>
            </View>
        </TouchableWithoutFeedback>
    )
};

const style = StyleSheet.create({
    profileCard: {
        backgroundColor: `#FFFFFF`,
        maxHeight: 62,
        paddingHorizontal: 12,
        paddingVertical: 13,
        borderRadius: 8,
        flexDirection: `row`,
        alignItems: `center`,
        justifyContent: `space-between`,
        elevation: 4
    }
});