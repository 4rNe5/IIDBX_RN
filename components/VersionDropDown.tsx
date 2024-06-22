import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Octicons } from "@expo/vector-icons";

const data = [
  { label: '1st Style', value: '0' },
  { label: 'substream', value: '1' },
  { label: '2nd Style', value: '2' },
  { label: '3rd Style', value: '3' },
  { label: '4th Style', value: '4' },
  { label: '5th Style', value: '5' },
  { label: '6th Style', value: '6' },
  { label: '7th Style', value: '7' },
  { label: '8th Style', value: '8' },
  { label: '9th Style', value: '9' },
  { label: '10th Style', value: '10' },
  { label: '11 IIDX RED', value: '8' },
];

type VersionDropDownProps = {
  onValueChange: any;
};

const DropdownComponent = ({ onValueChange }: VersionDropDownProps) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleValueChange = (item : any) => {
    setValue(item.value);
    setIsFocus(false);
    onValueChange(item.value);
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: '#3458ff' }]}>
          선택된 IIDX 버전
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#3458ff' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? '버전 선택' : '...'}
        searchPlaceholder="버전명 검색"
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleValueChange}
        renderLeftIcon={() => (
          <Octicons style={styles.icon} name="versions" size={20} color={isFocus ? '#3458ff' : 'black'} />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    padding: 16,
    marginBottom: -15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    width: '95%',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#f4f4f4',
    left: 48,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
    fontFamily: 'Pretendard-SemiBold',
  },
  placeholderStyle: {
    fontSize: 16,
    paddingLeft: 5,
    fontFamily: 'Pretendard-Medium',
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Pretendard-Medium',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    fontFamily: 'Pretendard-Medium',
  },
});
