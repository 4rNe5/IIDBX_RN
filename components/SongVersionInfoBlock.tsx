import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type SongInfoBlockProps = {
  songName: string;
  songVersion: number;
  artistName: string;
  songGenre: string;
  songBPM: string;
  beg: string;
  spn: string;
  sph: string;
  spa: string;
  spl: string;
};

const versionNames = [
  "1st style", "substream", "2nd style", "3rd style", "4th style",
  "5th style", "6th style", "7th style", "8th style", "9th style",
  "10th style", "11 IIDX RED", "12 HAPPY SKY", "13 DistorteD",
  "14 GOLD", "15 DJ TROOPERS", "16 EMPRESS", "17 SIRIUS",
  "18 Resort Anthem", "19 Lincle", "20 tricoro", "21 SPADA",
  "22 PENDUAL", "23 copula", "24 SINOBUZ", "25 CANNON BALLERS",
  "26 Rootage", "27 HEROIC VERSE", "28 BISTROVER", "29 CastHour",
  "30 RESIDENT", "31 EPOLIS"
];

const getVersionName = (versionNumber: number) => {
  return versionNames[versionNumber - 1] || "Unknown Version";
};

const SongVersionInfoBlock = ({ songName, songVersion, artistName, songGenre, songBPM, beg, spn, sph, spa, spl }: SongInfoBlockProps) => {
  const versionName = getVersionName(songVersion);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{songName}</Text>
        <Text style={styles.subtitle}>{artistName}</Text>
        <Text style={styles.version}>수록 버전 : {versionName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>장르명</Text>
          <Text style={styles.infoValue}>{songGenre}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>BPM</Text>
          <Text style={styles.BPMinfoValue}>{songBPM}</Text>
        </View>
      </View>
      <View style={styles.difficultyContainer}>
        <View style={styles.difficultyRow}>
          <View style={[styles.difficultyBox, { backgroundColor: '#46c546' }]}>
            <Text style={styles.difficultyText}>BEG</Text>
            <Text style={styles.difficultyValue}>{beg}</Text>
          </View>
          <View style={[styles.difficultyBox, { backgroundColor: '#6495ed' }]}>
            <Text style={styles.difficultyText}>SPN</Text>
            <Text style={styles.difficultyValue}>{spn}</Text>
          </View>
          <View style={[styles.difficultyBox, { backgroundColor: '#f6ab20' }]}>
            <Text style={styles.difficultyText}>SPH</Text>
            <Text style={styles.difficultyValue}>{sph}</Text>
          </View>
        </View>
        <View style={styles.difficultyRow}>
          <View style={[styles.difficultyBox, { backgroundColor: '#ff3434' }]}>
            <Text style={styles.difficultyText}>SPA</Text>
            <Text style={styles.difficultyValue}>{spa}</Text>
          </View>
          <View style={[styles.difficultyBox, { backgroundColor: '#fa298c' }]}>
            <Text style={styles.difficultyText}>SPL</Text>
            <Text style={styles.difficultyValue}>{spl}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 20,
  },
  headerContainer: {
    marginBottom: 10,
    marginLeft: 7,
    marginTop: 6,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Pretendard-Bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Pretendard-Light',
    color: '#555',
  },
  version: {
    fontSize: 16,
    fontFamily: 'Pretendard-Regular',
    color: '#777',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    padding: 12,
    margin: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 14,
    fontFamily: 'Pretendard-SemiBold',
    paddingBottom: 3,
    color: '#333',
  },
  BPMinfoValue: {
    fontSize: 18,
    fontFamily: 'Pretendard-Regular',
    color: '#000',
  },
  infoValue: {
    fontSize: 15,
    fontFamily: 'Pretendard-Regular',
    color: '#000',
  },
  difficultyContainer: {
    flexDirection: 'column',
  },
  difficultyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  difficultyBox: {
    borderRadius: 15,
    padding: 12,
    margin: 5,
    flex: 1,
    alignItems: 'center',
  },
  difficultyText: {
    fontSize: 14,
    fontFamily: 'Pretendard-Bold',
    color: '#fff',
    paddingBottom: 3,
  },
  difficultyValue: {
    fontSize: 18,
    fontFamily: 'Pretendard-Regular',
    color: '#fff',
  },
});

export default SongVersionInfoBlock;
