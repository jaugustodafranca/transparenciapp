import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

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
  },
);

export default createAppContainer(AppNavigator);
