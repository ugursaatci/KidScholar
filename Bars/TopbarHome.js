import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TopbarHome = () => {
    const [score, setScore] = useState(0);
    const [diamond, setDiamond] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.streak}>
                <Fontisto name="fire" size={45} color="#f1473a" />
                <Text style={styles.pointText}>{score}</Text>
            </View>
            <View style={styles.diamonds}>
                <Ionicons name="diamond" size={45} color="#b9f2ff" />
                <Text style={styles.pointText}>{diamond}</Text>
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
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    streak: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200
    },
    pointText: {
        left: 20,
        color: '#fff',
        fontSize: 40
    },
    diamonds: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200
    }
});

export default TopbarHome;
