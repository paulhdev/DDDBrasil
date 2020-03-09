import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './screens/Main';
import Result from './screens/Result';

export default createAppContainer(
  createSwitchNavigator({
    Main,
    Result,
  }),
);
