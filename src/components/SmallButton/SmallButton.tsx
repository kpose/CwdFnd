import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {colors, fonts, hp, wp} from '../../utils';

interface Props {
  title: string;
  onPress: () => void;
  testID?: string;
  disabled?: boolean;
  backgroundColor?: string;
}

const SmallButton = ({
  title,
  onPress,
  testID,
  disabled,
  backgroundColor,
}: Props) => {
  return (
    <Button
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: backgroundColor ? backgroundColor : colors.PRIMARY},
      ]}
      mode="contained"
      loading={false}
      uppercase={false}
      testID={testID}
      disabled={disabled}>
      <Text style={[fonts.smallButtonText]}>{title}</Text>
    </Button>
  );
};

export default SmallButton;

const styles = StyleSheet.create({
  button: {
    height: hp(5),
    width: wp(40),
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
