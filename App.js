import React, { Component } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import Header from './components/Header/Header.component';
import FormList from './components/FormList/FormList.component';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n'
//     + 'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FormList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
