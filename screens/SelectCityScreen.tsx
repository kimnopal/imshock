import {StyleSheet, Text, TextInput, View} from 'react-native';
import {globalStyles} from '../styles/global';
import SearchIcon from '../assets/icons/search.svg';
import Input from '../components/Input';

export default function SelectCityScreen() {
  return (
    <View style={container}>
      <View style={styles.inputContainer}>
        <SearchIcon width={18} height={18} />
        <Input text="Cari Kabupaten/Kota" />
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            marginTop: 30,
          }}>
          Cari Kabupaten/Kota
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
});

const container = StyleSheet.compose(globalStyles.container, styles.container);
