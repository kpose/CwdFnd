import {StyleSheet, Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';

export const fonts = StyleSheet.create({
  headerTitle: {
    fontSize: scale(40),
    fontWeight: 'bold',
    letterSpacing: 0.41,
  },
  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
    letterSpacing: 0.41,
  },
  body: {
    fontSize: scale(17),
    fontWeight: 'normal',
    letterSpacing: -0.41,
  },
  subheading: {
    fontSize: scale(14),
    fontWeight: '500',
    letterSpacing: -0.24,
  },
  caption: {
    fontSize: scale(11),
    fontWeight: 'normal',
    letterSpacing: -0.08,
  },

  textInput: {
    fontSize: scale(19),
  },
  buttonText: {
    fontSize: scale(20),
    fontWeight: '700',
  },
  segmentedButtonText: {
    fontSize: scale(14),
    fontWeight: 'normal',
  },

  searchBarText: {
    fontSize: scale(20),
    fontWeight: 'normal',
  },
  modalTitle: {
    fontSize: scale(20),
    fontWeight: '700',
  },
  modalTitleDescription: {
    fontSize: scale(14),
    fontWeight: 'normal',
  },
  modalTextInput: {
    fontSize: scale(14),
    fontWeight: 'normal',
  },
  modalButton: {
    fontSize: scale(20),
    fontWeight: '700',
  },

  /* bodyText: {
    fontSize: RFValue(23, height),
    letterSpacing: -0.41,
  },
  secondaryText: {
    fontSize: RFValue(20, height),
    letterSpacing: -0.24,
  },
  modalAction: {
    fontWeight: '500',
    fontSize: RFValue(23, height),
  },
  modalRegular: {
    fontSize: RFValue(23, height),
  },
  modalTitle: {
    fontSize: RFValue(22, height),
    fontWeight: '500',
  },
  modalInput: {
    fontSize: RFValue(18, height),
  },
  modalItem: {
    fontSize: RFValue(23, height),
  },

  smallerCaption: {
    fontSize: RFValue(13, height),
    letterSpacing: -0.08,
  },
  buttonText: {
    fontSize: RFValue(17, height),
    fontWeight: 'bold',
  },
  smallButtonText: {
    fontSize: RFValue(13, height),
  },
  listHeader: {
    fontSize: RFValue(17, height),
  }, */
});

export const navigationIconSize = scale(40);
export const regularIconSize = scale(20);
