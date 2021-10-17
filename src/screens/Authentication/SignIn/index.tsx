import React from 'react';
import {View, Text} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';
import {theme} from '../../../global/styles/theme';

export function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>
          Control{'\n'} Your {'\n'} Wallet
        </Text>
        <IoniconsIcon
          name="wallet"
          size={50}
          color={theme.colors.secondary70}
        />
      </View>
    </View>
  );
}
