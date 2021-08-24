import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '~utils';

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: hp(2),
    marginTop: hp(1),
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
    //height: hp(6),
    alignSelf: 'center',
    borderRadius: 15,
    fontSize: 15,
  },
  amountContainer: {
    //backgroundColor: 'red',
    marginTop: hp(2),
  },
  milestoneContainer: {
    marginTop: hp(1),
    alignItems: 'center',
  },
  milestone: {
    textAlign: 'center',
    width: wp(60),
    marginTop: hp(1),
    marginBottom: hp(1),
  },
  bottomBottons: {
    flexDirection: 'row',
    paddingHorizontal: hp(2),
    justifyContent: 'space-between',
    marginTop: hp(5),
  },
  addMilestone: {
    alignItems: 'center',
    marginTop: hp(1),
  },
  milestoneAmount: {
    marginBottom: hp(1),
  },
  describe: {
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  desc: {
    color: colors.LIGHT_GRAY,
    marginTop: hp(0.5),
    marginBottom: hp(2),
  },
  txt: {
    height: hp(5),
    width: wp(50),
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: wp(3),
    borderColor: colors.SECONDARY,
    color: colors.LIGHT_GRAY,
  },
  txtDesc: {
    height: hp(8),
    width: wp(70),
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: wp(3),
    borderColor: colors.SECONDARY,
    color: colors.LIGHT_GRAY,
  },
});

export default styles;
