import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '.';
import { TabBarIcon } from '../components/TabBarIcon';

import SearchSong from '../screens/SearchSong';
import VersionSong from "../screens/VersionSong";
import SearchArtistSong from "../screens/SearchArtistSong";
import { Octicons } from "@expo/vector-icons";

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
          title: '악곡명 검색',
          tabBarLabelStyle: {
            fontSize: 11,
            paddingBottom: 3,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="music" color={color} />,
        }}
      />
      <Tab.Screen
        name="SearchArtistSong"
        component={SearchArtistSong}
        options={{
          headerShown: false,
          title: '아티스트별 검색',
          tabBarLabelStyle: {
            fontSize: 11,
            paddingBottom: 3,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
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
          tabBarIcon: ({ color }) => <Octicons name="versions" size={21} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
