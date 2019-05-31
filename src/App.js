import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Animated,
  Easing
} from "react-native";
import MainComponent from "./Components/CompHand";

export default class App extends Component {
  render() {
    return <MainComponent />;
  }
}

// let hotWrapper = () => () => App;
// if (Platform.OS === "web") {
//   const { hot } = require("react-hot-loader");
//   hotWrapper = hot;
// }
// export default hotWrapper(module)(App);
