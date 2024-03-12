import {ScrollView} from "react-native";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {MainStackParamList} from "../navigation/MainStack";

type props = BottomTabScreenProps<MainStackParamList, `WalletScreen`>;
export const WalletScreen = ({navigation, route}: props) => {
  return (
      <ScrollView>

      </ScrollView>
  )
};