import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Text, Dimensions, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Bottombar from '../Bars/Bottombar';

const screenWidth = Dimensions.get('window').width;

const Profile = () => {
    const navigation = useNavigation();

    const handleExit = () =>{
        navigation.navigate('Login')
    }
    return (
        
        <View style={styles.container}>
            <StatusBar/>
            <ScrollView>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.profileText}>Profil Bilgileri</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.profileText}>
                            Hesap Ayarları
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.profileText}>
                         Gizlilik Ayarları
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.profileText}>
                        Bildirimler
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.profileText}>
                        Bağlantılar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.profileText}>
                        Yardım ve Destek
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={handleExit}>
                        <Text style={styles.profileText}>
                        Çıkış
                        </Text>
                    </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
        padding:10
    },
    profileText:{
        color:'#fff',
        fontSize:16,
        left:10
    },
    option:{
        borderBottomWidth:1,
        width:screenWidth,
        justifyContent:'center',
        borderColor:'#5413e1',
        height:50
    }

    
});

export default Profile;
