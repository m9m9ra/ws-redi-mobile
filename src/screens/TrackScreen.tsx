import {ScrollView} from "react-native";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {HomeStackParamList} from "../navigation/modules/HomeStack";

type props = BottomTabScreenProps<HomeStackParamList, `TrackScreen`>;
export const TrackScreen = ({navigation, route}: props) => {
  return (
      <ScrollView>

      </ScrollView>
  )
};