import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform
} from 'react-native'

import { Button, ThemeProvider } from 'react-native-elements';

import LKText from './components/LKText'
import LKImage from './components/LKImage';
import { MapView, Marker } from 'react-native-amap3d'
import JMap from './components/JMap'

import AppContainer from './navigator/basenav'

// const App: () => React$Node = () => {
//   let str = 'ok';
//   return (
//     <>
//       <StatusBar barStyle='dark-content'></StatusBar>
//       <SafeAreaView style={styles.mainViewStyle}>
//         <JMap>

//         </JMap>

//         {/* <JMap style={StyleSheet.absoluteFill}></JMap> */}
//       </SafeAreaView>
//     </>
//   )
// }

const App: () => React$Node = () => {
  return (
    <ThemeProvider>
      < AppContainer>
      </ AppContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1, backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
    width: 500
  }
})

export default App;