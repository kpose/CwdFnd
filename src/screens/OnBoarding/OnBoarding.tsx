import React from 'react';
import {View, StatusBar, Animated, Image, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import {Indicator, BackDrop, Square, OnBoardingButtons} from '../../components';
import {colors, fonts, hp} from '../../utils';

const {width, height} = Dimensions.get('screen');
const DATA = [
  {
    key: '3571572',
    title: 'We are the catalyst of change',
    description:
      'One app for all of your giving. If you launch your campaign with zero audience, you are launching to crickets.',
    image: require('../../assets/images/crowdfunding-2.png'),
  },
  {
    key: '3571747',
    title: 'We go the extra mile for you.',
    description:
      'Something we have done with our campaigns is that we are extremely transparent. Life is not scripted, conversations with our donors should not be either.',
    image: require('../../assets/images/equity.png'),
  },
  {
    key: '3571680',
    title: 'Dedicated to finding you the next cool project',
    description:
      'Most giving is 80% emotion and 20% rational. And the best way to get to someone`s emotion is to tell a story.',
    image: require('../../assets/images/crowdfunding-4.png'),
  },
  {
    key: '3571603',
    title: 'There is profound joy in giving',
    description:
      'No one has ever become poor by giving. The only thing that matters a damn is the donor experience.',
    image: require('../../assets/images/donation.png'),
  },
];

const OnBoarding = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <BackDrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        contentContainerStyle={{paddingBottom: 100}}
        keyExtractor={item => item.key}
        renderItem={({item}) => {
          return (
            <View style={styles.imageContainer}>
              <View
                style={{
                  flex: 0.7,
                  justifyContent: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: width / 2,
                    height: height / 3,
                    resizeMode: 'contain',
                  }}
                />
              </View>

              <View style={{flex: 0.3}}>
                <Text
                  style={[
                    fonts.title,
                    {
                      marginBottom: hp(2),
                    },
                  ]}>
                  {item.title}
                </Text>
                <Text style={[fonts.caption, {textAlign: 'right'}]}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <OnBoardingButtons />
      <Indicator scrollX={scrollX} data={DATA} />
    </View>
  );
};

export default OnBoarding;
