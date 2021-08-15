import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Header, BigButton} from '~components';
import ExploreProjectContent from '~screens/ExploreProjectsContent/ExploreProjectContent';
import data from '~assets/data/data';
import styles from './styles';
import {hp} from '~utils';

const Explore = () => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon="search"
        rightIcon="filter"
        centerText="Explore Projects"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ExploreProjectContent title="Community" data={data} />
        <ExploreProjectContent title="Environment" data={data} />
        <ExploreProjectContent title="Art" data={data} />
        <ExploreProjectContent title="Investment" data={data} />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: hp(6),
            marginBottom: hp(3),
          }}>
          <BigButton title="Explore more categories" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Explore;
