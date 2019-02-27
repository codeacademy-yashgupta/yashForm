import React from 'react';
import renderer from 'react-test-renderer';
import LandingScreen from '../../../components/LandingScreen/LandingScreen.component';
import 'react-native';

describe('LandingScreen', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<LandingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
