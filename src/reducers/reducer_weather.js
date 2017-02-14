import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER:
		//...state = return state.concat([action.payload.data]);
		//This however, adds value to front of array.
		return [ action.payload.data, ...state ];
	}
	return state;
}

