import React, { useState } from "react";
import { Text, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import PretendardText from "../components/PretendardText";
import VersionDropDown from "../components/VersionDropDown";
import { StatusBar } from "expo-status-bar";
import SongInfoBlock from "../components/SongInfoBlock"
import axios from 'axios';

export default function ScoreUpload() {

  const [value, setValue] = useState(0);
  const [versionData, setVersionData] = useState([]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.title_container}>
        <FontAwesome6 style={styles.title_icon} name="chart-simple" size={65} color="black" />
        <PretendardText style={{marginBottom: 10}} fontsize={32} fontWeight={'Bold'}> 플레이 성과 업로드 </PretendardText>
      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  title_container: {
    alignItems: 'center',
    paddingBottom: 8,
    paddingTop: 110,
  },
  title_icon: {
    marginLeft: 10,
    paddingBottom: 15,
  },
  fab: {
    zIndex: 1,
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 10,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3458ff',
    paddingVertical: 10,
    paddingHorizontal: 75,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  addButtonIcon: {
    marginRight: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Pretendard-SemiBold',
  },
});
