import { ADD_PLACE, DELETE_PLACE } from './actionTypes'

export const addPlace = (placeName,location,image) => {
	const placeData = {
		name: placeName,
		location
	}
	return dispatch => {
		fetch("https://videoapp-219519.firebaseio.com/places.json", {
			method: "POST",
			body: JSON.stringify(placeData)
		})
		.catch(err => console.log(err))
		.then(res => res.json())
		.then(parsedRes => {
			console.log(parsedRes);
		});
	};
}

export const deletePlace = (key) => {
	return {
		type: DELETE_PLACE,
		placeKey: key
	};
}

// {
// 		type: ADD_PLACE,

// 	};`