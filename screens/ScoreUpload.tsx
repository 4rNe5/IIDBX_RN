import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import PretendardText from "../components/PretendardText";

const ScoreUpload = () => {
  const [userName, setUserName] = useState('');
  const [songName, setSongName] = useState('');
  const [exScore, setExScore] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedRank, setSelectedRank] = useState('');
  const [selectedGauge, setSelectedGauge] = useState('');

  const difficulties = ['BEG', 'SPN', 'SPH', 'SPA', 'SPL'];
  const difficultyColors = ['#46c546', '#6495ed', '#f6ab20', '#ff3434', '#fa298c'];
  const ranks = ['MAX', 'AAA', 'AA', 'A', 'B', 'C', 'D', 'F'];
  const gauges = ['Hard', 'EX Hard', 'Assistant Clear', 'Easy Clear', 'Normal Clear'];

  const requestData = {
    name: songName,
    username: userName,
    ex_score: exScore,
    difficulty: selectedDifficulty,
    rank: selectedRank,
    gauge: selectedGauge,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.title_container}>
        <FontAwesome6 style={styles.title_icon} name="chart-simple" size={65} color="black" />
        <PretendardText style={{ marginBottom: 10 }} fontsize={32} fontWeight={'Bold'}>플레이 성과 업로드</PretendardText>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>플레이어명</Text>
        <TextInput
          style={styles.input}
          placeholder="플레이어명 입력"
          value={userName}
          onChangeText={setUserName}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>악곡명</Text>
        <TextInput
          style={styles.input}
          placeholder="악곡명 입력"
          value={songName}
          onChangeText={setSongName}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EX Score 기록</Text>
        <TextInput
          style={styles.input}
          placeholder="EX Score 기록 입력"
          value={exScore}
          onChangeText={setExScore}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>난이도</Text>
        <View style={styles.buttonGroup}>
          {difficulties.map((difficulty, index) => (
            <TouchableOpacity
              key={difficulty}
              style={[
                styles.difficultyButton,
                selectedDifficulty === difficulty && styles.selectedButton,
                { backgroundColor: difficultyColors[index] },
              ]}
              onPress={() => setSelectedDifficulty(difficulty)}
            >
              <Text style={styles.buttonText}>{difficulty}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>랭크</Text>
        <View style={styles.buttonGroup}>
          {ranks.map((rank) => (
            <TouchableOpacity
              key={rank}
              style={[
                styles.rankButton,
                selectedRank === rank && styles.selectedButton,
              ]}
              onPress={() => setSelectedRank(rank)}
            >
              <Text style={styles.buttonText}>{rank}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>게이지</Text>
        <View style={styles.buttonGroup}>
          {gauges.map((gauge) => (
            <TouchableOpacity
              key={gauge}
              style={[
                styles.gaugeButton,
                selectedGauge === gauge && styles.selectedButton,
              ]}
              onPress={() => setSelectedGauge(gauge)}
            >
              <Text style={styles.buttonText}>{gauge}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.saveButtonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={() => console.log(requestData)}>
          <Text style={styles.saveButtonText}>기록 저장하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  title_container: {
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 40,
  },
  title_icon: {
    marginLeft: 10,
    paddingBottom: 15,
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    marginLeft: 10,
    fontFamily: 'Pretendard-Bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 15,
    fontSize: 16,
    fontFamily: 'Pretendard-Regular',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  difficultyButton: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100, // Adjust as needed
  },
  rankButton: {
    backgroundColor: '#34aaff',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100, // Adjust as needed
  },
  gaugeButton: {
    backgroundColor: 'gray',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100, // Adjust as needed
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: '#ff9900',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Pretendard-SemiBold',
  },
  saveButtonContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    paddingBottom: 35,
  },
  saveButton: {
    backgroundColor: '#3458ff',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
  },
});

export default ScoreUpload;
