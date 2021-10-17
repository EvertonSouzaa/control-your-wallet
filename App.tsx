import React from 'react';
import {StatusBar} from 'react-native';
import {theme} from './src/global/styles/theme';

import {Background} from './src/components/Background';
import {SignIn} from './src/screens/Authentication/SignIn';

export default function App() {
  return (
    <Background>
      <StatusBar backgroundColor={theme.colors.primary} />
      <SignIn />
    </Background>
  );
}
