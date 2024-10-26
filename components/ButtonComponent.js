import { TouchableOpacity, Text } from "react-native";
import React from "react";

const ButtonComponent = (props) => {
  const { btnContainerStyle, btnTextStyle, ctaText, handlePress } = props;

  return (
    <TouchableOpacity style={btnContainerStyle} onPress={handlePress}>
      <Text style={btnTextStyle}>{ctaText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
