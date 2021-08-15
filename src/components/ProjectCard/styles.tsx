import {StyleSheet} from 'react-native';
import {hp, wp, colors} from '~utils';

const styles = StyleSheet.create({
  container: {
    height: hp(24),
    width: wp(43),
    //margin: wp(2),
    marginRight: wp(2),
    marginTop: wp(2),
    borderRadius: wp(2),
  },
  image: {
    width: '100%',
    borderRadius: wp(2),
    height: hp(15),
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'normal',
    marginTop: hp(1),
    marginBottom: hp(1),
  },
  divider: {
    height: hp(1),
    backgroundColor: colors.PRIMARY,
    borderRadius: wp(5),
    width: '100%',
    alignSelf: 'center',
    marginBottom: hp(0.6),
  },
});

export default styles;
