import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons';
import Constants from 'expo-constants';
import Popover from 'react-native-popover';

export default class SignInScreen extends Component {

  constructor() {
    this.state ={
      isVisible: false,
      buttonRect: null,

    }
  }
  componentDidMount() {

  }

  handleSignIn() {
    alert("wahaha!");
  }

  // showModal(index) {
  //   if (index == 0) {
  //     console.log("facebook login");
  //   } else if (index == 1) {
  //     console.log("twitter login");
  //   } else {
  //     console.log("email login");
  //   }
  // }

  showPopover() {
    this.refs.button.measure((ox, oy, width, height, px, py) => {
      this.setState({
        isVisible: true,
        buttonRect: {x: px, y: py, width: width, height: height}
      });
    });
  }

  closePopover() {
    this.setState({isVisible: false});
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.headerStyle}>
            <View>
              <Icons name="menu" style={styles.menuIcon}></Icons>
            </View>
            <View style={styles.logoImage}>
              <Image source={require("./../../assets/logo.png")}></Image>
            </View>
          </View>
          <View style={styles.constantStyle}>
            <Text style={styles.logoText}>
              Welcome to Bonsai Mundo, your home for everything Bonsai!
            </Text>
            <Text style={styles.logoText}>
              Post your bonsai, track maintenance events, grow diary, and get free help!
            </Text>
            <Text style={styles.logoText}>
              Our app is free. So dig in... and enjoy!
            </Text>
          </View>
          <View style={styles.footerStyle}>
            <View style={styles.btns}>
              <TouchableOpacity onPress={this.showPopover} ref='button'>
                <Image source={require("./../../assets/btn_facebook.png")} style={styles.imageBtn}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.showPopover} ref='button'>
                <Image source={require("./../../assets/btn_twitter.png")} style={styles.imageBtn}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.showPopover} ref='button'>
                <Image source={require("./../../assets/btn_email.png")} style={styles.imageBtn}></Image>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{textAlign: 'center'}}>
                Copyright @ 2020 Bonsai Mundo. All Rights Reserved.
              </Text>
            </View>
          </View>
          {/* <Popover
            isVisible={this.state.isVisible}
            fromRect={this.state.buttonRect}
            onClose={this.closePopover}>
            <Text>I'm the content of this popover!</Text>
          </Popover> */}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      // justifyContent: 'space-between',
      padding: 20,
      paddingTop: Constants.statusBarHeight
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  logoImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  constantStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5
  },
  footerStyle: {
    padding: 20,
    textAlign: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 20,
    left: 0
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageBtn: {
    margin: 20
  }
});