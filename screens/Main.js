import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
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

  render() {
    return (
      <Container style={styles.containerStyle}>
      
        <ScrollView>
          <Content style={{ marginTop: 5 }}>
            <View>
              <Image source={require("../assets/gps.jpg")} />
            </View>
            <Card>
              <CardItem header>
                <Text style={{ fontSize: 20 }}>About Company</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={{ fontSize: 18 }}>
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
                <Text style={{ fontSize: 20 }}>About Services</Text>
              </CardItem>
              <CardItem
                style={{
                  flex: 1
                }}
              >
                <Body style={{ flex: 1}}>
                  <Button
                    large
                    style={{ height: 100, backgroundColor: "#72b842", flex: 1 }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        textAlign: "center"
                      }}
                    >
                      GPS Tracking Solution In Nepal
                    </Text>
                  </Button>
                </Body>
                <Body style={{ flex: 1 }}>
                  <Button
                    large
                    style={{ height: 100, backgroundColor: "#72b842", flex: 1 }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        textAlign: "center"
                      }}
                    >
                      Fleet Management System
                    </Text>
                  </Button>
                </Body>
                
              </CardItem>
            </Card>
            <Card style={{ marginTop: -1 }}>
              <CardItem header>
                <Text style={{ fontSize: 20 }}>Contact Us</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={{ fontSize: 18, marginBottom: 4 }}>
                    Sankhamul 34
                  </Text>
                  <Text style={{ fontSize: 18, marginBottom: 4 }}>
                    44600 Kathmandu, Nepal
                  </Text>
                  <Text style={{ fontSize: 18, marginBottom: 4 }}>
                    Phone: 01 478 4728, 01 478 5077
                  </Text>
                  <Text style={{ fontSize: 18, marginBottom: 4 }}>
                    E-mail: info@telematics.com.np
                  </Text>
                  <Text style={{ fontSize: 18, marginBottom: 4 }}>
                    URL: www.telematics.com.np
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </ScrollView>
        <TouchableOpacity  onPress={()=> this.props.navigation.navigate("LoginScreen")}>
        <Footer style={{ backgroundColor: "#72b842" }}>
          <Text
            style={{
              textAlign: "center",
              marginTop: 15,
              color: "white",
              fontSize: 20
            }}
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
  containerStyle: {
    backgroundColor: "#D5D5D5"
  },
  headerStyle: {
    marginTop: 23,
    backgroundColor: "#72b842"
  }
});
