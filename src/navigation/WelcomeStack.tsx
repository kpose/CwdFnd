import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OnBoarding,
  Signup,
  Signin,
  LinkBank,
  EnterNumber,
  EnterEmail,
  EnterOTP,
  SetPassword,
  SetOptions,
  SetName,
  SetCategories,
} from '../screens';
import HomeStack from './HomeStack';
import {WelcomeStackParamList} from '../types/NavigationTypes';

const Stack = createNativeStackNavigator<WelcomeStackParamList>();

function WelcomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EnterNumber"
        component={EnterNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EnterEmail"
        component={EnterEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EnterOTP"
        component={EnterOTP}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SetPassword"
        component={SetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SetOptions"
        component={SetOptions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SetName"
        component={SetName}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SetCategories"
        component={SetCategories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}

export default WelcomeStack;

/* options={{
          replaceAnimation: 'push',
          stackPresentation: 'modal',
          stackAnimation: 'flip',
        }} */
