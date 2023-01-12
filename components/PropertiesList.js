import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Property } from "./Property";

export const PropertiesList = ({ properties, navigation }) => {
  
  const navigateTo = (property) => {
    navigation.navigate("PropertyDetail", { property });
  };
  return (
    <ScrollView>
      <View style={styles.list}>
        {properties.map((p) => (
          <Property key={p.id} property={p} navigateTo={navigateTo} />
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
});
