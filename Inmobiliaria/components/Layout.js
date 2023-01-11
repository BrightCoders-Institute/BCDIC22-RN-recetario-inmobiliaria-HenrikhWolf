import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

export const Layout = ({ children }) => {
  return <View style={styles.mainView}>{children}</View>;
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#e5e5e5",
  },
});
