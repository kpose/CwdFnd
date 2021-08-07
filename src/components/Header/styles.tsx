import {StyleSheet} from 'react-native';
import {hp, wp} from '~utils';

const styles = StyleSheet.create({
  headerContainer: {
    height: hp(11),
    width: '100%',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    marginLeft: wp(4),
    marginRight: wp(4),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
