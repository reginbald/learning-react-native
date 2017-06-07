/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}} >
          <Text style={styles.title}>2048</Text>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreBoxTitle}>Score</Text>
            <Text style={styles.scoreBoxScore}>200</Text>
          </View>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreBoxTitle}>Best</Text>
            <Text style={styles.scoreBoxScore}>300</Text>
          </View>
        </View>
        <View>
          <Text>Join the numbers and get to the 2048 tile!</Text>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#faf8ef',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 30,
    color: '#776e65'
  },
  scoreBox: {
    backgroundColor: '#bbada0',
  },
  scoreBoxTitle: {
    color: '#e3d6c9'
  },
  scoreBoxScore: {
    color: '#ffffff'
  }
  
});

AppRegistry.registerComponent('Project', () => Project);
