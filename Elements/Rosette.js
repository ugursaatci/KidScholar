import React from 'react';
import { View, StyleSheet } from 'react-native';

const Rosette = (props) => {
    const colorCode = props.colorCode;
    const shadowCode = props.shadowCode;

    return (
        <View style={styles.container}>
            <View style={[styles.smallRosette,{ backgroundColor: colorCode}]}/>
            <View style={[styles.bigRosette,{ backgroundColor: shadowCode}]}/>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        height:60,
        width:60
    },
    smallRosette:{
        width:50,
        height:50,
        borderBottomLeftRadius:100,
        borderBottomRightRadius:100,
        position:'absolute',
        zIndex:1
    },
    bigRosette:{
        width:60,
        height:60,
        borderBottomLeftRadius:100,
        borderBottomRightRadius:100,
        position:'absolute'
    }

});

export default Rosette;
