import {StyleSheet} from 'react-native';
import {hp, wp, colors, fonts} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: wp(4),
    marginRight: wp(4),
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
    marginTop: hp(23),
    alignItems: 'center',
  },
  textContainer: {
    marginTop: hp(4),
    alignSelf: 'center',
    width: '100%',
    borderRadius: 10,
  },
});

export default styles;
