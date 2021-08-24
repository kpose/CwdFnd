import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import {colors, fonts, hp, regularIconSize, wp} from '~utils';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  title: string;
  caption: string;
}

const Row = ({title, caption}: Props) => {
  return (
    <Surface style={styles.container}>
      <View style={{justifyContent: 'space-evenly'}}>
        <Text style={[fonts.body]}> {title}</Text>
        <Text style={[fonts.caption, {color: colors.LIGHT_GRAY}]}>
          {caption}
        </Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Icon name="home" size={regularIconSize} />
      </View>
    </Surface>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
    height: hp(9),
    width: '100%',
    marginBottom: hp(2),
    borderRadius: wp(1),
  },
});
