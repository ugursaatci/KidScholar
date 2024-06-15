import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';


const Lessons = () => {
    
    const navigation = useNavigation();
    const [math, setMath] = useState(false);
    const [science, setScience] = useState(false);
    const [social, setSocial] = useState(false);
    const [turkish, setTurkish] = useState(false);
    
    

    const mathSelect = math ? '#3cb464' : '#fff';
    const scienceSelect = science ? '#3cb464' : '#fff';
    const socialSelect = social ? '#3cb464' : '#fff';
    const turkishSelect = turkish ? '#3cb464' : '#fff';

    const handlenext = () => {
        console.log("Matematik:", math,"Fen Bilgisi:", science,"Sosyal Bilgiler:", social,"Türkçe:", turkish)
        navigation.navigate('Home')
    }

    

    return (
        
        <View style={styles.container}>
            <View style={styles.cloudContainer}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/cloudy.png')}
                />
            </View>
            <View style={styles.lessonsContainer}>
                <View style={styles.lessonsSubContainer}>
                    <TouchableOpacity
                        style={[styles.lesson, { backgroundColor: mathSelect }]}
                        onPress={() => setMath(!math)}>
                            <Text style={styles.buttonText}>Matematik</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.lesson, { backgroundColor: scienceSelect }]}
                        onPress={() => setScience(!science)}>
                            <Text style={styles.buttonText}>Fen Bilgisi</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lessonsSubContainer}>
                    <TouchableOpacity
                        style={[styles.lesson, { backgroundColor: socialSelect }]}
                        onPress={() => setSocial(!social)}>
                            <Text style={styles.buttonText}>Sosyal Bilgiler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.lesson, { backgroundColor: turkishSelect }]}
                        onPress={() => setTurkish(!turkish)}>
                            <Text style={styles.buttonText}>Türkçe</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handlenext}>
                    <Text style={{color:'#fff'}}>İleri</Text>
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
        height: 500,
    },
    lessonsContainer:{
        
    },
    lessonsSubContainer:{
        flexDirection:'row',
        marginTop:10,
    },
    lesson:{
        width:180,
        borderWidth:2,
        height:50,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#5e17be'
    },
    buttonText:{
        color:'#d9d9d9'
    },
    buttonContainer:{
        marginTop:30
    },
    button:{
        width:360,
        backgroundColor:'#5e17be',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        borderRadius:50
    }
});

export default Lessons;
