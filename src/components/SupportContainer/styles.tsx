import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: hp(60),
    width: '100%',
    resizeMode: 'cover',
  },
  imageStyle: {
    borderBottomLeftRadius: wp(10),
    borderBottomRightRadius: wp(10),
  },
  titleContainer: {
    position: 'absolute',
    bottom: hp(3),
    marginLeft: wp(4),
    marginRight: wp(4),
  },
  categoryContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: colors.LIGHT_GRAY,
    padding: wp(2),
    borderRadius: wp(3),
    marginBottom: hp(1),
  },
  banner: {
    flexDirection: 'row',
    marginTop: hp(7),
    marginLeft: wp(4),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navIcon: {
    backgroundColor: colors.LIGHT_GRAY,
    height: wp(8),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(8),
    borderRadius: 50,
  },
  avatar: {
    height: wp(6),
    width: wp(6),
    resizeMode: 'cover',
    borderRadius: 50,
    marginRight: wp(2),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: wp(4),
    marginRight: wp(4),
    marginTop: hp(1),
  },
  supportContainer: {
    height: hp(8),
    width: '100%',
    marginTop: hp(1),
    justifyContent: 'space-around',
  },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: wp(4),
    marginRight: wp(4),
  },
  divider: {
    marginLeft: wp(4),
    marginRight: wp(4),
    height: hp(1),
    borderRadius: 50,
    backgroundColor: colors.PRIMARY,
  },
  backersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: wp(4),
    marginRight: wp(4),
  },
});

export default styles;
