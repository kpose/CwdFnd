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
    marginTop: hp(45),
    alignItems: 'center',
  },
  socialIcon: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: wp(15),
    marginRight: wp(15),
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  signin: {
    marginLeft: wp(2),
    color: colors.SECONDARY,
    fontWeight: 'bold',
  },
});

export default styles;
