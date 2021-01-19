/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { WebView } from 'react-native-webview';

export default()=> {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <WebView source={{ uri: 'https://www.geekshub.io/' }} />
    </>
  );
};
