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

const App: () => React$Node = () => {
  return (
    <ThemeProvider>
      <Text>
        ok
      </Text>
    </ThemeProvider>
  );
};

export default App;