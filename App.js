import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Pages/Splash';
import { useEffect, useState } from 'react';
import HomeScreen from './Pages/Home';

export default function App() {
  const [isShowsplash, setisShowsplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisShowsplash(false);
    }, 5000);
  }) 

  return <>{isShowsplash ? <SplashScreen /> : <HomeScreen />}</>
   
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
