import React, {useState} from 'react';
import {View, ImageBackground, StyleSheet, Pressable} from 'react-native';
import {Text, Divider} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import {scrollInterpolator, animatedStyles} from './CarouselAnimation';
import data from '~assets/data/data';
import {fonts, hp, wp, colors} from '~utils';

const SLIDER_WIDTH = wp(100);
const ITEM_WIDTH = wp(90);

const CarouselItem = () => {
  const [index, setIndex] = useState(0);

  const renderItem = ({item}: any) => {
    return (
      <Pressable>
        <View style={styles.itemContainer}>
          <ImageBackground
            source={item.image}
            style={styles.image}
            imageStyle={{borderRadius: wp(3)}}></ImageBackground>

          <View style={{marginLeft: wp(2), marginRight: wp(2)}}>
            <Text style={[fonts.body, styles.title]}>{item.title}</Text>
            <Divider style={styles.divider} />
            <View style={styles.bottomContainer}>
              <Text style={fonts.caption}>2000 of 50000</Text>
              <Text style={fonts.caption}>Lagos, Nigeria</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        inactiveSlideOpacity={0.2}
        activeAnimationType="spring"
        activeSlideAlignment="start"
        onSnapToItem={index => setIndex(index)}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
        /* loop={true}
        enableSnap={true}
        autoplay={true}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplayInterval={6000}
        autoplayDelay={3000} */
      />
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: hp(1),
  },
  itemContainer: {
    width: ITEM_WIDTH,
    //height: hp(25),
    borderRadius: wp(3),
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 0,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: hp(16),
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'normal',
    marginTop: hp(1),
    marginBottom: hp(1),
  },
  divider: {
    height: hp(1.5),
    borderRadius: 10,
    backgroundColor: colors.PRIMARY,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(0.5),
  },
});
