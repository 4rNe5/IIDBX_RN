import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

type SearchBarProps = {
  placeholder: string;
  searchKeyword: string;
  onSearch: (text: string) => void;
  onSearchButtonPress: () => void;
}

export default function SearchBar ({ placeholder, searchKeyword, onSearch, onSearchButtonPress }: SearchBarProps) {
  return (
    <View style={{ marginHorizontal: -2, marginBottom: 25, backgroundColor: '#e3e3e3', flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 8, paddingVertical: 8, borderRadius: 35, margin: 10 }}>
      <TextInput
        style={{ flex: 1, borderRadius: 5, padding: 9, marginRight: 7, fontFamily: 'Pretendard-SemiBold', fontSize: 16 }}
        placeholder={placeholder}
        value={searchKeyword}
        onChangeText={onSearch}
      />
      <TouchableOpacity onPress={onSearchButtonPress} style={{ padding: 13, backgroundColor: '#3458ff', borderRadius: 50 }}>
        <FontAwesome5 name="compact-disc" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};