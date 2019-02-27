import React, { Component } from 'react';
import {
  View, StyleSheet, Button, ScrollView,
} from 'react-native';
import style from './NewForm.style';
import Header from '../Header/Header.component';
import CustomTextField from '../CustomTextField/CustomTextField.component';
import SaveButton from '../SaveButton/SaveButton.component';

const styles = StyleSheet.create(style);
export default class NewForm extends Component {
  state = {
    rows: [],
  }

  rows = [];

  count =0

  addFieldClick = () => {
    this.count += 1;
    const { rows } = this.state;
    rows.push(<CustomTextField />);
    this.setState({ rows });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header navigation={this.props.navigation} />
        <CustomTextField />
        <View
          style={styles.formHorizontalBar}
        />
        <View style={{ marginLeft: '60%' }}>
          <Button title="Add Field" onPress={this.addFieldClick} />
        </View>
        <ScrollView>
          {this.state.rows.map((value, index) => value)}
        </ScrollView>
        <SaveButton />
      </View>
    );
  }
}
