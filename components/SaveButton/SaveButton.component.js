import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { APP_THEME_COLOR, APP_TEXT_COLOR } from '../../constants';

export default class SaveButton extends Component {
  render() {
    return (
      <View>

        <TouchableOpacity
          onPress={this.props.onPress}
          style={{
            width: '100%', backgroundColor: APP_THEME_COLOR, position: 'absolute', bottom: 0, height: 50,
          }}
        >
          <Text style={{
            color: APP_TEXT_COLOR, fontSize: 22, textAlign: 'center', marginTop: 10,
          }}
          >
            SAVE

          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
