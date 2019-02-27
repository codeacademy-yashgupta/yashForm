import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../../components/Header/Header.component';
import 'react-native';

describe('Header', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
