import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {Text, Button, Portal, Modal, Divider} from 'react-native-paper';
import {fonts, colors, hp, wp} from '~utils';

interface Props {
  visible: boolean;
  onDismis: () => void;
  onYesPress: () => void;
}

const LinkBankModal = ({visible, onDismis, onYesPress}: Props) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismis}
        contentContainerStyle={styles.modal}>
        <Text
          style={[
            fonts.modalTitleDescription,
            {textAlign: 'center', color: colors.BLACK},
          ]}>
          Are you sure you want to skip adding a bank account?
        </Text>
        <Divider style={styles.divider} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: hp(2),
          }}>
          <Pressable onPress={onDismis}>
            <Text style={[fonts.modalButton, {color: colors.PRIMARY}]}>No</Text>
          </Pressable>
          <Pressable onPress={onYesPress}>
            <Text style={[fonts.modalButton, {color: colors.SECONDARY}]}>
              Yes
            </Text>
          </Pressable>
        </View>
      </Modal>
    </Portal>
  );
};

export default LinkBankModal;

const styles = StyleSheet.create({
  modal: {
    height: hp(15),
    width: wp(80),
    backgroundColor: colors.WHITE,
    alignSelf: 'center',
    borderRadius: 20,
  },
  divider: {
    backgroundColor: colors.BLACK,
    height: hp(0.1),
    marginTop: hp(2),
  },
});
