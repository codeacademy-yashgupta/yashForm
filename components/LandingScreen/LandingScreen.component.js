import React, { Component } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import Header from '../Header/Header.component';
import FormList from '../FormList/FormList.component';
import FloatingAddButton from '../FloatingAddButton/FloatingAddButton.component';
import { httpGet } from '../../utils/httpGet';
import { URL_FOR_GET_FORMS } from '../../constants';

export default class LandingScreen extends Component {
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
        <Header isLandingPage="true" navigation={this.props.navigation} />
        <FormList forms={forms} navigation={this.props.navigation} />
        <FloatingAddButton navigation={this.props.navigation} />
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
