import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type SongInfoBlockProps = {
  songName: string;
  artistName: string;
  songGenre: string;
  songBPM: string;
  beg: string;
  spn: string;
  sph: string;
  spa: string;
  spl: string;
};

const SongInfoBlock = ({ songName, artistName, songGenre, songBPM, beg, spn, sph, spa, spl }: SongInfoBlockProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{songName}</Text>
        <Text style={styles.subtitle}>{artistName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>장르명</Text>
          <Text style={styles.infoValue}>{songGenre}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>BPM</Text>
          <Text style={styles.infoValue}>{songBPM}</Text>
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
          <View style={[styles.difficultyBox, { backgroundColor: 'orange' }]}>
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
    margin: 20,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Pretendard-Bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Pretendard-Light',
    color: '#555',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  infoBox: {
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    fontFamily: 'Pretendard-SemiBold',
    paddingBottom: 3,
    color: '#333',
  },
  infoValue: {
    fontSize: 17,
    fontFamily: 'Pretendard-Regular',
    color: '#000',
  },
  difficultyContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  difficultyRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  difficultyBox: {
    borderRadius: 15,
    padding: 15,
    margin: 5,
    flex: 1,
    alignItems: 'center',
  },
  difficultyText: {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
    paddingBottom: 3,
    color: '#fff',
  },
  difficultyValue: {
    fontSize: 18,
    fontFamily: 'Pretendard-Regular',
    color: '#fff',
  },
});

export default SongInfoBlock;
