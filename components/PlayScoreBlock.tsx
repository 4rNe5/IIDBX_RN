import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ScoreViewProps = {
  username: string;
  name: string;
  difficulty: string;
  rank: string;
  gauge: string;
  ex_score: string;
};

const ScoreView = ({ username, name, difficulty, rank, gauge, ex_score }: ScoreViewProps) => {
  const difficultyColors: { [key: string]: string } = {
    BEG: '#46c546',
    SPN: '#6495ed',
    SPH: '#f6ab20',
    SPA: '#ff3434',
    SPL: '#fa298c',
  };

  const rankColors: { [key: string]: string } = {
    MAX: '#eac521',
    AAA: '#1593f8',
    AA: '#1593f8',
    A: '#1593f8',
    B: '#ff9f3f',
    C: '#ff7301',
    D: '#ff3333',
    F: '#676767',
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.rank, { color: rankColors[rank] }]}>{rank}<Text style={styles.rankinfoText}>  Rank in</Text></Text>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>Player : {username}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={[styles.infoBox, { backgroundColor: difficultyColors[difficulty] }]}>
          <Text style={styles.diffText}>난이도</Text>
          <Text style={[styles.infoValue, { color: '#fff' }]}>{difficulty}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>EX Score</Text>
          <Text style={[styles.exdiffText, rank === 'MAX' ? styles.exdiffTextMax : styles.exdiffTextDefault]}>{ex_score}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>클리어 게이지</Text>
          <Text style={styles.infoValue}>{gauge.replace(/_/g, ' ')}</Text>
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
  rankContainer: {
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  rank: {
    fontSize: 80,
    fontFamily: 'NeoDunggeunmoPro',
    paddingLeft: 12,
    paddingTop: 14,
    paddingBottom: 10,
  },
  headerContainer: {
    marginBottom: 20,
    paddingLeft: 12,
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
  rankinfoText: {
    fontSize: 22,
    fontFamily: 'Pretendard-SemiBold',
    marginBottom: 3,
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    fontFamily: 'Pretendard-SemiBold',
    marginBottom: 3,
    color: '#333',
  },
  diffText: {
    fontSize: 16,
    fontFamily: 'Pretendard-SemiBold',
    marginBottom: 3,
    color: '#ffffff',
  },
  exdiffText: {
    fontSize: 17,
    marginBottom: 3,
    color: '#000000',
  },
  exdiffTextMax: {
    fontFamily: 'Pretendard-ExtraBold',
  },
  exdiffTextDefault: {
    fontFamily: 'Pretendard-SemiBold',
  },
  infoValue: {
    fontSize: 17,
    fontFamily: 'Pretendard-Medium',
    color: '#000',
  },
});

export default ScoreView;
