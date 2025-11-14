import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function StarRating({ value, onChange }) {

  const [rating, setRating] = useState(value || 0);

 
  useEffect(() => {
    setRating(value);
  }, [value]);

  const handlePress = (star) => {
    const newRating = star === rating ? 0 : star;

    setRating(newRating);
    onChange(newRating);
  };

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => handlePress(star)}>
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

 
  