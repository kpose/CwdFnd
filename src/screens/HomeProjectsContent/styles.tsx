import {StyleSheet} from 'react-native';
import {hp, wp, colors} from '~utils';

const styles = StyleSheet.create({
  featuredContainer: {
    marginLeft: wp(3),
    marginBottom: hp(1.5),
    //marginTop: hp(1),
    marginRight: wp(3),
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: hp(1),
    //fontWeight: 'normal',
  },
  seeMore: {
    color: colors.PRIMARY,
  },
});

export default styles;
