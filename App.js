import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { useState } from 'react';
import { ScreenType } from './constants/constants';
import AddNote from './screens/AddNote';
import AllNotesScreen from './screens/AllNotesScreen';
import BackButton from './components/BackButton';

export default function App() {
  const [screen,setScreen]= useState(ScreenType.home);
  const [notes, setnotes] = useState([]);
  const updateScreen = (data) =>{
    setScreen(data)
  }

  let content;
  if(screen === ScreenType.addNote){
    content=<AddNote onExit={updateScreen} onSave={(data)=>{setnotes([...notes,{id:Date.now(),note:data}])}}/>
  } else if (screen === ScreenType.allNote){
    content=<AllNotesScreen notes={notes}/>
  }
  else if (screen === ScreenType.home){
    content=<HomeScreen onExit={updateScreen}
    />
  }
  console.log(notes)

  return (
    <View style={styles.Container}>

      <Header />
      { screen!==ScreenType.home &&
      <BackButton onButtonClick={updateScreen} />}
      {content}

      <StatusBar style="auto" />     
    </View>

  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor:"white",
    flex:1,
  
   
  },
});
