import {SafeAreaView, StatusBar, useColorScheme} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {MD3LightTheme, PaperProvider} from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";
import {AuthStack} from "./navigation/AuthStack";
import {observer} from "mobx-react-lite";
import {useRootStore} from "./store/RootStore";
import {MainStack} from "./navigation/MainStack";
import {useEffect} from "react";

export const App = observer((): JSX.Element => {
    const {userStore} = useRootStore();
    const isDarkMode = useColorScheme() === 'dark';

    useEffect(() => {
        userStore.baseConnect().then(() => {
            console.log(1);
            userStore.checkToken().then();
        });
    }, []);

    const backgroundStyle = {
        backgroundColor: !isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <PaperProvider theme={MD3LightTheme}>
            <SafeAreaView style={{...backgroundStyle, flex: 1, flexGrow: 1}}>
                <StatusBar barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
                           backgroundColor={backgroundStyle.backgroundColor}/>
                <NavigationContainer>
                    {userStore.auth ?
                        <MainStack/>
                        :
                        <AuthStack/>
                    }
                </NavigationContainer>
            </SafeAreaView>
        </PaperProvider>
    );
});