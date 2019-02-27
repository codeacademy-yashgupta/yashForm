import React from 'react';
import renderer from 'react-test-renderer';
import FormLandingPage from '../../../components/FormLandingPage/FormLandingPage.component';
import 'react-native';

describe('FormLandingPage', () => {
  xit('should render correctly', () => {
    const tree = renderer.create(<FormLandingPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
