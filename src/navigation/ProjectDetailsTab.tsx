import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Campaign, Risks, Updates, Comments} from '~screens';
import {scale} from 'react-native-size-matters';
import {hp} from '~utils';

const Tab = createMaterialTopTabNavigator();

function ProjectDetailsTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: hp(9),
        },
        tabBarLabelStyle: {
          fontSize: scale(11),
          fontWeight: '500',
          textTransform: 'none',
        },
      }}>
      <Tab.Screen name="Campaign" component={Campaign} />
      <Tab.Screen name="Risks" component={Risks} />
      <Tab.Screen name="Updates" component={Updates} />
      <Tab.Screen name="Comments" component={Comments} />
    </Tab.Navigator>
  );
}

export default ProjectDetailsTab;
