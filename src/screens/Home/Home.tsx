import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import styles from './styles';

import {FloatmeCard} from '~components';

const Home = () => {
  return (
    <>
      <StatusBar hidden={false} />
      <SafeAreaView style={styles.container}>
        <FloatmeCard />
        <FloatmeCard />
      </SafeAreaView>
    </>
  );
};

export default Home;
