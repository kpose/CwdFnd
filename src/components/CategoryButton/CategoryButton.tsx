import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {colors, fonts, hp, wp} from '~utils';

interface Props {
  title: string;
  onPress: () => void;
}

const CategoryButton = ({title, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Text style={[fonts.caption, styles.text]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    padding: wp(2),
    borderRadius: wp(2),
    margin: wp(2),
  },
  text: {
    color: colors.BLACK,
  },
});
