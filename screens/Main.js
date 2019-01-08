import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Platform } from "react-native";
import {
  Icon,
  Body,
  Container,
  Header,
  Title,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Footer
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class Main extends Component {

  static navigationOptions = ({navigation}) =>{
    let headerTitle = "Geomate";
    return {headerTitle};
  }

  handleLoginPress = () =>{
     this.props.navigation.navigate("LoginScreen")
  }

  render() {
    return (
      <Container style={styles.containerStyle}>
      
        <ScrollView>
          <Content style={styles.contentStyle}>
            <View>
              <Image source={require("../assets/gps.jpg")} />
            </View>
            <Card>
              <CardItem header>
                <Text style={styles.cardItemHeaderStyle}>About Company</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={styles.cardItemBodyTextStyle}>
                    Telematics Tech Pvt Ltd provides GPS Tracking Products,
                    Service and overall tracking solution for enterprise or
                    personal use across Nepal. We offer a variety of remote
                    tracking system that are ideal for business use like vehicle
                    tracking and assets management or personal tracking, Child
                    tracking, Elederly tracking. We also offer GPS tracking
                    hardware, hosting platform, fleet and logistic management
                    consultancy. Our additional services includes Web Hosting,
                    Designing and software developement.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={{ marginTop: -1, flex: 1 }}>
              <CardItem header>
                <Text style={styles.cardItemHeaderStyle}>About Services</Text>
              </CardItem>
              <CardItem
                style={{
                  flex: 1
                }}
              >
                <Body style={{ flex: 1}}>
                  <Button
                    large
                    style={styles.buttonStyle}
                  >
                    <Text
                      style={styles.buttonTextStyle}
                    >
                      GPS Tracking Solution In Nepal
                    </Text>
                  </Button>
                </Body>
                  {Platform.OS == 'android' ? <Text>{' '}</Text> : null }
                <Body style={{ flex: 1 }}>
                  <Button
                    large
                    style={styles.buttonStyle}
                  >
                    <Text
                      style={styles.buttonTextStyle}
                    >
                      Fleet Management System
                    </Text>
                  </Button>
                </Body>
                
              </CardItem>
            </Card>
            <Card style={{ marginTop: -1 }}>
              <CardItem header>
                <Text style={styles.cardItemHeaderStyle}>Contact Us</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={styles.contactUsBodyText}>
                    Sankhamul 34
                  </Text>
                  <Text style={styles.contactUsBodyText}>
                    44600 Kathmandu, Nepal
                  </Text>
                  <Text style={styles.contactUsBodyText}>
                    Phone: 01 478 4728, 01 478 5077
                  </Text>
                  <Text style={styles.contactUsBodyText}>
                    E-mail: info@telematics.com.np
                  </Text>
                  <Text style={styles.contactUsBodyText}>
                    URL: www.telematics.com.np
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </ScrollView>
        <TouchableOpacity  onPress={this.handleLoginPress}>
        <Footer style={styles.primarybackgroundColor}>
          <Text
            style={styles.footerTextStyle}
          >
            LOGIN
          </Text>
        </Footer>
        </TouchableOpacity>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  primarybackgroundColor:{
    backgroundColor: "#72b842"
  },
  containerStyle: {
    backgroundColor: "#D5D5D5"
  },
  contentStyle:{
    marginTop: 5 
  },
  cardItemHeaderStyle:{
    fontSize: 20
  },
  cardItemBodyTextStyle:{
    fontSize: 18
  },
  headerStyle: {
    marginTop: 23,
    backgroundColor: "#72b842"
  },
  buttonStyle:{
    height: 100,
    backgroundColor: "#72b842",
    flex: 1
  },
  buttonTextStyle:{
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
  },
  contactUsBodyText:{
    fontSize: 18,
    marginBottom: 4
  },
  footerTextStyle:{
    textAlign: "center",
    marginTop: 15,
    color: "white",
    fontSize: 20
  }
});
