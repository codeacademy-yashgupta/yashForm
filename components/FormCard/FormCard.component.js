import React, { Component } from 'react';
import {
  Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';
import style from './FormCard.style';

const styles = StyleSheet.create(style);
export default class FormCard extends Component {
  render() {
    const { id, title, createdAt } = this.props;
    return (
      <TouchableOpacity style={styles.formCard} key={id}>
        <Text style={styles.formTitle}>{title}</Text>
        <View
          style={styles.formHorizontalBar}
        />
        <Text style={styles.formCreatedAt}>
          Created At
          {' '}
          {createdAt}
        </Text>
      </TouchableOpacity>
    );
  }
}
