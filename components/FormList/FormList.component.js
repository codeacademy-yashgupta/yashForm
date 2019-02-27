import React, { Component } from 'react';
import { View } from 'react-native';
import FormCard from '../FormCard/FormCard.component';

export default class FormList extends Component {
  render() {
    const rows = [];
    for (let i = 0; i < 2; i += 1) {
      rows.push(<FormCard />);
    }
    return (
      <View>
        {rows}
      </View>
    );
  }
}
