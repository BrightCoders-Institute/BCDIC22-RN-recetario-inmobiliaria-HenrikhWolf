import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const Property = ({ property, navigateTo }) => {

  return (
    <TouchableOpacity
      style={styles.elemento}
      onPress={() => navigateTo(property)}
    >
      <View style={styles.item}>
        <View style={styles.previewContainer}>
          <Image source={{ uri: property.url }} style={styles.preview}></Image>
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>
              <FontAwesome style={styles.iconStar} name="star" />{" "}
              {property.calificacion}
            </Text>
          </View>
        </View>

        <View style={styles.description}>
          <Text style={styles.propertyName}>{property.nombre}</Text>

          <Text style={styles.location}>
            <FontAwesome style={styles.iconDescription} name="map-pin" />{" "}
            {property.direccion}
          </Text>

          <View style={styles.info}>
            <Text style={styles.infoElement}>
              <FontAwesome style={styles.iconDescription} name="bed" />{" "}
              {property.habitaciones}
            </Text>
            <Text style={styles.infoElement}>
              <FontAwesome style={styles.iconDescription} name="bath" />{" "}
              {property.banios}
            </Text>
            <Text style={styles.infoElement}>
              <FontAwesome style={styles.iconDescription} name="map" />{" "}
              {property.superficie} ft²
            </Text>
          </View>

          <View style={styles.bottomDesc}>
            <View style={styles.rent}>
              <Text style={styles.rentValue}>
                ${property.costoMensual}/month{" "}
              </Text>
            </View>

            <TouchableHighlight onPress={() => {}} style={styles.like}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                <FontAwesome name="heart" />
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  elemento: {
    alignContent: "space-between",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    backgroundColor: "#f5fdff",
    borderColor: "#cecece",
    borderWidth: 1,
    borderRadius: 15,
    shadowOffset: 15,
    shadowOpacity: 60,
    shadowColor: "black",
    shadowRadius: 20,
    padding: 5,
    borderRadius: 8,
    flex: 9,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    /* borderColor: "#000",
    borderWidth: 1, */
    borderRadius: 20,
    shadowOffset: 15,
    /* height: 300, */
  },
  preview: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  previewContainer: {
    alignItems: "center",
    /* width: 100,
    borderColor: "red",
    borderWidth: 1, */
    flex: 3,
  },
  description: {
    alignContent: "stretch",
    /* borderColor: "green",
    borderWidth: 1, */

    flex: 6,
  },
  scoreContainer: {
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    width: "75%",
  },
  score: {
    borderRadius: 10,
    backgroundColor: "#fbedb7",
    color: "#cc7700",
    paddingLeft: 10,
    paddingRight: 10,
  },
  info: {
    flexDirection: "row",
  },
  infoElement: {
    flex: 2,
    flexDirection: "row",
  },
  propertyName: {
    fontSize: 20,
    fontWeight: "500",
  },
  location: {
    color: "#c2c6c8",
    fontWeight: "500",
  },
  bottomDesc: {
    flex: 9,
    flexDirection: "row",
  },
  rent: {
    flex: 8,
  },
  rentValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  like: {
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "green",
    flex: 1,
    borderRadius: 100,
  },

  iconDescription: {
    color: "black",
  },
});
