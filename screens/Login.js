import React, { Component } from "react";
import { WebView, ActivityIndicator, View } from "react-native";

class Login extends Component {
  state = {
    visible: true
  };

  handlehideSpinner = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          onLoad={() => this.handlehideSpinner()}
          source={{ uri: "http://track.telematics.com.np/mobile/index.php" }}
        />
        {this.state.visible && (
          // <View>
          <ActivityIndicator
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "#72b842",
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center"
            }}
            size="large"
            color= "white"
          />
        )}
      </View>
    );
  }
}

export default Login;
