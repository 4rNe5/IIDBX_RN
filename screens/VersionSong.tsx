import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import { Divider } from '@rneui/themed';
import { Alert, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PretendardText from "../components/PretendardText";
import VersionDropDown from "../components/VersionDropDown";

export default function VersionSong() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title_container}>
        <FontAwesome style={styles.title_icon} name="search" size={65} color="black" />
        <PretendardText style={{marginBottom: 10}} fontsize={32} fontWeight={'Bold'}> IIDX 버전별 악곡 </PretendardText>
        <VersionDropDown/>
        <Divider style={{width: '88%'}} color="black"  width={0.85}  inset={true} insetType="middle" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  title_container :{
    alignItems: 'center',
    paddingBottom: 8,
    paddingTop: 110,
  },
  title_icon :{
    marginLeft: 10,
    paddingBottom: 15,
  },
});
