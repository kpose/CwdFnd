import React from 'react';
import {StatusBar, View} from 'react-native';
import styles from './styles';
import {Header} from '~components';
import {HomeProjectsContent} from '~screens';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Header leftIcon="search" rightIcon="inbox" centerText="FloatMe" />
      <HomeProjectsContent />
    </View>
  );
};

export default Home;
