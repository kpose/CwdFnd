import React from 'react';
import {View} from 'react-native';
import {fonts, colors} from '~utils';
import {Text, Divider} from 'react-native-paper';
import styles from './styles';

const SupportContainer = () => {
  return (
    <View style={styles.supportContainer}>
      <View style={styles.amountRow}>
        <Text style={[fonts.caption, {color: colors.PRIMARY}]}>0</Text>
        <Text style={[fonts.caption]}>50,000</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.backersContainer}>
        <Text style={[fonts.caption]}>0% completed</Text>
        <Text style={[fonts.caption]}>0 backers</Text>
      </View>
    </View>
  );
};

export default SupportContainer;
