import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { fontLists } from '../assets/fonts/fontLists';
import { useFonts } from "expo-font";
import { Text } from "react-native"

import ScoreView from "../screens/ScoreView";
import ScoreUpload from "../screens/ScoreUpload";

export type ScoreStackParamList = {
  ScoreView: undefined;
  ScoreUpload: undefined;
};

const Stack = createStackNavigator<ScoreStackParamList>();

export default function ScoreStack() {
  const [fontsLoaded] = useFonts(fontLists);
  if (!fontsLoaded) {
    return <Text> 정보 로딩중... </Text>;
  }
  // @ts-ignore
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScoreView">
        <Stack.Screen
          name="ScoreView"
          component={ScoreView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScoreUpload"
          component={ScoreUpload}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
