import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import PretendardText from "../components/PretendardText";
import VersionDropDown from "../components/VersionDropDown";
import { StatusBar } from "expo-status-bar";
import SongInfoBlock from "../components/SongInfoBlock"
import axios from 'axios';
import { Divider } from '@rneui/themed';

export default function VersionSong() {

  const [value, setValue] = useState(0);
  const [versionData, setVersionData] = useState([]);


  const handleVersionChange = (value : number) => {
    console.log(value);
    setValue(value);
    axios.get(`http://140.245.67.119:8080/iidx/get-version?version=${value}`)
      .then(response => {
        console.log(response.data);
        setVersionData(response.data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });

  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title_container}>
        <FontAwesome style={styles.title_icon} name="search" size={65} color="black" />
        <PretendardText style={{marginBottom: 10}} fontsize={32} fontWeight={'Bold'}> IIDX 버전별 악곡 </PretendardText>
        <VersionDropDown onValueChange={handleVersionChange} />
        {/*<Divider style={{width: '85%'}} color="black"  width={0.85}  inset={true} insetType="middle" />*/}
      </View>
      {
        versionData.map((data, index) => (
          <SongInfoBlock
            key={index}
            songName={data.name}
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
});