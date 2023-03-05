import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScreenType } from '../constants/constants'

const HomeScreen = ({ onExit }) => {
  return (
    <View style={styles.container}>

        <Pressable onPress={()=>onExit(ScreenType.addNote)}>
            <View style={styles.itemButton}>
                 <Text style={styles.title}> ADD NEW NOTE</Text>
                 <Icon style={styles.icon} name="arrow-forward-outline"/>
            </View>
        </Pressable>

        <Pressable onPress={()=>onExit(ScreenType.allNote)}>
            <View style={styles.itemButton}>
                <Text style={styles.title}>VIEW ALL NOTE</Text>
                <Icon style={styles.icon} name="arrow-forward-outline"/>
            </View>
        </Pressable>
  
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-evenly",
        alignItems:'center',
        padding:50,///////////////////
        

    },
    itemButton:{
        width:Dimensions.get("window").width - 100,
        marginVertical:30,//margin top
        height:"50%", 
        backgroundColor:"#f5f5f5",
        justifyContent:"center",
        alignItems:"center",

        //FOR ANDRIOD
        elevation:20,

        //FOR IOS
        // shadowOffset:{width:2,height:10},
        // shadowColor:"black",
        // shadowOpacity:0.3,
        // shadowRadius:2,

    },
    title:{
        fontSize:35,
        fontWeight:"bold",
        textAlign:"center",
    },
    icon:{
        fontSize:25,

    }
})