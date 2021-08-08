import {StyleSheet} from 'react-native';
import {hp, wp, colors} from '~utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  featuredContainer: {
    marginLeft: wp(3),
    marginBottom: hp(1),
    marginTop: hp(1),
    marginRight: wp(3),
    //backgroundColor: 'red',
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: hp(1),
    fontWeight: 'normal',
  },
  seeMore: {
    color: colors.PRIMARY,
  },
});

export default styles;
