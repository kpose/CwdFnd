import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {fonts, hp, wp} from '../../utils';

interface Props {
  title: string;
  onPress: () => void;
}

const SmallButton = ({title, onPress}: Props) => {
  return (
    <Button
      onPress={onPress}
      style={styles.button}
      mode="contained"
      loading={false}
      uppercase={false}>
      <Text style={[fonts.buttonText]}>{title}</Text>
    </Button>
  );
};

export default SmallButton;

const styles = StyleSheet.create({
  button: {
    height: hp(6),
    width: wp(40),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
