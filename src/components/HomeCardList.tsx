import {StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {Icon, Text} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {MainStackParamList} from "../navigation/MainStack";
import {useEffect, useState} from "react";
import {colorSchema} from "../utils/colorSchema";

export const HomeCardList = () => {
    const navigation = useNavigation<MainStackParamList>();
    const [lastTouch, setLastTouch] = useState<number>(3);

    useEffect(() => {
        console.log(lastTouch);
    }, [lastTouch]);

    const cardList = [
        {
            id: 0,
            icon_source: `account-supervisor-outline`,
            title_text: `Customer Care`,
            label_text: `Our customer care service line is available from 8 -9pm week days and 9 - 5 weekends - tap to call us today`,
            goScreen: `HomeScreen`,
        },
        {
            id: 1,
            icon_source: `package-variant-closed`,
            title_text: `Send a package`,
            label_text: `Request for a driver to pick up or deliver your package for you`,
            goScreen: `HomeScreen`,
        },
        {
            id: 2,
            icon_source: `wallet`,
            title_text: `Fund your wallet`,
            label_text: `To fund your wallet is as easy as ABC, make use of our fast technology and top-up your wallet today`,
            goScreen: `HomeScreen`,
        },
        {
            id: 3,
            icon_source: `message-text`,
            title_text: `Chats`,
            label_text: `Search for available rider within your area`,
            goScreen: `ChatScreen`,
        },
    ]

    return (
        <View style={style.cardContainer}>
            {cardList.map((item) =>
                <TouchableWithoutFeedback key={item.id}
                                          disabled={false}
                                          onPress={() => {
                                              setLastTouch(item.id);
                                              // @ts-ignore
                                              navigation.navigate(item.goScreen);
                                          }}
                                          children={<View key={item.id}
                                                          style={{
                                                              ...style.card,
                                                              backgroundColor: lastTouch == item.id ? colorSchema.primary : `#FFFFFF`
                                                          }}>
                                              <TouchableOpacity disabled={false}
                                                                onPress={() => {
                                                                    setLastTouch(item.id);
                                                                    // @ts-ignore
                                                                    navigation.navigate(item.goScreen);
                                                                    console.log(item.goScreen);
                                                                }}
                                                                children={<Icon size={54}
                                                                                color={lastTouch == item.id ? `#FFFFFF` : colorSchema.primary}
                                                                                source={item.icon_source}/>}/>

                                              <TouchableOpacity disabled={false}
                                                                onPress={() => {
                                                                    setLastTouch(item.id);
                                                                    // @ts-ignore
                                                                    navigation.navigate(item.goScreen);
                                                                    console.log(item.goScreen);
                                                                }}
                                                                children={<Text children={item.title_text}
                                                                                style={{
                                                                                    color: lastTouch == item.id ? `#FFFFFF` : colorSchema.primary,
                                                                                    fontSize: 18,
                                                                                    fontWeight: `700`
                                                                                }}/>}/>

                                              <TouchableOpacity disabled={false}
                                                                onPress={() => {
                                                                    setLastTouch(item.id);
                                                                    // @ts-ignore
                                                                    navigation.navigate(item.goScreen);
                                                                    console.log(item.goScreen);
                                                                }}
                                                                children={<Text
                                                                    children={item.label_text}
                                                                    style={{
                                                                        color: lastTouch == item.id ? `#FFFFFF` : colorSchema.textColor.dark,
                                                                        fontSize: 10
                                                                    }}/>}/>
                                          </View>}/>)}
        </View>
    )
};

const style = StyleSheet.create({
    cardContainer: {
        flex: 1,
        rowGap: 23,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: `space-between`
    },
    card: {
        minWidth: `44%`,
        maxWidth: `48%`,
        minHeight: 174,
        gap: 8,
        paddingVertical: 18,
        paddingHorizontal: 8,
        flexDirection: `column`,
        backgroundColor: `#FFFFFF`,
        justifyContent: `flex-start`,

        borderColor: `#FFFFFF`,
        borderRadius: 8,
        elevation: 4
    }
});