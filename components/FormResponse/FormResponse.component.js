import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { httpGet } from '../../utils/httpGet';
import Header from '../Header/Header.component';
import { URL_FOR_POSTING_FORM_DATA } from '../../constants';

export default class FormResponse extends Component {
  async componentDidMount() {
    const response = await httpGet(URL_FOR_POSTING_FORM_DATA + this.props.navigation.getParam('id'));
    console.log(response);
  }

  render() {
    console.log(this.props.navigation.getParam('id'));

    return (
      <View>
        <Header />

      </View>
    );
  }
}
