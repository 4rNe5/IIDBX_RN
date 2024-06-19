import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './tab-navigator';
import { fontLists } from '../assets/fonts/fontLists';
import { useFonts } from "expo-font";
import DevLoadingView from "expo/build/environment/DevLoadingView";
import { Text } from "react-native";

export type RootStackParamList = {
  TabNavigator: undefined;
  Modal: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
