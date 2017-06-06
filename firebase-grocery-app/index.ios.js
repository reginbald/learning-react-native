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
  View,
  ListView,
  AlertIOS
} from 'react-native';

import StatusBar from './components/StatusBar';
import ActionButton from './components/ActionButton';
import ListItem from './components/ListItem';

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
  constructor(props) {
    super(props);
    this.itemsRef = firebaseApp.database().ref();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  _renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {}} />
    );
  }

  _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Grocery List"/>
        <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} style={styles.listview}/>
        <ActionButton title="Add" onPress={this._addItem.bind(this)}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
