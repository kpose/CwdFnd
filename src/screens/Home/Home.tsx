import React from 'react';
import {StatusBar, View} from 'react-native';
import styles from './styles';
import {Header} from '~components';
import {HomeProjectsContent} from '~screens';
import {HomeStackProps} from '~types/NavigationTypes';

const Home = ({navigation}: HomeStackProps) => {
  const openMessageStack = () => {
    navigation.navigate('MessageStack');
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Header
        leftIcon="search"
        rightIcon="inbox"
        onRightPress={openMessageStack}
        centerText="FloatMe"
      />
      <HomeProjectsContent />
    </View>
  );
};

export default Home;
