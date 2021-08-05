import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeBottomTabParamList} from '../types/NavigationTypes';
import {Home, Search, Notifications, Profile} from '~screens';
import {colors} from '~utils';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialBottomTabNavigator<HomeBottomTabParamList>();

function HomeBottomTab() {
  return (
    <Tab.Navigator labeled={false} activeColor={colors.PRIMARY}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search1" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="bells" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeBottomTab;
