import { ScalingFunc, useScale } from "../utils/scale";
import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { RootStackParamList } from "types/naviTypes";
import { StackScreenProps } from "@react-navigation/stack";

interface AppProps extends StackScreenProps<RootStackParamList, "ScaleView"> {}

export const ScaleView: React.FC<AppProps> = ({ navigation }) => {
  const scale = useScale();
  const styles = createStyles({ scale });
  return (
    <View style={styles.root}>
      <Text
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.back}
      >
        go back
      </Text>
      <Text style={styles.text}>Hello!</Text>
      <Text style={styles.text}>I am responsive</Text>
    </View>
  );
};

const createStyles = ({ scale }: { scale: ScalingFunc }) =>
  StyleSheet.create({
    root: { flex: 1, backgroundColor: "#333" },
    titleRow: {
      flexDirection: "row",
    },
    titleRow2: {
      flexDirection: "row",
    },
    text: {
      fontSize: scale(50),
      color: "#fff",
    },
    back: {
      fontSize: scale(24),
      color: "#fff",
      borderColor: "#fff",
      borderRadius: 5,
      padding: 5,
      borderWidth: 1,
      margin: 5,
    },
  });

export default ScaleView;
