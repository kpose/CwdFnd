import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {colors, fonts, hp, wp} from '~utils';

interface Props {
  title: string;
  onPress: () => void;
  bgColor: string;
}

const CategoryButton = ({title, onPress, bgColor}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={[fonts.caption, styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: wp(2),
    borderRadius: wp(2),
    margin: wp(2),
  },
  text: {
    color: colors.BLACK,
  },
});
