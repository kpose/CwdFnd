import React from 'react';
import {View, Text, Dimensions, Animated} from 'react-native';
import {colors, hp} from '../../utils';

interface Props {
  scrollX: any;
  data: any;
}

const {width, height} = Dimensions.get('screen');

const Indicator = ({scrollX, data}: Props) => {
  return (
    <View style={{flexDirection: 'row', position: 'absolute', bottom: hp(3)}}>
      {data.map((_: any, i: any) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: colors.BLACK,
              opacity,
              margin: 10,
              transform: [
                {
                  scale,
                },
              ],
            }}
          />
        );
      })}
    </View>
  );
};

export default Indicator;
