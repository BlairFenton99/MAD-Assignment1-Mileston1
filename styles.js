import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },

  listContainer: {
    flex: 1,
    marginTop: 20,
  },

  todoItem: {
    backgroundColor: '#cce5f6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },

  button: {
  backgroundColor: '#4da6ff',
  padding: 15,
  borderRadius: 8,
  alignItems: 'center',
  marginBottom: 20,
  flexDirection: 'row',
  justifyContent: 'center',
},

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});