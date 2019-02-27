import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, StyleSheet,
} from 'react-native';
import style from './SaveButton.style';

const styles = StyleSheet.create(style);
export default class SaveButton extends Component {
  render() {
    return (
      <View>

        <TouchableOpacity
          onPress={this.props.onPress}
          style={styles.buttonView}
        >
          <Text style={styles.buttonText}>
            SAVE

          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
