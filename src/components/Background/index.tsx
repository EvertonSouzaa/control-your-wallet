import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {theme} from '../../global/styles/theme';

type Props = {
  children: ReactNode;
};

export function Background({children}: Props) {
  const {color01, color02, color03, color04, color05, color06} = theme.colors;
  return (
    <LinearGradient colors={[color03, color05]} style={styles.container}>
      {children}
    </LinearGradient>
  );
}
