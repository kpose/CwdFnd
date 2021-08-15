import React, {forwardRef, memo, useCallback} from 'react';
import {ScrollView, ScrollViewProps, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Animated from 'react-native-reanimated';

export const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const Updates = forwardRef<ScrollView>((props, ref) => {
  return (
    <AnimatedScrollView
      ref={ref}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      {...props}>
      <Text>Updates</Text>
    </AnimatedScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(Updates);
