import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const Bottombar = () => {
    const navigation = useNavigation();

    handlehome = () => {
        navigation.navigate('Home');
    }
    handlecrown = () =>{
        navigation.navigate('Leaderboard');
    }
    handleprofile = () =>{
        navigation.navigate('Profile');
    }

    return (
        <View style={styles.container}>
            <View style={styles.home}>
                <TouchableOpacity onPress={handlehome}>
                    <MaterialIcons name="home-filled" size={45} color="#8a79b5" />
                </TouchableOpacity>
            </View>
            <View style={styles.crown}>
                <TouchableOpacity onPress={handlecrown}>
                    <FontAwesome6 name="crown" size={45} color="#e3b43c" />
                </TouchableOpacity>
            </View>
            <View style={styles.profile}>
                <TouchableOpacity onPress={handleprofile}>
                    <Ionicons name="person-sharp" size={45} color="#8a79b5" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: screenHeight / 100 * 10,
        width: screenWidth,
        backgroundColor: '#5e17be',
        borderWidth: 1,
        borderColor: '#8a79b5',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    home:{
        width:screenWidth/3
    },
    crown:{
        width:screenWidth/3
    }
    
});

export default Bottombar;
