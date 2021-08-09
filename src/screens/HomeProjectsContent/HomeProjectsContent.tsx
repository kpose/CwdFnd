import React from 'react';
import {View, ScrollView, Animated} from 'react-native';
import {Text} from 'react-native-paper';
import {CarouselItem, AroundYou, AddLocation} from '~components';
import {fonts} from '~utils';
import styles from './styles';

const HomeProjectsContent = () => {
  return (
    <ScrollView>
      <AddLocation />
      <View style={styles.featuredContainer}>
        <Text style={[fonts.itemTitle, styles.title]}>Featured Projects</Text>
        <CarouselItem />
      </View>

      <View style={styles.featuredContainer}>
        <View style={styles.rowHeader}>
          <Text style={[fonts.itemTitle, styles.title]}>
            Projects around you
          </Text>
          <Text style={[styles.seeMore, fonts.caption]}>See more</Text>
        </View>
        <AroundYou />
      </View>
    </ScrollView>
  );
};

export default HomeProjectsContent;
