import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import { Alert, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import PretendardText from "../components/PretendardText";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "expo-status-bar";

export default function SearchArtistSong() {

  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (text: string) => {
    setSearchKeyword(prevSearchKeyword => text);
    // 검색 기능 구현
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.containter}>
      <StatusBar style="dark"/>
      <View style={styles.title_container}>
        <FontAwesome style={styles.title_icon} name="search" size={65} color="black" />
        <PretendardText fontsize={32} fontWeight={'Bold'}> 아티스트별 악곡 검색 </PretendardText>
      </View>
          <SearchBar placeholder="아티스트를 입력하세요." searchKeyword={searchKeyword} onSearch={handleSearch} onSearchButtonPress={() => {}} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    containter :{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f4f4f4',
    },
    innercontainter :{
      paddingHorizontal: 8,
    },
    title_container :{
      alignItems: 'center',
      paddingBottom: 15,
      marginTop: -320,
    },
    title_icon :{
      marginLeft: 10,
      paddingBottom: 15,
    }
});
