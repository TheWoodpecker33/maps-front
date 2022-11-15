import React, { Component, useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import Geocoder from 'react-native-geocoder'
import * as Location from 'expo-location'

const Home = () => {

    const [position, setPosition] = useState({
        latitude: 20.6542,
        longitude: -103.3250,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,       
    })

    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                initialRegion={position}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                showsCompass={true}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}
            >
                <Marker coordinate={position}/>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})

export default Home