import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,Slider} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
//import Slider from '@react-native-community/slider';
import {FontAwesome} from '@expo/vector-icons'

const MusicScreen = () =>{
     const [state, setstate] = useState({trakLenth:300,timeElapsed:"0.00",timeRemaining:"5.00"});

     const ChangeTime = second => {

     }
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
            <View style={{marginTop:32}}>
                <Slider 
                minimumValue={0}
                maximumValue={state.trakLenth}
                // style={styles.track}
                minimumTrackTintColor="#32786C"

                />
            </View>
            <View style={styles.musicpad}>
                <TouchableOpacity>
                    <FontAwesome name="backward" size={32}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.playbtncontainer}>
                    <FontAwesome name="play" size={32} style={styles.playbtn}/>
                </TouchableOpacity> 
                <TouchableOpacity>
                    <FontAwesome name="forward" size={32}/>
                </TouchableOpacity>   
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
        
    },
    musicpad:{
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:30

    },
    playbtncontainer:{
        borderColor:"#658780",
        borderWidth:5,
        width:70,
        height:70,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50,
        marginHorizontal:32,
        elevation:40
    }
  });
  

export default MusicScreen;
