import {createStackNavigator} from "@react-navigation/stack";
import {WelcomeStep} from "../screens/onboarding/WelcomeStep";
import {WelcomeLogin} from "../screens/onboarding/WelcomeLogin";
import {SignUpScreen} from "../screens/SignUpScreen";
import {LogInScreen} from "../screens/LogInScreen";
import {ForgotScreen} from "../screens/login/ForgotScreen";
import {OtpScreen} from "../screens/login/OtpScreen";
import {NewPasswordScreen} from "../screens/login/NewPasswordScreen";
import {WelcomeScreen} from "../screens/onboarding/WelcomeScreen";

export type AuthStackParamList = {
    WelcomeScreen: any,
    WelcomeStep: any,
    WelcomeLogin: any,

    SignUpScreen: any,
    LogInScreen: any,
    ForgotScreen: any,
    OtpScreen: any,
    NewPasswordScreen: any
}

const Stack = createStackNavigator<AuthStackParamList>();
export const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName={`WelcomeScreen`}
                         screenOptions={{
                             headerShown: false}}>

            <Stack.Screen name={"WelcomeScreen"}
                          component={WelcomeScreen}/>

            <Stack.Screen name={"WelcomeStep"}
                          component={WelcomeStep}/>

            <Stack.Screen name={"WelcomeLogin"}
                          component={WelcomeLogin}/>

            <Stack.Group navigationKey={`SignUp`}
                         screenOptions={{
                             headerShown: false
                         }}>

                <Stack.Screen name={`LogInScreen`}
                              component={LogInScreen}/>

                <Stack.Screen name={`SignUpScreen`}
                              component={SignUpScreen}/>

                <Stack.Screen name={`ForgotScreen`}
                              component={ForgotScreen}/>

                <Stack.Screen name={`OtpScreen`}
                              component={OtpScreen}/>

                <Stack.Screen name={`NewPasswordScreen`}
                              component={NewPasswordScreen}/>

            </Stack.Group>
        </Stack.Navigator>
    );
};