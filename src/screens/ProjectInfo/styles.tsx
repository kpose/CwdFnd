import {StyleSheet} from 'react-native';
import {hp, wp, colors} from '~utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
