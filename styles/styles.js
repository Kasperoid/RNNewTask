import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  h1: {
    fontSize: 25,
    fontWeight: 600,
    marginBottom: 12,
  },
  h2: {
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 8,
  },
  cardConatiner: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#E8A87C',
    backgroundColor: 'rgb(255, 255, 255)',
    shadowColor: '#E27D60',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  container: {
    flex: 1,
    margin: 15,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#E8A87C',
    padding: 10,
  },
  primaryButton: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#E27E60',
    borderColor: '#C38D9E',
    borderRadius: 15,
  },
  textButton: {
    fontWeight: 600,
    fontSize: 15,
  },
});
