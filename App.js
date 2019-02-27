import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingScreen from './components/LandingScreen/LandingScreen.component';
import NewForm from './components/NewForm/NewForm.component';

const RootStack = createStackNavigator({
  Home: {
    screen: LandingScreen,
    navigationOptions: {
      header: null,
    },
  },
  CreateForm: {
    screen: NewForm,
    navigationOptions: {
      header: null,
    },
  },
},
{
  initialRouteName: 'Home',
});
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
