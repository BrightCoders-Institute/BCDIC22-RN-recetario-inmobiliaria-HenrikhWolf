import { Text, TouchableOpacity, View, FlatList, Animated, StyleSheet, Button, Image, SafeAreaView, ScrollView  } from "react-native";
import { Layout } from "../components/Layout";
import React, { useState, useEffect } from 'react'
import { FontAwesome }  from "@expo/vector-icons"
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SPACING = 15


export const PropertyDetail = ({ route, navigation }) => {
const { property } = route.params;

return (
    <Layout>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>            
            <FontAwesome name='close' style={{color:"#FFFFFF", fontSize: 30,}} onPress={() => navigation.navigate("Main")} />
        </TouchableOpacity>
        <Image source={{ uri: property.url }} style={styles.preview} ></Image>
        <Text>{property.nombre}</Text>
        <Text>{property.direccion}</Text>
        <Text>{property.habitaciones}</Text>
        <Text>{property.banios}</Text>
        <Text>{property.superficie}</Text>
        <Text>{property.costoMensual}</Text>
        <Text>{property.calificacion}</Text>
    </Layout>
);

const safeInsets = useSafeAreaInsets()
const [favs, setFavs] = useState(false)
console.log(route.params)
const { title, size, ingredients, name, imageURL, favorite} = route.params.item
console.log(name, favs)

const renderIngredients = (property) => {
    return(
        <View style={{
            flexDirection:'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 45

        }}>
            <Text style={{ color: 'white', fontSize: 15}}>{ property.nombre}</Text>
            <Text style={{ color: 'white', fontSize: 15}}>{ property.quantity}</Text>
        </View>
    )
}


const itemSeparator = () => {
    return(
        <View style={{
            borderBottomWidth: 1,
            opacity: 0.4,
            borderBottomColor: '#4e4a4a'
        }} />
    )
}
return (
    <View style={styles.container}>

        <Animated.View
        style={{
            position: 'absolute',
            top: safeInsets.top + SPACING,
            left: safeInsets.left + SPACING,
            right: safeInsets.right + SPACING,
            zIndex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start'
        }}>
            
            <FontAwesome name='close' style={{color:"#FFFFFF", fontSize: 30,}} onPress={() => navigation.goBack()} />
            <Feather name='share' style={{color:"#FFFFFF", fontSize: 30, marginLeft:260, marginRight: 15}}/>
            <MaterialIcons 
            name={favs ? 'favorite' : 'favorite-border'} 
            style={{color:"#FFFFFF", fontSize: 30, marginRight: 2}}
            onPress={() => {
                setFavs(!favs)
                // favorite = favs
                }}
            />
        </Animated.View>
        <Image source={{ uri: imageURL}} style={styles.postImage}/>
        
        <Animated.View 
        style={{
            position: 'relative',
            left: safeInsets.left + SPACING,
            right: safeInsets.right + SPACING,
            bottom: 100,
            flexDirection: 'column',
            alignItems: 'flex-start'
        }} >
            <Text style={styles.postSize}>{title}</Text>
            <Text style={styles.postTitle}>{name}</Text>
        </Animated.View>

        <View style={styles.postDetails}>
            <Text style={styles.postSize}>Ingredients</Text>
            <Text style={styles.postSize}>for {size}</Text>
            <Text></Text>

            <FlatList
                data={ ingredients }
                renderItem={({ item }) => renderIngredients( item )}
                ItemSeparatorComponent={ itemSeparator}
                showsVerticalScrollIndicator={ true}
                key= { item => item.key}
            />
            
            
        </View>
    </View>
)
};

const styles = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor: '#2C2C2C',
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
        opacity: 0.40
    },
    postTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#FFFFFF"
    },
    postSize: {
        fontSize: 20,
        fontWeight: 'semi-bold',
        color: "#FFFFFF"
    },
    postIngredients: {
        textAlign:'left',
        color: "#FFFFFF"
    },
    preview: {
      width: 100,
      height: 100,
      borderRadius: 15,
    },
})