import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Rosette from '../Elements/Rosette';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TopbarLeaderboard = () => {
    

    return (
        <View style={styles.container}>
            <Rosette colorCode='#cd7f32' shadowCode='#b96b1e'/>
            <Rosette colorCode='#c0c0c0' shadowCode='#acacac'/>
            <Rosette colorCode='#ffd700' shadowCode='#ebc300'/>
            <Rosette colorCode='#557df5' shadowCode='#4169e1'/>
            <Rosette colorCode='#50c878' shadowCode='#3cb464'/>
            <Rosette colorCode='#b9f2ff' shadowCode='#a5deeb'/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: screenHeight / 100 * 10,
        width: screenWidth,
        borderWidth: 1,
        borderColor: '#8a79b5',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        justifyContent:'space-between'
    },
    
});

export default TopbarLeaderboard;
