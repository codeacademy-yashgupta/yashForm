import React from 'react';
import renderer from 'react-test-renderer';
import CustomTextField from '../../../components/CustomTextField/CustomTextField.component';
import 'react-native';

describe('CustomTextField', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<CustomTextField />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
