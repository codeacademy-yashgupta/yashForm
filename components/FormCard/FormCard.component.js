import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import style from './FormCard.style';

const styles = StyleSheet.create(style);
export default class FormCard extends Component {
  render() {
    return (
      <View style={styles.formCard}>
        <Text style={styles.formTitle}>Hi</Text>
        <View
          style={styles.formHorizontalBar}
        />
        <Text style={styles.formCreatedAt}>Created On: 15/01/2019</Text>
      </View>
    );
  }
}
