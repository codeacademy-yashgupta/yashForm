import React, { Component } from 'react';
import {
  Text, View, Image, Platform, StyleSheet,
} from 'react-native';
import { APP_THEME_COLOR, APP_TEXT_COLOR, APP_FONT_SIZE } from '../../constants';
import icons from '../../public/icons';
import style from './Header.style';

const styles = StyleSheet.create(style);
export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerMain}>
        <Text style={styles.headerTitle}>
          Header

        </Text>
        <Image
          source={icons.menuIcon}
          style={styles.headerImage}
        />
      </View>

    );
  }
}
