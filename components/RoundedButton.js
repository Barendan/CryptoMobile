import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function RoundedButton(props) {
  const { text, icon, textColor, backgroundColor, onPress } = props;
  const color = textColor || "white";

  return (
    <TouchableOpacity
      onPress={() => onPress && onPress()}
      style={[
        styles.wrapper,
        { backgroundColor: backgroundColor || "transparent" },
      ]}
    >
      <View style={styles.ButtonTextWrapper}>
        {icon}
        <Text style={[{ color }, styles.buttonText]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    display: "flex",
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "white",
    marginBottom: 15,
    alignItems: "center",
    width: "50%",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
  },
  buttonTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
