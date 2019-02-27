import React from 'react';
import renderer from 'react-test-renderer';
import FloatingAddButton from '../../../components/FloatingAddButton/FloatingAddButton.component';
import 'react-native';

describe('FloatingAddButton', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<FloatingAddButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
