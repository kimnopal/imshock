import {StyleSheet, TextInput} from 'react-native';

export default function Input({text, onChange}: any) {
  return (
    <TextInput
      style={styles.input}
      placeholder={text}
      placeholderTextColor={'rgba(187, 224, 250, 0.25)'}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  test: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#26353D',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    gap: 15,
  },
  input: {
    padding: 15,
    margin: 0,
    flex: 1,
    fontSize: 16,
    color: '#BBE0FA',
    backgroundColor: '#26353D',
    borderRadius: 10,
  },
});
