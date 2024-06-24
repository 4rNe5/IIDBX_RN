import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import PretendardText from "../components/PretendardText";
import SearchBar from "../components/SearchBar";
import SongVersionInfoBlock from "../components/SongVersionInfoBlock";
import axios from "axios";

export default function SearchSong() {
  const [searchKeyword, setSearchKeyword] = React.useState('');
  const [SearchedData, setSearchedData] = useState([]);

  const handleSearch = (text: string) => {
    setSearchKeyword(text);
    console.log(text);
    axios.get(`${process.env.API_URL}/iidx/get-nameOrArtistDetail?name=${text}`)
      .then(response => {
        console.log(response.data);
        setSearchedData(response.data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <FontAwesome style={styles.title_icon} name="search" size={65} color="black" />
        <PretendardText fontsize={32} fontWeight={'Bold'} style={styles.title}>IIDX 악곡 검색</PretendardText>
        <SearchBar placeholder="악곡명을 입력하세요." searchKeyword={searchKeyword} onSearch={setSearchKeyword} onSearchButtonPress={() => {handleSearch(searchKeyword)}} />
        {
          SearchedData.map((data, index) => (
            <SongVersionInfoBlock
              key={index}
              songName={data.name}
              songVersion={data.version}
              artistName={data.artist}
              songGenre={data.genre}
              songBPM={data.bpm}
              beg={data.beg}
              spn={data.spn}
              sph={data.sph}
              spa={data.spa}
              spl={data.spl}
            />
          ))
        }
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    paddingBottom: 15,
    textAlign: 'center',
  },
  title_icon: {
    alignSelf: 'center',
    paddingBottom: 15,
    paddingTop: 90,
  },
});

