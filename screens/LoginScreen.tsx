import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {globalStyles} from '../styles/global';

export default function LoginScreen() {
  const pressHandler = () => {
    console.log('test');
  };

  return (
    <View style={container}>
      <View style={{marginBottom: 50}}>
        <Image
          source={require('../assets/imshock_logo.png')}
          style={styles.logo}
        />
        <View>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={titleLogo}>ImShock</Text>
        </View>
      </View>

      <View>
        <TouchableNativeFeedback onPress={pressHandler}>
          <View style={styles.button}>
            <Image
              source={require('../assets/google_logo.png')}
              style={styles.buttonLogo}
            />
            <Text style={styles.buttonText}>Sign in with Google</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#114E77',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1B262C',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center',
    flexGrow: 1,
  },
  buttonLogo: {
    width: 25,
    height: 25,
  },
  test: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
});

const container = StyleSheet.compose(globalStyles.container, styles.container);
const titleLogo = StyleSheet.compose(styles.title, {color: '#BBE0FA'});
