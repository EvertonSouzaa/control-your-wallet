import React from 'react';
import {View, Text} from 'react-native';
import {theme} from './src/global/styles/theme';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View>
      <Icon name="mail" size={30} />
      <Text
        style={{
          fontSize: 50,
          color: theme.colors.secondary100,
          fontFamily: theme.fonts.text400,
        }}>
        First Commit
      </Text>
    </View>
  );
}
