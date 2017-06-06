/**
 * Grocery App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = require('./styles.js')

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAMG0L8FUdWRAFjHNZUW5dGgu73y4C4t9I",
  authDomain: "grocery-app-389fa.firebaseapp.com",
  databaseURL: "https://grocery-app-389fa.firebaseio.com",
  projectId: "grocery-app-389fa",
  storageBucket: "grocery-app-389fa.appspot.com",
  messagingSenderId: "1070090167521"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class GroceryApp extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
