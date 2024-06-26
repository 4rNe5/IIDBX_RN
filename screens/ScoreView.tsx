import React, { useEffect, useState } from "react";
import { Text, ScrollView, StyleSheet, TouchableOpacity, View, Platform } from "react-native";
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import PretendardText from "../components/PretendardText";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScoreStackParamList } from "../navigation/ScoreStack";
import { RootStackParamList } from "../navigation";
import PlayScoreBlock from "../components/PlayScoreBlock";
import axios from "axios";

type ScreenNavigationProps = StackNavigationProp<RootStackParamList, 'ScoreView'>;

export default function ScoreView() {

  const navigation = useNavigation<ScreenNavigationProps>();
  const [value, setValue] = useState(0);
  const [playData, setPlayData] = useState([]);

  const getAllPlayData = () => {
    axios.get(`${process.env.API_URL}/user/get-AllUserRank`).then((response) => {
      setPlayData(response.data);
      setPlayData(response.data);
    })
  }

  useEffect(() => {
    getAllPlayData();
  }, []);
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title_container}>
        <FontAwesome6 style={styles.title_icon} name="chart-simple" size={65} color="black" />
        <PretendardText style={{marginBottom: 10}} fontsize={32} fontWeight={'Bold'}> 플레이 성과 기록 </PretendardText>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => { navigation.navigate('ScoreUpload'); }}>
        <FontAwesome name="plus" size={24} color="white" style={styles.addButtonIcon} />
        <Text style={styles.addButtonText}>내 기록 올리기</Text>
      </TouchableOpacity>
      {playData.map((data, index) => (
        <PlayScoreBlock
          key={index}
          username={data.username}
          name={data.name}
          difficulty={data.difficulty}
          rank={data.rank}
          gauge={data.gauge}
          ex_score={data.ex_score}
        />
        )
      )}
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
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3458ff',
    paddingVertical: 10,
    paddingHorizontal: 75,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 10,
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
