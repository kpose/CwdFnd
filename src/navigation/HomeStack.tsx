import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProjectDetails} from '../screens';
import HomeBottomTab from './HomeBottomTab';
import MessageStack from './MessageStack';
import {HomeStackParamList} from '../types/NavigationTypes';

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={HomeBottomTab}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetails}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MessageStack"
        component={MessageStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
