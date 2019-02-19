import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import DefaultInput from './UI/DefaultInput';

class PlaceInput extends Component {

	state = {
    	placeName: '',
  	};

	placeNameChangedHandler = (value) => {
	    this.setState({
	      placeName: value
	    });
  	}

	render() {
		return(
	          <DefaultInput 
	          	placeholder="Place Name" 
	          	value={this.state.placeName} 
	          	onChangeText={this.placeNameChangedHandler}
	          />
		);
	}
}

export default PlaceInput;