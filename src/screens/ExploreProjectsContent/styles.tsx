import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '~utils';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  container: {
    marginLeft: wp(4),
    paddingTop: hp(2),
  },
  seemore: {
    color: colors.SECONDARY,
    marginRight: wp(4),
  },
});

export default styles;
