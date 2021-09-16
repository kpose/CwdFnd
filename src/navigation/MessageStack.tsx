import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Inbox, InboxSuggested} from '../screens';
import HomeBottomTab from './HomeBottomTab';
import {MessageStackParamList} from '../types/NavigationTypes';

const Stack = createNativeStackNavigator<MessageStackParamList>();

function MessageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="InboxSuggested"
        component={InboxSuggested}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MessageStack;
