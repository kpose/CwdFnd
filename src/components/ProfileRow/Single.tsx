import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import {colors, fonts, hp, regularIconSize, wp} from '~utils';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  title: string;
}

const Single = ({title}: Props) => {
  return (
    <Surface style={styles.container}>
      <View style={{justifyContent: 'space-evenly'}}>
        <Text style={[fonts.body]}>{title}</Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Icon name="home" size={regularIconSize} />
      </View>
    </Surface>
  );
};

export default Single;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
    height: hp(6),
    width: '100%',
    marginBottom: hp(2),
    borderRadius: wp(1),
  },
});
