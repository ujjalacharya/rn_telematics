import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

import { Font, AppLoading } from "expo";

import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from './screens/Main';
import LoginScreen from './screens/Login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return(
      <StackNav />
    );
  }
}

RootStackNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: props => ({
      title: "Geomate"
    })
  }
});

// const RootStackNavigator = createStackNavigator(
//   {
//     Main: Main
//   },
//   {
//     initialRouteName: "Main"
//   }
// );

const StackNav = createAppContainer(RootStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
