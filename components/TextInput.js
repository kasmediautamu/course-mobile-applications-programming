import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { TextInput } from "react-native-web";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const CustomTextInput = ({
  fieldValue,
  onChangeText,
  label,
  placeholder,
}) => {
  return (
    <>
      {label && (
        <View>
          <Text
            style={{
              paddingLeft: "10px",
              paddingTop: "5px",
            }}
          >
            {label}
          </Text>
        </View>
      )}
      <TextInput
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
          textAlign: "center",
          padding: "20px",
          margin: "10px",
          border: "1px solid #001F2D",
          borderRadius: "4px",
        }}
        onChangeText={onChangeText}
        value={fieldValue}
        placeholder={placeholder}
      ></TextInput>
    </>
  );
};
