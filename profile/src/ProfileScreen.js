import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import {Ionicons,MaterialIcons} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';


const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar} >
          {/* <Text>Open up App.js to start working on your app!</Text> */}
          <Ionicons name="ios-arrow-back" size={24} color="black"></Ionicons>
          <Ionicons name="md-more" size={24} color="black"></Ionicons>
        </View>

        <View style={{alignSelf:"center"}}>
          <View style={styles.profileImage}>
              <Image source={require('../assets/1.png')} ></Image>
          </View>
          <View style={styles.em}>
            <MaterialIcons name="chat" size={20} color="#F3F8F7"></MaterialIcons>
          </View>
          <View style={styles.active}></View>
          <View style={styles.add}>
            <Ionicons name="ios-add" size={40} color="#F3F8F7"></Ionicons>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text,{ fontWeight:"200",fontSize:36}]}>Anjana</Text>
          <Text style={{fontSize:16,color:"#ACB3B2"}}>Programmer</Text>
        </View>

        <View style={styles.statesContainer}>
          <View style={styles.statesBox}>
            <Text style={[styles.text,{fontSize:34}]}>483</Text>
            <Text style={styles.subText}>Post</Text>
          </View>
          <View style={[styles.statesBox,{borderLeftWidth:1,borderRightWidth:1,borderColor:"#ACB3B2"}]}>
            <Text style={[styles.text,{fontSize:34}]}>483</Text>
            <Text style={styles.subText}>Post</Text>
          </View>
          <View style={styles.statesBox}>
            <Text style={[styles.text,{fontSize:34}]}>483</Text>
            <Text style={styles.subText}>Post</Text>
          </View>
        </View>
        <View style={{marginTop:20}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image source={require('../assets/media1.jpg')} style={styles.image} resizeMode="cover"></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image source={require('../assets/media2.jpg')} style={styles.image} resizeMode="cover"></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image source={require('../assets/media3.jpg')} style={styles.image} resizeMode="cover"></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image source={require('../assets/media4.jpg')} style={styles.image} resizeMode="cover"></Image>
            </View>
          </ScrollView>
          <View style={styles.mediaCount}>
            <Text>71</Text>
            <Text>Media</Text>
          </View>
        </View>

        <Text style={styles.resent}>Recent Activity</Text>
        <View style={{alignItems:"center"}}>
        <View style={styles.resentItem}>
          <View style={styles.resentItemIndicator}></View>
            <View style={{width:250,}}>
              <Text>
                Started following {""}
                <Text style={{fontWeight:"400"}}>
                  Jack challenge and 
                    <Text style={{fontWeight:"400"}}>DesigningtoCode</Text></Text>
              </Text>
            </View>  
        </View>
        <View style={styles.resentItem}>
          <View style={styles.resentItemIndicator}></View>
            <View style={{width:250,}}>
              <Text>
                Started following {""}
                <Text style={{fontWeight:"400"}}>
                  Jack challenge and 
                    <Text style={{fontWeight:"400"}}>DesigningtoCode</Text></Text>
              </Text>
            </View>  
        </View>
        <View style={styles.resentItem}>
          <View style={styles.resentItemIndicator}></View>
            <View style={{width:250,}}>
              <Text>
                Started following {""}
                <Text style={{fontWeight:"400"}}>
                  Jack challenge and 
                    <Text style={{fontWeight:"400"}}>DesigningtoCode</Text></Text>
              </Text>
            </View>  
        </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      borderWidth:4,
      borderColor:"red",
      
      
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    text:{
        // fontFamily:'HelveticaNeue',
        color:'#52575D',
    },
    subText:{
      fontSize:12,
      textTransform:"uppercase",
      fontWeight:'600'
    },
    titleBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:16,
        marginTop:25
    },
    profileImage:{
        width:200,
        height:200,
        alignSelf:"center",
        borderRadius:150,
        overflow:"hidden",
        
        
    },
    image:{
      // borderColor:"black",
      //   borderWidth:5,
      // flex:1,
      // width:undefined,
      // height:undefined
        width:100,
        height:200
        
    },
    em:{
      backgroundColor:"#566562",
      position:"absolute",
      top:20,
      width:40,
      height:40,
      borderRadius:28,
      alignItems:"center",
      justifyContent:"center",
      color:"red"

    },
    active:{
      backgroundColor:"#3FF5D4",
      position:"absolute",
      bottom:28,
      left:16,
      height:20,
      width:20,
      borderRadius:10

    },
    add:{
      backgroundColor:"#566562",
      position:"absolute",
      height:60,
      width:60,
      borderRadius:30,
      justifyContent:"center",
      alignItems:"center",
      bottom:0,
      right:0
    },
    infoContainer:{
      alignItems:"center",
      alignSelf:"center",
      marginTop:10
    },
    statesContainer:{
      flexDirection:"row",
      alignSelf:"center",
      marginTop:32
    },
    statesBox:{
      alignItems:"center",
      flex:1
    },
    mediaImageContainer:{
      width:100,
      height:200,
      borderRadius:12,
      overflow:"hidden",
      marginHorizontal:10
    },
    mediaCount:{  
      backgroundColor:"#90A19E",
      position:"absolute",
      top:" 50%",
      alignItems:"center",
      justifyContent:"center",
      marginLeft:30,
      width:80,
      height:80,
      marginTop:-50,
      borderRadius:12,
      // shadowColor:"rgba(0,0,0,0.38)",
      // shadowOffset:{width:0,height:10},
      // shadowOpacity:1,
      shadowRadius:20
    },
    resent:{
      marginTop:32,
      marginLeft:78,
      marginBottom:6,
      fontSize:19
    },
    resentItem:{
      flexDirection:'row',
      alignItems:'flex-start',
      marginBottom:16,
    },
    resentItemIndicator:{
      backgroundColor:"#90A19E",
      height:12,
      width:12,
      borderRadius:6,
      marginTop:3,
      marginRight:20
    }
  });
  

export default ProfileScreen;
