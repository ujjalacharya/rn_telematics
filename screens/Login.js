import React, { Component } from 'react';
import { WebView } from 'react-native';

class Login extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://track.telematics.com.np/mobile/index.php'}}
      />
    );
  }
}

export default Login;