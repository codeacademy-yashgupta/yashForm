import React, { Component } from 'react';
import {
  Text, View, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import icons from '../../public/icons';
import style from './Header.style';

const styles = StyleSheet.create(style);
export default class Header extends Component {
  render() {
    const { isLandingPage } = this.props;
    const sourceImage = isLandingPage ? '' : icons.backArrow;
    return (
      <View style={styles.headerMain}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image source={sourceImage} style={styles.backButton} />
        </TouchableOpacity>
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
