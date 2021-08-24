import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {
  Text,
  Button,
  Portal,
  Modal,
  Divider,
  Surface,
} from 'react-native-paper';
import {fonts, colors, hp, wp} from '~utils';

interface Props {
  visible: boolean;
  onDismis: () => void;
  first: string;
  second: string;
  third: string;
  fourth: string;
  onFirstPress: () => void;
  onSecondPress: () => void;
  onThirdPress: () => void;
  onFourthPress: () => void;
  onCancelPress: () => void;
}

const OptionsModal = ({
  visible,
  onDismis,
  first,
  onFirstPress,
  onFourthPress,
  onSecondPress,
  onThirdPress,
  second,
  third,
  fourth,
  onCancelPress,
}: Props) => {
  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={onDismis}
          contentContainerStyle={styles.modal}>
          <Surface style={styles.surface}>
            <Pressable onPress={onFirstPress}>
              <Text
                style={[
                  fonts.modalTextInput,
                  styles.text,
                  {color: colors.SECONDARY},
                ]}>
                {first}
              </Text>
              <Divider style={styles.divider} />
            </Pressable>
            <Pressable onPress={onSecondPress}>
              <Text style={[fonts.modalTextInput, styles.text]}>{second}</Text>
              <Divider style={styles.divider} />
            </Pressable>
            <Pressable onPress={onThirdPress}>
              <Text style={[fonts.modalTextInput, styles.text]}>{third}</Text>
              <Divider style={styles.divider} />
            </Pressable>
            <Pressable onPress={onFourthPress}>
              <Text style={[fonts.modalTextInput, styles.text]}>{fourth}</Text>
            </Pressable>
          </Surface>
          <Pressable onPress={onCancelPress}>
            <Surface style={styles.cancelContainer}>
              <Text style={[fonts.modalTextInput, styles.cancel]}>Cancel</Text>
            </Surface>
          </Pressable>
        </Modal>
      </Portal>
    </>
  );
};

export default OptionsModal;

const styles = StyleSheet.create({
  modal: {
    width: wp(90),
    alignSelf: 'center',
    position: 'absolute',
    bottom: hp(8),
    borderRadius: wp(5),
  },
  surface: {
    height: hp(23),
    justifyContent: 'space-evenly',
    borderRadius: wp(3),
  },
  text: {
    alignSelf: 'center',
  },
  cancel: {
    alignSelf: 'center',
  },
  cancelContainer: {
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(6),
    borderRadius: wp(3),
  },
  divider: {
    backgroundColor: colors.LIGHT_GRAY,
    height: hp(0.1),
    marginTop: hp(2),
  },
});
