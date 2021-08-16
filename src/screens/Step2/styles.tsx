import {StyleSheet} from 'react-native';
import {hp, wp} from '~utils';

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: hp(2),
    marginTop: hp(3),
    alignItems: 'center',
  },
  titleDescription: {
    marginTop: hp(1),
    fontWeight: 'normal',
  },
  goal: {
    marginTop: hp(2),
  },
  textInput: {
    width: wp(55),
    height: hp(6),
    alignSelf: 'center',
    fontSize: 15,
  },
  amountContainer: {
    //backgroundColor: 'red',
    marginTop: hp(3),
  },
  milestoneContainer: {
    marginTop: hp(7),
    alignItems: 'center',
  },
  milestone: {
    textAlign: 'center',
    width: wp(60),
    marginTop: hp(3),
    marginBottom: hp(2),
  },
  bottomBottons: {
    flexDirection: 'row',
    paddingHorizontal: hp(2),
    justifyContent: 'space-between',
    marginTop: hp(17),
  },
});

export default styles;
