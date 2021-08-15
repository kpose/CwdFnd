import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Surface, Text, Divider} from 'react-native-paper';
import {colors, fonts, hp, wp} from '~utils';

interface Props {
  item: {
    backers: string;
    target: string;
    achieved: string;
  };
}

const SupportContainer = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.amountRow}>
        <Text style={[fonts.caption, {color: colors.PRIMARY}]}>
          {item.achieved}
        </Text>
        <Text style={[fonts.caption]}>{item.target}</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.backersContainer}>
        <Text style={[fonts.caption]}>500% completed</Text>
        <Text style={[fonts.caption]}>{item.backers} backers</Text>
      </View>
    </View>
  );
};

export default SupportContainer;

const styles = StyleSheet.create({
  container: {
    height: hp(8),
    width: '100%',
    marginTop: hp(1),
    justifyContent: 'space-around',
  },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: wp(4),
    marginRight: wp(4),
  },
  divider: {
    marginLeft: wp(4),
    marginRight: wp(4),
    height: hp(1),
    borderRadius: 50,
    backgroundColor: colors.PRIMARY,
  },
  backersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: wp(4),
    marginRight: wp(4),
  },
});
