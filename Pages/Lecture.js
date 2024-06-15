import React from 'react';
import { View, StyleSheet, StatusBar, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const screenWidth = Dimensions.get('window').width;


const Lecture = () => {
    const navigation = useNavigation();

    const handleExit = () =>{
        navigation.navigate('Home')
    } 
    return (
        
        <View style={styles.container}>
            <StatusBar/>
            <TouchableOpacity style={styles.exit} onPress={handleExit}>
                <Text style={styles.times}>X</Text>
            </TouchableOpacity>
            <View style={styles.text}>
                <Text style={styles.paragraph}>
                    Paragrafı Oku
                </Text>
            </View>
            <View style={styles.content}>
                
            </View>
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.buttonText}>İleri</Text>
                </TouchableOpacity>
            
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8c52ff',
    },
    exit:{
        marginTop:20,
        marginLeft:20
    },
    times:{
        fontSize:40,
        color:'#d9d9d9',
        fontFamily:'Roboto',

    },
    text:{
        marginLeft:20,
        marginTop:5
    },
    paragraph:{
        fontSize:24,
        color:'#fff',
        fontWeight:'bold'
    },
    content:{
        left:screenWidth/100*10,
        width:screenWidth/100*80,
        height:160,
        backgroundColor:'#fff',
        marginTop:10,
        borderRadius:10,
        borderWidth:2,
        borderColor:'#8a79b5'
    },
    nextButton:{
        left:screenWidth/100*10,
        width:screenWidth/100*80,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#5413e1',
        borderRadius:30,
        marginTop:10
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
    }
});

export default Lecture;
