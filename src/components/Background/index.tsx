import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {theme} from '../../global/styles/theme';

type Props = {
  children: ReactNode;
};

export function Background({children}: Props) {
  return (
    <LinearGradient
      colors={[
        theme.colors.primary,
        theme.colors.secondary100,
        // theme.colors.secondary90,
      ]}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
}
