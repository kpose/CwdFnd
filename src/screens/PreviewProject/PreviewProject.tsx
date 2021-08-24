import React from 'react';
import {View} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import styles from './styles';
import {BigButton, PreviewProjectHeader} from '~components';
import {AddProjectProps} from '~types/NavigationTypes';
import {fonts, hp, wp} from '~utils';

const PreviewProject = ({navigation}: AddProjectProps) => {
  return (
    <View style={styles.container}>
      <PreviewProjectHeader navigation={navigation} rightIcon="home" />
      <View style={{paddingHorizontal: wp(4)}}>
        <View style={styles.titleContainer}>
          <Text style={[fonts.title, styles.title]}>
            Project Roadmap . 25,000 Goal
          </Text>
          <Text style={[fonts.caption, styles.description]}>
            These are the various stages our project needs funding for.
          </Text>
        </View>
        <View style={{marginTop: hp(1)}}>
          <Text>LINE CHART FOR MILESTNE HERE</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <BigButton
          title="Launch Project"
          onPress={() => navigation.navigate('ProjectLaunch')}
        />
      </View>
    </View>
  );
};

export default PreviewProject;
