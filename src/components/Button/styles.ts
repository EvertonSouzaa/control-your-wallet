import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'


export const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.color02,
    width: "80%",
    height: 45,
    borderRadius: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.color01
  }
})