import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {fonts, hp, wp} from '../../utils';

interface Props {
  title: string;
  onPress: () => void;
  testID?: string;
  disabled?: boolean;
  containerStyle?: any;
}

const BigButton = ({
  title,
  onPress,
  testID,
  disabled,
  containerStyle,
}: Props) => {
  return (
    <Button
      onPress={onPress}
      style={[styles.button, containerStyle]}
      mode="contained"
      loading={false}
      uppercase={false}
      testID={testID}
      disabled={disabled}>
      <Text style={[fonts.bigButtonText]}>{title}</Text>
    </Button>
  );
};

export default BigButton;

const styles = StyleSheet.create({
  button: {
    height: hp(5),
    width: wp(90),
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
  },
});
