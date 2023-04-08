import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.searchBar}>
          <Text>Search</Text>
        </View>
        <View style={styles.body}>
          <Text>Test</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchBar: {
    alignItems: "start",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "green",
  },
  body: {
    padding: 16,
    flex: 1,
    backgroundColor: "lightblue",
    height: "auto",
  },
});
