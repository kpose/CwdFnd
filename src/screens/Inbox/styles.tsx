import {StyleSheet} from 'react-native';
import {hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: wp(4),
  },
  headerTitle: {
    marginTop: hp(3),
    marginBottom: hp(1),
  },
});

export default styles;
