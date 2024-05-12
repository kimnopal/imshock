import {Image, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../styles/global';

export default function LoadScreen() {
  return (
    <View style={container}>
      <Image
        source={require('../assets/imshock_logo.png')}
        style={{width: 200, height: 200}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#114E77',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const container = StyleSheet.compose(globalStyles.container, styles.container);
