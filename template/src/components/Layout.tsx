import { Platform, StyleSheet, View } from "react-native";
import React, { FC } from "react";

import { metrics } from "../config/metrics";

export const Layout: FC = function ({ children }) {
  return Platform.select({
    native: <>{children}</>,
    default: <View style={styles.root}>{children}</View>,
  });
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    maxWidth: metrics.webMaxLayoutWidth,
    alignSelf: "center",
    flex: 1,
  },
});
