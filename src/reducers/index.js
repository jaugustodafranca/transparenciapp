import {combineReducers} from 'redux';

import {
  AGENCIES_DATA,
  AGENCIES_DATA_SUCCESS,
  AGENCIES_DATA__NEXT_PAGE_SUCCESS,
  AGENCIES_DATA_ERROR,
  AGENCIES_MAX_PAGE,
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
    maxPage: null,
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
          page: 1,
        },
      };
    case AGENCIES_DATA__NEXT_PAGE_SUCCESS:
      return {
        ...state,
        agencies: {
          ...state.agencies,
          loading: false,
          data: [...state.agencies.data, ...actions.payload],
          page: state.agencies.page + 1,
        },
      };
    case AGENCIES_MAX_PAGE:
      return {
        ...state,
        agencies: {
          ...state.agencies,
          maxPage: actions.payload,
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
          page: state.trips.page,
        },
      };
    default:
      return state;
  }
};

export default combineReducers({transparencia});
