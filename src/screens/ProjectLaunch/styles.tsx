import {StyleSheet} from 'react-native';
import {hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textContainer: {
    marginTop: hp(20),
    alignItems: 'center',
  },
  shareContainer: {
    marginTop: hp(10),
    alignItems: 'center',
  },
  title: {
    width: wp(60),
    textAlign: 'center',
  },
  description: {
    width: wp(80),
    textAlign: 'center',
    marginTop: hp(2),
    marginBottom: hp(3),
  },

  shareDescription: {
    width: wp(80),
    textAlign: 'center',
    marginTop: hp(1),
    marginBottom: hp(2),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp(50),
    alignItems: 'center',
  },
});

export default styles;
