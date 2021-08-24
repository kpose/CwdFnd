import {StyleSheet} from 'react-native';
import {hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  profileContainer: {
    marginTop: hp(1),
    height: hp(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: wp(18),
    width: wp(18),
    borderRadius: 50,
  },
  nameContainer: {
    marginLeft: wp(5),
    justifyContent: 'space-evenly',
    height: wp(18),
  },
  companyContainer: {
    marginTop: hp(1),
  },
  companyLogo: {
    height: wp(7),
    width: wp(7),
    borderRadius: 50,
    marginRight: wp(5),
  },
  logoContainer: {
    flexDirection: 'row',
    marginTop: hp(1),
  },
  buttonContainer: {
    marginTop: hp(2),
    marginBottom: hp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
