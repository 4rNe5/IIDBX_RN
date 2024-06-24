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
    MAX: '#ff5733',
    AAA: '#33ff57',
    AA: '#3399ff',
    A: '#ff33ff',
    B: '#ff9933',
    C: '#33ffff',
    D: '#9933ff',
    F: '#ff3333',
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{username}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>난이도</Text>
          <Text style={[styles.infoValue, { color: difficultyColors[difficulty] }]}>{difficulty}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>EX Score</Text>
          <Text style={styles.infoValue}>{ex_score}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>랭크</Text>
          <Text style={[styles.infoValue, { color: rankColors[rank], fontSize: 22, fontWeight: 'bold' }]}>{rank}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>게이지</Text>
          <Text style={styles.infoValue}>{gauge}</Text>
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
  infoText: {
    fontSize: 16,
    fontFamily: 'Pretendard-SemiBold',
    marginBottom: 3,
    color: '#333',
  },
  infoValue: {
    fontSize: 17,
    fontFamily: 'Pretendard-Regular',
    color: '#000',
  },
});

export default ScoreView;
