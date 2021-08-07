import {StyleSheet} from 'react-native';
import {hp, wp, colors} from '../../utils';

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
    marginTop: hp(26),
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    marginTop: hp(4),
    alignItems: 'center',
    borderRadius: wp(2),
    height: hp(10),
    width: '100%',
    backgroundColor: colors.PRIMARY_LIGHT,
  },
  title: {
    marginBottom: hp(1),
    fontWeight: 'bold',
  },
});

export default styles;
