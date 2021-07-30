import React from 'react';
import {View, Text, Animated, StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../utils';

const {width, height} = Dimensions.get('screen');

const bgs = [
  colors.PRIMARY,
  colors.PRIMARY_LIGHT,
  colors.SECONDARY,
  colors.SECONDARY_LIGHT,
];

const BackDrop = ({scrollX}: any) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map(bg => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {backgroundColor},
      ]}></Animated.View>
  );
};

export default BackDrop;
