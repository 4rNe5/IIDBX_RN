import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import { Alert, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PretendardText from "../components/PretendardText";

export default function VersionSong() {
  return (
    <View style={styles.containter}>
      <PretendardText fontSize={15} fontWeight={'Bold'}> IIDX 버전별 악곡 검색</PretendardText>
    </View>
  );
}

const styles = StyleSheet.create({
  containter :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e1e1',
  },
});
