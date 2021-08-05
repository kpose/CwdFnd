import {StyleSheet} from 'react-native';
import {hp, colors, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    //height: hp(50),
    //backgroundColor: 'blue',
    width: '100%',
    borderRadius: 30,
    marginBottom: hp(1),
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: wp(5),
    marginRight: wp(5),
    marginTop: hp(1),
  },
  headerContainer: {
    height: hp(8),
    // backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
  },
  profileImage: {
    backgroundColor: colors.SECONDARY,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignSelf: 'center',
  },
  divider: {
    height: hp(0.1),
    width: '100%',
    //backgroundColor: 'red',
  },
  divider2: {
    height: hp(0.4),
    width: '100%',
    //backgroundColor: 'red',
  },
  titleContainer: {
    marginLeft: wp(5),
    marginRight: wp(5),
    marginTop: hp(1),
    marginBottom: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: hp(25),
    width: '100%',
    resizeMode: 'cover',
  },
  currencyImage: {
    backgroundColor: colors.SECONDARY,
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: wp(1),
    borderColor: colors.PRIMARY,
    position: 'absolute',
    bottom: hp(1.5),
    right: 0,
    marginRight: wp(5),
  },
  description: {
    marginLeft: wp(5),
    marginTop: hp(2),
    width: wp(80),
  },
  amountContainer: {
    flexDirection: 'row',
    marginLeft: wp(5),
    marginRight: wp(5),
    justifyContent: 'space-between',
    marginTop: hp(2),
    marginBottom: hp(2),
  },
});

export default styles;
