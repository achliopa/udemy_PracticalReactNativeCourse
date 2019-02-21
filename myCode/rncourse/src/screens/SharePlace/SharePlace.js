import React, { Component } from 'react';
import { 
	View, 
	Text, 
	TextInput, 
	Button, 
	StyleSheet, 
	ScrollView,
	Image 
} from 'react-native'; 
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions';
import MainText from "../../components/UI/MainText";
import HeadingText from "../../components/UI/HeadingText";
import PlaceInput from '../../components/PlaceInput';
import PickImage from '../../components/PickImage';
import PickLocation from '../../components/PickLocation';
import validate from '../../utility/validation';

class SharePlaceScreen extends Component {

	static navigatorStyle = {
		navBarButtonColor: "orange"
	}

	state = {
		controls: {
			placeName: {
				value: "",
				valid: false,
				touched: false,
				validationRules: {
					notEmpty: true
				}
			}
		}
	};

	constructor(props){
		super(props);
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
	}

	onNavigatorEvent = event => {
		if(event.type === "NavBarButtonPress"){
			if(event.id === "sideDrawerToggle"){
				this.props.navigator.toggleDrawer({
					side: "left"
				});
			}
		}
	}

	placeNameChangedHandler = (value) => {
	    this.setState(prevState => {
	    	return {
	    		controls: {
	    			...prevState.controls,
	    			placeName: {
	    				...prevState.controls.placeName,
	    				valid: validate(value, prevState.controls.placeName.validationRules),
	    				touched: true,
	    				value
	    			}
	    		}
	    	};
	    });
  	}


	placeAddedHandler = () => {
		if(this.state.controls.placeName.value.trim() !== ""){
			this.props.onAddPlace(this.state.controls.placeName.value);
		}
	}


	render () {
		return (
			<ScrollView>
				<View style={styles.container}>
					<MainText>
						<HeadingText>Share a Place with us!</HeadingText>
					</MainText>
					<PickImage />
					<PickLocation />
					<PlaceInput 
						placeData={this.state.controls.placeName} 
						onChangeText={this.placeNameChangedHandler}
					/>
					<View style={styles.button}>
						<Button 
							title="Share a Place" 
							onPress={this.placeAddedHandler}
							disabled={!this.state.controls.placeName.valid}
						/>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center"
	},
	placeholder: {
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#eee",
		width: "80%",
		height: 200
	},
	button: {
		margin: 8
	},
	previewImage: {
		width: "100%",
		height: "100%"
	}
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
  }
};

export default connect(null,mapDispatchToProps)(SharePlaceScreen);

