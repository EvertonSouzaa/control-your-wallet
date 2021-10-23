import React from 'react';
import {Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {styles} from './styles';

type Props = RectButtonProps & {
  title: String;
};

export function Button({title, ...rest}: Props) {
  return (
    <RectButton style={styles.title} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </RectButton>
  );
}
