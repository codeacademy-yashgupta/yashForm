import React, { Component } from 'react';
import {
  TouchableOpacity, StyleSheet, Image, View,
} from 'react-native';
import icons from '../../public/icons';
import style from './FloatingAddButton.style';

const styles = StyleSheet.create(style);
export default class FloatingAddButton extends Component {
  render() {
    return (
      <View style={styles.addFormIcon}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateForm')}>
          <Image source={icons.addIcon} style={styles.addImage} />
        </TouchableOpacity>
      </View>
    );
  }
}
