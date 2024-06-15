import React, { useEffect, useState } from 'react';
import { View, StyleSheet,Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LessonButton = ({shape}) => {
    const navigation = useNavigation();
   
    const handleLesson = () =>{
        if(shape==='star')
            navigation.navigate('Lecture')
        else if(shape==='dumbbell')
            navigation.navigate('Test')
        else if(shape==='book-open-page-variant')
            navigation.navigate('Lecture')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLesson}>
                
                <View style={styles.button}>
                    <MaterialCommunityIcons name={shape} size={45} color="#8c52ff" />
                </View>
                
            </TouchableOpacity>
           
            


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       height:120,
       width:120,
       
    
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#5e17eb',
        height:100,
        width:100,
        borderRadius:50
    },
    
    

    

});

export default LessonButton;
