import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

import {globalStyles} from '../styles/global';

export default function Button({
  navigation,
  variant = 'primary',
  Icon,
  onPress,
  text,
  style,
}: any) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[variant == 'primary' ? buttonPrimary : buttonSecondary, style]}>
        <Icon width={18} height={18} stroke={'#BBE0FA'} />
        {text && (
          <Text
            style={
              variant == 'primary' ? buttonTextPrimary : buttonTextSecondary
            }>
            {text}
          </Text>
        )}
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  test: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  base: {
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
  },
  primary: {
    backgroundColor: '#26353D',
  },
  baseText: {
    fontSize: 18,
    fontWeight: 'semibold',
  },
});

const buttonPrimary = StyleSheet.compose(styles.base, {
  backgroundColor: '#26353D',
});
const buttonTextPrimary = StyleSheet.compose(styles.baseText, {
  color: '#BBE0FA',
});

const buttonSecondary = StyleSheet.compose(styles.base, {
  backgroundColor: '#BBE0FA',
});
const buttonTextSecondary = StyleSheet.compose(styles.baseText, {
  color: '#1B262C',
});
