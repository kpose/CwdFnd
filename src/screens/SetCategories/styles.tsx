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
    fontWeight: 'bold',
  },
  bottomContainer: {
    marginTop: hp(15),
    alignItems: 'center',
  },
  categoryContainer: {
    marginTop: hp(3),
    //flexDirection: 'row',
    //flexWrap: 'wrap',
    height: hp(50),
    //overflow: 'hidden',
  },
});

export default styles;
