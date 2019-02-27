import React from 'react';
import renderer from 'react-test-renderer';
import NewForm from '../../../components/NewForm/NewForm.component';
import 'react-native';

describe('NewForm', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<NewForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
