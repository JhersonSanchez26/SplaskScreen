import React, { Component } from "react";
import { ImageBackground, StyleSheet, View, Text, ActivityIndicator } from "react-native";






export default class SplashScreen extends Component {
static navigationOptions = {
  
}
componentWillMount(){

  setTimeout(()=>{
    this.props.navigation.navigate ('Login')
  }, 3000)
}


render (){
  return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#50abf1" }}>
  <Text style={styles.text}></Text>
  <ImageBackground style={styles.image} source={require('..//Imagen/logo.png') } />
  <ActivityIndicator size="large" color="#fff" />
  </View>
  );

}

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 300,
    flex: 1,
    flexDirection: "column",
    
  },
  image: { 
    width: 150,
    height: 150,
    
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    
}
});
