import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    height: hp(15),
    width: wp(100),
    //marginRight: wp(4),
    //marginLeft: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: colors.PRIMARY,
    height: hp(4),
    width: wp(70),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(1),
    marginTop: hp(2),
  },
});

export default styles;
