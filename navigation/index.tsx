import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './tab-navigator';
import { fontLists } from '../assets/fonts/fontLists';
import { useFonts } from "expo-font";
import DevLoadingView from "expo/build/environment/DevLoadingView";
import { Text, TouchableOpacity } from "react-native";
import ScoreView from "../screens/ScoreView";
import ScoreUpload from "../screens/ScoreUpload";
import { FontAwesome } from '@expo/vector-icons';

export type RootStackParamList = {
  TabNavigator: undefined;
  ScoreView: undefined;
  ScoreUpload: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  const [fontsLoaded] = useFonts(fontLists);
  if (!fontsLoaded) {
    return <Text> 정보 로딩중... </Text>;
  }
  // @ts-ignore
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScoreView"
          component={ScoreView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScoreUpload"
          component={ScoreUpload}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 25 }}>
                <FontAwesome name="arrow-left" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: '', // 화면 이름을 표시하지 않음
            headerStyle: {
              backgroundColor: 'transparent', // 헤더 배경을 투명하게 설정
              elevation: 0, // Android
              shadowOpacity: 0, // iOS
              borderBottomWidth: 0, // 헤더 하단 경계선 제거
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
