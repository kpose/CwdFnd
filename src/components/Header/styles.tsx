import {StyleSheet, Platform} from 'react-native';
import {hp, wp} from '~utils';

const styles = StyleSheet.create({
  headerContainer: {
    height: Platform.OS === 'android' ? hp(8) : hp(11),
    marginBottom: hp(1),
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: wp(4),
    alignItems: 'center',
    height: '100%',
  },
  itemBlock: {
    width: wp(92) / 3,
  },
});

export default styles;
