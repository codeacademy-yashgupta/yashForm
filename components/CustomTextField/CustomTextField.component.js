import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import style from './CustomTextField.style';

const styles = StyleSheet.create(style);
export default class CustomTextField extends Component {
  render() {
    return (
      <View>
        <TextInput
          onChangeText={this.props.onChangeText}
          style={styles.textInput}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}
