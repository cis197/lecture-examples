import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/index.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Main/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
