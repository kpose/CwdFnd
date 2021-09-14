import {StyleSheet} from 'react-native';
import {hp, wp, colors, fonts} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: wp(4),
    marginRight: wp(4),
    marginTop: hp(2),
  },
  titleContainer: {
    marginTop: hp(5),
  },
  description: {
    marginTop: hp(2),
    color: colors.LIGHT_GRAY,
    width: wp(90),
  },
  bottomContainer: {
    marginTop: hp(22),
    alignItems: 'center',
  },
  fullname: {
    width: wp(90),
    marginBottom: hp(0.5),
    alignSelf: 'center',
    marginTop: hp(2),
    backgroundColor: colors.WHITE,
  },
});

export default styles;
