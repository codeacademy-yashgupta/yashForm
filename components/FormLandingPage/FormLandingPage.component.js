import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CustomTextField from '../CustomTextField/CustomTextField.component';
import Header from '../Header/Header.component';
import { httpGet } from '../../utils/httpGet';
import { URL_FOR_GETTING_FORM_FIELDS } from '../../constants';
import SaveButton from '../SaveButton/SaveButton.component';

export default class FormLandingPage extends Component {
  state ={
    rows: [],
    formFields: [],
  }

  rows =[]

  async componentDidMount() {
    const response = await httpGet(`${URL_FOR_GETTING_FORM_FIELDS}/${this.props.navigation.getParam('id')}`);
    const { formFields } = response.data[0];
    // formFields.map((formField) => {
    //   console.log(formField);
    //   this.state.formFields.push(<CustomTextField placeholder={formField} />);
    // });
    const { rows } = this.state;
    formFields.map((formField, index) => {
      rows.push(<CustomTextField placeholder={formField} key={index} />);
      this.setState({ rows });
      return 0;
    });
  }


  render() {
    console.log(this.props.navigation.getParam('id'));

    return (
      <View style={{ flex: 1 }}>
        <Header isLandingPage={false} navigation={this.props.navigation} />
        <Text>
          Fill Form
          {' '}
        </Text>
        <View>
          {this.state.rows.map((value, index) => value)}
        </View>
        <SaveButton />
      </View>
    );
  }
}
