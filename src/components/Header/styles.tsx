import {StyleSheet} from 'react-native';
import {hp, wp} from '~utils';

const styles = StyleSheet.create({
  headerContainer: {
    //height: hp(9),
    width: '100%',
    justifyContent: 'center',
    marginBottom: hp(1),
  },
  header: {
    flexDirection: 'row',
    height: hp(9),
    marginLeft: wp(4),
    marginRight: wp(4),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
