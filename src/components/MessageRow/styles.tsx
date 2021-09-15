import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: hp(1),
  },
  image: {
    height: hp(7),
    width: hp(7),
    resizeMode: 'cover',
    borderRadius: 100,
  },
  unreadStyle: {
    borderWidth: wp(0.5),
    borderColor: colors.SECONDARY,
  },
  detailsContainer: {
    marginLeft: wp(5),
  },
  messageBody: {
    width: wp(60),
  },
  timeContainer: {
    //marginLeft: wp(6),
  },
  name: {
    marginBottom: hp(0.3),
    fontWeight: '700',
  },
  divider: {
    backgroundColor: colors.LIGHT_GRAY,
    marginTop: hp(2),
  },
});

export default styles;
