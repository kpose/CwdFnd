import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text, Divider} from 'react-native-paper';
import {fonts, hp, wp} from '~utils';

const SuggestedRowItem = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={require('~assets/images/8.jpg')} style={styles.image} />
        <Text style={[styles.name, fonts.caption]}>Samantha Chan</Text>
      </View>
      <Divider style={styles.divider} />
    </>
  );
};

export default SuggestedRowItem;

const styles = StyleSheet.create({
  image: {
    height: hp(7),
    width: hp(7),
    borderRadius: 50,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
  },
  name: {
    marginLeft: wp(5),
    fontWeight: 'bold',
  },
  divider: {
    height: hp(0.2),
    marginTop: hp(2),
  },
});
