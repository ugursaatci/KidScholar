import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TopbarHome from '../Bars/TopbarHome';
import Bottombar from '../Bars/Bottombar';
import LessonButton from '../Elements/LessonButton';
import Chest from '../Elements/Chest';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Home = () => {
    const navigation = useNavigation();

    return (
        
        <View style={styles.container}>
            <StatusBar/>
            <TopbarHome style={styles.topbar} />
            <ScrollView>
            <View style={styles.content}>
                <View style={styles.buttonLeft}>
                    <Chest/>
                </View>
                    <LessonButton shape='star'/>
                <View style={styles.buttonRight}>
                    <LessonButton shape='dumbbell'/>
                </View>   
                    <LessonButton shape='book-open-page-variant' />
                    <View style={styles.buttonLeft}>
                    <Chest/>
                </View>
                    <LessonButton shape='star'/>
                <View style={styles.buttonRight}>
                    <LessonButton shape='dumbbell'/>
                </View>   
                    <LessonButton shape='book-open-page-variant' />

                    
                </View>
            </ScrollView>
            <Bottombar/>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8c52ff',
        
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top:screenHeight / 100 * 10,
        bottom:screenHeight / 100 * 10 + 150,
    },
    topbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    
    buttonLeft: {
        width:screenWidth,
        left:50
    },
   
    buttonRight: {
        left: 50,
    },
    
});

export default Home;
