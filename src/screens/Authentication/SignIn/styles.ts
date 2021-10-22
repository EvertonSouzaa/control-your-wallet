import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    alignItems: 'center',
    marginTop: 20
  },
  textHeader: {
    fontSize: 30,
    fontFamily: theme.fonts.bold,
    color: theme.colors.color01
  }
});
