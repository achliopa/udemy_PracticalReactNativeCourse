import { ADD_PLACE, DELETE_PLACE} from '../actions/actionTypes'

const initialState = {
	places: []
}

const reducer = (state =initialState, action) => {
	switch(action.type) {
		case ADD_PLACE:
			return {
				...state,
				places: state.places.concat({
		            key: Math.random().toString(),
		            name: action.placeName,
		            image: {
		              uri: "http://mangotreehostel.com/wp-content/uploads/2017/05/tours-rio-de-janeiro-mango-tree-hostel-1.jpg"
            		}
          		})
			};
		case DELETE_PLACE:
			return {
				...state,
				places: state.places.filter((place) => {
          			return place.key !== action.placeKey;
        		})
			};
		default:
			return state;
	}
}

export default reducer