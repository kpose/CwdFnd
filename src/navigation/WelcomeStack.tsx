import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {OnBoarding, Home, Signup, Signin} from '../screens';
import {WelcomeStackParamList} from '../types/NavigationTypes';

const Stack = createNativeStackNavigator<WelcomeStackParamList>();

function WelcomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        replaceAnimation: 'push',
        stackPresentation: 'modal',
        stackAnimation: 'flip',
        gestureEnabled: false,
      }}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default WelcomeStack;
