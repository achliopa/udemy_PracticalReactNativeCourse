/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceList from './src/components/PlaceList';
import PlaceInput from './src/components/PlaceInput';
import placeImage from './src/assets/rio.jpg'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    places: []
  }

  onPlaceAdded = (placeName) => {

    this.setState(prevState=>{
        return {
          places: prevState.places.concat({
            key: Math.random(),
            name: placeName,
            image: placeImage
          })
        }
    });   
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== key;
        })
      };
    });
  }

  render() {
    let places;
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.onPlaceAdded}/>
        <PlaceList  places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
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
  }
});
