import React from 'react';
import renderer from 'react-test-renderer';
import FormCard from '../../../components/FormCard/FormCard.component';
import 'react-native';

describe('FormCard', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<FormCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
