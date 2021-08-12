import * as React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { RootStackParamList } from "types/naviTypes";
import { StackScreenProps } from "@react-navigation/stack";

export default function TabOneScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "Root">) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.push("ScaleView");
        }}
      >
        <Text style={styles.button}>go to responsive view</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#333",
    padding: 5,
    borderRadius: 5,
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
