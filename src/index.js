import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

import theme from './global/theme';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <Routes />
    </>
  );
}
