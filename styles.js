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

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 15,
  },

textArea: {
  height: 100,
  textAlignVertical: 'top',
},

buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 20,
},

cancelButton: {
  backgroundColor: '#ff4d4d',
  padding: 15,
  borderRadius: 8,
  flex: 0.48,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
},

saveButton: {
  backgroundColor: '#4CAF50',
  padding: 15,
  borderRadius: 8,
  flex: 0.48,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
},
});