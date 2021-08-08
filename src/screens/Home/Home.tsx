import React from 'react';
import {SafeAreaView, Text, StatusBar, View, ScrollView} from 'react-native';
import styles from './styles';
import {
  Header,
  AddLocation,
  CarouselItem,
  ProjectCard,
  AroundYou,
} from '~components';
import {fonts, hp} from '~utils';

const Home = () => {
  return (
    <>
      <StatusBar hidden={false} />
      <ScrollView style={styles.container}>
        <Header leftIcon="search" rightIcon="inbox" centerText="FloatMe" />
        {/* <AddLocation /> */}

        {/* featured projects */}

        <View style={styles.featuredContainer}>
          <Text style={[fonts.title, styles.title]}>Featured Projects</Text>
          <CarouselItem />
        </View>

        {/* projects ariund */}
        <View style={styles.featuredContainer}>
          <View style={styles.rowHeader}>
            <Text style={[fonts.title, styles.title]}>Projects around you</Text>
            <Text style={[styles.seeMore, fonts.caption]}>See more</Text>
          </View>
          <AroundYou />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
