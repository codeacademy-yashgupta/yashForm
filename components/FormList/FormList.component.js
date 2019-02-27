import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import FormCard from '../FormCard/FormCard.component';

export default class FormList extends Component {
  render() {
    const rows = [];
    const forms = this.props;
    console.log(JSON.stringify(forms.forms));
    forms.forms.map(form => (
      rows.push(<FormCard title={form.formName} createdAt={form.createdAt} />)));
    return (
      <ScrollView>
        {rows}
      </ScrollView>
    );
  }
}

FormList.defaultProps = {
  forms: [
    {
      id: 2,
      formId: 1,
      formName: 'Personal Details',
      formFields: [
        'firstName',
        'lastName',
        'Address',
        'Country',
      ],
      formData: {},
      createdAt: '2019-02-27T09:43:39.017Z',
      updatedAt: '2019-02-27T09:43:39.017Z',
    },
  ],
};
