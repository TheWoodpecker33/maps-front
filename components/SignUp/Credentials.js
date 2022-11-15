import React, { Component, useState } from 'react'
import { View, TextInput, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import APIKit from '../../http/client'

const SignUp = ({navigation}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    function MoveToNext(){

    }
    
    function Cancel(){
        navigation.navigate('Info', request)
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.textInputContainer}>
            <Text style={styles.text}>
                Username
            </Text>
            <TextInput 
            style={styles.textInput}
            value={username}
            onChangeText={(username) => setUsername(username)}
            />
            </View>

            <View style={styles.textInputContainer}>
                <Text style={styles.text}>
                    Password
                </Text>
                <TextInput 
                style={styles.textInput}
                value={password}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                />
            </View>
            <View style={styles.textInputContainer}>
                <Text style={styles.text}>
                    Confirm Password
                </Text>
                <TextInput 
                style={styles.textInput}
                value={password2}
                secureTextEntry={true}
                onChangeText={(password2) => setPassword2(password2)}
                />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.cancelBtn} onPress={MoveToNext}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.nextBtn}>
                    <Text>Next</Text>
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

export default SignUp