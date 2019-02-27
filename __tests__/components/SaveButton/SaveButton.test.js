import React from 'react';
import renderer from 'react-test-renderer';
import SaveButton from '../../../components/SaveButton/SaveButton.component';
import 'react-native';

describe('SaveButton', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<SaveButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
