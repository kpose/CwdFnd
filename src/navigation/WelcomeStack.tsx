import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding, Signup, Signin, LinkBank} from '../screens';
import HomeBottomTab from './HomeBottomTab';
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
        name="BottomTabs"
        component={HomeBottomTab}
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
