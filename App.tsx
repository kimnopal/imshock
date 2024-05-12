/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import LoadScreen from './screens/LoadScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SelectProvinceScreen from './screens/SelectProvinceScreen';
import SelectCityScreen from './screens/SelectCityScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TrackerScreen from './screens/TrackerScreen';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Province" component={SelectProvinceScreen} />
        <Stack.Screen name="City" component={SelectCityScreen} />
        <Stack.Screen name="Tracker" component={TrackerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    // <LoginScreen />
    // </View>
  );
}

export default App;
