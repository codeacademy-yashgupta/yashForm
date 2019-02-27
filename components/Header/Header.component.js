import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { APP_THEME_COLOR, APP_TEXT_COLOR, APP_FONT_SIZE } from '../../constants';
import icons from '../../public/icons';

export default class Header extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: APP_THEME_COLOR, height: 60, width: '100%', flexDirection: 'row',
      }}
      >
        <Text style={{
          color: APP_TEXT_COLOR, fontSize: APP_FONT_SIZE, marginTop: 16, marginLeft: 20,
        }}
        >
          Header

        </Text>
        <View>
          <Image
            source={icons.menuIcon}
            style={{
              height: 47, resizeMode: 'contain', marginTop: 6, marginLeft: '55%',
            }}
          />
        </View>
      </View>

    );
  }
}
