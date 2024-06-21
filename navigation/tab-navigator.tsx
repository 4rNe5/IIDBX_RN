import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '.';
import { TabBarIcon } from '../components/TabBarIcon';

import SearchSong from '../screens/SearchSong';
import VersionSong from "../screens/VersionSong";
import AllSong from "../screens/AllSong";

const Tab = createBottomTabNavigator();

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabLayout({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#f4f4f4',
        },
        tabBarActiveTintColor: '#3458ff',
      }}>
      <Tab.Screen
        name="SearchSong"
        component={SearchSong}
        options={{
          headerShown: false,
          title: '악곡 검색',
          tabBarLabelStyle: {
            fontSize: 11,
            paddingBottom: 3,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tab.Screen
        name="Two"
        component={VersionSong}
        options={{
          headerShown: false,
          title: '버전별 악곡',
          tabBarLabelStyle: {
            fontSize: 11,
            paddingBottom: 3,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="filter" color={color} />,
        }}
      />
      <Tab.Screen
        name="Three"
        component={AllSong}
        options={{
          headerShown: false,
          title: '모든 악곡',
          tabBarLabelStyle: {
            fontSize: 11,
            paddingBottom: 3,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="th-list" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
