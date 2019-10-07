import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

import SearchAgency from './containers/searchAgency';
import SearchTrip from './containers/searchTrip';
import SearchTripResult from './containers/searchTripResult';
import TripDetails from './containers/tripDetails';

const AppNavigator = createStackNavigator(
  {
    Agency: SearchAgency,
    SearchTrip: SearchTrip,
    TripResult: SearchTripResult,
    TripDetails: TripDetails,
  },
  {
    initialRouteName: 'Agency',
    headerLayoutPreset: 'center',
  },
);
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const AppContainer = createAppContainer(AppNavigator);

export default () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
