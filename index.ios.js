/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Qiscus = NativeModules.Streaming;

export default class StreamingSDK extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
    };
  }
   createStreaming() {
     console.log(Qiscus);
      return Qiscus.createStreaming("streaming",["example"] , (error, string) => {
      if (error) {
        console.log(error);
        } else {
          this.setState({
            url: string,
          });
        }
      });
    }
    buildStreaming(url: string) {
      return Qiscus.buildStreaming(url);
    }
  render() {
    Qiscus.setup('a3d2QkJXQ2M1YTdrTW1PYnVJSmJiUVczTkxmS3BRc05nYnRCOHRGUw==');
    return (
      <View style={styles.container}>
        <View style={styles.fieldContainer}>
          <TextInput placeholder="Type URL" style={styles.textField} value={this.state.url} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.createStreaming()}>
            <Text>GET URL</Text>
          </TouchableOpacity>
        <View style={{width: 25}} />
          <TouchableOpacity style={styles.button} onPress={() => this.buildStreaming(this.state.url)} >
            <Text>STREAM</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  textField: {
    borderWidth: 1,
    borderColor: '#a3a3a4',
    borderRadius: 3,
    height: 40,
    width: 250,
    padding: 3,
  },
  button: {
    borderWidth: 1,
    borderColor: '#a3a3a4',
    borderRadius: 3,
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldContainer: {
    padding: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  }
});

AppRegistry.registerComponent('StreamingSDK', () => StreamingSDK);
