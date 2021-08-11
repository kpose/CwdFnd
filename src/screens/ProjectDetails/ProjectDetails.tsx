import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {HomeStackProps} from '~types/NavigationTypes';
import {colors, fonts, hp, wp} from '~utils';
import BackgroundImage from './BackgroundImage';
import SupportContainer from './SupportContainer';
import {SupportProjectContainer} from '~components';
import ProjectDetailsTab from '~navigation/ProjectDetailsTab';

const ProjectDetails = ({route, navigation}: HomeStackProps) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <BackgroundImage item={item} navigation={navigation} />
      <SupportContainer item={item} />
      <SupportProjectContainer />
      {/* <ProjectDetailsTab /> */}
    </View>
  );
};

export default ProjectDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
