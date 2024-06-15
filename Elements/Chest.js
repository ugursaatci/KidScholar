import React, { useEffect, useState } from 'react';
import { View, StyleSheet,Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Chest = () => {
    

    

    
    

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                    <MaterialCommunityIcons name="treasure-chest" size={80} color="#fff533" />
            </TouchableOpacity>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       height:120,
       width:120
    },
    
   
    

    

});

export default Chest;
