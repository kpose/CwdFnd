import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {OnBoarding, Home, Signup, Signin, LinkBank} from '../screens';
import {WelcomeStackParamList} from '../types/NavigationTypes';

const Stack = createNativeStackNavigator<WelcomeStackParamList>();

function WelcomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen
        name="Signin"
        component={Signin}
        /* options={{
          replaceAnimation: 'push',
          stackPresentation: 'modal',
          stackAnimation: 'flip',
        }} */
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        /* options={{
          replaceAnimation: 'push',
          stackPresentation: 'modal',
          stackAnimation: 'flip',
        }} */
      />
      <Stack.Screen
        name="Home"
        component={Home}
        /* options={{
          replaceAnimation: 'push',
          stackPresentation: 'modal',
          stackAnimation: 'flip',
        }} */
      />
      <Stack.Screen
        name="LinkBank"
        component={LinkBank}
        /* options={{
          replaceAnimation: 'push',
          stackPresentation: 'modal',
          stackAnimation: 'flip',
        }} */
      />
    </Stack.Navigator>
  );
}

export default WelcomeStack;
