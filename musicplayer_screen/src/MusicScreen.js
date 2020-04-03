import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesome} from '@expo/vector-icons'

const MusicScreen = () =>{
    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignItems:"center"}}>
                <View>
                    <Text style={[styles.textlight,{fontSize:12,marginTop:10,borderColor:"black",borderWidth:2}]}>PLAYLIST</Text>
                    <Text style={[styles.textlight,{fontSize:16,marginTop:10,fontWeight:"500"}]}>Subcirb</Text>
                </View>
                <View style={styles.coverContainer}>
                    <Image source={require('../assets/cover.jpg')} style={styles.cover}></Image>
                </View>
                <View style={{marginTop:20,alignItems:"center"}}>
                    <Text style={[styles.darktext,{fontWeight:"500",fontSize:20}]}>Exhale</Text>
                    <Text style={[styles.text,{fontSize:20}]}>Jurne block</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    textlight:{
        color:"#7C918D"
    },
    text:{
        color:"#676D6C"
    },
    coverContainer:{
        borderColor:"black",borderWidth:2,
        marginTop:32,
        width:250,
        height:250,
        borderRadius:200,
        // shadowColor:"#CDD8D6",
        // shadowOffset:{height:10},
        // shadowRadius:8,
        // shadowOpacity:6.3,
        elevation: 50,
        overflow:"hidden"
        
    },
    cover:{
        width:250,
        height:250,
        // borderRadius:200,
        
    }
  });
  

export default MusicScreen;
