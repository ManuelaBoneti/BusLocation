import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
 
export default function StarRating({ value = 0, onChange }) {

  const [rating, setRating] = useState(0);

  const handlePress = (value) => {
    setRating(value);
    onChange(value);
  };

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => onChange(handlePress(star))}>
          <MaterialCommunityIcons
            name="star"
            size={40}
            color={star <= rating ? "#ffee8c" : "#FFFFFF"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
});
 
  