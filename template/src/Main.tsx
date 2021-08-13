import React, { FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { Layout } from "./components/Layout";
import Navigation from "./navigation";

export const Main: FC = function () {
  return (
    <SafeAreaView style={styles.root}>
      <Layout>
        <Navigation />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff"
  },
});
