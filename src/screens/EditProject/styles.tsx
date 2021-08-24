import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: hp(2),
    marginTop: hp(3),
  },
  step: {
    textAlign: 'center',
    marginBottom: hp(1),
  },
  description: {
    textAlign: 'center',
    marginBottom: hp(1),
    marginTop: hp(1),
  },
  description2: {
    textAlign: 'center',
    marginBottom: hp(1),
    marginTop: hp(1),
    color: colors.LIGHT_GRAY,
  },
  input: {
    height: hp(5),
    marginTop: hp(1),
  },
  descriptionContainer: {
    marginTop: hp(2),
    paddingHorizontal: hp(2),
  },
  descriptionInput: {
    height: hp(12),
  },
  imageContainer: {
    paddingHorizontal: hp(2),
    marginTop: hp(2),
  },
  picker: {
    height: hp(20),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upload: {
    textAlign: 'center',
    marginBottom: hp(1),
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  pickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    height: hp(5),
    width: wp(85),
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: wp(3),
    borderColor: colors.PRIMARY,
    color: colors.LIGHT_GRAY,
  },
  desc: {
    height: hp(15),
    width: wp(85),
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: wp(3),
    borderColor: colors.PRIMARY,
    color: colors.LIGHT_GRAY,
  },
});

export default styles;
