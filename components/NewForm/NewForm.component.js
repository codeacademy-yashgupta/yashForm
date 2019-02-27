import React, { Component } from 'react';
import {
  View, StyleSheet, Button,
} from 'react-native';
import style from './NewForm.style';
import Header from '../Header/Header.component';
import CustomTextField from '../CustomTextField/CustomTextField.component';

const styles = StyleSheet.create(style);
export default class NewForm extends Component {
  render() {
    const rows = [];
    const addFieldClick = () => {
      alert('hi');
      rows.push(<CustomTextField />);
    };
    return (
      <View>
        <Header navigation={this.props.navigation} />
        <CustomTextField onChange={() => console.log('hi')} />
        <View
          style={styles.formHorizontalBar}
        />
        <View style={{ marginLeft: '60%' }}>
          <Button title="Add Field" onPress={addFieldClick} />
        </View>
        {rows}
      </View>
    );
  }
}
