import React, { Component } from 'react';
import {
  Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';
import style from './FormCard.style';

const styles = StyleSheet.create(style);
export default class FormCard extends Component {
  onPressHandle = () => {
    this.props.navigation.navigate('FillForm', {
      id: this.props.id,
    });
  }

  render() {
    const { id, title, createdAt } = this.props;

    return (
      <TouchableOpacity style={styles.formCard} key={id} onPress={() => this.onPressHandle()}>
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
