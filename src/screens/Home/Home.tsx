import React from 'react';
import {SafeAreaView, Text, StatusBar, View} from 'react-native';
import styles from './styles';
import {Header} from '~components';

import {FloatmeCard} from '~components';

const Home = () => {
  return (
    <>
      <StatusBar hidden={false} />
      <View style={styles.container}>
        <Header leftIcon="search" rightIcon="inbox" centerText="FloatMe" />
      </View>
    </>
  );
};

export default Home;
