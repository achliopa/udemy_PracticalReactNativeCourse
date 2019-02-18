import React, { Component } from 'react';
import { View, Text, Dimensions, Stylesheet } from 'react-native';


class SideDrawer extends Component {
	render() {
		return (
			<View style={{width: Dimensions.get("window").width }}>
				<Text>SideDrawer</Text>
			</View>
		);
	}
}

export default SideDrawer;