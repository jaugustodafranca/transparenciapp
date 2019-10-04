import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SearchAgency from './containers/searchAgency';
import SearchTrip from './containers/searchTrip';

const AppNavigator = createStackNavigator(
  {
    Agency: SearchAgency,
    SearchTrip: SearchTrip,
  },
  {
    initialRouteName: 'Agency',
  },
);

export default createAppContainer(AppNavigator);
