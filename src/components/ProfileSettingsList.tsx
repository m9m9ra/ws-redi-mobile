import {StyleSheet, View} from "react-native";
import {ProfileCard} from "./ProfileCard";
import {Divider} from "react-native-paper";

export const ProfileSettingsList = () => {
    const settingsList = [
        {
            id: 0,
            title: `Edit Profile`,
            icon: `account-circle-outline`,
            label: `Name, phone no, address, email ...`,
            goRouter: `HomeScreen`
        },
        {
            id: 1,
            title: `Statements & Reports`,
            icon: `sticker-text-outline`,
            label: `Download transaction details, orders, deliveries`,
            goRouter: `HomeScreen`
        },
        {
            id: 2,
            title: `Notification Settings`,
            icon: `bell-outline`,
            label: `mute, unmute, set location & tracking setting`,
            goRouter: `HomeScreen`
        },
        {
            id: 3,
            title: `Card & Bank account settings`,
            icon: `wallet-outline`,
            label: `change cards, delete card details`,
            goRouter: `HomeScreen`
        },
        {
            id: 4,
            title: `Referrals`,
            icon: `human-male-board-poll`,
            label: `check no of friends and earn`,
            goRouter: `HomeScreen`
        },
        {
            id: 5,
            title: `About Us`,
            icon: `image-marker-outline`,
            label: `know more about us, terms and conditions`,
            goRouter: `HomeScreen`
        }
    ]

    return (
        <View style={style.container}>
            {settingsList.map((item) => <ProfileCard key={item.id}
                                                     title={item.title}
                                                     icon={item.icon}
                                                     label={item.label}
                                                     goRouter={item.goRouter}/>)}
            <Divider style={{
                width: 0,
                height: 14
            }}/>

            <ProfileCard title={`Log out`}
                         icon={`logout`}
                         label={`logout`}
                         goRouter={``}/>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12
    }
});