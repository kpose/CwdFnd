import {StyleSheet} from 'react-native';
import {hp, wp, colors} from '../../utils';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    //alignSelf: 'center',
  },
  description: {
    marginTop: hp(5),
    textAlign: 'center',
    marginLeft: wp(2),
    marginRight: wp(2),
  },
  linearGradient: {
    flex: 1,
  },
  button: {
    height: hp(6),
    width: wp(50),
    borderRadius: wp(5),
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    //alignItems: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
});

export default styles;
