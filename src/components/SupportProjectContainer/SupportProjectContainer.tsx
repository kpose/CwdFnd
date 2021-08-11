import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import {
  colors,
  hp,
  navigationIconSize,
  regularIconSize,
  wp,
  fonts,
} from '~utils';
import Icon from 'react-native-vector-icons/Feather';

const SupportProjectContainer = () => {
  return (
    <Surface style={styles.container}>
      <Pressable style={styles.shareContainer}>
        <Icon name="upload" size={regularIconSize} color={colors.PRIMARY} />
      </Pressable>

      <Pressable style={styles.support}>
        <Text style={[fonts.bigButtonText]}>Support this project</Text>
      </Pressable>
    </Surface>
  );
};

export default SupportProjectContainer;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: hp(0.3),
    height: hp(10),
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: wp(7),
    borderTopRightRadius: wp(7),
    alignItems: 'center',
    paddingLeft: wp(4),
    paddingRight: wp(4),
  },
  shareContainer: {
    height: hp(5),
    width: wp(13),
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.LIGHT_GRAY,
  },
  support: {
    width: wp(75),
    height: hp(5),
    borderRadius: wp(2),
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
