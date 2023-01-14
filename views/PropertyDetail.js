import { Text, TouchableOpacity, View, FlatList, Animated, StyleSheet, Button, Image, SafeAreaView, ScrollView  } from "react-native";
import { Layout } from "../components/Layout";
import React, { useState, useEffect } from 'react'
import { FontAwesome }  from "@expo/vector-icons"
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SPACING = 15



export const PropertyDetail = ({ route, navigation }) => {
const { property } = route.params;
const safeInsets = useSafeAreaInsets();
return (
    <View styles={styles.container}>
    <Layout>
        <Animated.View
            style={{
                position: 'absolute',
                top: safeInsets.top,
                left: safeInsets.left + SPACING,
                right: safeInsets.right + SPACING,
                zIndex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>            
            <FontAwesome name='close' style={{color:"#FFFFFF", fontSize: 30,}} onPress={() => navigation.navigate("Main")} />
        </TouchableOpacity>
        </Animated.View>

        <Image source={{ uri: property.url }} style={styles.postImage} ></Image>
        <View
            style={{
                position: 'relative',
                left: safeInsets.left + SPACING,
                right: safeInsets.right + SPACING,
                bottom: 100,
                flexDirection: 'column',
                alignItems: 'flex-start'
            }} >
        <Text style={styles.postTitle}>{property.nombre}</Text>
        <Text style={styles.postTitle}>{property.direccion}</Text>
        </View>
        <View style={styles.postDetails}>
            <Text style={styles.postSize}>Contains:</Text>
            <Text style={styles.descriptions}>{property.habitaciones} Rooms</Text>
            <Text style={styles.descriptions}>{property.banios} Bathrooms</Text>
            <View style={{marginBottom: 20}} />
            <Text style={styles.postSize}>Tamaño:</Text>
            <Text style={styles.descriptions}>{property.superficie} ft²</Text>
            <View style={{marginBottom: 20}} />
            <Text style={styles.postSize}>Prize:</Text>
            <Text style={styles.descriptions}>${property.costoMensual}/month </Text>
            <View style={{marginBottom: 20}} />
            <Text style={styles.postSize}>Score:</Text>
            <Text style={styles.descriptions}>{property.calificacion} <FontAwesome name="star" /></Text>
        </View>
    </Layout>
    </View>
);

};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#2c2c2c",
        height: "100%",
    },
    postDetails: {
        position: "relative",
        bottom: 45,
        paddingHorizontal: SPACING,
        flex: 1
    },
    postImage: {
        height: 350,
        width: '100%',
        opacity: 0.50
    },
    postTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#FFFFFF",
        textAlign: 'right',
    },
    postSize: {
        fontSize: 20,
        fontWeight: 'semi-bold',
        color: "#FFFFFF"
    },
    descriptions:{
        color: 'green',
        fontSize: 15
    }
})