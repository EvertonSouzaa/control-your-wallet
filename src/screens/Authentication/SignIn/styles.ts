import {StyleSheet} from 'react-native';
import {theme} from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: theme.fonts.title700,
    textAlign: 'center',
    color: theme.colors.secondary70,
  },
});
