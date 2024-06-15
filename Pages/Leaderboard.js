import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Bottombar from '../Bars/Bottombar';
import TopbarLeaderboard from '../Bars/TopbarLeaderboard';
import LeaderboardContent from '../Content/LeaderboardContent';
import {Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Leaderboard = () => {
    const navigation = useNavigation();
    const [time,setTime] = useState(3);
    const [rank,setRank] = useState(17);

    return (
        
        <View style={styles.container}>
            <StatusBar/>
            <TopbarLeaderboard/>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            İlk 10 Kişi Bir Üst Lige Çıkacak
                        </Text>

                        <View style={styles.table}>
                            <View style={styles.tableLeft}>
                                <Text style={styles.tableText}>
                                    Bugün
                                </Text>
                                <Text style={styles.tableText}>
                                    {rank}. Sıra
                                </Text>
                            </View>
                            <View style={styles.tableMid}>

                            </View>
                            <View style={styles.tableRight}>
                                <Text style={styles.tableText}>
                                    Kalan Süre
                                </Text>
                                <Text style={styles.tableText}>
                                    {time} Gün
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.line}></View>
                    <View  style={styles.queue}>
                        <LeaderboardContent colorCode='#fff533' shadowCode='#ffd700' number='1' profilebg='#54b5b3' name='Elif' point='147'/>
                        <LeaderboardContent colorCode='#c0c0c0' shadowCode='#acacac' number='2' profilebg='#557df5' name='Uğur' point='146'/>
                        <LeaderboardContent colorCode='#cd7f32' shadowCode='#b96b1e' number='3' profilebg='#e5bee8' name='XD' point='15'/>
                    </View>
                    
                    
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
        marginTop:100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    header:{
        width:screenWidth/100*80
    },
    headerText:{
        fontSize:23,
        color:'#fff'
    },
    table:{
        marginTop:10,
        width:screenWidth/100*80,
        height:100,
        borderWidth:4,
        borderRadius:30,
        borderColor:'#d9d9d9',
        flexDirection:'row',
        justifyContent:'center'
    },
    tableLeft:{
        width:(screenWidth/100*80-4)/2,
        justifyContent:'center',
        alignItems:'center'
    },
    tableMid:{
        height:95,
        width:4,
        backgroundColor:'#d9d9d9'
    },
    tableRight:{
        width:(screenWidth/100*80-4)/2,
        justifyContent:'center',
        alignItems:'center'
    },
    tableText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#d9d9d9'
    },
    queue:{
        marginTop:20
    },
    line:{
        height:1,
        width:screenWidth,
        backgroundColor:'#d9d9d9',
        marginTop:10
    }
});

export default Leaderboard;
