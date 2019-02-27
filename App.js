import React, { Component } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import Header from './components/Header/Header.component';
import FormList from './components/FormList/FormList.component';
import FloatingAddButton from './components/FloatingAddButton/FloatingAddButton.component';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n'
//     + 'Shake or press menu button for dev menu',
// });
import { httpGet } from './utils/httpGet';
import { URL_FOR_GET_FORMS } from './constants';

export default class App extends Component {
  state = {
    forms: [],
  }

  async componentDidMount() {
    const forms = await httpGet(URL_FOR_GET_FORMS);
    this.setState({ forms: forms.data });
  }

  render() {
    const { forms } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <FormList forms={forms} />
        <FloatingAddButton />
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
