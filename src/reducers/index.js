import {combineReducers} from 'redux';

import {
  AGENCIES_DATA,
  AGENCIES_DATA_SUCCESS,
  AGENCIES_DATA_ERROR,
  TRIPS_DATA,
  TRIPS_DATA_SUCCESS,
  TRIPS_DATA_ERROR,
} from '../actions';

const INITIAL_STATE = {
  agencies: {
    data: [],
    error: null,
    loading: false,
    page: 0,
  },
  trips: {
    data: [],
    error: null,
    loading: false,
    page: 0,
  },
};

const transparencia = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case AGENCIES_DATA:
      return {...state, agencies: {...state.agencies, loading: true}};
    case AGENCIES_DATA_ERROR:
      return {
        ...state,
        agencies: {...state.agencies, loading: false, error: 'Erro!'},
      };
    case AGENCIES_DATA_SUCCESS:
      return {
        ...state,
        agencies: {
          ...state.agencies,
          loading: false,
          data: actions.payload,
          page: state.agencies.page + 1,
        },
      };
    case TRIPS_DATA:
      return {...state, trips: {...state.trips, loading: true}};
    case TRIPS_DATA_ERROR:
      return {
        ...state,
        trips: {...state.trips, loading: false, error: 'Erro!'},
      };
    case TRIPS_DATA_SUCCESS:
      return {
        ...state,
        trips: {
          ...state.trips,
          loading: false,
          data: actions.payload,
          page: state.trips.page + 1,
        },
      };
    default:
      return state;
  }
};

export default combineReducers({transparencia});
