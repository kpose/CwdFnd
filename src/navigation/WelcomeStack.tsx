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
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="EnterNumber" component={EnterNumber} />
      <Stack.Screen name="EnterEmail" component={EnterEmail} />
      <Stack.Screen name="EnterOTP" component={EnterOTP} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="SetOptions" component={SetOptions} />
      <Stack.Screen name="SetName" component={SetName} />
      <Stack.Screen name="SetCategories" component={SetCategories} />
      <Stack.Screen name="BottomTabs" component={HomeBottomTab} />
    </Stack.Navigator>
  );
}

export default WelcomeStack;
