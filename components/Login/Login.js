import React, { Component, useState } from 'react'
import { ScrollView,View,TextInput, TouchableOpacity,Text, StyleSheet,SafeAreaView } from 'react-native'
import APIKit from '../../http/client'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Login = ({navigation}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function onPressLogin(){
        const payload = {username: username, password: password}
        const response = async (pay) => {
            await APIKit.get("/users", pay)
            .then(response => console.log(response))
            .catch(err => console.log(err, err.message))
        }
        response(payload)
    }

    function signUp(){
        navigation.navigate('Info')
    }

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inputView}>
            <TextInput 
            style={styles.inputStyle}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            value={username}
            onChangeText={(username) => {
                setUsername(username)
            }}
            />
        </View>

        <View style={styles.inputView}>
            <TextInput 
            style={styles.inputStyle}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#003f5c"
            value={password}
            onChangeText={(password) => setPassword(password)}
            />
        </View>
        <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={onPressLogin}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Text style={styles.signIn} onPress={signUp}>Sign in</Text>
        </TouchableOpacity>
    </SafeAreaView>
    
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#50577A',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      marginBottom: 40
    },
    inputView: {
      backgroundColor: '#EEEEEE',
      borderRadius: 30,
      width: '100%',
      height: 45,
      marginBottom: 20,
      alignItems: 'center',
      textAlign: 'center'
    },
    inputStyle: {
      height: 50,
      flex: 1,
      padding: 10,
      width: '73%'
    },
    forgotPassword: {
      height: 30,
      marginBottom: 30
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      backgroundColor: "#DC5F00" 
    },
    signIn: {
        height: 40,
        marginTop: 40,
        color: "#000000",
        fontWeight: "bold"
    }
});

export default Login