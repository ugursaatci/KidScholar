import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

const Medal = (props) => {
    const colorCode = props.colorCode;
    const shadowCode = props.shadowCode;
    const number= props.number;

    return (
        <View style={styles.container}>
            <View style={[styles.circle, { backgroundColor: colorCode}]}>
                <Text style={{color:'#fff', fontSize:18}}>{number}</Text>
            </View>
            <View style={[styles.back, { backgroundColor: shadowCode}]}></View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        height:60,
        width:50,
        position: 'relative'
    },
    circle:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        zIndex:1
    },
    back:{
        width:25,
        height:60,
        position: 'absolute',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        zIndex: 0
    },

    

});

export default Medal;
