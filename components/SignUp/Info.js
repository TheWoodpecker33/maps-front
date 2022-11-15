import React, { Component, useState } from 'react'
import { View, TextInput, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Info = ({navigation}) => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    function MoveToNext(){
        const payloadSoFar = {name: name, lastName: lastName}
        navigation.navigate('Credentials', payloadSoFar)
    }

    function Cancel(){
        navigation.navigate('Login')
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.textInputContainer}>
            <Text style={styles.text}>
                Name
            </Text>
            <TextInput 
            style={styles.textInput}
            value={name}
            onChangeText={(name) => setName(name)}
            />
            </View>

            <View style={styles.textInputContainer}>
                <Text style={styles.text}>
                    Last Name
                </Text>
                <TextInput 
                style={styles.textInput}
                value={lastName}
                onChangeText={(lastName) => setLastName(lastName)}
                />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.nextBtn} onPress={MoveToNext}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.cancelBtn} onPress={Cancel}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textInputContainer: {
        width: "100%",
        height: 45,
        alignItems: 'center',
        marginBottom: 50,
        borderColor: "blue",
    },
    btnContainer: {
        width: "100%",
        height: 45,
        alignItems: 'center',
        marginTop: 50,
        borderColor: "blue",
    },
    textInput: {
        backgroundColor: "#ffffff",
        height: 50,
        padding: 10,
        width: "75%",
        borderRadius: 30,
    },
    text: {
        fontWeight: "bold",
        marginBottom: 15,
        color: "#003f5c"
    },
    nextBtn: {
        backgroundColor: "green",
        height: 50,
        padding: 10,
        width: "75%",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelBtn: {
        backgroundColor: "red",
        height: 50,
        padding: 10,
        width: "75%",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Info