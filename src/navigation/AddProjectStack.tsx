import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddProject,
  Step2,
  ProjectLaunch,
  EditProject,
  PreviewProject,
  ProjectInfo,
  UpdateProject,
} from '../screens';
import {AddProjectParamList} from '../types/NavigationTypes';

const Stack = createNativeStackNavigator<AddProjectParamList>();

function AddProjectStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddProject"
        component={AddProject}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Step2"
        component={Step2}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ProjectLaunch"
        component={ProjectLaunch}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PreviewProject"
        component={PreviewProject}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ProjectInfo"
        component={ProjectInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProject"
        component={EditProject}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProject"
        component={UpdateProject}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AddProjectStack;
