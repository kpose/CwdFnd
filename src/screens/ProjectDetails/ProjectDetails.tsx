import React from 'react';
import {View} from 'react-native';
import {ProjectDetailsHeader, SupportProjectContainer} from '~components';
import {HomeStackProps} from '~types/NavigationTypes';

const ProjectDetails = ({route, navigation}: HomeStackProps) => {
  const {item} = route.params;
  return (
    <>
      <ProjectDetailsHeader item={item} navigation={navigation} />
      <SupportProjectContainer />
    </>
  );
};

export default ProjectDetails;
