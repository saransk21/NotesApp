import {  StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTile}>Your Sticky Notes</Text>
    </View>
        
  )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer:{
        width:"100%",
        height:"13%",
        backgroundColor:"purple",
        paddingTop:30,
    },
    headerTile:{
        // color: Platform.OS== "andriod" ? "white" : "purple"
    
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        padding:10,
        
    }
})