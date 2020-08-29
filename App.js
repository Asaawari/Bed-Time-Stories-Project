import * as React from 'react';
import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen:WriteScreen},
  Read: {screen:ReadScreen}
});

const AppContainer = createAppContainer(TabNavigator);