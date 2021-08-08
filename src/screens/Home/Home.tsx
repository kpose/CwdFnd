import React from 'react';
import {SafeAreaView, Text, StatusBar, View} from 'react-native';
import styles from './styles';
import {Header, AddLocation, CarouselItem} from '~components';
import {fonts, hp} from '~utils';

const Home = () => {
  return (
    <>
      <StatusBar hidden={false} />
      <View style={styles.container}>
        <Header leftIcon="search" rightIcon="inbox" centerText="FloatMe" />
        <AddLocation />
        <View style={styles.featuredContainer}>
          <Text style={[fonts.title, {marginBottom: hp(1)}]}>
            Featured Projects
          </Text>
          <CarouselItem />
        </View>
      </View>
    </>
  );
};

export default Home;
