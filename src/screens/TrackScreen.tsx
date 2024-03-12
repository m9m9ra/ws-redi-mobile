import {ScrollView} from "react-native";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {MainStackParamList} from "../navigation/MainStack";

type props = BottomTabScreenProps<MainStackParamList, `TrackScreen`>;
export const TrackScreen = ({navigation, route}: props) => {
  return (
      <ScrollView>

      </ScrollView>
  )
};