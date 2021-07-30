import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {wp, hp} from '../../utils';
import {Text} from 'react-native-paper';

export default function WavyHeader({
  customStyles,
  customHeight,
  customTop,
  customBgColor,
  customWavePattern,
}: any) {
  return (
    <View style={customStyles}>
      <View style={{backgroundColor: customBgColor, height: customHeight}}>
        <Svg
          height={hp(11)}
          width="100%"
          viewBox="0 0 1440 320"
          style={{position: 'absolute', top: customTop}}>
          <Path fill={customBgColor} d={customWavePattern} />
        </Svg>
      </View>
    </View>
  );
}
