import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeBottomTabParamList} from '../types/NavigationTypes';
import {Home, Explore, Notifications, Profile, Project} from '~screens';
import {colors} from '~utils';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator<HomeBottomTabParamList>();

function HomeBottomTab() {
  return (
    <Tab.Navigator labeled={false} activeColor={colors.SECONDARY}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="compass" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Project"
        component={Project}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="plus-square" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({color}) => <Icon name="bell" color={color} size={26} />,
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
