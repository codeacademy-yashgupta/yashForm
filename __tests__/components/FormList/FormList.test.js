import React from 'react';
import renderer from 'react-test-renderer';
import FormList from '../../../components/FormList/FormList.component';
import 'react-native';

describe('FormList', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<FormList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
