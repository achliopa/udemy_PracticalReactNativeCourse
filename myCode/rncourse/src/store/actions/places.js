import { SET_PLACES, REMOVE_PLACE } from './actionTypes';
import { uiStartLoading, uiStopLoading, authGetToken } from './index';

export const addPlace = (placeName,location,image) => {
	return dispatch => {
		dispatch(uiStartLoading());
		fetch("https://us-central1-videoapp-219519.cloudfunctions.net/storeImage",{
			method: "POST",
			body: JSON.stringify({
				image: image.base64
			})
		})
		.catch(err => {
			console.log(err);
			alert("Something went wr0ng, please try again!");
			dispatch(uiStopLoading());
		})
		.then(res => res.json())
		.then(parsedRes => {
			const placeData = {
				name: placeName,
				image: parsedRes.imageUrl,
				location
			};
			return fetch("https://videoapp-219519.firebaseio.com/places.json", {
				method: "POST",
				body: JSON.stringify(placeData)
			});
		})
		.catch(err => {
			console.log(err);
			alert("Something went wrong, please try again!");
			dispatch(uiStopLoading());
		})
		.then(res => res.json())
		.then(parsedRes => {
			console.log(parsedRes);
			dispatch(uiStopLoading());
		});
	};
};

export const getPlaces = () => {
	return (dispatch,getState) => {
		dispatch(authGetToken())
			.then(toekn => {
				return fetch(`https://videoapp-219519.firebaseio.com/places.json?auth=${token}`);
			})
			.catch(()=>{
				alert("No valid token found");
			});
			.then(res => res.json())
			.then(parsedRes => {
				const places = [];
				for(let key in parsedRes){
					places.push({
						...parsedRes[key],
						image: {
							uri: parsedRes[key].image
						},
						key
					});
				}
				dispatch(setPlaces(places));
			});
	};
};


export const setPlaces = places => {
	return {
		type: SET_PLACES,
		places,
	}
};

export const deletePlace = (key) => {
	return dispatch => {
		fetch(`https://videoapp-219519.firebaseio.com/places/${key}.json`,{
			method: "DELETE"
		})
		.catch(err => {
			console.log(err);
			alert("Something went wrong :)");
		})
		.then(res => res.json())
		.then(parsedRes => {
			console.log("Done");
			dispatch(removePlace(key));
		});
	};
};

export const removePlace = key => {
	return {
		type: REMOVE_PLACE,
		key
	};
};

