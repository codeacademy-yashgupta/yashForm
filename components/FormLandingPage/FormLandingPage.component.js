import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CustomTextField from '../CustomTextField/CustomTextField.component';
import Header from '../Header/Header.component';
import { httpGet } from '../../utils/httpGet';
import { httpPost } from '../../utils/httpPost';
import { URL_FOR_GETTING_FORM_FIELDS, URL_FOR_POSTING_FORM_DATA } from '../../constants';
import SaveButton from '../SaveButton/SaveButton.component';

export default class FormLandingPage extends Component {
  state ={
    rows: [],
    formFields: [],
    formData: [],
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
      rows.push(<CustomTextField
        placeholder={formField}
        key={index}
        onChangeText={(text) => {
          console.log(text);
          this.onChangeHandle(text, index);
        }}
      />);
      this.setState({ rows });
      return 0;
    });
  }

  onChangeHandle = (text, id) => {
    let { formData } = this.state;
    formData = [...formData];
    formData[id] = text;
    this.setState({ formData });
    console.log(this.state.formData);
  }

  submitForm = async () => {
    const id = this.props.navigation.getParam('id');

    const { formData } = this.state;
    const payload = {
      formData,
      id,
    };
    console.log(payload);
    await httpPost(URL_FOR_POSTING_FORM_DATA, payload);
    const { navigation } = this.props;
    navigation.navigate('Home');
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
        <SaveButton onPress={() => this.submitForm()} />
      </View>
    );
  }
}
