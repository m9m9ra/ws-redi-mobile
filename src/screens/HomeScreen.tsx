import {ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {Button, Divider, Icon, Searchbar, Text} from "react-native-paper";
import {UserCard} from "../components/UserCard";
import {colorSchema} from "../utils/colorSchema";
import {HomeCardList} from "../components/HomeCardList";
import {HomeStackParamList} from "../navigation/modules/HomeStack";

type props = BottomTabScreenProps<HomeStackParamList, `HomeScreen`>;
export const HomeScreen = ({navigation, route}: props) => {
  return (
      <ScrollView horizontal={false}
                  contentContainerStyle={style.container}>

          <Searchbar value={``}
                     mode={`bar`}
                     placeholder={`Search services`}
                     inputMode={`text`}
                     inputStyle={{
                         paddingTop: 4
                     }}
                     style={{
                         backgroundColor: `#CFCFCF`,
                         borderRadius: 8,
                         height: 46,
                     }}/>

          <Divider style={{
              width: 0,
              height: 24
          }}/>

          <UserCard user_name={`Ken`}
                    user_text={`We trust you are having a great time`}/>

          <Divider style={{
              width: 0,
              height: 40
          }}/>

          <View>
              <View style={{flexDirection: `row`, alignItems: `center`, justifyContent: `space-between`}}>
                  <TouchableOpacity children={<Text children={`Special for you`}
                                                    style={{
                                                        color: colorSchema.secondary,
                                                        fontWeight: `700`,
                                                        fontSize: 16
                                                    }}/>}/>

                  <TouchableOpacity children={<Icon size={24}
                                                    color={colorSchema.secondary}
                                                    source={`arrow-right-bold-box-outline`}/>}/>
              </View>

              <Divider style={{
                  width: 0,
                  height: 64
              }}/>
          </View>

          <Divider style={{
              width: 0,
              height: 24
          }}/>

          <View style={{flexDirection: `column`, gap: 16}}>
              <TouchableOpacity children={<Text children={`What would you like to do`}
                                                style={{
                                                    color: colorSchema.primary,
                                                    fontWeight: `700`,
                                                    fontSize: 16
                                                }}/>}/>
              <HomeCardList/>
          </View>

      </ScrollView>
  )
};

const style = StyleSheet.create({
   container: {
       flexGrow: 1,
       paddingHorizontal: 24,
       paddingVertical: 33
   }
});