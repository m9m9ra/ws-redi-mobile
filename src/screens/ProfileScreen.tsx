import {ScrollView} from "react-native";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {MainStackParamList} from "../navigation/MainStack";

type props = BottomTabScreenProps<MainStackParamList, `ProfileScreen`>;
export const ProfileScreen = ({navigation, route}: props) => {
  return (
      <ScrollView>

      </ScrollView>
  )
};