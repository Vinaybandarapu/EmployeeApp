/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import AuthRoute from './src/routes/AuthRoute';



const App = () => {

  return (
    <>
        <AuthRoute />
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
