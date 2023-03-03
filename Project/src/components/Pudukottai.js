import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions, Alert, ScrollView } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Icon } from 'react-native-elements';

export default function Pudukottai({navigation}){
   return(
    
    <View style={styles.container}>
        
                    <View>
                        <TouchableOpacity style={styles.card}>
                                <Image style={styles.image} source={require('../../assets/B1.png')}/>
                                <Collapse>
                                <CollapseHeader>
                                        <View style={styles.cardContent}>
                                        <Text style={styles.name}>PUDUKOTTAI</Text>
                                        </View>
                                </CollapseHeader>
                                    <CollapseBody>
                                        <View style={styles.cb}>
                                            <TouchableOpacity style={styles.followButton1}>
                                                    <Text style={styles.followButtonText1}>1</Text> 
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.followButton1}>
                                                    <Text style={styles.followButtonText1}>2</Text> 
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.followButton1}>
                                                    <Text style={styles.followButtonText1}>3</Text> 
                                            </TouchableOpacity>
                                        </View>
                                    </CollapseBody>
                                </Collapse>
                         </TouchableOpacity>
                    </View>
    </View>
   )
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#ebf0f7"
    },
    contentList:{
      flex:1,
    },
    cardContent: {
      marginLeft:20,
      marginTop:10
    },
    image:{
      width:85,
      height:85,
      borderRadius:45,
      borderWidth:2,
      borderColor:"#ebf0f7",
      marginTop:10
    },
    
    card:{
      shadowColor: 'black',
      shadowOffset: {
        width: 10,
        height: 10,
      },
      marginTop:20,
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
  
      marginLeft: 20,
      marginRight: 20,

      backgroundColor:"white",
      paddingLeft: 10,
      paddingRight:10,
      paddingBottom:10,
      flexDirection:'row',
      borderRadius:30,
    },
  
    name:{
      fontSize:16,
    //   flex:1,
      alignSelf:'center',
      color:"#3399ff",
      fontWeight:'bold',
      marginTop:20,
      marginLeft:14
    },
    followButton: {
      marginTop:10,
      height:35,
      width:100,
      padding:10,
    //   flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "white",
      borderWidth:1,
      borderColor:"#dcdcdc",
    },
    followButtonText:{
      color: "black",
      fontSize:12,
      flexDirection: "column",
      fontWeight:'normal',
    },
    followButton1:{
        arginTop:10,
        height:35,
        width:35,
        padding:10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        backgroundColor: "white",
        borderWidth:1,
        borderColor:"midnightblue",
        marginTop:10,
        marginLeft:13
    },
    cb:{
        flexDirection:"row",
        marginLeft:10
    }
  
  }); 
  
    {/* <TouchableOpacity style={styles.followButton}>
                                                       
                                                            <Text style={styles.followButtonText}>EXPAND</Text> 
                                                            
                                                        </TouchableOpacity> */}