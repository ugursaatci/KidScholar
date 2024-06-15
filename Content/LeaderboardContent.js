import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Medal from '../Elements/Medal';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LeaderboardContent = ({ colorCode, shadowCode, number, profilebg, name, point }) => {

    return (
        <View style={styles.container}>
            <View style={styles.medal}>
                <Medal colorCode={colorCode} shadowCode={shadowCode} number={number}/>
            </View>
            <View style={[styles.profile,{backgroundColor: profilebg}]}/>
            <View style={styles.name}>
                <Text style={styles.propText}>{name}</Text>
            </View>
            <View style={styles.point}>
                <Text style={styles.propText}>{point}</Text>
                <Text style={{fontSize:24,color:'#fff'}}> Puan</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: screenHeight / 100 * 10,
        width: screenWidth/100 * 90,
        flexDirection: 'row',
        left: 0,
        right: 0,
        zIndex: 1
    },
    profile:{
        width:60,
        height:60,
        borderRadius:60,
        marginLeft:30,
       },
    medal:{
        left:5,

    },
    name:{
        width:60,
        marginLeft:30
    },
    point:{
        flexDirection:'row',
        marginLeft:5
    },
    propText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff'
    }
    
});

export default LeaderboardContent;
