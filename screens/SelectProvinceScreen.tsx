import {StyleSheet, Text, TextInput, View} from 'react-native';
import {globalStyles} from '../styles/global';
import SearchIcon from '../assets/icons/search.svg';

export default function SelectProvinceScreen() {
  return (
    <View style={container}>
      <View style={styles.inputContainer}>
        <SearchIcon width={18} height={18} />
        <TextInput
          style={styles.input}
          placeholder="Cari Provinsi"
          placeholderTextColor={'rgba(187, 224, 250, 0.25)'}
        />
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            marginTop: 30,
          }}>
          Cari Provinsi
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  container: {
    backgroundColor: '#1B262C',
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
    // backgroundColor: 'red',
    padding: 0,
    margin: 0,
    flex: 1,
    fontSize: 16,
    color: '#BBE0FA',
  },
});

const container = StyleSheet.compose(globalStyles.container, styles.container);
