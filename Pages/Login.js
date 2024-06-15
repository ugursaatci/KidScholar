import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        console.log("Kullanıcı Adı:", username, "Parola:", password);
        navigation.navigate('Lessons')
    };

    const handleSignup = () => {
        navigation.navigate('Signup');
    };

    return (
        <View style={styles.container}>
            <View style={styles.cloudContainer}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/cloudy.png')}
                />
                
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Kullanıcı Adı'
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Parola'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleLogin}>
                    <Text style={{ color: '#fff' }}>Giriş Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleSignup}
                >
                    <Text style={{ color: '#fff' }}>Üye Ol</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8c52ff',
    },
    cloudContainer: {
        marginTop: -200,
    },
    tinyLogo: {
        width: 400,
        height: 400,
    },
    input: {
        backgroundColor: '#fff',
        height: 50,
        padding: 10,
        width: 200,
        borderWidth: 2,
        marginTop: 5,
        borderRadius: 50,
        borderColor: '#5e17eb',
    },
    inputContainer: {},
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#5e17eb',
        height: 50,
        width: 200,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
});

export default Login;
