import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

type PretendardTextProps = {
  children: React.ReactNode;
  style?: any;
  fontsize?: number;
  fontWeight?: "Black" | "Bold" | "ExtraBold" | "ExtraLight" | "Light" | "Medium" | "Regular" | "SemiBold" | "Thin";
};

export default function PretendardText({ children, style, fontsize, fontWeight = `ExtraBold` }: PretendardTextProps) {
  return (
    <Text
      style={[
        style,
        { fontFamily: `Pretendard-${fontWeight}`, fontSize: fontsize },
      ]}
    >
      {children}
    </Text>
  );
}
