import {StyleSheet} from 'react-native';
import {hp, wp, colors, fonts} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: hp(5),
    marginHorizontal: wp(4),
    padding: wp(3),
  },
  headerTitle: {
    //marginBottom: hp(1),
  },
  svgCurve: {
    position: 'absolute',
    width: wp(100),
    marginBottom: hp(5),
  },
  inputContainer: {
    marginTop: hp(8),
    alignSelf: 'center',
  },
  email: {
    width: wp(90),
    marginBottom: hp(3),
  },
  forgot: {
    textAlign: 'right',
    marginBottom: hp(2),
  },
  socialContainer: {
    alignItems: 'center',
    marginTop: hp(2),
  },
  image: {
    height: hp(4),
    width: hp(4),
    margin: wp(2),
    borderRadius: 50,
  },
  icon: {
    position: 'absolute',
    top: hp(1),
    left: wp(2),
  },
  validatorIcon: {
    marginRight: wp(2),
  },
  switch: {
    //width: 0,
  },
});

export default styles;
